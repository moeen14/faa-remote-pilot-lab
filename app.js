(() => {
  "use strict";

  const data = window.STUDY_DATA;
  if (!data || !Array.isArray(data.flashcards) || !Array.isArray(data.questions)) {
    document.body.innerHTML = "<p class='data-error'>Study data could not be loaded. Check questions.js.</p>";
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  };

  const state = {
    cards: [...data.flashcards],
    cardIndex: 0,
    cardRevealed: false,
    knownCards: new Set(),
    quiz: [],
    quizIndex: 0,
    quizAnswers: [],
    quizEndless: false,
    currentStreak: 0,
    bestStreak: 0
  };

  function sourceFor(id) {
    return data.sources[id] || { label: "Source unavailable" };
  }

  function sourceIds(item) {
    return [item.source, item.verificationSource].filter(Boolean);
  }

  function sourceLabel(item) {
    return sourceIds(item).map((id) => sourceFor(id).label).join(" · Verified: ");
  }

  function sourceNode(item) {
    const ids = sourceIds(item);
    const fragment = document.createDocumentFragment();
    fragment.append(ids.length > 1 ? "Sources: " : "Source: ");
    ids.forEach((id, index) => {
      const source = sourceFor(id);
      if (index > 0) fragment.append(" · ");
      if (source.url) {
        const link = document.createElement("a");
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = source.label;
        fragment.append(link);
      } else {
        fragment.append(source.label);
      }
    });
    return fragment;
  }

  function tagNodes(item) {
    const fragment = document.createDocumentFragment();
    [`Chapter ${item.chapter}`, `Page ${item.page}`, item.topic].forEach((value) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = value;
      fragment.append(tag);
    });
    return fragment;
  }

  function populateSelect(select, values, labelBuilder = (value) => value) {
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = labelBuilder(value);
      select.append(option);
    });
  }

  function initializeFilters() {
    const chapters = [...new Set(data.flashcards.map((item) => item.chapter))].sort();
    const pages = [...new Set(data.flashcards.map((item) => item.page))].sort();
    const topics = [...new Set(data.flashcards.map((item) => item.topic))].sort();
    const quizTopics = [...new Set(data.questions.map((item) => item.topic))].sort();

    populateSelect($("#flashcard-chapter-filter"), chapters, (chapter) => `Chapter ${chapter}`);
    populateSelect($("#quiz-chapter-filter"), chapters, (chapter) => `Chapter ${chapter}`);
    populateSelect($("#flashcard-page-filter"), pages, (page) => `Page ${page}`);
    populateSelect($("#quiz-page-filter"), pages, (page) => `Page ${page}`);
    populateSelect($("#flashcard-topic-filter"), topics);
    populateSelect($("#quiz-topic-filter"), quizTopics);
  }

  function filteredCards() {
    const chapter = $("#flashcard-chapter-filter").value;
    const page = $("#flashcard-page-filter").value;
    const topic = $("#flashcard-topic-filter").value;
    return data.flashcards.filter((card) =>
      (chapter === "all" || card.chapter === chapter) &&
      (page === "all" || card.page === page) &&
      (topic === "all" || card.topic === topic)
    );
  }

  function updateCardDeck({ randomize = false } = {}) {
    const nextCards = filteredCards();
    state.cards = randomize ? shuffle(nextCards) : nextCards;
    state.cardIndex = 0;
    state.cardRevealed = false;
    renderCard();
  }

  function renderCard() {
    if (!state.cards.length) {
      $("#flashcard-question").textContent = "No flashcards match these filters.";
      $("#flashcard-progress").textContent = "0 cards";
      $("#flashcard-source-top").textContent = "";
      $("#flashcard-answer").hidden = true;
      $("#reveal-card").hidden = true;
      return;
    }

    const card = state.cards[state.cardIndex];
    $("#flashcard-progress").textContent = `Card ${state.cardIndex + 1} of ${state.cards.length}`;
    $("#flashcard-source-top").textContent = sourceLabel(card);
    $("#flashcard-question").textContent = card.question;
    $("#flashcard-answer-text").textContent = card.answer;
    $("#flashcard-explanation").textContent = card.explanation;
    $("#flashcard-source").replaceChildren(sourceNode(card));
    $("#flashcard-tags").replaceChildren(tagNodes(card));

    const image = $("#flashcard-image");
    const placeholder = $("#visual-placeholder");
    const imageQuestion = $("#image-question");
    const visual = $("#flashcard-visual");
    if (card.image) {
      visual.classList.add("has-figure");
      image.src = card.image;
      image.alt = card.imageAlt || "Study figure";
      image.hidden = false;
      placeholder.hidden = true;
      imageQuestion.textContent = card.question;
      imageQuestion.hidden = false;
    } else {
      visual.classList.remove("has-figure");
      image.removeAttribute("src");
      image.alt = "";
      image.hidden = true;
      placeholder.hidden = false;
      imageQuestion.hidden = true;
    }

    state.cardRevealed = false;
    $("#flashcard-answer").hidden = true;
    $("#reveal-card").hidden = false;
    $("#rating-actions").hidden = true;
    $("#reveal-card").focus({ preventScroll: true });
  }

  function revealCard() {
    if (!state.cards.length || state.cardRevealed) return;
    state.cardRevealed = true;
    $("#flashcard-answer").hidden = false;
    $("#reveal-card").hidden = true;
    $("#rating-actions").hidden = false;
    $("#mark-known").focus({ preventScroll: true });
  }

  function moveCard(direction) {
    if (!state.cards.length) return;
    state.cardIndex = (state.cardIndex + direction + state.cards.length) % state.cards.length;
    renderCard();
  }

  function rateCard(known) {
    const card = state.cards[state.cardIndex];
    if (!card) return;
    if (known) state.knownCards.add(card.id);
    else state.knownCards.delete(card.id);
    $("#mastered-count").textContent = state.knownCards.size;
    moveCard(1);
  }

  function filteredQuestions() {
    const chapter = $("#quiz-chapter-filter").value;
    const page = $("#quiz-page-filter").value;
    const topic = $("#quiz-topic-filter").value;
    return data.questions.filter((question) =>
      (chapter === "all" || question.chapter === chapter) &&
      (page === "all" || question.page === page) &&
      (topic === "all" || question.topic === topic)
    );
  }

  function updateAvailability() {
    const available = filteredQuestions().length;
    const requestedValue = $("#quiz-count").value;
    if (requestedValue === "endless") {
      $("#quiz-availability").textContent = available
        ? `${available} questions match. Endless mode cycles through them on repeat, reshuffled each lap, until you end the session.`
        : "No questions match these filters.";
      $("#start-quiz").disabled = available === 0;
      return;
    }
    const requested = requestedValue === "all" ? available : Number(requestedValue);
    const used = Math.min(requested, available);
    $("#quiz-availability").textContent = available
      ? `${available} questions match. This session will use ${used}; requesting more than available simply uses all matches.`
      : "No questions match these filters.";
    $("#start-quiz").disabled = available === 0;
  }

  function startQuiz() {
    const pool = shuffle(filteredQuestions());
    const countValue = $("#quiz-count").value;
    state.quizEndless = countValue === "endless";
    const count = countValue === "all" || state.quizEndless ? pool.length : Math.min(Number(countValue), pool.length);
    state.quiz = pool.slice(0, count);
    state.quizIndex = 0;
    state.quizAnswers = [];
    state.currentStreak = 0;
    state.bestStreak = 0;
    $("#best-streak").textContent = "0";
    $("#quiz-setup").hidden = true;
    $("#quiz-results").hidden = true;
    $("#quiz-runner").hidden = false;
    renderQuestion();
  }

  function liveScoreLabel() {
    const correct = state.quizAnswers.filter((answer) => answer.correct).length;
    const total = state.quizAnswers.length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    return total ? `${correct}/${total} correct (${percent}%)` : "0 correct";
  }

  function renderQuestion() {
    const question = state.quiz[state.quizIndex];
    $("#quiz-progress-label").textContent = state.quizEndless
      ? `Question ${state.quizIndex + 1} · endless mode`
      : `Question ${state.quizIndex + 1} of ${state.quiz.length}`;
    $("#quiz-live-score").textContent = liveScoreLabel();
    const progress = state.quizEndless
      ? (state.quizAnswers.length ? (state.quizAnswers.filter((a) => a.correct).length / state.quizAnswers.length) * 100 : 0)
      : ((state.quizIndex + 1) / state.quiz.length) * 100;
    $("#quiz-progress-bar").style.width = `${progress}%`;
    $("#quiz-tags").replaceChildren(tagNodes(question));
    $("#quiz-question").textContent = question.question;
    $("#quiz-feedback").hidden = true;
    $("#next-question").hidden = true;

    const figureWrap = $("#quiz-figure-wrap");
    const image = $("#quiz-image");
    if (question.image) {
      image.src = question.image;
      image.alt = question.imageAlt || "Question figure";
      figureWrap.hidden = false;
    } else {
      image.removeAttribute("src");
      image.alt = "";
      figureWrap.hidden = true;
    }

    const options = $("#quiz-options");
    options.replaceChildren();
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.dataset.index = index;
      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = String.fromCharCode(65 + index);
      const answerText = document.createElement("span");
      answerText.textContent = option;
      button.append(letter, answerText);
      button.addEventListener("click", () => answerQuestion(index));
      options.append(button);
    });
    options.querySelector("button")?.focus({ preventScroll: true });
  }

  function answerQuestion(selectedIndex) {
    if (state.quizAnswers.length > state.quizIndex) return;
    const question = state.quiz[state.quizIndex];
    const correct = selectedIndex === question.answer;
    state.quizAnswers.push({ question, selectedIndex, correct });

    if (correct) {
      state.currentStreak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
    } else {
      state.currentStreak = 0;
    }
    $("#best-streak").textContent = state.bestStreak;

    $$("#quiz-options .option-button").forEach((button, index) => {
      button.disabled = true;
      if (index === question.answer) button.classList.add("is-correct");
      if (index === selectedIndex && !correct) button.classList.add("is-wrong");
    });

    const feedback = $("#quiz-feedback");
    const verdict = document.createElement("strong");
    verdict.textContent = correct ? "Correct." : `Not quite. The answer is ${question.options[question.answer]}.`;
    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;
    const source = document.createElement("p");
    source.className = "source-line";
    source.append(sourceNode(question));
    feedback.replaceChildren(verdict, explanation, source);
    feedback.hidden = false;
    $("#quiz-live-score").textContent = liveScoreLabel();
    const progress = state.quizEndless
      ? (state.quizAnswers.filter((a) => a.correct).length / state.quizAnswers.length) * 100
      : ((state.quizIndex + 1) / state.quiz.length) * 100;
    $("#quiz-progress-bar").style.width = `${progress}%`;
    const nextButton = $("#next-question");
    nextButton.textContent = (!state.quizEndless && state.quizIndex === state.quiz.length - 1) ? "See result →" : "Next question →";
    nextButton.hidden = false;
    nextButton.focus({ preventScroll: true });
  }

  function nextQuestion() {
    if (state.quizAnswers.length <= state.quizIndex) return;
    if (state.quizIndex >= state.quiz.length - 1) {
      if (state.quizEndless) {
        const lastQuestion = state.quiz[state.quizIndex];
        let nextLap = shuffle(filteredQuestions());
        if (nextLap.length > 1 && nextLap[0].id === lastQuestion.id) {
          nextLap.push(nextLap.shift());
        }
        state.quiz = state.quiz.concat(nextLap);
        state.quizIndex += 1;
        renderQuestion();
      } else {
        finishQuiz();
      }
    } else {
      state.quizIndex += 1;
      renderQuestion();
    }
  }

  function finishQuiz() {
    if (!state.quizAnswers.length) {
      resetQuizSetup();
      return;
    }
    const correct = state.quizAnswers.filter((answer) => answer.correct).length;
    const total = state.quizAnswers.length;
    const percent = Math.round((correct / total) * 100);
    const missed = state.quizAnswers.filter((answer) => !answer.correct);
    let message = "This needs another focused pass.";
    if (percent >= 90) message = "Excellent retrieval. Keep the details fresh with mixed practice.";
    else if (percent >= 75) message = "Strong foundation. Review the misses, then try a shuffled set.";
    else if (percent >= 60) message = "The foundation is forming. Study the missed topics before another round.";

    $("#quiz-runner").hidden = true;
    $("#quiz-results").hidden = false;
    $("#result-percent").textContent = `${percent}%`;
    $("#results-title").textContent = `${correct} of ${total} correct`;
    $("#result-summary").textContent = message;

    const missedList = $("#missed-list");
    missedList.replaceChildren();
    missed.forEach((answer) => {
      const item = document.createElement("div");
      item.className = "missed-item";
      const question = document.createElement("strong");
      question.textContent = answer.question.question;
      const chosen = document.createElement("p");
      chosen.textContent = `Your answer: ${answer.question.options[answer.selectedIndex]}`;
      const right = document.createElement("p");
      right.textContent = `Correct answer: ${answer.question.options[answer.question.answer]}`;
      item.append(question, chosen, right);
      missedList.append(item);
    });
    $("#missed-review").hidden = missed.length === 0;
    $("#study-misses").hidden = missed.length === 0;
  }

  function resetQuizSetup() {
    $("#quiz-runner").hidden = true;
    $("#quiz-results").hidden = true;
    $("#quiz-setup").hidden = false;
    updateAvailability();
  }

  function switchTab(name, updateHash = true) {
    $$(".tab-button").forEach((button) => {
      const active = button.dataset.tab === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    $$(".tab-panel").forEach((panel) => {
      const active = panel.id === `${name}-panel`;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
    if (updateHash) history.replaceState(null, "", `${location.pathname}${location.search}${name === "quiz" ? "#quiz" : "#flashcards"}`);
  }

  function studyWeakestTopic() {
    const misses = state.quizAnswers.filter((answer) => !answer.correct);
    const counts = misses.reduce((accumulator, answer) => {
      accumulator[answer.question.topic] = (accumulator[answer.question.topic] || 0) + 1;
      return accumulator;
    }, {});
    const weakest = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
    if (!weakest) return;
    switchTab("flashcards");
    $("#flashcard-chapter-filter").value = "all";
    $("#flashcard-page-filter").value = "all";
    $("#flashcard-topic-filter").value = weakest;
    updateCardDeck({ randomize: true });
    $("#flashcards-panel").scrollIntoView({ behavior: "smooth" });
  }

  function validateData() {
    const ids = new Set();
    [...data.flashcards, ...data.questions].forEach((item) => {
      if (ids.has(item.id)) console.warn(`Duplicate study item ID: ${item.id}`);
      ids.add(item.id);
      if (!data.sources[item.source]) console.warn(`Missing source ${item.source} for ${item.id}`);
      if (item.verificationSource && !data.sources[item.verificationSource]) console.warn(`Missing verification source ${item.verificationSource} for ${item.id}`);
    });
    data.questions.forEach((question) => {
      if (!Number.isInteger(question.answer) || !question.options[question.answer]) {
        console.warn(`Invalid answer index for ${question.id}`);
      }
    });
  }

  validateData();
  initializeFilters();
  $("#card-count-label").textContent = `${data.flashcards.length} cards`;
  $("#question-count-label").textContent = `${data.questions.length} questions`;
  $("#coverage-count-label").textContent = `${data.meta.pageCount}/${data.meta.pageCount} pages`;
  renderCard();
  updateAvailability();
  const requestedCard = new URLSearchParams(location.search).get("card");
  const requestedCardIndex = state.cards.findIndex((card) => card.id === requestedCard);
  if (requestedCardIndex >= 0) {
    state.cardIndex = requestedCardIndex;
    renderCard();
  }
  switchTab(location.hash === "#quiz" ? "quiz" : "flashcards", false);

  $$(".tab-button").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));
  $("#flashcard-chapter-filter").addEventListener("change", () => updateCardDeck());
  $("#flashcard-page-filter").addEventListener("change", () => updateCardDeck());
  $("#flashcard-topic-filter").addEventListener("change", () => updateCardDeck());
  $("#shuffle-cards").addEventListener("click", () => updateCardDeck({ randomize: true }));
  $("#reveal-card").addEventListener("click", revealCard);
  $("#previous-card").addEventListener("click", () => moveCard(-1));
  $("#next-card").addEventListener("click", () => moveCard(1));
  $("#mark-again").addEventListener("click", () => rateCard(false));
  $("#mark-known").addEventListener("click", () => rateCard(true));
  [$("#quiz-count"), $("#quiz-chapter-filter"), $("#quiz-page-filter"), $("#quiz-topic-filter")].forEach((control) => control.addEventListener("change", updateAvailability));
  $("#start-quiz").addEventListener("click", startQuiz);
  $("#next-question").addEventListener("click", nextQuestion);
  $("#quit-quiz").addEventListener("click", finishQuiz);
  $("#retry-quiz").addEventListener("click", resetQuizSetup);
  $("#study-misses").addEventListener("click", studyWeakestTopic);
  $("#open-about").addEventListener("click", () => $("#about-dialog").showModal());

  document.addEventListener("keydown", (event) => {
    if ($("#flashcards-panel").hidden || ["SELECT", "INPUT", "TEXTAREA", "BUTTON"].includes(document.activeElement.tagName)) return;
    if (event.code === "Space") { event.preventDefault(); revealCard(); }
    if (event.key === "ArrowLeft") moveCard(-1);
    if (event.key === "ArrowRight") moveCard(1);
  });
})();

# Remote Pilot Lab

Remote Pilot Lab is a responsive, no-build study website for FAA Remote Pilot material. It turns the books and notes in this course folder into active-recall flashcards and self-grading multiple-choice quizzes.

The current bank provides a page-by-page treatment of all 28 available source images from *The Complete Remote Pilot, Second Edition*. It contains **170 focused flashcards and 170 distinct MCQs**, with 5–8 concepts attached to every source page. Learners can still keep sessions small by selecting a chapter, page, topic, and quiz length.

## Important context for humans and AI models

- `questions.js` in the repository root is the single source of truth for all flashcards, quiz questions, book metadata, and source references.
- `COVERAGE.md` is the audit showing the number and subject of study items derived from every source page.
- The original book scans and Word transcription live under `Photos from Books/`. That folder is deliberately excluded from Git because it contains large source files and copyrighted book pages.
- The Word document contains all 28 full-page facsimiles, but its searchable OCR text is **not a perfect verbatim transcription**. Use the facsimile pages as the authority when the OCR differs.
- The existing review found common OCR problems: merged words, bad punctuation or symbols, misspellings, and incorrect reading order on complex pages. Do not generate a new rule or exact quotation solely from imperfect OCR.
- Regulations change. For operational decisions, use the current CFR, the operator's authorizations, and current FAA material—not this website or the book alone.
- Quiz state is intentionally kept only in memory. Reloading the page resets the quiz, score, streak, and flashcard markings.

## Project structure

```text
.
├── index.html                  # Accessible two-tab interface
├── styles.css                 # Responsive visual system
├── app.js                     # Flashcard and quiz behavior
├── questions.js               # ALL study content; keep this at root
├── COVERAGE.md                # Page-by-page content audit
├── assets/
│   └── books/
│       └── complete-remote-pilot/
│           └── *.jpg          # Selected, tightly cropped study figures
├── Photos from Books/          # Local source archive; ignored by Git
└── README.md
```

There is no framework, package manager, database, or build step. Relative asset paths allow the same files to run locally and on a GitHub Pages project site.

## Run locally

Opening `index.html` directly works in modern browsers. A local server is more representative of GitHub Pages:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add study material

Add a fact row to the `rows` array in `questions.js`. Each fact automatically becomes one flashcard and one independently answerable MCQ:

```js
[29, "Weather",
  "A single, focused prompt?",
  "The concise correct answer.",
  ["Plausible distractor 1", "Plausible distractor 2", "Plausible distractor 3"],
  "Why the answer is correct and what mistake to avoid.",
  "optionalFigureKey",
  "optional-current-source-id"
]
```

The option order rotates automatically so correct answers do not stay in the same letter position. Figure keys are defined near the top of the file. Keep crops wide enough to include the complete figure, labels, borders, legends, and any cautionary note that changes its meaning. The traffic-pattern crop was specifically rechecked to ensure its left edge, base leg, border, and printed note are present.

Stable IDs are generated from the source page and the row's position on that page. Append new rows instead of silently reordering existing rows when preserving IDs matters. The interface supports 10, 20, 50, 100, or all matching questions.

## Add another book

1. Keep original scans in a clearly named subfolder under `Photos from Books/`.
2. Add the book and chapter names under `STUDY_DATA.books`.
3. Put web-ready figure crops in `assets/books/<book-slug>/`.
4. Add sources and study items with the new `book` ID.
5. Verify every figure crop visually and every answer against the source page.
6. If the subject is regulatory, medical, financial, or otherwise time-sensitive, cross-check an authoritative current source and record its URL in `STUDY_DATA.sources`.

The UI discovers chapters and topics from the data, so new filters appear automatically.

## Content quality checklist

Before merging new study material:

1. Verify the question and answer against the full source-page image, not OCR alone.
2. Make each question test one idea and avoid ambiguous wording.
3. Make wrong answers plausible but unambiguously wrong.
4. Confirm the `answer` index and source ID.
5. Prefer paraphrase over long quotations.
6. For FAA rules, check the current rule or official FAA page and record the review date.
7. View all figures at phone and desktop widths; no label, border, legend, or note should be clipped.
8. Run the automated data checks described below.

## Scoring note

The result is percent correct. A true percentile compares a learner against a population, which a private static site cannot honestly calculate without collecting cohort data. The interface says this directly instead of presenting a misleading “85th percentile” from an 85% score.

## Recommended study workflow

1. Study 8–12 flashcards and say each answer aloud before revealing it.
2. Mark difficult cards “Again.” Use “I knew it” only when the answer was retrieved, not merely recognized.
3. Take a 10-question mixed quiz.
4. Read every explanation, including correct answers.
5. Use “Study missed topics,” then retry with a shuffled set.
6. Increase to 20, 50, and finally 100-question mixed sessions as confidence grows.

Good future improvements, in priority order:

- Add scenario questions using sectional charts, METARs, TAFs, and loading/performance figures.
- Add an optional spaced-repetition mode with local export/import so progress remains private and portable.
- Add a “weak topics only” multi-topic deck instead of selecting only the single weakest topic.
- Add printable one-page reviews and a timed practice-exam mode.
- Add installable offline/PWA support after the content set stabilizes.
- If real percentile ranking is desired, add an opt-in privacy-preserving backend and define the comparison cohort clearly.

## Verification

The data file is plain JavaScript. At minimum, open the browser developer console and make sure it reports no duplicate IDs, missing sources, or invalid answer indices. Also exercise these paths manually:

- chapter and topic filters;
- image and text-only flashcards;
- keyboard controls;
- correct and incorrect quiz answers;
- early quiz exit and full completion;
- 100-question selection when fewer than 100 questions match;
- reload during a quiz to confirm the session resets;
- phone layout around 360 px wide.

## Publishing with GitHub Pages

This folder is designed to be the repository root. Publish the root of the default branch with GitHub Pages:

1. Create or connect a GitHub repository.
2. Push the staged website files to the `main` branch.
3. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. The included `.github/workflows/deploy.yml` publishes the static site after every push to `main`.

The public URL will normally be `https://<username>.github.io/<repository>/`.

## Current official references

- [FAA Part 107 overview](https://www.faa.gov/newsroom/small-unmanned-aircraft-systems-uas-regulations-part-107)
- [Become a Certificated Remote Pilot](https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot)
- [FAA accident reporting FAQ](https://www.faa.gov/faq/when-do-i-need-report-accident)
- [Low Altitude Authorization and Notification Capability](https://www.faa.gov/uas/getting_started/laanc)
- [Operations Over People](https://www.faa.gov/uas/commercial_operators/operations_over_people)
- [Drone Registration and Remote ID](https://www.faa.gov/uas/getting_started/register_drone)

Last regulatory review: **September 24, 2026**.

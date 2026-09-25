# Remote Pilot Lab

Remote Pilot Lab is a responsive, no-build study website for FAA Remote Pilot material. It turns the books and notes in this course folder into active-recall flashcards and self-grading multiple-choice quizzes.

The current bank provides a page-by-page treatment of *The Complete Remote Pilot, Second Edition* (Chapters 1–2 plus Lesson 3 "Airspace and Navigation", Lesson 4 "Airport and Off-Airport Operations", Lesson 5 "Radio Communication Procedures", and Lesson 6 "Weather"), out of 94 available source images. It contains **419 focused flashcards and 419 distinct MCQs**. Learners can still keep sessions small by selecting a chapter, page, topic, and quiz length.

- **Exam-relevance policy:** every item in the bank is meant to map to a topic actually covered by the FAA Part 107 (Unmanned Aircraft General, "UAG") knowledge test — the Airman Certification Standards areas are: applicable regulations, airspace classification and flight restrictions, aviation weather sources, effects of weather on performance, small UAS loading, emergency procedures, crew resource management, radio communication procedures, determining the performance of small UAS, physiological effects of drugs and alcohol, aeronautical decision-making, airport operations, and maintenance/preflight inspection. Drone history, consumer-hardware trivia (ESC, IMU, gimbal, LiPo C-rating, quadcopter/hexacopter naming, RC transmitter stick modes), and website-navigation specifics ("what does clicking this tab show") are **not** tested and were intentionally excluded — see the 2026-09-25 change-log entry for what was removed and why. When adding new material, ask "could this plausibly appear on the UAG test?" before adding a row; if not, it belongs in a different resource, not this bank.

## Important context for humans and AI models

- `questions.js` in the repository root is the single source of truth for all flashcards, quiz questions, book metadata, and source references.
- `COVERAGE.md` is the audit showing the number and subject of study items derived from every source page.
- The original book scans and Word transcription live under `Photos from Books/`. That folder is deliberately excluded from Git because it contains large source files and copyrighted book pages.
- The Word document contains all 28 full-page facsimiles, but its searchable OCR text is **not a perfect verbatim transcription**. Use the facsimile pages as the authority when the OCR differs.
- The existing review found common OCR problems: merged words, bad punctuation or symbols, misspellings, and incorrect reading order on complex pages. Do not generate a new rule or exact quotation solely from imperfect OCR.
- Regulations change. For operational decisions, use the current CFR, the operator's authorizations, and current FAA material—not this website or the book alone.
- Quiz state is intentionally kept only in memory. Reloading the page resets the quiz, score, streak, and flashcard markings.
- **Image policy:** this is a public GitHub Pages site, so book-page figure crops under `assets/books/complete-remote-pilot/page-*.jpg` are kept deliberately few and tightly cropped (legacy content from source pages 01–28; 4 remain after the 2026-09-25 exam-relevance cleanup removed three that only supported deleted, non-exam flashcards). For source pages 29–42 (added 2026-09-24), no new book-figure crops were added. Instead, a handful of concepts that are genuinely hard to convey in text got **original hand-drawn SVG diagrams** (`assets/books/complete-remote-pilot/diagram-*.svg`) illustrating the underlying generic concept (airspace shapes, a lat/long globe grid, a wind-correction vector triangle) in this site's own colors and layout — not a trace or redraw of the book's specific artwork. Prefer this approach (original diagram or plain text) over cropping new book pages for future source pages, unless the site owner explicitly asks for a book crop.

## Change log

- **2026-09-24** — Added source pages 29–42 (Lesson 3, "Airspace and Navigation": charts, geographic coordinates, magnetic variation, wind correction, groundspeed/airspeed, airspace classes A–G, special use airspace, ADIZ, and wildlife refuge areas). Bank grew from 170 to 240 flashcards/MCQs. All new study text is original paraphrased Q&A; four original SVG diagrams were added instead of new book-page crops (see the image policy above).
- **2026-09-24** — Added source pages 43–94 (Lesson 4 "Airport and Off-Airport Operations", Lesson 5 "Radio Communication Procedures", Lesson 6 "Weather"), based on 52 new page photos renamed `43.jpg`–`94.jpg` in `Photos from Books/.../`. Bank grew from 240 to 467 flashcards/MCQs across three new chapters (4, 5, 6). Four more original SVG diagrams were added (traffic pattern, front symbols, cloud families, thunderstorm life cycle) — still no new book-page crops. Several source pages in this batch were screenshots of government (NOAA/FAA) websites or standardized reference tables (METAR/TAF key, phonetic alphabet); these were represented as original paraphrased text facts rather than cropped, consistent with the image policy.
- **2026-09-25** — Removed 48 non-exam-relevant items (467 → 419) after the site owner pointed out a drone-history flashcard ("early uncrewed aerial mission in 1849") that would never appear on the actual FAA Part 107 test. Removed entirely: source pages 1–2 (drone/RC history), 5–9 (aircraft hardware trivia: flight controller, IMU, ESC, motors, LiPo specs, propellers, gimbal, headless mode, trim, RC transmitter stick modes), and 11 (industry "applications" of UAS), plus 8 scattered items on pages 80/84/86/88 that were specific to a weather website's UI (e.g., a "FltCat" abbreviation, the NDFD tool's interface, an HEMS chart, dBZ units) rather than exam-tested concepts. Also deleted the three book-figure crops (`page-05-aircraft-configurations.jpg`, `page-06-flight-controller.jpg`, `page-08-remote-controller.jpg`) that only those removed flashcards used. See the exam-relevance policy above; apply the same "could this be on the UAG test?" filter to any future additions.
- **2026-09-25** — Rewrote weak MCQ distractors across the bank after the site owner noticed some wrong answers were absurd non-sequiturs (e.g. "A weather product" as a distractor for "what is a FRIA?", or "A higher altitude" for a question about falsifying records) rather than plausible-but-wrong options. Real FAA Part 107 distractors stay in the same category/unit as the correct answer (same kind of value, adjacent-but-wrong regulatory term, or a plausible misconception) so the question actually tests knowledge instead of being solvable by eliminating the silly option. Reviewed all 419 items and rewrote roughly 35 rows' distractor sets (concentrated in source pages 3–4, 12, 14–27, and a few scattered elsewhere — the airspace, radio, and weather sections were already solid). **When adding new items, write distractors a real test-taker would have to actually rule out, not ones a skim-reader would eliminate on sight.**

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

Stable IDs are generated from the source page and the row's position on that page. Append new rows instead of silently reordering existing rows when preserving IDs matters. The interface supports 10, 20, 50, 100, all matching questions, or an endless mode that keeps reshuffling and re-serving the filtered pool (with a live running percent-correct) until the learner ends the session.

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

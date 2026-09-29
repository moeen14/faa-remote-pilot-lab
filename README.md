# Remote Pilot Lab

Remote Pilot Lab is a responsive, no-build study website for the FAA Part 107 Remote Pilot Certificate ("UAG") knowledge test. It turns public FAA regulatory material into active-recall flashcards and self-grading multiple-choice quizzes.

**This site no longer uses any textbook.** Every item is written from public FAA sources — 14 CFR Part 107, the Unmanned Aircraft General (UAG) Airman Certification Standards, FAA handbooks (the Pilot's Handbook of Aeronautical Knowledge, Remote Pilot Study Guide), and FAA advisory circulars — plus a handful of original diagrams drawn for this site. It contains **470 focused flashcards and 470 distinct MCQs** across 13 ACS-aligned knowledge areas. Learners can keep sessions small by selecting a knowledge area, topic, and quiz length.

- **Exam-relevance policy:** every item maps to a topic actually covered by the FAA UAG knowledge test. The FAA reweighted the test in September 2025 — Regulations now make up roughly **48%** of the exam, Operations ~25%, Airspace ~20%, Weather ~5%, Loading & Performance ~2% (see `RECENT_EXAM_TOPICS.md` for the full breakdown and citations). Content coverage spans all knowledge areas regardless of weighting, but new material should be prioritized toward Regulations and Operations Over People, which the FAA's own "frequently missed" statistics flag as the hardest area for real test-takers.
- **Living exam-topics log:** `RECENT_EXAM_TOPICS.md` tracks official FAA test-format changes and recurring topics reported by test-takers and prep sites over the last year. Ask an AI assistant with web access to periodically check for updates and append new dated entries — it is designed to be extended, not replaced.

## Important context for humans and AI models

- `questions.js` in the repository root is the single source of truth for all flashcards, quiz questions, and source references.
- `COVERAGE.md` is the audit showing the number and subject of study items in each knowledge area.
- `RECENT_EXAM_TOPICS.md` is the living log of FAA test-format changes and recently reported exam topics — never verbatim leaked questions.
- No book content of any kind is used or stored in this repository. Regulations change; for operational decisions, use the current CFR, the operator's authorizations, and current FAA material — not this website alone.
- Quiz state is intentionally kept only in memory. Reloading the page resets the quiz, score, streak, and flashcard markings.
- **Image policy:** all figures under `assets/diagrams/` are original SVG diagrams drawn for this site (airspace class cross-sections, a lat/long globe grid, a wind-correction vector triangle, aircraft axes, the traffic pattern, front symbols, cloud families, and the thunderstorm life cycle) in this site's own colors and layout. Because sectional charts, METAR/TAF formats, and similar FAA/NOAA-produced material are U.S. government works, they are not copyrighted and can in principle be reproduced directly — but original redrawn diagrams are still preferred so the site teaches the underlying legend/symbology rather than one memorized excerpt (this also future-proofs against the FAA's October 2026 move to live, non-supplement chart images on the real exam — see `RECENT_EXAM_TOPICS.md`).

## Change log

- **2026-09-28** — Removed all book-derived content. Deleted the five remaining book-page photo crops (`assets/books/complete-remote-pilot/page-*.jpg`) and the entire local `Photos from Books/` source archive. Moved the eight original SVG diagrams (never book scans) to a book-independent `assets/diagrams/` folder and added a ninth, `aircraft-axes.svg`, to replace a deleted book photo. Restructured the data model: `book`/`chapter`/`page` are gone, replaced by a `domain` field aligned to the FAA UAG Airman Certification Standards' knowledge areas (Regulations, Airspace, Weather, Airport Operations, Loading & Performance, Emergency Procedures, Crew Resource Management, Radio Communications, Physiology, Aeronautical Decision-Making, Maintenance & Inspection, Remote ID & Registration, Charts & Navigation). Added 50 new original items covering areas the book-based bank barely touched: Loading & Performance, Physiology (IMSAFE, fatigue, dehydration, medication), Aeronautical Decision-Making (PAVE, hazardous attitudes, risk management), Radio Communications (CTAF, standard phraseology), Maintenance & Inspection, Crew Resource Management, and a dedicated Operations Over People / Remote ID cluster — the former because FAA's own quarterly "frequently missed ACS codes" report names the Operations-Over-People Declaration of Compliance as the single hardest UAG topic (73% miss rate). Bank grew from 419 to 470 items. Added `RECENT_EXAM_TOPICS.md`, a living log of FAA test-format changes (the September 2025 blueprint reweighting, the upcoming October 2026 move to live chart images) and recently reported exam topics, meant to be extended over time.
- **2026-09-24** — *(historical, book-based bank)* Added source pages 29–42 (airspace and navigation). Bank grew from 170 to 240 items.
- **2026-09-24** — *(historical, book-based bank)* Added source pages 43–94 (airport operations, radio communications, weather). Bank grew from 240 to 467 items.
- **2026-09-25** — *(historical, book-based bank)* Removed 48 non-exam-relevant items (467 → 419) and rewrote weak MCQ distractors across the bank. This content and its book-page figure crops were superseded by the 2026-09-28 rebuild above.

## Project structure

```text
.
├── index.html                  # Accessible two-tab interface
├── styles.css                 # Responsive visual system
├── app.js                     # Flashcard and quiz behavior
├── questions.js               # ALL study content; keep this at root
├── COVERAGE.md                # Knowledge-area content audit
├── RECENT_EXAM_TOPICS.md       # Living log of FAA test changes and reported exam topics
├── assets/
│   └── diagrams/
│       └── *.svg               # Original diagrams drawn for this site
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
[groupNumber, "Topic",
  "A single, focused prompt?",
  "The concise correct answer.",
  ["Plausible distractor 1", "Plausible distractor 2", "Plausible distractor 3"],
  "Why the answer is correct and what mistake to avoid.",
  "optionalFigureKey",
  "optional-verification-source-id"
]
```

The first element is just a grouping number used to keep related rows together and generate a stable ID prefix — it has no meaning outside this file (there is no page or book behind it anymore). The `Topic` string must appear in the `topicDomains` map near the top of `questions.js` so the item gets assigned to the correct FAA ACS knowledge area (`domain`); add a new topic to that map when introducing a genuinely new topic. The option order rotates automatically so correct answers do not stay in the same letter position. Figure keys are defined in the `figures` object near the top of the file and must point at `assets/diagrams/*.svg` — never re-add a book-page image. The `source` for every item is always `"faa-acs"`; use the optional final element only to add a stronger, topic-specific `verificationSource` (an entry from the `sources` object, e.g. `"faa-laanc"`).

Append new rows instead of silently reordering existing ones when preserving IDs matters. The interface supports 10, 20, 50, 100, all matching questions, or an endless mode that keeps reshuffling and re-serving the filtered pool (with a live running percent-correct) until the learner ends the session.

## Adding new study material from online sources

1. Ground every new item in a public, ideally official FAA source (14 CFR Part 107/89 via ecfr.gov, the UAG Airman Certification Standards, an FAA handbook or advisory circular) — never copy wording from a copyrighted textbook.
2. Write the question and answer in your own words; do not paste large verbatim blocks even from a public-domain source.
3. If the topic is genuinely new, add it to the `topicDomains` map in `questions.js` so it's grouped under the right ACS knowledge area.
4. Prefer original diagrams (`assets/diagrams/*.svg`) or plain text over any copied image. Sectional charts, METAR/TAF formats, and other FAA/NOAA products are U.S. government works and not copyrighted, so they can be reproduced directly if needed, but a redrawn original diagram that teaches the underlying legend is usually more durable and more useful for learning.
5. If the subject is regulatory, medical, or otherwise time-sensitive, cross-check the current rule and record its URL in `STUDY_DATA.sources`, then cite it as the item's `verificationSource`.
6. For genuinely new, unverified exam-topic chatter (not settled fact), add it to `RECENT_EXAM_TOPICS.md` instead of turning it into a flashcard until it's corroborated.

The UI discovers knowledge areas and topics from the data, so new filters appear automatically.

## Content quality checklist

Before merging new study material:

1. Verify the question and answer against a current, official FAA source — not memory, not a textbook, not an unverified forum post.
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

- knowledge-area and topic filters;
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

- [14 CFR Part 107 (Small UAS)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-107)
- [14 CFR Part 89 (Remote ID)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-89)
- [FAA UAG Airman Certification Standards](https://www.faa.gov/training_testing/testing/acs)
- [FAA Airman Testing (community advisories, current blueprint, sample questions)](https://www.faa.gov/training_testing/testing)
- [FAA Part 107 overview](https://www.faa.gov/newsroom/small-unmanned-aircraft-systems-uas-regulations-part-107)
- [Become a Certificated Remote Pilot](https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot)
- [FAA accident reporting FAQ](https://www.faa.gov/faq/when-do-i-need-report-accident)
- [Low Altitude Authorization and Notification Capability](https://www.faa.gov/uas/getting_started/laanc)
- [Operations Over People](https://www.faa.gov/uas/commercial_operators/operations_over_people)
- [Drone Registration and Remote ID](https://www.faa.gov/uas/getting_started/register_drone)
- [Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)

See `RECENT_EXAM_TOPICS.md` for FAA's current test blueprint weighting, upcoming test-format changes, and recently reported exam topics.

Last regulatory review: **September 28, 2026**.

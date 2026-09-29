# Study Coverage Audit

This audit maps the current bank to the FAA Unmanned Aircraft General (UAG)
Airman Certification Standards knowledge areas. Every listed concept
produces one flashcard and one MCQ, giving **470 flashcards and 470 MCQs**
in total. Nothing in this bank is derived from a book — see `README.md`
for the sourcing policy and `RECENT_EXAM_TOPICS.md` for how the real exam
currently weights each area.

## Coverage by fine-grained topic → ACS knowledge area (`domain`)

| Domain (`domain` field) | Items | Topics included |
|---|---:|---|
| Regulations | 151 | Language/definitions, general regulations, publications, certification, operating rules and limits, compliance, operating roles, moving vehicles, local/federal rules, waivers, privacy, right of way, night operations, knowledge areas, currency, operations, operations over people (incl. Categories 1–4 and Declaration of Compliance) |
| Weather | 111 | Weather sources and products, METAR/TAF, fronts, clouds, thunderstorms, UTC/time |
| Airspace | 50 | Airspace classes A–G, NOTAMs, special-use airspace, altitude (MSL/AGL) |
| Airport Operations | 37 | Airport types, traffic pattern, airport-specific operating rules |
| Charts & Navigation | 39 | Sectional/terminal charts, coordinates, magnetic variation, wind correction |
| Remote ID & Registration | 20 | Registration, Standard/alternative Remote ID, FRIA, ADS-B, broadcast elements |
| Loading & Performance | 17 | Flight controls/axes, aerodynamics, control link, weight/balance/CG, density altitude, load factor |
| Emergency Procedures | 11 | Accident reporting, NTSB reporting, in-flight emergencies |
| Physiology | 9 | IMSAFE, fatigue, dehydration, medication, stress, vision/FPV limitations, alcohol interval |
| Maintenance & Inspection | 7 | Preflight inspection scope, responsibility, component wear, firmware |
| Radio Communications | 6 | CTAF, phraseology, situational awareness, UTC/Zulu |
| Crew Resource Management | 6 | CRM definition, visual observer role, briefings, task saturation |
| Aeronautical Decision-Making | 6 | ADM definition, PAVE, hazardous attitudes, risk management, go/no-go |
| **Total** | **470** | |

## How that compares to the FAA's current test blueprint

The FAA reweighted the actual UAG knowledge test in September 2025 (see
`RECENT_EXAM_TOPICS.md`). Rolling the 13 domains above up into the FAA's
five official ACS areas and comparing to the current exam weighting:

| ACS area | This bank | Actual exam weight (since 2025-09-29) |
|---|---:|---:|
| I. Regulations (incl. Remote ID) | 171 items (36%) | **48%** |
| II. Airspace & Operating Requirements (incl. charts) | 89 items (19%) | **20%** |
| III. Weather | 111 items (24%) | **5%** |
| IV. Loading and Performance | 17 items (4%) | **2%** |
| V. Operations (radio, airport ops, emergencies, CRM, ADM, physiology, maintenance) | 82 items (17%) | **25%** |

**Known gap to prioritize next:** the bank is weighted toward Weather
relative to how the real exam is now weighted, and underweighted on
Regulations and Operations. Breadth of coverage is solid across all five
areas, but future additions should lean toward Regulations (especially
Operations Over People and waiver/authorization detail) and the Operations
area (radio communications, CRM, ADM, physiology, maintenance) rather than
adding more Weather items, to better match actual test emphasis.

## Verification

- Every item cites `"faa-acs"` as its baseline source and, where the topic
  is time-sensitive or benefits from a direct regulatory citation, a
  stronger `verificationSource` pointing at a specific FAA/eCFR page (see
  the `sources` object in `questions.js`).
- Content was written from public FAA material (14 CFR Part 107/89, the
  UAG ACS, FAA handbooks and advisory circulars) and original paraphrase —
  never copied from a copyrighted textbook.
- Figures are original SVG diagrams under `assets/diagrams/`, not scanned
  images.

Last content audit: **2026-09-28**.

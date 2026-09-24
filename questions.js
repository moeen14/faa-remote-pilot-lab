/*
 * Remote Pilot Lab study data
 *
 * Keep this file in the repository root. The site intentionally loads data from
 * a plain JavaScript object so it works from GitHub Pages and when index.html is
 * opened directly. See README.md before adding or changing regulatory content.
 */
window.STUDY_DATA = {
  meta: {
    title: "FAA Remote Pilot — Chapters 1 and 2",
    version: 1,
    reviewed: "2026-09-24",
    note: "Book concepts were limited to clearly supported text. Time-sensitive rules were checked against the linked FAA sources."
  },

  books: {
    completeRemotePilot: {
      title: "The Complete Remote Pilot, Second Edition",
      shortTitle: "Complete Remote Pilot",
      chapters: { "1": "UAS language and systems", "2": "Regulations" }
    }
  },

  sources: {
    "book-02": { label: "Book · source image 02" },
    "book-03": { label: "Book · source image 03" },
    "book-04": { label: "Book · source image 04" },
    "book-05": { label: "Book · source image 05" },
    "book-06": { label: "Book · source image 06" },
    "book-07": { label: "Book · source image 07" },
    "book-08": { label: "Book · source image 08" },
    "book-09": { label: "Book · source image 09" },
    "book-10": { label: "Book · source image 10" },
    "book-11": { label: "Book · source image 11" },
    "book-12": { label: "Book · source image 12" },
    "book-13": { label: "Book · source image 13" },
    "book-14": { label: "Book · source image 14" },
    "book-15": { label: "Book · source image 15" },
    "book-16": { label: "Book · source image 16" },
    "book-17": { label: "Book · source image 17" },
    "book-18": { label: "Book · source image 18" },
    "book-19": { label: "Book · source image 19" },
    "book-20": { label: "Book · source image 20" },
    "book-21": { label: "Book · source image 21" },
    "book-22": { label: "Book · source image 22" },
    "book-23": { label: "Book · source image 23" },
    "book-24": { label: "Book · source image 24" },
    "book-26": { label: "Book · source image 26" },
    "book-27": { label: "Book · source image 27" },
    "book-28": { label: "Book · source image 28" },
    "faa-part107": { label: "FAA · Part 107 overview", url: "https://www.faa.gov/newsroom/small-unmanned-aircraft-systems-uas-regulations-part-107" },
    "faa-pilot": { label: "FAA · Become a Drone Pilot", url: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" },
    "faa-accident": { label: "FAA · Accident reporting", url: "https://www.faa.gov/faq/when-do-i-need-report-accident" },
    "faa-laanc": { label: "FAA · LAANC", url: "https://www.faa.gov/uas/getting_started/laanc" },
    "faa-people": { label: "FAA · Operations Over People", url: "https://www.faa.gov/uas/commercial_operators/operations_over_people" },
    "faa-register": { label: "FAA · Registration and Remote ID", url: "https://www.faa.gov/uas/getting_started/register_drone" }
  },

  flashcards: [
    {
      id: "c01-uas-vs-ua", book: "completeRemotePilot", chapter: "1", topic: "Language",
      question: "What is the difference between a UA and a UAS?",
      answer: "A UA is the aircraft itself. A UAS is the whole operating system.",
      explanation: "The system includes the uncrewed aircraft plus the controller or ground station, communication links, sensors, processors, and other elements needed for safe operation.",
      source: "book-04"
    },
    {
      id: "c02-suas-weight", book: "completeRemotePilot", chapter: "1", topic: "Language",
      question: "What weight boundary defines a small UAS under Part 107?",
      answer: "Less than 55 pounds at takeoff, including everything onboard or attached.",
      explanation: "Exactly 55 pounds is not 'less than 55.' Operations at or above that weight generally fall outside ordinary Part 107 eligibility.",
      source: "faa-part107"
    },
    {
      id: "c03-agl", book: "completeRemotePilot", chapter: "1", topic: "Language",
      question: "What does AGL mean?",
      answer: "Above ground level.",
      explanation: "AGL is a height measured above the local terrain directly below the object, not above sea level.",
      source: "book-02"
    },
    {
      id: "c04-vlos", book: "completeRemotePilot", chapter: "1", topic: "Language",
      question: "What does VLOS require?",
      answer: "The aircraft must be visible with unaided vision other than corrective lenses.",
      explanation: "The pilot or visual observer must be able to determine the aircraft's location, attitude, altitude, direction, and nearby hazards. A camera view alone is not VLOS.",
      source: "book-04"
    },
    {
      id: "c05-aircraft-types", book: "completeRemotePilot", chapter: "1", topic: "Aircraft types",
      question: "Identify the three UAS configurations shown, and separate fixed-wing from rotor-wing.",
      answer: "The fixed-wing aircraft uses a wing for lift. The quadcopter and hexacopter are rotor-wing multicopters with four and six rotors.",
      explanation: "Rotor-wing aircraft generate lift through horizontally oriented rotors; fixed-wing aircraft generate lift primarily through a wing moving through the air.",
      source: "book-05", image: "assets/books/complete-remote-pilot/page-05-aircraft-configurations.jpg",
      imageAlt: "Book figure showing quadcopter, fixed-wing, and hexacopter configurations"
    },
    {
      id: "c06-components", book: "completeRemotePilot", chapter: "1", topic: "Aircraft systems",
      question: "Can you identify the labeled quadcopter components?",
      answer: "A GPS module; B electronic speed controller; C receiver; D brushless motor; E propeller; F boom; G flight controller; H battery; I landing gear.",
      explanation: "The figure connects the aircraft's structure, power, control, navigation, and communication subsystems.",
      source: "book-06", image: "assets/books/complete-remote-pilot/page-06-flight-controller.jpg",
      imageAlt: "Exploded quadcopter component diagram labeled A through I"
    },
    {
      id: "c07-flight-controller", book: "completeRemotePilot", chapter: "1", topic: "Aircraft systems",
      question: "Why is the flight controller called the brain of the UAS?",
      answer: "It interprets sensor data and pilot commands, then directs aircraft responses.",
      explanation: "Its inputs can include GPS, an inertial measurement unit, an altimeter, a magnetometer, and commands from the control link.",
      source: "book-06"
    },
    {
      id: "c08-gps-limits", book: "completeRemotePilot", chapter: "1", topic: "Aircraft systems",
      question: "What is the trap in trusting GPS and Return to Home?",
      answer: "GPS can be unavailable or degraded, and Return to Home may not detect obstacles along its path.",
      explanation: "A pilot should understand how the specific aircraft behaves without GPS and set a safe return altitude rather than assuming automation will avoid trees or buildings.",
      source: "book-07"
    },
    {
      id: "c09-esc", book: "completeRemotePilot", chapter: "1", topic: "Aircraft systems",
      question: "What does an electronic speed controller (ESC) do?",
      answer: "It controls an electric motor's speed and direction and converts battery DC into the AC used by the motor.",
      explanation: "Multirotors typically use one ESC for each motor, commanded by the flight controller.",
      source: "book-08"
    },
    {
      id: "c10-lipo", book: "completeRemotePilot", chapter: "1", topic: "Aircraft systems",
      question: "What do a LiPo battery's mAh and C ratings describe?",
      answer: "mAh describes capacity; the C rating describes charge or discharge rate relative to capacity.",
      explanation: "A 5,000 mAh battery is 5 Ah. At 50C, the theoretical maximum continuous discharge is 50 × 5 A = 250 A. Always follow the battery maker's limits.",
      source: "book-07"
    },
    {
      id: "c11-controller", book: "completeRemotePilot", chapter: "1", topic: "Flight controls",
      question: "On this common Mode 2 controller, what does each main stick control?",
      answer: "Left stick: throttle and yaw. Right stick: pitch and roll.",
      explanation: "Left vertical changes thrust, left horizontal changes yaw; right vertical changes pitch and right horizontal changes roll or bank.",
      source: "book-08", image: "assets/books/complete-remote-pilot/page-08-remote-controller.jpg",
      imageAlt: "Remote controller labeled with throttle, rudder, elevator, aileron, and trim controls"
    },
    {
      id: "c12-axes", book: "completeRemotePilot", chapter: "1", topic: "Flight controls",
      question: "Match roll, pitch, and yaw to their axes.",
      answer: "Roll rotates about the longitudinal axis; pitch about the lateral axis; yaw about the vertical axis.",
      explanation: "For fixed-wing aircraft, the primary control surfaces are ailerons for roll, elevator for pitch, and rudder for yaw.",
      source: "book-10", image: "assets/books/complete-remote-pilot/page-10-aircraft-components.jpg",
      imageAlt: "Diagram connecting control inputs, roll, pitch, yaw, axes, and fixed-wing control surfaces"
    },
    {
      id: "c13-aim", book: "completeRemotePilot", chapter: "2", topic: "Publications",
      question: "What is the Aeronautical Information Manual (AIM) for?",
      answer: "It explains aviation procedures and information such as airspace, ATC, weather-related operations, airports, and safety.",
      explanation: "It also contains the Pilot/Controller Glossary. Use the current FAA edition because aviation information changes.",
      source: "book-12"
    },
    {
      id: "c14-traffic-pattern", book: "completeRemotePilot", chapter: "2", topic: "Airport operations",
      question: "Starting after takeoff, name the standard traffic-pattern legs shown in order.",
      answer: "Upwind, crosswind, downwind, base, then final approach.",
      explanation: "The diagram teaches terminology, not a universal pattern-entry method. Its full left edge and note are retained in this crop.",
      source: "book-13", image: "assets/books/complete-remote-pilot/page-13-traffic-pattern.jpg",
      imageAlt: "Complete traffic pattern figure with upwind, crosswind, downwind, base, and final legs"
    },
    {
      id: "c15-part107-subparts", book: "completeRemotePilot", chapter: "2", topic: "Regulations",
      question: "What are the five major Part 107 subparts?",
      answer: "A General; B Operating Rules; C Remote Pilot Certification; D Operations Over Human Beings; E Waivers.",
      explanation: "This structure helps you locate a rule instead of trying to memorize the regulation as one long list.",
      source: "book-15"
    },
    {
      id: "c16-accident-report", book: "completeRemotePilot", chapter: "2", topic: "Operating rules",
      question: "When does a Part 107 accident require an FAA report, and by when?",
      answer: "Within 10 calendar days if it causes serious injury or loss of consciousness, or qualifying property damage over $500.",
      explanation: "The property threshold excludes damage to the small UAS itself. Use the current FAA reporting guidance for exact definitions and filing instructions.",
      source: "faa-accident"
    },
    {
      id: "c17-rpic", book: "completeRemotePilot", chapter: "2", topic: "Operating rules",
      question: "Who has final responsibility and authority for a Part 107 operation?",
      answer: "The designated remote pilot in command (remote PIC).",
      explanation: "The remote PIC is responsible for regulatory compliance and for ensuring the operation does not create an undue hazard, even if someone else manipulates the controls.",
      source: "book-17"
    },
    {
      id: "c18-preflight", book: "completeRemotePilot", chapter: "2", topic: "Operating rules",
      question: "What must the remote PIC determine before each flight?",
      answer: "That the small UAS is in a condition for safe operation and the planned operation can be conducted safely.",
      explanation: "That means inspecting the system and considering the operating environment, people, property, airspace, weather, and known risks.",
      source: "book-17"
    },
    {
      id: "c19-night", book: "completeRemotePilot", chapter: "2", topic: "Operating rules",
      question: "What are the core Part 107 conditions for night operations?",
      answer: "The remote pilot must have the required current night-operations training, and the aircraft needs anti-collision lighting visible for at least 3 statute miles.",
      explanation: "The remote PIC may reduce light intensity when safety requires it, but should not extinguish the anti-collision lights during the operation.",
      source: "faa-part107"
    },
    {
      id: "c20-one-aircraft", book: "completeRemotePilot", chapter: "2", topic: "Operating rules",
      question: "Can one person serve as remote PIC or visual observer for two small UAS at the same time?",
      answer: "No.",
      explanation: "Part 107's simultaneous-operation rule limits a person to one small unmanned aircraft operation at a time in those roles.",
      source: "book-18"
    },
    {
      id: "c21-right-of-way", book: "completeRemotePilot", chapter: "2", topic: "Operating rules",
      question: "Who has right-of-way: a small UAS or another aircraft?",
      answer: "The small UAS must yield to all other aircraft and airborne vehicles.",
      explanation: "Do not pass over, under, or ahead unless well clear, and never operate close enough to create a collision hazard.",
      source: "book-19"
    },
    {
      id: "c22-weather-minimums", book: "completeRemotePilot", chapter: "2", topic: "Operating limits",
      question: "What are the basic Part 107 visibility and cloud-clearance minimums?",
      answer: "At least 3 statute miles visibility; 500 feet below clouds and 2,000 feet horizontally from clouds.",
      explanation: "Flight visibility is measured from the control station. These margins help the remote pilot see and avoid other traffic.",
      source: "book-20"
    },
    {
      id: "c23-altitude", book: "completeRemotePilot", chapter: "2", topic: "Operating limits",
      question: "What is the usual Part 107 altitude limit?",
      answer: "400 feet above ground level.",
      explanation: "A structure exception can allow flight higher when the aircraft remains within 400 feet of the structure and not more than 400 feet above its immediate uppermost limit.",
      source: "faa-part107"
    },
    {
      id: "c24-certificate", book: "completeRemotePilot", chapter: "2", topic: "Certification",
      question: "What are the basic eligibility steps for a first-time Part 107 remote pilot?",
      answer: "Be at least 16, be able to read, speak, write, and understand English, be physically and mentally able to fly safely, pass the knowledge test, and complete the FAA application and vetting process.",
      explanation: "To remain current, complete the free online recurrent training within 24 calendar months before exercising certificate privileges.",
      source: "faa-pilot"
    },
    {
      id: "c25-laanc", book: "completeRemotePilot", chapter: "2", topic: "Airspace",
      question: "What problem does LAANC solve?",
      answer: "It gives pilots a near-real-time way to request access to participating controlled airspace at or below approved altitudes.",
      explanation: "An authorization is location- and time-specific. It does not replace checking NOTAMs, TFRs, weather, or other restrictions.",
      source: "faa-laanc", image: "assets/books/complete-remote-pilot/page-24-airspace-diagram.jpg",
      imageAlt: "Diagram of FAA airspace data flowing through the UAS Data Exchange to drone users and air traffic"
    },
    {
      id: "c26-advisory-circular", book: "completeRemotePilot", chapter: "2", topic: "Publications",
      question: "Are FAA Advisory Circulars regulations?",
      answer: "Generally no; they explain regulations or offer an acceptable way to comply.",
      explanation: "They are important guidance, but their non-regulatory nature is different from the binding text of the CFR unless incorporated by reference or made mandatory another way.",
      source: "book-27"
    },
    {
      id: "c27-notam", book: "completeRemotePilot", chapter: "2", topic: "Publications",
      question: "Why must a remote pilot check NOTAMs before flight?",
      answer: "They report time-sensitive changes and hazards such as closures, outages, and airspace restrictions.",
      explanation: "A familiar location can become unsafe or restricted with little warning, including through a Temporary Flight Restriction.",
      source: "book-28", image: "assets/books/complete-remote-pilot/page-28-vfr-sectional-chart.jpg",
      imageAlt: "Book figure containing sample airport diagram and NOTAM keyword examples"
    },
    {
      id: "c28-over-people", book: "completeRemotePilot", chapter: "2", topic: "Operations over people",
      question: "Does Part 107 allow unrestricted flight over people?",
      answer: "No. The operation must fit an allowed category or another applicable provision, and moving-vehicle operations have additional conditions.",
      explanation: "Categories 1 through 4 use different aircraft and operational requirements. Confirm the current rule and aircraft eligibility before planning the flight.",
      source: "faa-people"
    }
  ],

  questions: [
    { id:"q01", book:"completeRemotePilot", chapter:"1", topic:"Language", question:"Which item is part of a UAS but is not the UA itself?", options:["The ground controller","The fuselage","The propeller","The landing gear"], answer:0, explanation:"UA means the aircraft alone; UAS includes the aircraft, controller, links, and associated operating elements.", source:"book-04" },
    { id:"q02", book:"completeRemotePilot", chapter:"1", topic:"Language", question:"A small unmanned aircraft weighs which of the following at takeoff?", options:["55 pounds or less","Less than 55 pounds, including attachments","Less than 65 pounds without payload","Exactly 55 pounds without battery"], answer:1, explanation:"Part 107 uses less than 55 pounds at takeoff, including everything onboard or attached.", source:"faa-part107" },
    { id:"q03", book:"completeRemotePilot", chapter:"1", topic:"Language", question:"AGL is measured from what reference?", options:["Mean sea level","The nearest airport","The local terrain below the object","The control station"], answer:2, explanation:"Above ground level is height above the underlying local terrain.", source:"book-02" },
    { id:"q04", book:"completeRemotePilot", chapter:"1", topic:"Language", question:"Which aid is allowed while maintaining visual line of sight?", options:["FPV goggles only","Binoculars for the entire flight","Corrective eyeglasses","A map display instead of looking outside"], answer:2, explanation:"VLOS must be maintained with unaided vision other than corrective lenses.", source:"book-04" },
    { id:"q05", book:"completeRemotePilot", chapter:"1", topic:"Aircraft types", question:"Which configuration normally uses a wing moving through the air as its primary lift source?", options:["Hexacopter","Quadcopter","Fixed-wing UAS","Single-rotor helicopter"], answer:2, explanation:"Fixed-wing aircraft generate lift primarily with a wing; multicopters use rotors.", source:"book-05", image:"assets/books/complete-remote-pilot/page-05-aircraft-configurations.jpg", imageAlt:"Aircraft configuration examples" },
    { id:"q06", book:"completeRemotePilot", chapter:"1", topic:"Aircraft systems", question:"Which component interprets sensor inputs and pilot commands?", options:["Landing gear","Flight controller","Propeller","Camera gimbal"], answer:1, explanation:"The flight controller is the system's central processor for flight inputs and responses.", source:"book-06" },
    { id:"q07", book:"completeRemotePilot", chapter:"1", topic:"Aircraft systems", question:"What is a key limitation of Return to Home on many small UAS?", options:["It cannot use GPS","It may not detect obstacles along the route","It always lands where it currently is","It works only over water"], answer:1, explanation:"Return to Home may fly a simple route at a set altitude without recognizing trees, wires, or buildings.", source:"book-07" },
    { id:"q08", book:"completeRemotePilot", chapter:"1", topic:"Aircraft systems", question:"What does an ESC control?", options:["Motor speed and direction","GPS satellite selection","Camera focus only","Remote pilot certification"], answer:0, explanation:"An electronic speed controller converts electrical power as needed by the motor and controls its speed and direction.", source:"book-08" },
    { id:"q09", book:"completeRemotePilot", chapter:"1", topic:"Aircraft systems", question:"A 5,000 mAh battery has a capacity of how many amp-hours?", options:["0.5 Ah","5 Ah","50 Ah","500 Ah"], answer:1, explanation:"1,000 mAh equals 1 Ah, so 5,000 mAh equals 5 Ah.", source:"book-07" },
    { id:"q10", book:"completeRemotePilot", chapter:"1", topic:"Flight controls", question:"In a common Mode 2 setup, the left stick controls what?", options:["Pitch and roll","Throttle and yaw","Camera and gimbal","Elevator and aileron trim only"], answer:1, explanation:"The left stick's vertical axis controls throttle and its horizontal axis controls yaw.", source:"book-09", image:"assets/books/complete-remote-pilot/page-08-remote-controller.jpg", imageAlt:"Mode 2 remote controller labels" },
    { id:"q11", book:"completeRemotePilot", chapter:"1", topic:"Flight controls", question:"Roll is rotation about which aircraft axis?", options:["Vertical","Lateral","Longitudinal","Diagonal"], answer:2, explanation:"Roll is about the nose-to-tail longitudinal axis.", source:"book-10" },
    { id:"q12", book:"completeRemotePilot", chapter:"1", topic:"Flight controls", question:"Which fixed-wing control surface primarily controls yaw?", options:["Aileron","Elevator","Rudder","Flap"], answer:2, explanation:"The rudder controls yaw about the vertical axis.", source:"book-10" },
    { id:"q13", book:"completeRemotePilot", chapter:"2", topic:"Airport operations", question:"Which traffic-pattern leg is parallel to the runway in the opposite direction of landing?", options:["Upwind","Crosswind","Downwind","Base"], answer:2, explanation:"The downwind leg parallels the landing runway opposite the landing direction.", source:"book-13", image:"assets/books/complete-remote-pilot/page-13-traffic-pattern.jpg", imageAlt:"Complete components of a traffic pattern diagram" },
    { id:"q14", book:"completeRemotePilot", chapter:"2", topic:"Airport operations", question:"Which leg connects downwind to final approach at roughly a right angle to the runway?", options:["Base","Upwind","Departure","Crosswind"], answer:0, explanation:"The base leg extends from downwind toward the extended runway centerline before final.", source:"book-13" },
    { id:"q15", book:"completeRemotePilot", chapter:"2", topic:"Regulations", question:"Which Part 107 subpart contains the operating rules?", options:["Subpart A","Subpart B","Subpart C","Subpart E"], answer:1, explanation:"Subpart B contains operating rules; A is General, C certification, D operations over people, and E waivers.", source:"book-15" },
    { id:"q16", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"A qualifying Part 107 accident must be reported to the FAA within how long?", options:["24 hours","5 calendar days","10 calendar days","30 calendar days"], answer:2, explanation:"The Part 107 accident report deadline is 10 calendar days after the operation.", source:"faa-accident" },
    { id:"q17", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"Which property damage counts toward the FAA's Part 107 reporting threshold?", options:["Damage to the small UAS itself only","Damage to property other than the small UAS","Only damage to federal property","No property damage ever counts"], answer:1, explanation:"The threshold concerns property other than the small UAS, with repair or replacement cost over $500.", source:"faa-accident" },
    { id:"q18", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"Who is the final authority for a Part 107 flight?", options:["The visual observer","The aircraft manufacturer","The remote PIC","The property owner"], answer:2, explanation:"The designated remote PIC is directly responsible for and final authority over the operation.", source:"book-17" },
    { id:"q19", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"Before flight, the remote PIC must ensure the aircraft is what?", options:["Painted a bright color","In a condition for safe operation","Less than one year old","Equipped with a camera"], answer:1, explanation:"Part 107 requires a preflight assessment and a determination that the small UAS is safe to operate.", source:"book-17" },
    { id:"q20", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"Under the basic alcohol rule, how long must pass after drinking before serving as a required crewmember?", options:["2 hours","4 hours","8 hours","12 hours"], answer:2, explanation:"The familiar aviation rule is eight hours from bottle to throttle, along with no impairment and a blood alcohol concentration below 0.04 percent.", source:"book-18" },
    { id:"q21", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"What night equipment is required under ordinary Part 107 operations?", options:["A landing light visible for 1 mile","Anti-collision lighting visible for at least 3 statute miles","Infrared lights only","No lighting if GPS is active"], answer:1, explanation:"The aircraft needs anti-collision lighting visible for at least 3 statute miles, plus the pilot must satisfy current training requirements.", source:"faa-part107" },
    { id:"q22", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"Can one person act as visual observer for two simultaneous small UAS operations?", options:["Yes, below 100 feet","Yes, if both are the same model","No","Only in uncontrolled airspace"], answer:2, explanation:"A person may not act as remote PIC or visual observer in more than one small UAS operation at the same time.", source:"book-18" },
    { id:"q23", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"When a crewed aircraft approaches your operating area, what should the small UAS do?", options:["Climb above it","Hold position directly beneath it","Yield and remain well clear","Use right-of-way if it arrived first"], answer:2, explanation:"Small UAS must yield to all aircraft and other airborne vehicles and avoid creating a collision hazard.", source:"book-19" },
    { id:"q24", book:"completeRemotePilot", chapter:"2", topic:"Operating limits", question:"What is the minimum flight visibility for ordinary Part 107 operations?", options:["1 statute mile","2 statute miles","3 statute miles","5 statute miles"], answer:2, explanation:"At least 3 statute miles of flight visibility is required from the control station.", source:"book-20" },
    { id:"q25", book:"completeRemotePilot", chapter:"2", topic:"Operating limits", question:"What cloud clearance applies under ordinary Part 107 operations?", options:["Clear of clouds only","500 feet below and 2,000 feet horizontally","1,000 feet above and 1 mile horizontally","No cloud rule below 400 feet"], answer:1, explanation:"The aircraft must remain at least 500 feet below and 2,000 feet horizontally from clouds.", source:"book-20" },
    { id:"q26", book:"completeRemotePilot", chapter:"2", topic:"Operating limits", question:"What is the ordinary maximum groundspeed under Part 107?", options:["60 mph","87 knots (100 mph)","120 knots","No speed limit"], answer:1, explanation:"The ordinary limit is 87 knots, equal to 100 miles per hour groundspeed.", source:"book-20" },
    { id:"q27", book:"completeRemotePilot", chapter:"2", topic:"Operating limits", question:"What is the usual maximum altitude for a Part 107 small UAS away from structures?", options:["200 feet AGL","400 feet AGL","500 feet MSL","1,200 feet AGL"], answer:1, explanation:"The standard maximum is 400 feet above ground level unless an applicable structure provision or waiver allows otherwise.", source:"faa-part107" },
    { id:"q28", book:"completeRemotePilot", chapter:"2", topic:"Certification", question:"What is the minimum age for a first-time Part 107 remote pilot applicant?", options:["14","16","18","21"], answer:1, explanation:"The FAA requires applicants to be at least 16 years old.", source:"faa-pilot" },
    { id:"q29", book:"completeRemotePilot", chapter:"2", topic:"Certification", question:"How often must a remote pilot complete recurrent training to remain current?", options:["Every 6 months","Every 12 calendar months","Every 24 calendar months","Only after an accident"], answer:2, explanation:"The free online recurrent training must have been completed within the previous 24 calendar months.", source:"faa-pilot" },
    { id:"q30", book:"completeRemotePilot", chapter:"2", topic:"Airspace", question:"What does a LAANC authorization replace?", options:["The need to check TFRs","All preflight planning","The need for a pilot certificate","The slower manual process for eligible controlled-airspace access"], answer:3, explanation:"LAANC can provide near-real-time authorization at participating locations, but all other planning and restrictions still apply.", source:"faa-laanc", image:"assets/books/complete-remote-pilot/page-24-airspace-diagram.jpg", imageAlt:"FAA UAS Data Exchange and LAANC diagram" },
    { id:"q31", book:"completeRemotePilot", chapter:"2", topic:"Airspace", question:"After receiving LAANC authorization, what must a pilot still check?", options:["Only battery voltage","NOTAMs, TFRs, weather, and applicable restrictions","Nothing else","Only the aircraft serial number"], answer:1, explanation:"LAANC is a specific airspace authorization, not a substitute for a complete preflight review.", source:"faa-laanc" },
    { id:"q32", book:"completeRemotePilot", chapter:"2", topic:"Publications", question:"Which publication provides detailed official airport information and is revised on a 56-day cycle?", options:["Chart Supplement","Pilot logbook","Aircraft sales guide","Remote controller manual"], answer:0, explanation:"The Chart Supplement contains detailed airport, communications, service, and procedural information.", source:"book-26" },
    { id:"q33", book:"completeRemotePilot", chapter:"2", topic:"Publications", question:"What is the main purpose of an FAA Advisory Circular?", options:["To replace the CFR","To explain a rule or provide useful compliance guidance","To issue pilot certificates","To authorize every controlled-airspace flight"], answer:1, explanation:"Advisory Circulars are generally non-regulatory guidance explaining regulations, procedures, or acceptable compliance methods.", source:"book-27" },
    { id:"q34", book:"completeRemotePilot", chapter:"2", topic:"Publications", question:"What kind of information is most likely found in a NOTAM?", options:["Permanent aircraft ownership records","Time-sensitive runway, service, hazard, or airspace information","A pilot's exam score","Battery manufacturer specifications"], answer:1, explanation:"NOTAMs communicate temporary or newly relevant aeronautical information that may affect a flight.", source:"book-28" },
    { id:"q35", book:"completeRemotePilot", chapter:"2", topic:"Operations over people", question:"Which statement about Part 107 flight over people is accurate?", options:["It is always prohibited","It is unrestricted below 50 feet","It must meet the conditions of an allowed category or other authority","It requires only verbal permission"], answer:2, explanation:"Current rules use Categories 1–4 and associated operational conditions; flight is not automatically allowed merely because it is brief.", source:"faa-people" },
    { id:"q36", book:"completeRemotePilot", chapter:"2", topic:"Regulations", question:"What usually determines whether a flight is recreational?", options:["Whether the drone has a camera","Whether the pilot is paid","The purpose and intent of the flight","Whether it occurs on a weekend"], answer:2, explanation:"A recreational flight is flown strictly for fun or personal enjoyment. Compensation alone is not the deciding test.", source:"book-14" },
    { id:"q37", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"May a person without a remote pilot certificate manipulate the controls during a Part 107 flight?", options:["Never","Yes, while directly supervised by a certificated remote pilot who can immediately take control","Yes, if below 50 feet","Yes, if a visual observer is present"], answer:1, explanation:"A non-certificated person may manipulate the controls under direct supervision when the remote pilot can immediately take direct control.", source:"book-17" },
    { id:"q38", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"When may a remote PIC deviate from a Part 107 rule without a prior waiver?", options:["Whenever a customer asks","During an in-flight emergency to the extent needed to address it","Whenever flying over private property","Only during daylight"], answer:1, explanation:"In an emergency requiring immediate action, the remote PIC may deviate as necessary and must provide a written report if the FAA requests one.", source:"book-17" },
    { id:"q39", book:"completeRemotePilot", chapter:"2", topic:"Operating rules", question:"Operating a small UAS from a moving land vehicle may be allowed only when which condition is met?", options:["The vehicle is on any public road","The operation is over a sparsely populated area and is not transporting another's property for compensation or hire","The aircraft is under 0.55 pounds","The driver is also the remote PIC"], answer:1, explanation:"Part 107 prohibits operation from a moving aircraft and narrowly allows moving land or water vehicle operations in sparsely populated areas, subject to the property-carriage limitation.", source:"book-18" },
    { id:"q40", book:"completeRemotePilot", chapter:"2", topic:"Regulations", question:"If a book summary conflicts with the current CFR or FAA guidance, which should govern the operation?", options:["The oldest source","The book summary","The current authoritative rule and FAA material","Whichever is easier"], answer:2, explanation:"Study guides are learning aids. Current regulations, authorizations, and official FAA guidance must drive real-world operational decisions.", source:"faa-part107" }
  ]
};

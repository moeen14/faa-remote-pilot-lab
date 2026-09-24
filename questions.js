/* Remote Pilot Lab: complete study bank for source pages 01–28. */
(() => {
  "use strict";

  const sources = {};
  for (let page = 1; page <= 28; page += 1) {
    const number = String(page).padStart(2, "0");
    sources[`book-${number}`] = { label: `Book · source image ${number}` };
  }
  Object.assign(sources, {
    "faa-part107": { label: "FAA · Part 107 overview", url: "https://www.faa.gov/newsroom/small-unmanned-aircraft-systems-uas-regulations-part-107" },
    "faa-pilot": { label: "FAA · Become a Drone Pilot", url: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" },
    "faa-accident": { label: "FAA · Accident reporting", url: "https://www.faa.gov/faq/when-do-i-need-report-accident" },
    "faa-laanc": { label: "FAA · LAANC", url: "https://www.faa.gov/uas/getting_started/laanc" },
    "faa-people": { label: "FAA · Operations Over People", url: "https://www.faa.gov/uas/commercial_operators/operations_over_people" },
    "faa-waivers": { label: "FAA · Part 107 waivers", url: "https://www.faa.gov/uas/commercial_operators/part_107_waivers" },
    "faa-recreation": { label: "FAA · Recreational flyers", url: "https://www.faa.gov/uas/recreational_flyers" },
    "faa-register": { label: "FAA · Registration and Remote ID", url: "https://www.faa.gov/uas/getting_started/register_drone" }
  });

  const figures = {
    configurations: ["assets/books/complete-remote-pilot/page-05-aircraft-configurations.jpg", "Quadcopter, fixed-wing, and hexacopter configurations"],
    components: ["assets/books/complete-remote-pilot/page-06-flight-controller.jpg", "Exploded quadcopter component diagram labeled A through I"],
    controller: ["assets/books/complete-remote-pilot/page-08-remote-controller.jpg", "Mode 2 remote controller with labeled sticks and trim controls"],
    axes: ["assets/books/complete-remote-pilot/page-10-aircraft-components.jpg", "Flight controls, roll, pitch, yaw, and aircraft axes"],
    pattern: ["assets/books/complete-remote-pilot/page-13-traffic-pattern.jpg", "Complete traffic-pattern figure with the left border, base leg, and note"],
    publications: ["assets/books/complete-remote-pilot/page-14-faa-publications.jpg", "Federal Aviation Regulations and AIM publications"],
    laanc: ["assets/books/complete-remote-pilot/page-24-airspace-diagram.jpg", "FAA UAS Data Exchange and LAANC diagram"],
    notams: ["assets/books/complete-remote-pilot/page-28-vfr-sectional-chart.jpg", "Airport diagram and NOTAM keyword examples"]
  };

  // page, topic, prompt, answer, three distractors, explanation, optional figure, optional current FAA verification
  const rows = [
    [1,"History","What event does the book present as an early uncrewed aerial mission in 1849?","Austrian balloons carrying explosives during the siege of Venice",["Langley's Aerodrome flight","Project Aphrodite","The first Predator mission"],"It was an early mission-oriented use of an aerial system, though unlike a modern controllable drone."],
    [1,"History","Who launched the uncrewed Aerodrome from a floating barge in 1896?","Samuel Langley",["Nikola Tesla","Wilbur Wright","Igor Sikorsky"],"Langley's aircraft was catapult-launched from a barge."],
    [1,"History","During which conflict did guided, pilotless winged aircraft first fly?","World War I",["The U.S. Civil War","World War II","The Vietnam War"],"Some served as targets; bomb-carrying versions were called aerial torpedoes."],
    [1,"History","How did Germany's V-1 guidance concept terminate powered flight near the target?","It cut the engine when the system estimated it had reached the target area",["A pilot parachuted out","GPS commanded a precision landing","A radar controller recovered it"],"The V-1 used a comparatively simple guidance concept."],
    [1,"History","What was Project Aphrodite?","A U.S. effort to convert crewed B-17s into remotely controlled flying bombs",["An agricultural mapping program","A weather-satellite project","A drone-registration system"],"Pilots handled takeoff and arming, transferred control, and then parachuted from the aircraft."],

    [2,"History","Who demonstrated radio control of an object in 1898?","Nikola Tesla",["Samuel Langley","Glenn Curtiss","Robert Goddard"],"Radio control later became fundamental to remotely piloted aircraft."],
    [2,"History","What development helped create the hobby radio-control market in the 1950s?","Gas- and battery-powered remote-control aircraft",["Satellite navigation","Digital sectional charts","Part 107 certificates"],"Falling component costs and improving batteries later widened access further."],
    [2,"History","By what year does the book say remote-controlled helicopters existed?","1968",["1903","1941","1994"],"This was part of the parallel development of hobby remote-control aviation."],
    [2,"Applications","Which example best illustrates precision-agriculture use of a UAS?","Using sensors to identify crops needing water, fertilizer, or pest treatment",["Broadcasting ATIS","Inspecting pilot certificates","Issuing NOTAMs"],"Modern UAS can carry specialized sensors, not just cameras."],
    [2,"Language","Why must a remote pilot learn aviation terms and abbreviations?","To communicate accurately and understand operational information",["To avoid all contact with ATC","To replace preflight planning","To make a UAS legally airworthy"],"Shared terminology matters when working with operators, pilots, and air traffic personnel."],

    [3,"Language","What is an Advisory Circular (AC)?","FAA guidance that explains subjects beyond concise regulatory text",["A temporary flight restriction","A pilot certificate","An airport weather observation"],"ACs are generally explanatory and non-regulatory, although operationally important."],
    [3,"Weather","What does an AIRMET communicate?","A current or forecast weather hazard relevant especially to smaller aircraft",["An aircraft registration number","A permanent airspace boundary","An airport construction permit"],"Examples include turbulence, strong winds, and reduced visibility over an area."],
    [3,"Aerodynamics","What is angle of attack?","The angle between an airfoil's chord line and the relative wind",["The angle between true and magnetic north","The bank angle alone","The camera's angle below the horizon"],"It applies to wings and rotor blades and strongly affects lift."],
    [3,"Airspace","What is ATC's core function?","Separating and organizing aircraft in controlled airspace",["Certifying batteries","Publishing local property laws","Repairing airport runways"],"Remote pilots may need authorization or coordination in specific situations."],
    [3,"Airport operations","What does ATIS provide?","A continuous broadcast of non-control airport information, including weather",["A remote-pilot practical test","A list of registered drones","An aircraft control link"],"It provides routine information without congesting control frequencies."],
    [3,"Language","What does BVLOS mean?","The aircraft is operated beyond the pilot's or observer's visual line of sight",["The aircraft is below visible low overcast","The battery voltage is low","The flight is beneath controlled airspace"],"Ordinary Part 107 operations require VLOS unless appropriate FAA authority allows otherwise."],
    [3,"Remote ID","What is a FRIA?","An FAA-Recognized Identification Area where eligible aircraft may operate without broadcasting Remote ID",["A restricted military area","An airport traffic pattern","A weather product"],"FRIAs are generally sponsored by recognized organizations or educational institutions."],
    [3,"Airspace","What does LAANC provide?","A way to request eligible controlled-airspace authorization through approved services",["A replacement for a pilot certificate","Automatic obstacle avoidance","A weather forecast for every airport"],"It connects operators, service suppliers, FAA data, and air traffic facilities.",null,"faa-laanc"],

    [4,"Operating roles","Who is the remote PIC?","The person responsible for and holding final authority over the UAS operation",["Anyone watching the flight","Only the aircraft owner","The nearest controller"],"The remote PIC need not be the person physically moving the control sticks."],
    [4,"Remote ID","What is Remote Identification?","The ability of a drone in flight to broadcast required identification and location information",["A visual-observer hand signal","A weather radar mode","An airport badge"],"Requirements depend on the aircraft and operation; check current FAA guidance.",null,"faa-register"],
    [4,"Language","What is the difference between UA and UAS?","UA is the aircraft; UAS is the aircraft plus its associated operating system",["UA is civilian and UAS military","UA is fixed-wing and UAS rotor-wing","There is never a difference"],"The system can include controllers, links, sensors, processors, and other components."],
    [4,"Airport operations","What is the difference between a runway and a taxiway?","A runway is for takeoff and landing; a taxiway connects movement areas",["A taxiway is airborne","A runway is always grass","A taxiway is only for UAS"],"Charts often abbreviate them RWY and TWY."],
    [4,"Weather","How do AIRMETs and SIGMETs differ in general significance?","SIGMETs address more severe hazards broadly; AIRMETs often concern hazards especially relevant to lighter aircraft",["AIRMETs are permanent","SIGMETs apply only on the ground","They are registration categories"],"Both are area-based aviation weather advisories."],
    [4,"Time","What is UTC in aviation?","A global standard time based on Greenwich, shown in 24-hour format",["Local daylight time","A control frequency","A cloud-clearance unit"],"UTC is also called Zulu time and is used in weather and NOTAMs."],
    [4,"Operating rules","What does VLOS mean operationally?","Seeing the aircraft with unaided vision other than corrective lenses",["Seeing only its camera feed","Tracking it only on a map","Using binoculars throughout"],"VLOS supports awareness of attitude, location, direction, and hazards."],
    [4,"Weather","What is the difference between a METAR and a TAF?","A METAR reports observed airport weather; a TAF forecasts airport weather",["A METAR is a chart and a TAF a regulation","A METAR is military only","A TAF reports maintenance"],"Both use standardized coded aviation weather formats."],

    [5,"Aircraft types","What are the two primary aircraft categories described?","Fixed-wing and rotor-wing",["Crewed and satellite","IFR and VFR","Public and private"],"Fixed-wing aircraft use wings; rotor-wing aircraft use rotors for lift.","configurations"],
    [5,"Aircraft types","What defines a quadcopter?","A multicopter with four lifting rotors",["A fixed-wing aircraft with four wings","A helicopter with one rotor","Any UAS under four pounds"],"The configuration name reflects the rotor count.","configurations"],
    [5,"Aircraft types","What defines a hexacopter?","A multicopter with six lifting rotors",["A UAS with six batteries","A fixed-wing aircraft with six controls","A helicopter with two rotors"],"Hexa means six.","configurations"],
    [5,"Power systems","Why are batteries common as the primary sUAS power source?","They provide electrical power compactly without fuel storage or combustion hardware",["They eliminate all fire risk","They require no maintenance","They make GPS unnecessary"],"Electric power directly supports controllers, sensors, communications, and motors."],
    [5,"Aircraft systems","Which elements are common to essentially all UAS?","Flight control, propulsion control, a power source, and a control link",["A passenger cabin and transponder","A parachute and radar","Wheels and a combustion engine"],"Every controllable UAS needs these basic functions."],
    [5,"Aircraft types","How does a fixed-wing aircraft primarily generate lift?","Airflow over a wing",["Only downward rotors","A balloon envelope","A ground cable"],"The aircraft normally needs forward airspeed for its wing to produce lift.","configurations"],

    [6,"Aircraft systems","Why is the flight controller called the brain of a UAS?","It interprets pilot commands and sensor inputs, then directs aircraft responses",["It stores landing gear","It physically produces lift","It broadcasts ATIS"],"It coordinates stabilization, navigation, and motor or surface commands.","components"],
    [6,"Aircraft systems","Which sensor measures acceleration and rotation for attitude estimation?","The inertial measurement unit (IMU)",["Landing gear","Camera lens","Propeller guard"],"An IMU commonly contains accelerometers and gyroscopes."],
    [6,"Aircraft systems","What does a magnetometer provide?","Compass or heading information",["Battery capacity","Cloud height","Motor temperature only"],"Magnetic interference can affect heading and navigation."],
    [6,"Aircraft systems","What is component B in the quadcopter diagram?","Electronic speed controller (ESC)",["GPS module","Landing gear","Receiver antenna"],"The ESC regulates its associated electric motor.","components"],
    [6,"Aircraft systems","What is component G in the quadcopter diagram?","Flight controller",["Battery","Propeller","Boom"],"It processes commands and sensor data.","components"],

    [7,"Navigation","Why may GPS fail or perform poorly indoors?","The receiver may not see enough satellites clearly",["Indoor air is too warm","Batteries produce no DC indoors","Controllers cannot transmit indoors"],"Structures attenuate or reflect satellite signals."],
    [7,"Navigation","How does GPS simplify hovering for many multicopters?","Position-hold logic automatically corrects drift",["It locks propellers mechanically","It increases battery capacity","It replaces the controller"],"Without reliable GPS, some modes become less stable or behave differently."],
    [7,"Automation","What is a major Return-to-Home hazard?","The automated route or altitude may intersect obstacles",["It always deletes the home point","It disables all motors","It works only over airports"],"Verify the home point and return altitude; do not assume perfect obstacle sensing."],
    [7,"Power systems","What does mAh describe on a battery?","Electrical capacity",["Motor RPM per volt","Satellite accuracy","Propeller diameter"],"Usable flight time also depends on load and conditions."],
    [7,"Power systems","What does a 2S LiPo designation mean?","Two cells connected in series",["Two spare batteries","Two cells in parallel only","A two-amp limit"],"At about 3.7 nominal volts per cell, 2S is about 7.4 volts."],
    [7,"Power systems","What does a battery's C rating describe?","A charge or discharge rate relative to capacity",["Compass heading","Cell color","Temperature only"],"A 5 Ah pack at 50C corresponds theoretically to 250 A, subject to maker limits."],

    [8,"Aircraft systems","What does an electronic speed controller do?","Controls motor speed and direction and converts battery DC for a brushless motor",["Receives weather data","Tilts the camera mechanically","Measures runway length"],"Multicopters commonly use one ESC per motor."],
    [8,"Aircraft systems","Why are brushless motors widely used?","They are generally reliable, efficient, and quieter than brushed designs",["They need no electricity","They eliminate propellers","They work only with fuel"],"Their electronic commutation requires an ESC."],
    [8,"Flight controls","On a common Mode 2 controller, what does the left stick control?","Throttle and yaw",["Pitch and roll","Camera focus and zoom","Only elevator trim"],"Vertical controls throttle; horizontal controls yaw.","controller"],
    [8,"Flight controls","On a common Mode 2 controller, what does the right stick control?","Pitch and roll",["Throttle and yaw","GPS and Remote ID","Battery and receiver"],"Vertical commands pitch; horizontal commands roll.","controller"],
    [8,"Power systems","Why must LiPo batteries be handled carefully?","Damage or incorrect handling can cause fire or explosion",["They contain no energy","They are harmless when discharged","Impact cannot damage them"],"Follow the manufacturer's charging, inspection, storage, and disposal procedures."],

    [9,"Aircraft systems","Why do multicopter propellers rotate in opposing directions?","To counteract torque and maintain yaw control",["To increase GPS reception","To charge the battery","To create a traffic pattern"],"Same-direction rotation would make control difficult."],
    [9,"Aircraft systems","Why are clockwise and counterclockwise propellers not interchangeable?","Their blade pitch is reversed for the intended rotation direction",["They use different frequencies","Only one contains a motor","One is not a rotor"],"Install each propeller on its matching motor."],
    [9,"Imaging","What does a camera gimbal contribute?","It aims and stabilizes the camera while reducing vibration and tilt",["It authorizes airspace flight","It measures battery capacity","It replaces VLOS"],"A stabilized gimbal can keep imagery level during maneuvers."],
    [9,"Flight controls","What is headless mode?","Directional commands are interpreted from the pilot's perspective rather than aircraft heading",["There is no flight controller","The camera is removed","It is required at night"],"It can simplify orientation but does not replace directional understanding."],
    [9,"Flight controls","What does control trim do?","Makes small adjustments to reduce unwanted drift or bias",["Changes registration","Sets cloud clearance","Calculates damage cost"],"Trim should not mask a mechanical, calibration, or sensor problem."],

    [10,"Flight controls","Roll is rotation about which axis?","The longitudinal nose-to-tail axis",["Vertical","Lateral wingtip-to-wingtip","Runway centerline"],"Ailerons are the primary fixed-wing roll control.","axes"],
    [10,"Flight controls","Pitch is rotation about which axis?","The lateral wingtip-to-wingtip axis",["Longitudinal","Vertical","Magnetic"],"The elevator is the primary fixed-wing pitch control.","axes"],
    [10,"Flight controls","Yaw is rotation about which axis?","The vertical axis",["Longitudinal","Lateral","Camera"],"The rudder is the primary fixed-wing yaw control.","axes"],
    [10,"Flight controls","Which fixed-wing surface primarily commands roll?","Ailerons",["Elevator","Rudder","Landing gear"],"Differential aileron movement changes lift across the wings.","axes"],
    [10,"Flight controls","Which fixed-wing surface primarily commands pitch?","Elevator",["Ailerons","Rudder","Propeller"],"Elevator deflection changes pitching moment about the lateral axis.","axes"],

    [11,"Applications","How can UAS support real-estate work?","By surveying and photographing property from aerial perspectives",["By issuing deeds","By controlling airspace","By replacing all inspections"],"The flight still must follow applicable rules."],
    [11,"Applications","How can UAS assist search and rescue?","By searching terrain with cameras or specialized sensors",["By creating TFRs automatically","By certifying rescuers","By replacing command"],"They can cover difficult areas while limiting human exposure."],
    [11,"Applications","How can utilities use small UAS?","To inspect powerlines, towers, plants, and other assets",["To change regulations","To broadcast ATIS","To eliminate records"],"Remote imaging can reduce some climbing and access risks."],
    [11,"Applications","How can firefighters use UAS?","To monitor fires and gather situational information",["To ignore restrictions","To direct crewed aircraft without coordination","To fly without a remote PIC"],"Emergency operations still require coordination and appropriate authority."],
    [11,"Risk management","What two broad limits constrain possible UAS uses?","Aircraft performance and applicable rules",["Only camera color","Only pilot age","Only runway length"],"A technically possible mission may still be unsafe or unlawful."],

    [12,"Publications","Why should pilots prefer current FAA publications?","Rules, procedures, and operational information change",["Old paper becomes unreadable","Private copies are illegal","FAA sources have no revisions"],"Third-party copies may be incomplete or out of date."],
    [12,"Publications","What is the AIM?","Aeronautical Information Manual",["Aircraft Inspection Mandate","Airspace Identification Map","Automated Incident Message"],"It is a major reference for aviation procedures."],
    [12,"Publications","Which AIM subjects are especially relevant to remote pilots?","Airspace, ATC, procedures, emergencies, safety, and charts",["Only passenger service","Only engine overhaul","Only ticketing"],"Remote pilots share the NAS with crewed aviation."],
    [12,"Publications","What glossary is included in the AIM?","Pilot/Controller Glossary",["Battery glossary","Property-tax glossary","NTSB docket"],"It standardizes terms used by pilots and controllers."],
    [12,"Publications","What is a good first stop for a current FAA publication?","The FAA website",["An old screenshot","An unverified post","A decade-old summary"],"Confirm the publication's revision date."],

    [13,"Airport operations","Starting after takeoff, what sequence names the pattern legs shown?","Upwind, crosswind, downwind, base, final",["Final, base, downwind, crosswind, upwind","Downwind, final, upwind, base, crosswind","Crosswind, base, upwind, final, downwind"],"These are standard traffic-pattern segment names.","pattern"],
    [13,"Airport operations","Which leg is parallel to the runway opposite the landing direction?","Downwind",["Base","Final","Crosswind"],"Aircraft on downwind travel opposite the intended landing direction.","pattern"],
    [13,"Airport operations","Which leg connects downwind to final?","Base",["Upwind","Departure","Crosswind"],"Base is generally at right angles to the runway near its approach end.","pattern"],
    [13,"Airport operations","What is final approach?","Flight along the extended runway centerline toward landing",["Flight opposite landing","The first turn after takeoff","Taxi from parking"],"It begins after the turn from base in the illustration.","pattern"],
    [13,"Airport operations","What warning accompanies the traffic-pattern figure?","It teaches terminology, not a universal pattern-entry method",["It applies only to helicopters","It replaces tower instructions","It depicts a required UAS route"],"Actual procedures depend on the airport, traffic, airspace, and instructions.","pattern"],

    [14,"Publications","Why should an old AIM be treated cautiously?","It may omit later procedural and regulatory changes",["It contains no glossary","It applies to boats","It becomes a NOTAM"],"Check the current edition and changes."],
    [14,"Regulations","What is Part 107's role?","It supplies principal rules for civil small-UAS operations not qualifying for another exception",["It governs only airlines","It is a battery manual","It replaces state law"],"The regulatory path depends on the operation's purpose and circumstances."],
    [14,"Regulations","What generally determines whether a flight is recreational?","The actual purpose and intent of the flight",["Whether it has a camera","Whether the pilot is paid that day","Whether it is a weekend"],"The exception applies only when flown strictly for recreation.","publications","faa-recreation"],
    [14,"Regulations","When uncertain whether a flight fits the recreational exception, what conservative path does the book recommend?","Operate under Part 107",["Ignore both rule sets","Call it recreational later","Use only local law"],"The recreational exception has specific conditions.",null,"faa-recreation"],
    [14,"Publications","What combines regulations and explanatory information in a common pilot reference?","A FAR/AIM publication",["A TAF/METAR report","A battery log","A registration decal"],"Commercial editions often package the FAR and AIM together.","publications"],
    [14,"Regulations","If one rule does not prohibit something, does that alone prove it safe and authorized?","No; other rules, airspace requirements, and risk controls may apply",["Yes, always","Yes, if small","Yes, if no one complains"],"Read the full applicable rule set."],

    [15,"Regulations","What are Part 107's five subparts?","General; Operating Rules; Certification; Operations Over Human Beings; Waivers",["Weather; Airports; Engines; Navigation; Records","Local; State; Federal; Military; Foreign","Registration; Insurance; Taxes; Privacy; Photography"],"The structure helps locate a requirement."],
    [15,"Regulations","What weight defines a small unmanned aircraft at takeoff?","Less than 55 pounds including everything onboard or attached",["55 pounds or less excluding payload","Less than 100 pounds","Exactly 25 kilograms without battery"],"Exactly 55 pounds is not less than 55.",null,"faa-part107"],
    [15,"Language","How does Part 107 define an unmanned aircraft?","An aircraft operated without direct human intervention from within or on it",["Any aircraft with autopilot","Only a military target","Any aircraft below 400 feet"],"The definition focuses on no onboard direct human intervention."],
    [15,"Operating roles","What is a visual observer?","A designated person helping the remote PIC see and avoid traffic and hazards",["The owner","An inspector on every flight","A person watching only camera video"],"The VO supports awareness but does not replace PIC responsibility."],
    [15,"Compliance","What can intentional falsification of Part 107 records cause?","Denial, suspension, revocation, or civil penalty",["Automatic waiver approval","A higher altitude","A new registration"],"FAA compliance records and credentials must not be altered fraudulently."],
    [15,"Compliance","What must covered persons provide during an FAA Part 107 inspection?","Required certificates, records, reports, and access needed to determine compliance",["Only a receipt","Only a pilot photograph","Nothing without a court order"],"The FAA may also inspect the small UAS."],

    [16,"Accident reporting","What is the FAA deadline for a required Part 107 accident report?","Within 10 calendar days",["Within 24 hours always","Within 30 business days","At renewal"],"Use the FAA's designated reporting system.",null,"faa-accident"],
    [16,"Accident reporting","Which injury outcome triggers Part 107 reporting?","Serious injury or loss of consciousness",["Any minor bruise","Only injury to the PIC","Only a fatality"],"Use current FAA definitions.",null,"faa-accident"],
    [16,"Accident reporting","What property-damage threshold triggers FAA reporting?","Damage over $500 to property other than the small UAS",["Any scratch to the UAS","Exactly $100 including the drone","Only damage above $25,000"],"Consider repair or fair-market replacement cost.",null,"faa-accident"],
    [16,"Accident reporting","Does destruction of a $1,000 small UAS alone trigger the property threshold?","No, damage to the small UAS itself is excluded",["Yes, always","Only at night","Only in Class G"],"Other injury or damage could still make it reportable.",null,"faa-accident"],
    [16,"Accident reporting","Does an FAA report replace separately required NTSB notification?","No",["Yes, always","Yes, for public aircraft","Yes, if online"],"FAA and NTSB duties arise under different rules."],
    [16,"Accident reporting","Which example meets the book's serious-injury discussion?","A broken arm",["A clothing smudge","A drained battery","A broken propeller without injury"],"Fracture of most bones is among the cited criteria."],

    [17,"NTSB reporting","When does substantial unmanned-aircraft damage enter the book's NTSB accident definition?","When the aircraft is at least 300 pounds maximum gross takeoff weight",["Whenever a propeller is scratched","Only below 0.55 pounds","At exactly 55 pounds"],"Death or serious injury can independently meet the definition."],
    [17,"NTSB reporting","Which occurrence can require immediate NTSB notification?","An in-flight fire",["A normal low-battery warning","A planned landing","A firmware update"],"Other listed events include certain failures, collisions, and overdue aircraft."],
    [17,"NTSB reporting","Does an expected lost-link response automatically count as a flight-control malfunction?","No; a true uncontrolled fly-away is the concern",["Yes, every return home","Yes, every brief fluctuation","No control event is reportable"],"Behavior and consequences matter."],
    [17,"Certification","May an uncertificated person manipulate controls under Part 107?","Yes, under direct supervision of a qualified pilot who can immediately take control",["Never","Only when alone","Only after an accident report"],"The certificated pilot remains responsible."],
    [17,"Operating roles","Who ensures the operation complies with Part 107?","The remote PIC",["The visual observer alone","The seller","The airport manager"],"The remote PIC is final authority."],
    [17,"Emergencies","What may a remote PIC do during an in-flight emergency?","Deviate as necessary to address the emergency",["Ignore every rule all day","Transfer responsibility to a bystander","Cancel the certificate"],"Submit a written report if the FAA requests it."],
    [17,"Preflight","What must be checked before every flight regarding aircraft condition?","The small UAS must be in a condition for safe operation",["It must be new","It needs retractable gear","It must use fuel"],"Inspect and correct unsafe conditions before launch."],

    [18,"Operating rules","May a small UAS be operated carelessly or recklessly?","No",["Yes in Class G","Yes below 50 feet","Yes with owner permission"],"Part 107 prohibits endangering another's life or property."],
    [18,"Operating rules","When may objects be dropped from a small UAS?","Only when the drop does not create an undue hazard",["Whenever light","Only over a road","Never under any circumstance"],"The created hazard is the concern."],
    [18,"Moving vehicles","Can a pilot operate a small UAS from a moving aircraft?","No",["Yes below 400 feet","Yes over water","Yes with a VO"],"The moving-vehicle exception does not extend to aircraft."],
    [18,"Moving vehicles","When can operation from a moving land or water vehicle fit the basic rule?","In a sparsely populated area and not carrying another's property for compensation or hire",["On a crowded street","Whenever the driver is PIC","Only at twilight"],"A waiver cannot permit the excluded property carriage."],
    [18,"Human factors","What is the minimum bottle-to-throttle interval discussed?","8 hours",["2 hours","4 hours","24 hours"],"A person also must not be impaired or at or above the alcohol limit."],
    [18,"Night operations","How visible must anti-collision lighting be at night?","At least 3 statute miles",["500 feet","1 statute mile","10 nautical miles"],"The pilot must also meet current night-training requirements.",null,"faa-part107"],
    [18,"Operating rules","What must VLOS allow the crew to determine?","Location, attitude, altitude, direction, and nearby hazards",["Only battery serial number","Only camera exposure","Only home coordinates"],"The crew must also watch for traffic and risks."],
    [18,"Operating rules","How many simultaneous operations may one person serve as PIC or VO for?","One",["Two","Four","Any number below 100 feet"],"The restriction applies at any given time."],

    [19,"Right of way","To whom must a small UAS yield?","All other aircraft and airborne vehicles",["Only airliners","Only helicopters","No one below 400 feet"],"Remain well clear and never create a collision hazard."],
    [19,"Operations over people","Is ordinary flight over people automatically allowed?","No; it must fit an authorized category or other provision",["Yes below 50 feet","Yes if brief","Yes with insurance"],"Categories 1–4 impose different conditions.",null,"faa-people"],
    [19,"Airspace","Which airspace generally requires prior ATC authorization?","Class B, C, D, and surface Class E",["All Class G","Only warning areas","Only above 18,000 feet"],"Use LAANC where available or the applicable manual process.",null,"faa-laanc"],
    [19,"Airport operations","What must a pilot avoid near any airport, heliport, or seaplane base?","Interfering with traffic patterns and operations",["Listening to weather","Using a checklist","Maintaining VLOS"],"Heliports may be less obvious than large airports."],
    [19,"Special use airspace","What is the practical meaning of prohibited airspace?","Entry is not allowed without controlling-authority permission",["Always allowed below 400 feet","Only a weather advisory","Exists only at night"],"Prohibited areas protect sensitive locations."],
    [19,"Special use airspace","Can restricted airspace be inactive at published times?","Yes",["No, never","Only under 0.55 pounds","Only without ATIS"],"Check charts and current status."],
    [19,"NOTAMs","What events can create flight restrictions by NOTAM?","Disasters, presidential movement, space operations, airshows, and major sports",["Only battery charging","Only property sales","Only address changes"],"Check current NOTAMs and TFRs before every operation."],

    [20,"Preflight","What environments must the remote PIC evaluate?","Both surface and air operating environments",["Only the launch pad","Only an online map","Only distant weather"],"Assess risks to people and property."],
    [20,"Preflight","Which items belong in a preflight assessment?","Weather, airspace, restrictions, people, property, and ground hazards",["Only battery color","Only camera settings","Only customer schedule"],"Powerlines, bystanders, vehicles, and restrictions are examples."],
    [20,"Crew briefing","What must participating crewmembers know?","Conditions, emergency procedures, roles, responsibilities, and hazards",["Only aircraft price","Only PIC address","Nothing until launch"],"A shared briefing reduces confusion."],
    [20,"Control link","What must be confirmed about the control link?","It works adequately for the planned operation",["It uses a specific brand","It is visible to ATC","It broadcasts music"],"Consider range, interference, antennas, and lost-link behavior."],
    [20,"Operating limits","What is the ordinary maximum groundspeed?","87 knots or 100 mph",["55 knots","120 knots","No limit"],"Groundspeed is the stated quantity."],
    [20,"Operating limits","What is the ordinary altitude limit away from structures?","400 feet AGL",["400 feet MSL","500 feet AGL","1,200 feet AGL"],"Airspace ceilings and restrictions can be lower.",null,"faa-part107"],
    [20,"Operating limits","What is the basic structure exception?","Within 400 feet of the structure and no more than 400 feet above its top",["Any height above a structure","Add 1,200 feet","Only indoors"],"Other authorization requirements still apply."],
    [20,"Operating limits","What visibility and cloud clearance normally apply?","3 SM visibility; 500 feet below and 2,000 feet horizontally from clouds",["1 SM and clear of clouds","5 SM and 1,000 feet above","No minimum below 400 feet"],"Visibility is evaluated from the control station."],

    [21,"Certification","What is the minimum age for a Part 107 certificate?","16",["14","18","21"],"Applicants also meet language, knowledge, and fitness requirements.",null,"faa-pilot"],
    [21,"Certification","What English ability is generally required?","Ability to read, speak, write, and understand English",["Reading only","No requirement","Abbreviations only"],"The FAA rules address limited exceptions."],
    [21,"Human factors","What health standard applies to eligibility?","No known condition that would interfere with safe operation",["A first-class medical","Perfect uncorrected eyesight","No standard"],"No routine medical certificate is required, but safe fitness is."],
    [21,"Certification","How does a first-time non-Part-61 applicant show knowledge?","Pass the initial Unmanned Aircraft General test",["Take a driving test","Submit photos","Fly solo 40 hours"],"The result supports the application.",null,"faa-pilot"],
    [21,"Certification","What online system is commonly used to apply?","IACRA",["LAANC","ATIS","METAR"],"It means Integrated Airman Certification and Rating Application."],
    [21,"Certification","What identifier does IACRA issue?","FAA Tracking Number (FTN)",["Tailwheel number","Visibility code","NOTAM keyword"],"It links testing and certification records."],
    [21,"Certification","How long can a temporary certificate remain valid under the cited rule?","Up to 120 days",["10 days","30 days","24 months"],"It can end sooner when a permanent certificate is issued or the application is denied."],

    [22,"Certification","What passing score is stated for the UAG test?","70 percent",["60 percent","80 percent","100 percent"],"Verify current requirements with the FAA."],
    [22,"Certification","After failing the UAG test, what waiting period is cited?","14 calendar days",["24 hours","30 days","One year"],"Use the interval to review weak areas."],
    [22,"Certification","What can knowledge-test cheating cause?","A one-year bar and possible certificate suspension or revocation",["Same-day retest","Only a warning","A higher passing score"],"Unauthorized copying, aid, and impersonation are prohibited."],
    [22,"Knowledge areas","Which subjects belong to remote-pilot training?","Rules, airspace, weather, loading, emergencies, CRM, communications, performance, ADM, airports, maintenance, preflight, and night",["Only photography","Only purchasing","Only property taxes"],"Certification requires broad aeronautical knowledge."],
    [22,"Certification","Within how long must an address change be reported?","30 days",["10 days","90 days","At recurrent training"],"Use the current FAA process."],
    [22,"Certification","What follows voluntary certificate surrender?","The person must satisfy applicable requirements again to regain it",["It returns after 30 days","Nothing changes","It becomes a waiver"],"Surrender is cancellation, not storage."],
    [22,"Operations over people","Why are operations-over-people categories risk-based?","Different aircraft designs and weights create different injury risks",["Every aircraft creates identical risk","Only camera type matters","They apply only at airports"],"Rules connect eligibility and limitations to expected harm."],

    [23,"Operations over people","What is the maximum Category 1 takeoff weight?","Less than 0.55 pounds including attachments",["55 pounds","Exactly 0.55 excluding propellers","Less than 5 pounds"],"It must remain below the limit throughout.",null,"faa-people"],
    [23,"Operations over people","What exposed-part restriction applies to Category 1?","No exposed rotating parts able to lacerate skin",["No camera","No battery","No landing gear"],"A protected design may be needed."],
    [23,"Remote ID","What additional requirement applies to Category 1 over-people operations?","Compliance with applicable Remote ID requirements",["A crewed transponder","A first-class medical","An airport gate"],"Check current Part 89 guidance.",null,"faa-register"],
    [23,"Operations over people","Which categories rely on FAA-accepted means and declarations of compliance?","Categories 2 and 3",["Category 1 only","Category 4 only","No category"],"Applicants substantiate injury-risk and design requirements."],
    [23,"Operations over people","What distinguishes Category 4 aircraft?","An airworthiness certificate and associated limitations",["Under 0.55 pounds","No maintenance records","Ignoring the flight manual"],"Category 4 has formal maintenance and records."],
    [23,"Moving vehicles","For Categories 1–3, what are two basic pathways over people in moving vehicles?","A restricted-access site with notice, or no sustained flight over vehicles",["Indefinite highway flight","Driver approval only","Below 400 feet only"],"Check current category conditions.",null,"faa-people"],
    [23,"Operations over people","May an aircraft switch inadvertently between category configurations airborne?","No",["Yes with one switch","Yes below 50 feet","Yes with GPS"],"Variable configurations must prevent inadvertent mode changes."],

    [24,"Compliance","What may establish a means of compliance for Categories 2 and 3?","Test, analysis, or inspection",["A social review","Pilot opinion","Property-owner waiver"],"The submission shows the design meets performance requirements."],
    [24,"Compliance","Can the FAA rescind an accepted means of compliance?","Yes, if it no longer meets requirements",["No, never","Only the maker can","Only after ten years"],"The FAA uses the prescribed public process."],
    [24,"Compliance","What follows acceptance of a means of compliance?","Submit a declaration of compliance for FAA acceptance",["Automatic Category 4","A medical certificate","No further record"],"The declaration must be retained and available."],
    [24,"Waivers","What is a Part 107 waiver?","FAA approval for a described operation outside specified limitations",["Exemption from all law","A property permit","Registration"],"Waivers are case-specific and require a safety case.",null,"faa-waivers"],
    [24,"Waivers","Where are waiver applications submitted?","FAA DroneZone",["IACRA only","Tax office","ATIS"],"Follow current instructions and answer FAA requests.",null,"faa-waivers"],
    [24,"Emergency operations","What does the Special Governmental Interest process support?","Expedited consideration for qualifying emergency or disaster operations",["Routine recreation","Automatic pilot certification","Permanent prohibited-area access"],"Examples include firefighting, rescue, law enforcement, restoration, assessment, and crucial media."],
    [24,"Airspace","What data can LAANC evaluate?","Facility maps, airspace, airports, special-use areas, TFRs, and NOTAMs",["Aircraft color","Quiz score","Only property boundaries"],"Approved suppliers exchange request data with FAA systems.","laanc","faa-laanc"],
    [24,"Airspace","Does LAANC eliminate other preflight checks?","No",["Yes, completely","Only for recreation","Only at night"],"Authorization is limited by location, time, altitude, and conditions.","laanc","faa-laanc"],

    [25,"Local rules","What does ignorantia juris neminem excusat mean?","Ignorance of the law is not an excuse",["Local rules never apply","Federal rules can be ignored","Every flight needs a court order"],"Research applicable federal, state, local, and site requirements."],
    [25,"Local rules","Why can drone rules vary by location?","Different authorities regulate different matters within their powers",["FAA rules change each street","Weight has no definition","Only weather matters"],"Airspace, land use, privacy, trespass, and police powers differ."],
    [25,"Federalism","What is the Supremacy Clause's general effect?","Valid federal law can preempt conflicting state or local law",["Local law always wins","It applies only to weather","It grants pilots all airspace"],"Preemption is complex; a flight should not be treated as a courtroom test."],
    [25,"Local rules","What is the practical response to a questionable local restriction?","Comply in the moment and seek authoritative guidance through proper channels",["Argue during the flight","Ignore it automatically","Use a social poll"],"Operational confrontation is unsafe and legal challenges are costly."],
    [25,"Professionalism","Why should pilots represent the industry responsibly?","Good conduct builds trust and reduces pressure for restrictive responses",["It removes all rules","It guarantees waivers","It makes privacy irrelevant"],"Professional behavior matters even when conduct is not expressly prohibited."],

    [26,"Privacy","Does the FAA principally regulate personal privacy disputes?","No; other federal, state, and local law generally addresses privacy",["Yes, every privacy claim","Only abroad","Only above 500 feet"],"Research other applicable law."],
    [26,"Privacy","What simple privacy principle does the chapter emphasize?","Use good judgment and be a good neighbor",["Record everything","Assume owners have no rights","Publish automatically"],"Avoid harassment and intrusive conduct."],
    [26,"Publications","How often is the Chart Supplement revised?","Every 56 days",["Every 7 days","Every five years","Only on closure"],"Use the current regional volume."],
    [26,"Publications","What does the Chart Supplement add beyond a chart symbol?","Detailed airport, runway, service, communication, and procedural information",["Only ownership","Only battery guidance","Only privacy law"],"It also contains notices, contacts, parachute areas, and diagrams."],
    [26,"Publications","What is the Aeronautical Chart Bulletin for?","Reporting chart-relevant obstacles and hazards found since printing",["Publishing test scores","Listing drones","Approving waivers"],"Information can be included in the next chart edition."],

    [27,"Publications","Are Advisory Circulars generally regulations?","No; they generally explain rules or compliance methods",["Yes, every AC is CFR","They are weather observations","They are deeds"],"Their legal status differs from regulatory text."],
    [27,"Publications","How are many Advisory Circulars numbered?","To correspond with the related regulatory subject",["By aircraft serial","By airport elevation","Randomly"],"Number series align with subject areas."],
    [27,"Publications","What can a sectional-chart QR code lead to?","Chart guides, supplements, NOTAMs/TFRs, alerts, and updates",["Only an application","A camera feed","An automatic waiver"],"QR links help reach current information."],
    [27,"NOTAMs","Why check NOTAMs close to departure?","Restrictions and hazards can appear with little warning",["They never change","They concern airlines only","They are indoor only"],"TFRs can affect a familiar site."],
    [27,"Currency","How should a pilot stay current?","Monitor official FAA changes and reputable aviation safety information",["Use only the first textbook edition","Ignore proposals","Use only comments"],"The FAA is authoritative for its rules and policies."],

    [28,"NOTAMs","What does the keyword RWY identify?","A runway-related condition",["A frequency change","A fuel issue","An obstacle outage"],"A runway closure begins with RWY.","notams"],
    [28,"NOTAMs","What does the keyword TWY identify?","A taxiway-related condition",["A runway closure","A navigation outage","An airshow"],"The example reports taxiway lights out.","notams"],
    [28,"NOTAMs","In a NOTAM, what does OTS mean?","Out of service",["On the surface","Over the station","Open to sUAS"],"It can describe unavailable lights, beacons, aids, or communications.","notams"],
    [28,"Altitude","How do MSL and AGL differ in an obstacle NOTAM?","MSL is elevation above sea level; AGL is height above local ground",["They are identical","MSL is distance","AGL is a frequency"],"An obstacle may be reported with both values.","notams"],
    [28,"NOTAMs","What does the keyword COM identify?","A communications-related condition",["A runway condition","An apron closure","An obstacle"],"The example reports an ATIS frequency out of service.","notams"]
  ];

  const pageCounters = {};
  const facts = rows.map((row) => {
    const [page, topic, question, answer, distractors, explanation, figureKey, verificationSource] = row;
    pageCounters[page] = (pageCounters[page] || 0) + 1;
    const number = String(page).padStart(2, "0");
    const figure = figureKey ? figures[figureKey] : null;
    return {
      id: `p${number}-${String(pageCounters[page]).padStart(2, "0")}`,
      book: "completeRemotePilot", chapter: page <= 10 ? "1" : "2", page: number,
      topic, question, answer, distractors, explanation, source: `book-${number}`,
      verificationSource: verificationSource || null,
      image: figure?.[0], imageAlt: figure?.[1]
    };
  });

  const flashcards = facts.map((fact) => ({
    ...fact, id: `c-${fact.id}`, distractors: undefined
  }));
  const questions = facts.map((fact, index) => {
    const initial = [fact.answer, ...fact.distractors];
    const rotation = index % 4;
    const options = [...initial.slice(rotation), ...initial.slice(0, rotation)];
    return {
      id: `q-${fact.id}`, book: fact.book, chapter: fact.chapter, page: fact.page,
      topic: fact.topic, question: fact.question, options, answer: options.indexOf(fact.answer),
      explanation: fact.explanation, source: fact.source, verificationSource: fact.verificationSource,
      image: fact.image, imageAlt: fact.imageAlt
    };
  });

  window.STUDY_DATA = {
    meta: {
      title: "FAA Remote Pilot — source pages 01–28", version: 2,
      reviewed: "2026-09-24", pageCount: 28,
      note: "Every source page has multiple study items. Confirm time-sensitive rules with current FAA sources."
    },
    books: {
      completeRemotePilot: {
        title: "The Complete Remote Pilot, Second Edition", shortTitle: "Complete Remote Pilot",
        chapters: {
          "1": "Source pages 01–10 · UAS language and systems",
          "2": "Source pages 11–28 · applications, publications, and regulations"
        }
      }
    },
    sources, flashcards, questions
  };
})();

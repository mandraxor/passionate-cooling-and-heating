export const SERVICE_CATEGORIES = [
  {
    id: "cooling",
    name: "Cooling & Air Conditioning",
    shortName: "Cooling",
    tagline: "High-output desert refrigeration engineered to thrive when Vegas hits 115°F+",
    icon: "Snowflake",
    count: 6,
    color: "from-sky-500 to-blue-600",
    badge: "24/7 Desert Rescue"
  },
  {
    id: "heating",
    name: "Heating & Heat Pumps",
    shortName: "Heating",
    tagline: "Safe, rapid warmth when freezing desert winter nights sweep Clark County",
    icon: "Flame",
    count: 4,
    color: "from-red-500 to-rose-600",
    badge: "Certified Gas & Heat Pump"
  },
  {
    id: "air-quality",
    name: "Air Quality & Ductwork",
    shortName: "Ducts & Air Quality",
    tagline: "Stop caliche dust, eliminate hot rooms, and recover up to 30% lost air",
    icon: "Wind",
    count: 4,
    color: "from-teal-500 to-emerald-600",
    badge: "HEPA & Sealed Aeroseal"
  },
  {
    id: "plumbing",
    name: "Plumbing & Water Heating",
    shortName: "Plumbing & Water",
    tagline: "Master plumbing, tankless conversions, and hard water defense for Southern Nevada",
    icon: "Droplets",
    count: 3,
    color: "from-blue-600 to-cyan-600",
    badge: "Licensed & Mineral Defense"
  }
];

export const SERVICES = [
  // ===================== COOLING SERVICES (6) =====================
  {
    id: "ac-repair",
    category: "cooling",
    categoryName: "Cooling",
    name: "24/7 Emergency AC Repair & Diagnostics",
    badge: "🚨 45-Min Avg Vegas Arrival",
    turnaround: "Immediate Dispatch (24/7/365)",
    iconName: "Snowflake",
    heroHighlight: "Same-Day Emergency Rescue",
    description: "Instant emergency cooling restoration in extreme Las Vegas heat. We fix frozen coils, blown capacitors, failed fan motors, freon leaks, and dead compressors fast.",
    highlights: [
      "24/7/365 live human dispatch across Clark County",
      "Fully stocked service vans with OEM contactors & capacitors",
      "$0 diagnostic fee waived with any completed repair",
      "Digital pressure, superheat & subcooling calibration"
    ],
    warningSigns: [
      "AC blowing warm or room-temperature air",
      "Loud buzzing, clicking, or screeching sounds",
      "Ice forming on copper lines or evaporator coils",
      "Thermostat blank or cycling every 3 minutes"
    ],
    rebateOrWarranty: "100% Satisfaction Guarantee & Upfront Flat-Rate Quotes",
    popular: true
  },
  {
    id: "ac-installation",
    category: "cooling",
    categoryName: "Cooling",
    name: "High-Efficiency AC Installation & Replacement",
    badge: "⚡ NV Energy Rebate Eligible",
    turnaround: "Same-Day & Next-Day Availability",
    iconName: "Zap",
    heroHighlight: "Up to 40% Energy Savings",
    description: "Replace tired, failing AC units with modern ultra-quiet 15.2 to 20+ SEER2 systems designed specifically to conquer brutal 115°F+ Mojave summers without breaking a sweat.",
    highlights: [
      "Free in-home Manual-J load calculation for exact sizing",
      "10-year parts & equipment warranties from top brands",
      "0% APR promotional financing options available",
      "Full permitting, inspection handling, and old unit disposal"
    ],
    warningSigns: [
      "System over 10–12 years old requiring R-22 or R-410A top-offs",
      "Electric bills spiking dramatically during summer peaks",
      "Repair costs exceeding 50% of system replacement value",
      "Unit runs constantly but house never gets below 78°F"
    ],
    rebateOrWarranty: "NV Energy Instant Utility Rebates + Federal Tax Credits",
    popular: true
  },
  {
    id: "ac-maintenance",
    category: "cooling",
    categoryName: "Cooling",
    name: "Comprehensive AC Precision Tune-Up",
    badge: "🛡️ Desert Defense Check",
    turnaround: "Scheduled 1-Hour Precision Service",
    iconName: "ShieldCheck",
    heroHighlight: "Prevent Costly Summer Breakdowns",
    description: "26-point desert endurance inspection and chemical coil cleaning that prevents catastrophic mid-July breakdowns, extends system lifespan, and restores factory efficiency.",
    highlights: [
      "Chemical condenser coil wash to strip caliche dust & dirt",
      "Capacitor microfarad testing and electrical amp draw check",
      "Refrigerant leak detection & thermal subcooling test",
      "Condensate drain line clearing & anti-algae tablet treat"
    ],
    warningSigns: [
      "Musty odors when cooling kicks on",
      "Sluggish cooling and weak vent airflow",
      "Unit hasn't been serviced in over 12 months",
      "Higher electric bills than neighborhood averages"
    ],
    rebateOrWarranty: "VIP Priority Dispatch Club Membership Included",
    popular: false
  },
  {
    id: "heat-pumps",
    category: "cooling",
    categoryName: "Cooling",
    name: "Inverter Heat Pump Systems (Dual Fuel)",
    badge: "🌿 Year-Round Eco Efficiency",
    turnaround: "Turnkey Retrofit & Installation",
    iconName: "RefreshCw",
    heroHighlight: "Heating & Cooling in One Smart Unit",
    description: "Ultra-efficient variable-speed heat pumps that both cool at sub-zero decibels in summer and heat efficiently during winter without reliance on expensive resistive heat strips.",
    highlights: [
      "Variable-speed inverter compressors save massive kilowatt-hours",
      "Whisper-quiet outdoor sound ratings as low as 55 dBA",
      "Seamless integration with smart thermostats (Ecobee, Nest)",
      "Eligible for up to $2,000 Federal IRA energy tax credits"
    ],
    warningSigns: [
      "High winter natural gas or electric bills",
      "Drafty rooms and dramatic temperature fluctuations",
      "Existing outdoor unit short cycling on mild 80°F days"
    ],
    rebateOrWarranty: "Up to $2,000 IRA Federal Tax Credit + NV Energy Rebates",
    popular: false
  },
  {
    id: "mini-splits",
    category: "cooling",
    categoryName: "Cooling",
    name: "Ductless Mini-Split Systems",
    badge: "🎯 Individual Room Zoning",
    turnaround: "1-Day Clean Installation",
    iconName: "Split",
    heroHighlight: "Garage, Casita & Sunroom Specialists",
    description: "Custom multi-zone ductless climate solutions perfect for Las Vegas casitas, home additions, master bedrooms, garage workshops, and server rooms.",
    highlights: [
      "Up to 30 SEER2 efficiency with independent room remotes",
      "No bulky ductwork required — clean 3-inch wall penetration",
      "Hyper-heating and hyper-cooling operation down to -13°F",
      "Wall-mount, ceiling cassette, and concealed slim-duct options"
    ],
    warningSigns: [
      "Garage or master bedroom uncomfortably hot despite central AC",
      "Home additions or guest casitas lacking central ductwork",
      "Desire for independent climate control without heating unused rooms"
    ],
    rebateOrWarranty: "12-Year Compressor Warranty on Select Multi-Zone Systems",
    popular: true
  },
  {
    id: "package-units",
    category: "cooling",
    categoryName: "Cooling",
    name: "Rooftop Commercial & Residential Package Units",
    badge: "🏗️ Master Crane & Rigging",
    turnaround: "Full Day Turnkey Crane Replacement",
    iconName: "Building2",
    heroHighlight: "Commercial Strip Malls & Flat Roof Homes",
    description: "Heavy-duty all-in-one heating and cooling rooftop package units for Las Vegas single-story homes, commercial strip centers, and industrial properties.",
    highlights: [
      "Turnkey crane coordination, street permits, and curb adapters",
      "Heavy-gauge hail & desert wind resistant cabinet construction",
      "Integrated economizer and fresh air damper capabilities",
      "Rapid commercial swap-outs to eliminate business downtime"
    ],
    warningSigns: [
      "Rooftop unit rattling or shaking ceiling drywall",
      "Water staining on ceiling near rooftop supply plenum",
      "Commercial tenant complaints regarding uneven temperatures"
    ],
    rebateOrWarranty: "Commercial Preventative Maintenance Agreements Available",
    popular: false
  },

  // ===================== HEATING SERVICES (4) =====================
  {
    id: "heating-repair",
    category: "heating",
    categoryName: "Heating",
    name: "Emergency Heating & Furnace Repair",
    badge: "🔥 24/7 Rapid Response",
    turnaround: "Fast 45-Min Winter Arrival",
    iconName: "Flame",
    heroHighlight: "Carbon Monoxide Safety Tested",
    description: "Rapid diagnostics and emergency heating repair for gas furnaces, electric heat strips, and heat pump reversers when desert temperatures drop near freezing.",
    highlights: [
      "Immediate cracked heat exchanger safety verification",
      "Igniter, thermocouple, flame sensor & gas valve replacement",
      "Blower motor capacitor and draft inducer fan repairs",
      "24/7 emergency live phone answering by local experts"
    ],
    warningSigns: [
      "Furnace blowing cool or lukewarm air",
      "Yellow or flickering burner flame instead of crisp blue",
      "Burning metal or electrical smell through vents",
      "Carbon monoxide detector chirping or alarming"
    ],
    rebateOrWarranty: "Upfront Fixed Pricing with $0 Diagnostic Upon Repair",
    popular: true
  },
  {
    id: "heating-installation",
    category: "heating",
    categoryName: "Heating",
    name: "High-Efficiency Gas Furnace Installation",
    badge: "⭐ 96%+ AFUE Rated",
    turnaround: "Same-Day Replacement",
    iconName: "ShieldAlert",
    heroHighlight: "Maximum Fuel Efficiency",
    description: "Replace noisy, inefficient heaters with state-of-the-art modulating gas furnaces and multi-stage heating systems that provide consistent, silent comfort.",
    highlights: [
      "96%+ AFUE rated units convert almost all fuel directly to heat",
      "Stainless steel primary & secondary condensing heat exchangers",
      "Sealed combustion designs for zero indoor air contamination",
      "Turnkey gas piping, safety flue venting, and code compliance"
    ],
    warningSigns: [
      "Furnace older than 15 years with escalating repair costs",
      "Frequent pilot light outages or burner ignition failures",
      "Excessive soot or rust visible on heater cabinet"
    ],
    rebateOrWarranty: "Lifetime Heat Exchanger Warranties on Select Models",
    popular: false
  },
  {
    id: "heating-maintenance",
    category: "heating",
    categoryName: "Heating",
    name: "Seasonal Heating Safety Tune-Up",
    badge: "🔍 21-Point Safety Check",
    turnaround: "Scheduled 1-Hour Service",
    iconName: "CheckCircle",
    heroHighlight: "Family Safety & Peace of Mind",
    description: "Thorough multi-point heating inspection including combustion analysis, safety shut-off checks, electrical limits, and flue draft verification.",
    highlights: [
      "Precision carbon monoxide testing and heat exchanger camera inspection",
      "Burner assembly cleaning and flame sensor polishing",
      "Air filter inspection and static pressure measurement",
      "Thermostat calibration and safety switch verification"
    ],
    warningSigns: [
      "Heater hasn't been fired up since last winter",
      "Delayed ignition making a loud boom when turning on",
      "Dry, stuffy indoor air causing morning throat irritation"
    ],
    rebateOrWarranty: "Ensures Manufacturer Warranty Compliance",
    popular: false
  },
  {
    id: "hydronic-systems",
    category: "heating",
    categoryName: "Heating",
    name: "Hydronic Radiant Heating & Boiler Systems",
    badge: "💧 Luxury Radiant Comfort",
    turnaround: "Specialty Diagnostic & Install",
    iconName: "Waves",
    heroHighlight: "Underfloor Luxury Heating",
    description: "Specialized servicing, repair, and installation of residential hydronic radiant floor heating, closed-loop boilers, and zone recirculating pumps.",
    highlights: [
      "Silent underfloor radiant warmth without dust-blowing ducts",
      "Boiler descaling, expansion tank checks & pressure relief valves",
      "Multi-zone manifold balancing and circulating pump repair",
      "Ideal for luxury custom homes in The Ridges, MacDonald Highlands & Summerlin"
    ],
    warningSigns: [
      "Cold spots on heated tile or stone floors",
      "Boiler pressure dropping below normal PSI levels",
      "Gurgling sounds in hydronic piping or manifold boxes"
    ],
    rebateOrWarranty: "Comprehensive Commercial & Custom Home Warranty",
    popular: false
  },

  // ===================== AIR QUALITY & DUCTWORK (4) =====================
  {
    id: "duct-installation",
    category: "air-quality",
    categoryName: "Air Quality & Ducts",
    name: "Custom Duct Design, Sizing & Installation",
    badge: "📐 Manual-D Engineered",
    turnaround: "Custom Sheet Metal Fabrication",
    iconName: "PenTool",
    heroHighlight: "Eliminates Uneven Room Temperatures",
    description: "Engineered duct runs fabricated to exact ASHRAE and Manual-D standards to guarantee equal static pressure and balanced airflow to every room.",
    highlights: [
      "R-8 insulated flex and rigid sheet metal ductwork",
      "Eliminates noisy whistling registers and high static pressure",
      "Properly sized return air plenums to prevent suffocating blower motors",
      "Custom balancing dampers for multi-level homes"
    ],
    warningSigns: [
      "Upstairs bedrooms 10°F hotter than main floor",
      "Vents whistling or blowing with hurricane force in small rooms",
      "Weak, barely perceptible airflow from far-end registers"
    ],
    rebateOrWarranty: "10-Year Airflow & Workmanship Guarantee",
    popular: false
  },
  {
    id: "duct-replacement",
    category: "air-quality",
    categoryName: "Air Quality & Ducts",
    name: "Complete Attic Duct Replacement & Sanitization",
    badge: "💨 Zero Attic Air Leaks",
    turnaround: "1 to 2-Day Clean Turnaround",
    iconName: "Trash2",
    heroHighlight: "Stop Breathing Attic Dust & Insulation",
    description: "Tear out deteriorated, rodent-chewed, or collapsed 20+ year-old ductwork and install pristine R-8 high-performance ducting with airtight mechanical fittings.",
    highlights: [
      "Complete removal of old fiberglass and degraded vinyl ducts",
      "Attic sanitation and vacuuming of debris",
      "Heavy-duty R-8 thermal insulation to withstand 140°F attic heat",
      "Tight mastic-sealed collar connections to sheet metal boots"
    ],
    warningSigns: [
      "Visible insulation fibers or black dust blowing out of vents",
      "Rodent activity discovered in attic space",
      "Duct jackets torn, brittle, or hanging loose from joists"
    ],
    rebateOrWarranty: "Immediate 20–30% Cooling Load Reduction",
    popular: true
  },
  {
    id: "duct-sealing",
    category: "air-quality",
    categoryName: "Air Quality & Ducts",
    name: "Aeroseal & Mastic Duct Leak Sealing",
    badge: "🔒 Save 30% Lost Air",
    turnaround: "Same-Day Non-Invasive Sealing",
    iconName: "ShieldCheck",
    heroHighlight: "Seals Leaks Hidden Behind Drywall",
    description: "Computerized aerosol duct sealing that finds and seals microscopic gaps and cracks inside walls and attics without tearing open drywall.",
    highlights: [
      "Pre- and post-sealing computerized leakage verification reports",
      "Reduces typical duct leakage from 30%+ down to under 5%",
      "Stops attic dust, fiberglass particles, and fumes from entering living space",
      "Qualifies for local utility energy efficiency incentives"
    ],
    warningSigns: [
      "Excessive dust accumulating within 24 hours of cleaning",
      "High power bills despite having a relatively new AC unit",
      "Air feels stale or smells like hot attic space"
    ],
    rebateOrWarranty: "NV Energy Rebates + Certified Airflow Proof",
    popular: false
  },
  {
    id: "air-purification",
    category: "air-quality",
    categoryName: "Air Quality & Ducts",
    name: "Desert Dust Defense & Hospital-Grade Air Purification",
    badge: "✨ 99.9% Allergen Removal",
    turnaround: "Quick 2-Hour Installation",
    iconName: "Sparkles",
    heroHighlight: "Banish Caliche Dust & Seasonal Pollen",
    description: "Whole-home electronic air cleaners, MERV-16 hospital-grade filtration, and UV-C germicidal purifiers that destroy airborne viruses, mold spores, and desert allergens.",
    highlights: [
      "Whole-home in-duct UV-C germicidal lamps kill coils bacteria",
      "Bipolar needlepoint ionization clusters micro-dust for easy capture",
      "Eliminates cooking odors, pet dander, and wildfire smoke",
      "Zero ozone emission certified technology"
    ],
    warningSigns: [
      "Frequent sneezing, morning congestion, or itchy eyes at home",
      "Family members suffering from asthma or desert dust allergies",
      "Persistent musty or pet odors in the air stream"
    ],
    rebateOrWarranty: "5-Year System Warranty + Doctor-Recommended Tech",
    popular: true
  },

  // ===================== PLUMBING & WATER HEATING (3) =====================
  {
    id: "tankless-water-heaters",
    category: "plumbing",
    categoryName: "Plumbing & Water",
    name: "Tankless Water Heater Installation & Descaling",
    badge: "⚡ Endless Hot Water",
    turnaround: "Same-Day Conversion",
    iconName: "Flame",
    heroHighlight: "Never Run Out of Hot Showers Again",
    description: "Endless on-demand hot water with ultra-compact wall-mounted gas and electric tankless water heaters from Navien, Rinnai, and Noritz.",
    highlights: [
      "Continuous hot water for large families and garden soaking tubs",
      "Saves up to 40% on water heating utility bills",
      "Free up valuable garage floor space with compact wall-hung units",
      "Annual vinegar/acid descaling service to combat harsh Clark County lime"
    ],
    warningSigns: [
      "Running out of hot water after just 10 minutes of showering",
      "Tankless unit displaying Error Codes (E001, E003 flame failure)",
      "Unit hasn't been descaled or flushed in over 12 months"
    ],
    rebateOrWarranty: "Southwest Gas & Federal Energy Rebates Available",
    popular: true
  },
  {
    id: "traditional-water-heaters",
    category: "plumbing",
    categoryName: "Plumbing & Water",
    name: "Traditional Water Heater Repair & Replacement",
    badge: "🚰 Emergency Flood Defense",
    turnaround: "Emergency Same-Day Dispatch",
    iconName: "Droplets",
    heroHighlight: "Fast Replacement Before Catastrophic Leaks",
    description: "40, 50, and 75-gallon atmospheric and power-vent water heater repair, anode rod replacement, thermal expansion tanks, and rapid emergency swap-outs.",
    highlights: [
      "24/7 emergency response for leaking tanks to prevent home flooding",
      "Heavy-duty commercial-grade brass drain valves and anode rods",
      "Code-required seismic earthquake strapping & expansion tanks installed",
      "Haul-away and eco-friendly recycling of old water tank included"
    ],
    warningSigns: [
      "Water pooling in drip pan or around base of the tank",
      "Rusty or brown discolored hot water coming from faucets",
      "Popping, rumbling, or boiling noises from heavy sediment build-up",
      "Water tank is over 8–10 years old"
    ],
    rebateOrWarranty: "6-Year to 10-Year Tank & Parts Manufacturer Warranties",
    popular: true
  },
  {
    id: "water-softeners",
    category: "plumbing",
    categoryName: "Plumbing & Water",
    name: "Whole-Home Water Softeners & Filtration Systems",
    badge: "🛡️ Vegas Hard Water Defense",
    turnaround: "Turnkey Loop & System Install",
    iconName: "Shield",
    heroHighlight: "Protect Your Pipes & Appliances from Hard Caliche",
    description: "High-capacity ion-exchange water softeners and catalytic carbon filters engineered to neutralize Las Vegas's notoriously hard water (16–22+ grains per gallon).",
    highlights: [
      "Eliminates white calcium crust on shower heads, faucets, and glassware",
      "Extends the operational lifespan of water heaters, dishwashers & washing machines",
      "Gentle on skin and hair — eliminates post-shower dryness and itching",
      "Installation on existing soft water loops or custom line plumbing"
    ],
    warningSigns: [
      "White chalky crust and scale buildup on faucets and shower glass",
      "Soaps failing to lather properly and dry, itchy skin after bathing",
      "Premature failure of water heater elements or coffee makers"
    ],
    rebateOrWarranty: "10-Year Valve & Resin Tank Warranty",
    popular: false
  }
];

export const TOTAL_SERVICE_COUNT = SERVICES.length;

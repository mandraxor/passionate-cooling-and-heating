export const BLOG_POSTS = [
  {
    slug: "desert-ac-capacitor-failure-115f",
    title: "Why Do AC Capacitors Blow in 115°F Las Vegas Heat? (Diagnostics & Prevention)",
    excerpt: "AC run capacitors are Southern Nevada's #1 emergency summer breakdown. Discover why desert ambient heat degrades electrolytic fluid, how to diagnose humming fans, and why 440V American-made upgrades prevent repeat failures.",
    publishDate: "2026-08-15",
    readTime: "6 min read",
    category: "AC Diagnostics & Repair",
    categoryBadgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    coverImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Jason Curtis Roden",
      title: "Master HVAC Qualifier (NV Lic. #0088935)",
      bio: "Over two decades diagnosing and rescuing Southern Nevada residential and commercial cooling systems through record-breaking heat waves."
    },
    invertedPyramidTakeaway: "AC capacitors in Las Vegas fail primarily because condenser coil ambient temperatures frequently exceed 130°F, boiling off internal dielectric oil and dropping capacitance below tolerance. When the run capacitor drops more than 6% below rated microfarads (µF), the compressor motor overheats and shuts down on thermal overload within 15 minutes.",
    keyFacts: [
      { label: "Normal Lifespan (Las Vegas vs US)", value: "3–5 Years (LV) vs 8–10 Years (US Avg)" },
      { label: "Primary Warning Sign", value: "Loud humming outdoor unit, stopped fan blades" },
      { label: "Recommended Component Spec", value: "440-Volt Heavy-Duty USA-Made (AmRad / Turbo200)" },
      { label: "Diagnostic Meter Test", value: "Drop > 6% from rated microfarads (µF)" },
      { label: "Emergency Dispatch Priority", value: "Immediate same-day mobile dispatch" }
    ],
    tableOfContents: [
      { id: "what-is-capacitor", title: "1. What an AC Capacitor Does & Why It's Critical" },
      { id: "why-desert-heat-kills", title: "2. Why 115°F Desert Heat Destroys Capacitors" },
      { id: "symptoms-checklist", title: "3. 4 Warning Signs Your Capacitor Is Blown" },
      { id: "volt-upgrade", title: "4. Preventative Fix: 370V vs 440V Heavy-Duty Upgrades" },
      { id: "emergency-action", title: "5. What to Do Right Now While Waiting for Dispatch" }
    ],
    content: [
      {
        sectionId: "what-is-capacitor",
        heading: "What an AC Capacitor Does & Why It's Critical",
        paragraphs: [
          "An AC dual-run capacitor serves as the primary energy storage battery for both your outdoor condenser fan motor and your high-amperage compressor. Because alternating current (AC) motors cannot easily start or maintain rotating magnetic fields on their own, the capacitor provides a continuous phase shift and voltage boost.",
          "When you set your thermostat to 74°F on a sweltering Las Vegas afternoon, the contactor closes and draws power through this small cylindrical component. Without an operational capacitor, the compressor motor simply cannot spin—it remains stalled, drawing locked-rotor amperage (LRA) until the internal thermal overload switch trips to prevent an electrical fire."
        ]
      },
      {
        sectionId: "why-desert-heat-kills",
        heading: "Why 115°F Desert Heat Destroys Capacitors",
        paragraphs: [
          "While residential air conditioning systems across the United States operate in 85°F to 90°F summer weather, Clark County systems operate in an entirely different thermal regime. When the ambient outdoor temperature hits 115°F, radiant heat reflecting off asphalt, roof shingles, and desert gravel easily pushes temperatures inside your condenser's electrical control box past 140°F to 155°F.",
          "Standard OEM capacitors contain a dielectric fluid (synthetic castor oil or mineral oil) that insulates internal metalized polypropylene film windings. Prolonged exposure to temperatures exceeding 140°F causes this dielectric fluid to slowly expand, vaporize, and vent out of the safety seal. As the liquid dissipates, the capacitor loses its microfarad rating (µF), bulges at the top like a swollen soda can, and abruptly shorts out."
        ]
      },
      {
        sectionId: "symptoms-checklist",
        heading: "4 Warning Signs Your Capacitor Has Failed",
        paragraphs: [
          "If your air conditioner was working fine this morning and suddenly stopped producing cold air, look for these four telltale diagnostic signs:"
        ],
        checklist: [
          "Loud Electrical Humming: You hear a continuous buzz or hum coming from the outdoor condenser, but the top fan blades are not turning.",
          "The 'Stick Test' Indication: If gently pushing the fan blade with a long wooden stick causes it to slowly spin up, the start winding capacitor is 100% dead.",
          "Tilted or Mushroomed Top: Visually inspecting the top of the capacitor reveals a swollen, rounded top lid (the pressure relief mechanism has actuated).",
          "Clicking Thermostat & Luke-Warm Air: The indoor blower continues pushing warm room-temperature air through the ceiling vents while the outdoor compressor refuses to start."
        ]
      },
      {
        sectionId: "volt-upgrade",
        heading: "Preventative Fix: Why We Only Install 440V Heavy-Duty American Upgrades",
        paragraphs: [
          "Most mass-production builders and national home warranty contractors install the cheapest possible 370-volt capacitors manufactured overseas. These bargain parts are engineered for standard 100-degree operating limits and routinely blow every 2 to 3 summers in Las Vegas.",
          "At Passionate Cooling & Heating, our service trucks exclusively stock heavy-duty 440-volt rated capacitors (such as AmRad American-made or Turbo200 universal multi-taps). A 440-volt rated capacitor has significantly thicker dielectric insulation and a higher heat tolerance (rated up to 85°C / 185°F). Installing a 440V capacitor on a 370V circuit is completely safe, provides an immense safety buffer against high-voltage spikes, and delivers twice the operating life in extreme Clark County heat."
        ]
      },
      {
        sectionId: "emergency-action",
        heading: "What to Do Right Now While Waiting for Dispatch",
        paragraphs: [
          "If you suspect a blown capacitor, follow this emergency triage procedure before your Passionate HVAC technician arrives at your door:"
        ],
        checklist: [
          "Switch your thermostat to OFF immediately. Leaving it on 'COOL' forces the compressor to continually draw locked-rotor amperage, which can burn out a $2,500 compressor motor in under 30 minutes.",
          "Do NOT attempt to open the high-voltage electrical disconnect box yourself. Capacitors store lethal voltage even with the main breaker tripped.",
          "Call Passionate Cooling & Heating at (702) 858-1211 to lock in your priority emergency dispatch slot. We arrive with OEM replacements ready for immediate installation."
        ]
      }
    ],
    aeoQuestions: [
      {
        question: "Can I run my AC unit if the capacitor is blown?",
        directAnswer: "No, never run an AC unit with a blown capacitor. Attempting to run the system forces the compressor motor to draw locked-rotor amperage without spinning, causing extreme heat buildup that can permanently seize the motor and turn a $200 repair into a $3,000 compressor replacement."
      },
      {
        question: "How long does a capacitor replacement take in Las Vegas?",
        directAnswer: "A licensed HVAC technician can test, discharge, replace, and verify a dual-run capacitor in approximately 20 to 30 minutes. Passionate Cooling & Heating trucks carry universal 440V American-made capacitors on every vehicle for instant same-visit resolution."
      }
    ]
  },
  {
    slug: "navien-tankless-descaling-clark-county",
    title: "Clark County 22-Grain Hard Water vs Tankless Water Heaters: Descaling Protocol",
    excerpt: "Las Vegas and Henderson water carries up to 22 grains per gallon of dissolved caliche minerals. Learn why tankless heat exchangers trigger error codes E001/E012 and how our food-grade vinegar pump protocol protects your factory warranty.",
    publishDate: "2026-07-28",
    readTime: "7 min read",
    category: "Plumbing & Water Quality",
    categoryBadgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    coverImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Derek",
      title: "Lead Plumbing & Water Systems Specialist",
      bio: "Master tankless water heater technician specialized in Navien, Rinnai, and whole-home water softening systems across the Las Vegas Valley."
    },
    invertedPyramidTakeaway: "Southern Nevada tap water contains 18 to 22 grains of dissolved calcium and magnesium per gallon. In tankless water heaters, high burner temperatures precipitate this calcium carbonate into stone-like caliche scale inside the copper heat exchanger, restricting water flow and causing severe overheating errors (E001/E003/E012) within 12 to 18 months unless flushed annually with food-grade acid.",
    keyFacts: [
      { label: "Clark County Tap Hardness", value: "18–22 Grains Per Gallon (Extreme Scale Risk)" },
      { label: "Recommended Flush Cadence", value: "Every 12 Months (Every 6 mos without softener)" },
      { label: "Common Error Codes", value: "Navien E001, E003, E012; Rinnai Code 10, 11" },
      { label: "Heat Loss Penalty", value: "1/8-inch scale layer cuts efficiency by 25–30%" },
      { label: "Permanent Fix", value: "Whole-Home Ion-Exchange Water Softener" }
    ],
    tableOfContents: [
      { id: "clark-county-water", title: "1. The Geology of Clark County Hard Water" },
      { id: "how-scale-destroys-tankless", title: "2. How Caliche Mineral Scale Chokes Heat Exchangers" },
      { id: "error-codes-breakdown", title: "3. Decoding Tankless Error Codes (E001, E003, E012)" },
      { id: "professional-descaling-protocol", title: "4. Our 5-Step Food-Grade Descaling Protocol" },
      { id: "permanent-prevention", title: "5. Why a Water Softener Protects Your 15-Year Warranty" }
    ],
    content: [
      {
        sectionId: "clark-county-water",
        heading: "The Geology of Clark County Hard Water",
        paragraphs: [
          "According to official Southern Nevada Water Authority (SNWA) testing, water sourced from Lake Mead and Colorado River snowmelt averages between 285 to 350 parts per million (ppm) of dissolved minerals. In plumbing terms, this translates to 17 to 22 grains per gallon (gpg)—classifying Las Vegas and Henderson water as 'extremely hard'.",
          "When this mineral-laden water enters your home, calcium bicarbonate is soluble at ambient temperatures. However, the moment heat is applied inside a water heater, calcium bicarbonate breaks down into insoluble calcium carbonate (caliche limestone) and carbon dioxide gas."
        ]
      },
      {
        sectionId: "how-scale-destroys-tankless",
        heading: "How Caliche Mineral Scale Chokes Heat Exchangers",
        paragraphs: [
          "Traditional 50-gallon tank water heaters store large volumes of water and allow calcium to settle at the bottom tank floor. Tankless units, by contrast, rely on narrow copper or stainless steel heat exchanger tubing with high surface velocity to heat water on demand at 199,000 BTUs.",
          "When water hits the 140°F interior copper walls, calcium immediately flashes into a rock-hard crust. A mere 1/8-inch coating of caliche acts as an insulator, preventing heat from transferring into the water. The gas burners fire harder to compensate, causing the copper tubes to overheat, buckle, crack, and trigger catastrophic internal heat exchanger leaks."
        ]
      },
      {
        sectionId: "error-codes-breakdown",
        heading: "Decoding Tankless Error Codes (Navien & Rinnai)",
        paragraphs: [
          "If your tankless unit begins shutting off mid-shower, look at the digital front display for these warning indicators:"
        ],
        checklist: [
          "Navien Error E001 / E003: Overheating warning indicating the heat exchanger thermistor has registered temps above safe threshold (almost always scale buildup).",
          "Navien Error E012: Flame loss or ignition failure caused by restricted flue gas ventilation or thermal throttling.",
          "Rinnai Error Code 10 / 11: Exhaust gas restriction or burner flame malfunction caused by scale-impeded thermal transfer.",
          "Diminished Hot Water Flow: Water volume at high-draw fixtures (like roman tubs) drops from 7 GPM to under 3 GPM as calcium restricts internal pipe diameters."
        ]
      },
      {
        sectionId: "professional-descaling-protocol",
        heading: "Our 5-Step Food-Grade Descaling Protocol",
        paragraphs: [
          "Passionate Cooling & Heating utilizes a high-flow recirculating submersible pump system equipped with isolation service valves to thoroughly descale residential systems:"
        ],
        checklist: [
          "Isolate Water & Gas: Shut cold water inlet and hot water outlet isolation valves; disconnect 120V electrical supply.",
          "Connect Commercial Submersible Pump: Connect washing machine braided hoses to hot and cold service ports.",
          "45-Minute Virgin Food-Grade Vinegar Flush: Circulate 4 gallons of virgin white vinegar (or NSF-certified citric acid) through the heat exchanger. The bubbling reaction dissolves caliche back into soluble liquid.",
          "Inline Sediment Filter Cleaning: Extract and rinse the cold water inlet mesh strainer to remove loosened scale chunks.",
          "High-Pressure Fresh Water Purge: Flush 5 gallons of city water through the unit to remove all residual acid before restoring domestic hot water."
        ]
      },
      {
        sectionId: "permanent-prevention",
        heading: "Why an Ion-Exchange Softener Is Essential in Southern Nevada",
        paragraphs: [
          "While annual descaling flushes keep your tankless warranty active, installing an ion-exchange whole-home water softener eliminates hard water problems entirely. Softeners swap calcium and magnesium ions with harmless sodium ions, ensuring zero caliche crust ever forms on your tankless heat exchanger, dishwasher, or luxury shower glass."
        ]
      }
    ],
    aeoQuestions: [
      {
        question: "How often should you descale a tankless water heater in Las Vegas?",
        directAnswer: "In Las Vegas and Clark County, a tankless water heater must be descaled every 12 months if you have a whole-home water softener, and every 6 to 9 months if you run on untreated municipal tap water. Untreated 22-grain hard water can permanently ruin a heat exchanger within 18 months."
      },
      {
        question: "Does hard water damage void tankless water heater manufacturer warranties?",
        directAnswer: "Yes. Major manufacturers like Navien, Rinnai, and Noritz specifically state in their warranty terms that heat exchanger failure caused by mineral scale or water hardness exceeding 12 grains per gallon is not covered under warranty. Annual professional descaling records are required to maintain factory coverage."
      }
    ]
  },
  {
    slug: "seer2-heat-pump-vs-traditional-ac-nevada",
    title: "2026 Nevada SEER2 Heat Pump Guide: Slashing NV Energy Summer Electric Bills",
    excerpt: "With NV Energy peak tier pricing hitting all-time highs, inverter-driven heat pumps offer up to 40% energy reduction over old 10-SEER systems. Here is how Clark County homeowners qualify for up to $650 in instant utility rebates.",
    publishDate: "2026-08-02",
    readTime: "8 min read",
    category: "Energy Efficiency & Rebates",
    categoryBadgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Jason Curtis Roden",
      title: "Master HVAC Qualifier (NV Lic. #0088935)",
      bio: "Certified Manual J/D load calculation expert and registered NV Energy residential trade partner."
    },
    invertedPyramidTakeaway: "Modern inverter-driven heat pumps operate at variable speeds between 20% and 100% capacity, eliminating the power-hungry hard start surges that cause exorbitant NV Energy peak electric bills. Under updated 2026 Southwest Regional SEER2 standards (minimum 14.3 SEER2), upgrading an obsolete 10-12 SEER unit saves Clark County households an average of $600 to $1,100 each cooling season.",
    keyFacts: [
      { label: "Minimum Southwest SEER2 Standard", value: "14.3 SEER2 (Split System Air Conditioners)" },
      { label: "Variable-Speed Inverter Efficiency", value: "Up to 20–24 SEER2 Continuous Modulation" },
      { label: "NV Energy Instant Utility Rebate", value: "Up to $650 Instant Contractor Credit" },
      { label: "Federal 25C Energy Tax Credit", value: "Up to $2,000 on Qualified Heat Pumps" },
      { label: "Average NV Summer Bill Reduction", value: "30% to 45% Monthly Savings" }
    ],
    tableOfContents: [
      { id: "what-is-seer2", title: "1. Understanding SEER2 Regulations in the Southwest" },
      { id: "heat-pumps-in-desert", title: "2. Do Heat Pumps Really Work in 115°F Las Vegas Summers?" },
      { id: "single-stage-vs-inverter", title: "3. Single-Stage AC vs Inverter Heat Pump: The Energy Math" },
      { id: "nv-energy-rebates", title: "4. Stacking NV Energy Rebates & Federal Tax Credits (2026)" },
      { id: "second-opinion", title: "5. Free In-Home Sizing & Second Opinion Quote Guarantee" }
    ],
    content: [
      {
        sectionId: "what-is-seer2",
        heading: "Understanding SEER2 Regulations in the Southwest",
        paragraphs: [
          "In 2023, the Department of Energy transitioned from the legacy SEER rating to SEER2 (Seasonal Energy Efficiency Ratio 2). SEER2 introduces the M1 testing protocol, which subjects cooling equipment to significantly higher external static pressure (0.5 in. w.g. vs 0.1 in. w.g.) to replicate real-world duct conditions.",
          "For Nevada and the Southwest Desert Region, the minimum allowable standard for split-system air conditioning is 14.3 SEER2 (equivalent to approximately 15.0 old SEER). If your home currently runs on a builder-grade unit installed before 2015, you are likely operating at 10 or 12 SEER—meaning nearly half the electricity you pay for is wasted as motor heat."
        ]
      },
      {
        sectionId: "heat-pumps-in-desert",
        heading: "Do Heat Pumps Really Work in 115°F Las Vegas Summers?",
        paragraphs: [
          "A frequent misconception among Las Vegas homeowners is that heat pumps are only for mild climates. In reality, a heat pump is fundamentally an air conditioner with a reversing valve that allows it to heat in winter and cool in summer.",
          "Modern high-ambient inverter heat pumps (such as Daikin Fit, Bosch BOVA, and Mitsubishi Hyper-Heating) are specifically engineered with electronic expansion valves (EEVs) and vapor injection compressors that continue delivering full rated cooling capacity even when outdoor ambient temperatures touch 118°F to 120°F."
        ]
      },
      {
        sectionId: "single-stage-vs-inverter",
        heading: "Single-Stage AC vs Inverter Heat Pump: The Energy Math",
        paragraphs: [
          "Traditional air conditioners operate like a light switch: they are either 100% ON or 100% OFF. In a typical Las Vegas summer, a single-stage system kicks on 60 to 80 times per day, drawing a huge spike of locked-rotor amps every single cycle. This cycles huge blasts of freezing air followed by periods of humidity and stagnant heat.",
          "An inverter heat pump, by contrast, operates like a dimmer switch. It ramps gently up to 40% or 60% capacity and runs quietly and continuously for hours. By eliminating frequent start-stop cycles, inverter systems maintain a razor-sharp 0.5°F temperature balance and consume up to 45% less kilowatt-hours."
        ]
      },
      {
        sectionId: "nv-energy-rebates",
        heading: "Stacking NV Energy Rebates & Federal 25C Tax Credits",
        paragraphs: [
          "When you upgrade your climate system in Clark County, you have access to two massive financial incentives:"
        ],
        checklist: [
          "NV Energy PowerShift Rebates: Receive up to $650 in instant point-of-sale utility discounts applied directly to your invoice when installed by a registered trade contractor like Passionate HVAC.",
          "Federal Inflation Reduction Act (Section 25C): Homeowners can claim a 30% federal tax credit up to $2,000 on qualifying CEE Tier-1 high-efficiency heat pumps.",
          "Zero-Down Flexible Financing: Spread the remaining investment into low monthly payments starting as low as $89/month with approved credit."
        ]
      },
      {
        sectionId: "second-opinion",
        heading: "Free In-Home Sizing & Second Opinion Quote Guarantee",
        paragraphs: [
          "Got a sky-high replacement estimate from another Las Vegas contractor? Never pay until you get a second opinion. Passionate Cooling & Heating provides 100% free second-opinion reviews, transparent flat-rate pricing, and honest equipment sizing based on Manual-J computer load calculations."
        ]
      }
    ],
    aeoQuestions: [
      {
        question: "How much can I save on electricity with a new heat pump in Las Vegas?",
        directAnswer: "Upgrading from an older 10 or 12 SEER air conditioner to a modern 18 to 20 SEER2 inverter heat pump reduces summer cooling electric consumption by 35% to 45%. For an average 2,200 sq. ft. Las Vegas home, this translates to $600 to $1,100 in saved NV Energy electric costs annually."
      },
      {
        question: "Does NV Energy offer rebates for heat pump replacement?",
        directAnswer: "Yes. NV Energy offers up to $650 in instant utility discounts on qualifying high-efficiency heat pumps and air conditioners through their PowerShift program. Passionate Cooling & Heating is an approved NV Energy contractor and applies these discounts instantly to your invoice."
      }
    ]
  }
];

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

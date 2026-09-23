export const SERVICE_REGIONS = [
  {
    id: "las-vegas",
    name: "Las Vegas (Valley Metro)",
    leadTime: "30–45 Mins Average Dispatch",
    coverageType: "Full 24/7 Emergency Dispatch",
    description: "Rapid dispatch across Downtown, Strip Corridor, Paradise, Spring Valley, and East Las Vegas.",
    landmarks: ["Downtown Las Vegas", "The Strip Corridor", "Spring Valley", "Paradise", "East Las Vegas / Sunrise Manor"],
    activeTechCount: 6,
    isHeadquarters: false
  },
  {
    id: "boulder-hwy-whitney",
    name: "Boulder Hwy & Whitney (HQ Hub)",
    leadTime: "15–30 Mins Express Dispatch",
    coverageType: "HQ Fast Response Zone",
    description: "Located right outside our primary facility on Boulder Hwy Suite 2. Rapid response guaranteed.",
    landmarks: ["6672 Boulder Hwy Facility", "Whitney", "East Sahara Corridor", "Sam's Town Area", "Russell Rd Corridor"],
    activeTechCount: 4,
    isHeadquarters: true
  },
  {
    id: "henderson",
    name: "Henderson & Green Valley",
    leadTime: "35–45 Mins Average Dispatch",
    coverageType: "Full 24/7 Emergency Dispatch",
    description: "Complete HVAC, heat pump, and tankless plumbing services for residential and master-planned communities.",
    landmarks: ["Green Valley Ranch", "Anthem", "Inspirada", "Seven Hills", "Lake Las Vegas", "MacDonald Highlands"],
    activeTechCount: 5,
    isHeadquarters: false
  },
  {
    id: "summerlin",
    name: "Summerlin & Northwest",
    leadTime: "40–50 Mins Average Dispatch",
    coverageType: "Full 24/7 Emergency Dispatch",
    description: "High-efficiency dual fuel inverter systems, smart zoning, and rapid summer emergency cooling.",
    landmarks: ["Summerlin South", "Summerlin North", "The Ridges", "Sun City", "Centennial Hills", "Providence"],
    activeTechCount: 4,
    isHeadquarters: false
  },
  {
    id: "north-las-vegas",
    name: "North Las Vegas & Aliante",
    leadTime: "35–50 Mins Average Dispatch",
    coverageType: "Full 24/7 Emergency Dispatch",
    description: "Commercial rooftop packages, residential AC tune-ups, and 24/7 compressor rescues.",
    landmarks: ["Aliante", "Craig Rd Corridor", "Eldorado", "Speedway Area", "Tule Springs"],
    activeTechCount: 4,
    isHeadquarters: false
  },
  {
    id: "boulder-city",
    name: "Boulder City",
    leadTime: "30–45 Mins Average Dispatch",
    coverageType: "Full 24/7 Emergency Dispatch",
    description: "Reliable HVAC and water heating replacements with no inflated distance surcharges.",
    landmarks: ["Historic District", "Veterans Memorial", "Bootleg Canyon Area", "Lake Mead Gateway"],
    activeTechCount: 2,
    isHeadquarters: false
  },
  {
    id: "mesquite",
    name: "Mesquite, NV",
    leadTime: "Dedicated Clark County Regional Dispatch",
    coverageType: "Full Service & Priority Replacements",
    description: "Serving northeastern Clark County homeowners, golf estates, and vacation properties with zero excessive trip surcharges.",
    landmarks: ["Sun City Mesquite", "Falcon Ridge", "Casablanca / Oasis Corridor", "Riverside Rd Estates"],
    activeTechCount: 2,
    isHeadquarters: false
  }
];

export const CLARK_COUNTY_ZIP_CODES = [
  // Boulder Hwy & East LV (HQ)
  "89122", "89121", "89142", "89104", "89110", "89115",
  // Central & Strip
  "89101", "89102", "89109", "89119", "89169",
  // Henderson & Green Valley
  "89002", "89011", "89012", "89014", "89015", "89044", "89052", "89074",
  // Summerlin & West
  "89117", "89128", "89134", "89135", "89138", "89144", "89145",
  // Southwest & Enterprise
  "89103", "89113", "89118", "89139", "89141", "89146", "89147", "89148", "89178", "89179", "89183",
  // North Las Vegas & Northwest
  "89030", "89031", "89032", "89081", "89084", "89085", "89086", "89106", "89107", "89108", "89129", "89130", "89131", "89143", "89149", "89166",
  // Boulder City
  "89005",
  // Mesquite, NV (Clark County)
  "89027", "89034"
];

export function checkZipCodeCoverage(zip) {
  const cleanZip = zip.trim();
  if (cleanZip.length !== 5) return null;
  const isCovered = CLARK_COUNTY_ZIP_CODES.includes(cleanZip);
  if (isCovered) {
    if (cleanZip === "89027" || cleanZip === "89034") {
      return {
        covered: true,
        region: "Mesquite, NV (Clark County Extended Dispatch)",
        responseTime: "Same-Day Priority Regional Dispatch",
        tier: "Standard Clark County Service (No Outrageous Trip Surcharge)"
      };
    }
    if (cleanZip === "89122" || cleanZip === "89121") {
      return {
        covered: true,
        region: "Boulder Hwy / Whitney (Direct HQ Zone)",
        responseTime: "15–30 Mins Express Dispatch",
        tier: "Immediate Headquarters Standby Dispatch"
      };
    }
    return {
      covered: true,
      region: "Las Vegas / Clark County Primary Service Zone",
      responseTime: "30–45 Mins Average Dispatch",
      tier: "24/7 Guaranteed Live Technician En Route"
    };
  }
  return {
    covered: false,
    region: "Bordering Nevada Area",
    responseTime: "Custom Dispatch on Request",
    tier: "Call (702) 858-1211 to confirm immediate tech availability"
  };
}

export type VehicleSize = "sedan" | "suv" | "truck";

export const vehicleSizes: {
  id: VehicleSize;
  label: string;
  adder: number;
}[] = [
  { id: "sedan", label: "Sedan / Coupe", adder: 0 },
  { id: "suv", label: "SUV / Minivan", adder: 35 },
  { id: "truck", label: "Truck / XL", adder: 60 },
];

export const packages = [
  {
    id: "express",
    name: "Express Exterior",
    tagline: "Quick exterior refresh — foam wash and shine.",
    sedanFrom: 99,
    duration: "1–2 hours",
    featured: false,
    quoteOnly: false,
    includes: [
      "Foam pre-soak and hand wash",
      "Wheels, tires, and fenders cleaned",
      "Paint-safe hand dry",
      "Exterior glass wipe-down",
      "Tire shine",
      "Door jambs wiped",
    ],
  },
  {
    id: "interior",
    name: "Interior Detail",
    tagline: "Deep cabin clean — stains, odors, and pet hair.",
    sedanFrom: 159,
    duration: "2–3 hours",
    featured: false,
    quoteOnly: false,
    includes: [
      "Full vacuum — seats, carpets, trunk",
      "Compressed-air crevice detail",
      "Stain treatment and shampoo extraction",
      "Leather clean and conditioning",
      "Dash, console, and door panels",
      "Interior glass, streak-free",
      "Odor neutralization",
    ],
  },
  {
    id: "full",
    name: "Full Detail",
    tagline: "Best value — interior plus exterior in one visit.",
    sedanFrom: 249,
    duration: "3–5 hours",
    featured: true,
    quoteOnly: false,
    includes: [
      "Everything in Interior Detail",
      "Foam wash and clay decontamination",
      "Hand wash and paint-safe dry",
      "Wax or paint sealant",
      "Wheel and brake-dust deep clean",
      "Exterior glass treatment",
      "Tire shine and trim dressing",
    ],
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    tagline: "Multi-year paint protection. UV shield and hydrophobic gloss.",
    sedanFrom: 599,
    duration: "By quote",
    featured: false,
    quoteOnly: true,
    includes: [
      "Full decontamination wash",
      "Iron and tar removal",
      "Paint correction as needed",
      "Professional ceramic application",
      "Hydrophobic water beading",
      "UV and chemical resistance",
      "Quoted to your vehicle and goals",
    ],
  },
] as const;

export type PackageId = (typeof packages)[number]["id"];

export const comparisonRows: {
  feature: string;
  express: boolean;
  interior: boolean;
  full: boolean;
  ceramic: boolean;
}[] = [
  { feature: "Exterior hand wash", express: true, interior: false, full: true, ceramic: true },
  { feature: "Wheel & tire clean", express: true, interior: false, full: true, ceramic: true },
  { feature: "Tire shine", express: true, interior: false, full: true, ceramic: true },
  { feature: "Clay bar decontamination", express: false, interior: false, full: true, ceramic: true },
  { feature: "Wax / sealant", express: false, interior: false, full: true, ceramic: false },
  { feature: "Full vacuum & interior", express: false, interior: true, full: true, ceramic: true },
  { feature: "Shampoo extraction", express: false, interior: true, full: true, ceramic: true },
  { feature: "Leather conditioning", express: false, interior: true, full: true, ceramic: true },
  { feature: "Odor neutralization", express: false, interior: true, full: true, ceramic: true },
  { feature: "Paint correction", express: false, interior: false, full: false, ceramic: true },
  { feature: "Nano ceramic coating", express: false, interior: false, full: false, ceramic: true },
];

export const addOns = [
  {
    id: "pet-hair",
    name: "Pet Hair Removal",
    price: "$35–$60",
    detail: "Deep extraction of embedded fur from seats, carpets, and crevices.",
  },
  {
    id: "ozone",
    name: "Ozone Odor Treatment",
    price: "$50",
    detail: "Smoke, mildew, and deep-set odors treated at the source.",
  },
  {
    id: "headlight",
    name: "Headlight Restoration",
    price: "$75",
    detail: "Clears UV haze and yellowing for better night visibility.",
  },
  {
    id: "engine",
    name: "Engine Bay Detailing",
    price: "$80",
    detail: "Safe degrease and dress for a like-new under-hood finish.",
  },
  {
    id: "correction",
    name: "Paint Correction",
    price: "By quote",
    detail: "Machine polish to cut swirls, haze, and light scratches.",
  },
] as const;

export const serviceAreas = [
  "Jacksonville",
  "Jacksonville Beach",
  "Atlantic Beach",
  "Neptune Beach",
  "Ponte Vedra",
  "Mandarin",
  "Orange Park",
  "Fleming Island",
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Request a quote",
    body: "Tell us the vehicle, neighborhood, and what you want done. We’ll confirm a clear price before we roll.",
  },
  {
    step: "02",
    title: "We come to you",
    body: "Fully stocked mobile setup at your home, office, or apartment. No drop-off, no waiting room.",
  },
  {
    step: "03",
    title: "The detail",
    body: "Paint-safe products, methodical process, Florida-proof finish — salt, UV, pollen, and beach sand included.",
  },
  {
    step: "04",
    title: "Walkthrough",
    body: "We go over the results with you and simple aftercare so it stays that way between visits.",
  },
] as const;

export const faqs = [
  {
    q: "How much does mobile detailing cost in Jacksonville?",
    a: "Starting rates are $99 for an express exterior, $159 for interior, and $249 for a full detail on a sedan. SUVs and trucks run higher. Final price depends on size and condition — you’ll get a quote before any work starts.",
  },
  {
    q: "Do you come to apartments and offices?",
    a: "Yes. As long as there is legal parking and reasonable access to the vehicle, we work at homes, offices, and apartment lots across the Jacksonville metro.",
  },
  {
    q: "How long does a detail take?",
    a: "Express exterior is usually 1–2 hours. Interior runs 2–3. A full detail is typically 3–5 hours. Ceramic coating is quoted and may take a full day.",
  },
  {
    q: "Why do Florida cars need this more often?",
    a: "Northeast Florida is hard on paint and interiors: UV fade, salt air from the Beaches, humidity, pollen, and sand. Regular details and a sealant or coating keep the finish from chalking and the cabin from baking in.",
  },
] as const;

export function priceFor(sedanFrom: number, size: VehicleSize) {
  const adder = vehicleSizes.find((v) => v.id === size)?.adder ?? 0;
  return sedanFrom + adder;
}

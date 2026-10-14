import type { PracticeArea } from "@/types/practiceArea";

export const practiceAreasByLanguage: Record<"en" | "es", PracticeArea[]> = {
  en: [
    {
      name: "Car Accidents",
      description:
        "Collisions, rear-ends, hit & runs. We recover what you're owed.",
      image: "/optimized/practice-car-accidents.webp",
    },
    {
      name: "Motorcycle Accidents",
      description: "Serious injuries deserve serious representation.",
      image: "/optimized/practice-motorcycle-accidents.webp",
    },
    {
      name: "Truck Accidents",
      description: "Taking on trucking companies and their insurers.",
      image: "/optimized/practice-truck-accidents.webp",
    },
    {
      name: "Slip & Fall",
      description: "Unsafe property? Owners are accountable.",
      image: "/optimized/practice-slip-fall.webp",
    },
    {
      name: "Wrongful Death",
      description:
        "Compassionate help when a loss was someone else's fault.",
      image: "/optimized/practice-wrongful-death.webp",
    },
    {
      name: "Dog Bite",
      description:
        "If you've been bitten we'll gather all the evidence to protect you.",
      image: "/optimized/practice-dog-bite.webp",
    },
  ],
  es: [
    {
      name: "Accidentes de auto",
      description:
        "Choques, impactos traseros y fugas. Recuperamos lo que le corresponde.",
      image: "/optimized/practice-car-accidents.webp",
    },
    {
      name: "Accidentes de motocicleta",
      description: "Las lesiones graves merecen representación seria.",
      image: "/optimized/practice-motorcycle-accidents.webp",
    },
    {
      name: "Accidentes de camión",
      description: "Enfrentamos a compañías de transporte y sus aseguradoras.",
      image: "/optimized/practice-truck-accidents.webp",
    },
    {
      name: "Resbalones y caídas",
      description: "¿Propiedad insegura? Los dueños deben responder.",
      image: "/optimized/practice-slip-fall.webp",
    },
    {
      name: "Fallecimiento por culpa ajena",
      description:
        "Ayuda compasiva cuando una pérdida fue culpa de otra persona.",
      image: "/optimized/practice-wrongful-death.webp",
    },
    {
      name: "Mordeduras de perro",
      description:
        "Si le mordieron, reuniremos las pruebas necesarias para protegerle.",
      image: "/optimized/practice-dog-bite.webp",
    },
  ],
};

export const practiceAreas = practiceAreasByLanguage.en;

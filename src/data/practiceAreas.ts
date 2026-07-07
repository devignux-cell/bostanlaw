import type { PracticeArea } from "@/types/practiceArea";
import type { Language } from "@/types/language";

export const practiceAreasByLanguage: Record<Language, PracticeArea[]> = {
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
      description: "Las lesiones graves merecen representacion seria.",
      image: "/optimized/practice-motorcycle-accidents.webp",
    },
    {
      name: "Accidentes de camion",
      description: "Enfrentamos a companias de transporte y sus aseguradoras.",
      image: "/optimized/practice-truck-accidents.webp",
    },
    {
      name: "Resbalones y caidas",
      description: "Propiedad insegura? Los duenos deben responder.",
      image: "/optimized/practice-slip-fall.webp",
    },
    {
      name: "Muerte injusta",
      description:
        "Ayuda compasiva cuando una perdida fue culpa de otra persona.",
      image: "/optimized/practice-wrongful-death.webp",
    },
    {
      name: "Mordeduras de perro",
      description:
        "Si le mordieron, reuniremos la evidencia necesaria para protegerle.",
      image: "/optimized/practice-dog-bite.webp",
    },
  ],
};

export const practiceAreas = practiceAreasByLanguage.en;

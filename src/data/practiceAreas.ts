import type { PracticeArea } from "@/types/practiceArea";
import { practiceAreaDetailsByLocale } from "@/data/practiceAreaDetails";

export const practiceAreasByLanguage: Record<"en" | "es", PracticeArea[]> = {
  en: [
    {
      id: "car-accidents",
      name: "Car Accidents",
      description:
        "Collisions, rear-ends, hit & runs. We recover what you're owed.",
      image: "/optimized/practice-car-accidents.webp",
      details: practiceAreaDetailsByLocale.en["car-accidents"],
    },
    {
      id: "motorcycle-accidents",
      name: "Motorcycle Accidents",
      description: "Serious injuries deserve serious representation.",
      image: "/optimized/practice-motorcycle-accidents.webp",
      details: practiceAreaDetailsByLocale.en["motorcycle-accidents"],
    },
    {
      id: "truck-accidents",
      name: "Truck Accidents",
      description: "Taking on trucking companies and their insurers.",
      image: "/optimized/practice-truck-accidents.webp",
      details: practiceAreaDetailsByLocale.en["truck-accidents"],
    },
    {
      id: "slip-fall",
      name: "Slip & Fall",
      description: "Unsafe property? Owners are accountable.",
      image: "/optimized/practice-slip-fall.webp",
      details: practiceAreaDetailsByLocale.en["slip-fall"],
    },
    {
      id: "wrongful-death",
      name: "Wrongful Death",
      description:
        "Compassionate help when a loss was someone else's fault.",
      image: "/optimized/practice-wrongful-death.webp",
      details: practiceAreaDetailsByLocale.en["wrongful-death"],
    },
    {
      id: "dog-bite",
      name: "Dog Bite",
      description:
        "If you've been bitten we'll gather all the evidence to protect you.",
      image: "/optimized/practice-dog-bite.webp",
      details: practiceAreaDetailsByLocale.en["dog-bite"],
    },
  ],
  es: [
    {
      id: "car-accidents",
      name: "Accidentes de auto",
      description:
        "Choques, impactos traseros y fugas. Recuperamos lo que le corresponde.",
      image: "/optimized/practice-car-accidents.webp",
      details: practiceAreaDetailsByLocale.es["car-accidents"],
    },
    {
      id: "motorcycle-accidents",
      name: "Accidentes de motocicleta",
      description: "Las lesiones graves merecen representación seria.",
      image: "/optimized/practice-motorcycle-accidents.webp",
      details: practiceAreaDetailsByLocale.es["motorcycle-accidents"],
    },
    {
      id: "truck-accidents",
      name: "Accidentes de camión",
      description: "Enfrentamos a compañías de transporte y sus aseguradoras.",
      image: "/optimized/practice-truck-accidents.webp",
      details: practiceAreaDetailsByLocale.es["truck-accidents"],
    },
    {
      id: "slip-fall",
      name: "Resbalones y caídas",
      description: "¿Propiedad insegura? Los dueños deben responder.",
      image: "/optimized/practice-slip-fall.webp",
      details: practiceAreaDetailsByLocale.es["slip-fall"],
    },
    {
      id: "wrongful-death",
      name: "Fallecimiento por culpa ajena",
      description:
        "Ayuda compasiva cuando una pérdida fue culpa de otra persona.",
      image: "/optimized/practice-wrongful-death.webp",
      details: practiceAreaDetailsByLocale.es["wrongful-death"],
    },
    {
      id: "dog-bite",
      name: "Mordeduras de perro",
      description:
        "Si le mordieron, reuniremos las pruebas necesarias para protegerle.",
      image: "/optimized/practice-dog-bite.webp",
      details: practiceAreaDetailsByLocale.es["dog-bite"],
    },
  ],
};

export const practiceAreas = practiceAreasByLanguage.en;

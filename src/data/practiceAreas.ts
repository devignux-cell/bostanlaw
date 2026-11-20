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
      id: "pedestrian-accident",
      name: "Pedestrian Accident",
      description: "Help for pedestrians injured in motor vehicle crashes.",
      image: "/optimized/practice-pedestrian-accident.webp",
      details: practiceAreaDetailsByLocale.en["pedestrian-accident"],
    },
    {
      id: "scooter-accident",
      name: "Scooter Accident",
      description: "Guidance after an injury in a crash involving a scooter.",
      image: "/optimized/practice-scooter-accident.webp",
      details: practiceAreaDetailsByLocale.en["scooter-accident"],
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
      id: "pedestrian-accident",
      name: "Accidente de peatón",
      description: "Ayuda para peatones lesionados en accidentes con vehículos motorizados.",
      image: "/optimized/practice-pedestrian-accident.webp",
      details: practiceAreaDetailsByLocale.es["pedestrian-accident"],
    },
    {
      id: "scooter-accident",
      name: "Accidente de scooter",
      description: "Orientación tras una lesión en un accidente en el que intervino un scooter.",
      image: "/optimized/practice-scooter-accident.webp",
      details: practiceAreaDetailsByLocale.es["scooter-accident"],
    },
  ],
};

export const practiceAreas = practiceAreasByLanguage.en;

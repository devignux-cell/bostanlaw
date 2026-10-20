export const practiceAreaIds = [
  "car-accidents",
  "motorcycle-accidents",
  "truck-accidents",
  "slip-fall",
  "wrongful-death",
  "dog-bite",
] as const;

export type PracticeAreaId = (typeof practiceAreaIds)[number];

export interface PracticeAreaDetails {
  introduction: string;
  keyPoints: readonly [string, string, string];
}

export interface PracticeArea {
  id: PracticeAreaId;
  name: string;
  description: string;
  /** Public path to the card's background photo. */
  image: string;
  details: PracticeAreaDetails;
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toTelHref(phone: string): string {
  return "tel:" + phone.replace(/[^0-9+]/g, "");
}

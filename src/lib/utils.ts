import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatInt(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

export function formatPct(n: number, digits = 1): string {
  return `${n.toFixed(digits)}%`;
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { propertyList } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAllProperties = async () => {
  await delay(1000);
  return propertyList;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



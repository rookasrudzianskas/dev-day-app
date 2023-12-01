import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

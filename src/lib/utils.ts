import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const loadContent = async () => {
  try {
    const response = await fetch('/src/content.json')
    return await response.json()
  } catch (error) {
    console.error('Error loading content:', error)
    return null
  }
} 
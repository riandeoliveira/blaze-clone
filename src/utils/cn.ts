import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines CSS classes using `clsx` and merges duplicate or conflicting Tailwind CSS utility classes using `twMerge`.
 *
 * @param inputs - A list of class values which can be strings, arrays of strings, objects, or other types accepted by `clsx`.
 * @returns A single string with all combined and merged classes.
 *
 * @example
 * // Combine and merge CSS classes
 * const className = cn('p-4', 'bg-white', 'p-2', { 'text-center': true, 'hidden': false });
 * // Result: 'bg-white text-center p-2'
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

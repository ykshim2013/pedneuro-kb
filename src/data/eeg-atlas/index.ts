import { basicPatterns } from './basic';
import { intermediatePatterns } from './intermediate';
import { advancedPatterns } from './advanced';
import type { EEGPattern } from './types';

export type { EEGPattern, EEGAnnotation } from './types';

export const allPatterns: EEGPattern[] = [
  ...basicPatterns,
  ...intermediatePatterns,
  ...advancedPatterns,
];

export function getPatternById(id: string): EEGPattern | undefined {
  return allPatterns.find(p => p.id === id);
}

export function getPatternsByDifficulty(difficulty: 'basic' | 'intermediate' | 'advanced'): EEGPattern[] {
  return allPatterns.filter(p => p.difficulty === difficulty);
}

export { basicPatterns, intermediatePatterns, advancedPatterns };

import { basicPatterns } from './basic';
import { intermediatePatterns } from './intermediate';
import { advancedPatterns } from './advanced';
import type { BrainImagingPattern } from './types';

export type { BrainImagingPattern, ImageAnnotation } from './types';

export const allBrainImagingPatterns: BrainImagingPattern[] = [
  ...basicPatterns,
  ...intermediatePatterns,
  ...advancedPatterns,
];

export function getBrainImagingPatternById(id: string): BrainImagingPattern | undefined {
  return allBrainImagingPatterns.find(p => p.id === id);
}

export function getBrainImagingPatternsByDifficulty(
  difficulty: 'basic' | 'intermediate' | 'advanced'
): BrainImagingPattern[] {
  return allBrainImagingPatterns.filter(p => p.difficulty === difficulty);
}

export { basicPatterns, intermediatePatterns, advancedPatterns };

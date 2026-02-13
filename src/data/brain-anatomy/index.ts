import type { AnatomyPattern } from './types';

export type { AnatomyPattern, AnatomyAnnotation } from './types';

import { basicPatterns } from './basic';
import { intermediatePatterns } from './intermediate';
import { advancedPatterns } from './advanced';

export { basicPatterns, intermediatePatterns, advancedPatterns };

export const allAnatomyPatterns: AnatomyPattern[] = [
  ...basicPatterns,
  ...intermediatePatterns,
  ...advancedPatterns,
];

export function getAnatomyPatternById(id: string): AnatomyPattern | undefined {
  return allAnatomyPatterns.find(p => p.id === id);
}

export function getAnatomyPatternsByDifficulty(
  difficulty: 'basic' | 'intermediate' | 'advanced'
): AnatomyPattern[] {
  return allAnatomyPatterns.filter(p => p.difficulty === difficulty);
}

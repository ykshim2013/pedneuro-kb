import type { CTPattern } from './types';
export type { CTPattern, CTAnnotation } from './types';

import { basicPatterns } from './basic';
import { intermediatePatterns } from './intermediate';
import { advancedPatterns } from './advanced';

export { basicPatterns, intermediatePatterns, advancedPatterns };

export const allCTPatterns: CTPattern[] = [
  ...basicPatterns,
  ...intermediatePatterns,
  ...advancedPatterns,
];

export function getCTPatternById(id: string): CTPattern | undefined {
  return allCTPatterns.find(p => p.id === id);
}

export function getCTPatternsByDifficulty(difficulty: 'basic' | 'intermediate' | 'advanced'): CTPattern[] {
  return allCTPatterns.filter(p => p.difficulty === difficulty);
}

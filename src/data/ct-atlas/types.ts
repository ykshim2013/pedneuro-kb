export interface CTAnnotation {
  id: string;
  x: number; // percentage position on image (0-100)
  y: number; // percentage position on image (0-100)
  label: string;
  description: string;
}

export interface CTPattern {
  id: string;
  title: string;
  description: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  imagePath: string;
  imageAlt: string;
  window?: string;
  plane?: string;
  clinicalSignificance: string;
  annotations: CTAnnotation[];
  source: string;
  license: string;
}

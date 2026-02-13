export interface AnatomyAnnotation {
  id: string;
  x: number; // percentage position on image (0-100)
  y: number; // percentage position on image (0-100)
  label: string;
  description: string;
}

export interface AnatomyPattern {
  id: string;
  title: string;
  description: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  imagePath: string;
  imageAlt: string;
  view?: string;
  system?: string;
  clinicalSignificance: string;
  annotations: AnatomyAnnotation[];
  source: string;
  license: string;
}

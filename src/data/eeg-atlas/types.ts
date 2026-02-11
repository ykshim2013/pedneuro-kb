export interface EEGAnnotation {
  id: string;
  x: number; // percentage position on image (0-100)
  y: number; // percentage position on image (0-100)
  label: string;
  description: string;
}

export interface EEGPattern {
  id: string;
  title: string;
  description: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  imagePath: string;
  imageAlt: string;
  syndrome?: string;
  frequency?: string;
  distribution?: string;
  clinicalSignificance: string;
  annotations: EEGAnnotation[];
  source: string;
  license: string;
}

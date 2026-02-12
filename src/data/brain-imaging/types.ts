export interface ImageAnnotation {
  id: string;
  x: number; // percentage position on image (0-100)
  y: number; // percentage position on image (0-100)
  label: string;
  description: string;
}

export interface BrainImagingPattern {
  id: string;
  title: string;
  description: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  imagePath: string;
  imageAlt: string;
  modality?: string;
  sequence?: string;
  plane?: string;
  syndrome?: string;
  clinicalSignificance: string;
  annotations: ImageAnnotation[];
  source: string;
  license: string;
}

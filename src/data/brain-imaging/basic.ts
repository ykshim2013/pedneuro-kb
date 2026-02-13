import type { BrainImagingPattern } from './types';

export const basicPatterns: BrainImagingPattern[] = [
  {
    id: 'normal-brain-anatomy',
    title: 'Normal Pediatric Brain Anatomy (Axial MRI)',
    description:
      'Axial T1-weighted MRI demonstrating normal pediatric brain anatomy. Identification of lobar anatomy, deep gray structures, ventricular system, and major white matter tracts is the foundation for recognizing pathologic findings on neuroimaging.',
    difficulty: 'basic',
    imagePath: '/images/mri/normal-brain-anatomy-real.jpg',
    imageAlt:
      'Clinical axial T1 MRI of a 9-year-old boy at basal ganglia and fourth ventricle levels showing labeled regions-of-interest including posterior and anterior limbs of internal capsule, corpus callosum, caudate nucleus, putamen, thalamus, and frontal white matter',
    modality: 'MRI',
    sequence: 'T1-weighted',
    plane: 'Axial',
    clinicalSignificance:
      'Foundation for identifying pathologic findings. Lobar anatomy correlates with clinical deficits (frontal = motor/behavior, temporal = language/memory, parietal = sensory/spatial, occipital = vision). Ventricular size and morphology indicate hydrocephalus or atrophy.',
    annotations: [
      {
        id: 'frontal-lobe',
        x: 35,
        y: 25,
        label: 'Frontal lobe',
        description:
          'Largest lobe; contains motor cortex (precentral gyrus), Broca\'s area (left), and prefrontal executive function areas.',
      },
      {
        id: 'temporal-lobe',
        x: 15,
        y: 55,
        label: 'Temporal lobe',
        description:
          'Contains auditory cortex, Wernicke\'s area (left), hippocampus (memory), and amygdala.',
      },
      {
        id: 'parietal-lobe',
        x: 35,
        y: 65,
        label: 'Parietal lobe',
        description:
          'Contains somatosensory cortex (postcentral gyrus), spatial processing, and language integration.',
      },
      {
        id: 'occipital-lobe',
        x: 50,
        y: 85,
        label: 'Occipital lobe',
        description:
          'Primary visual cortex; visual processing and interpretation.',
      },
      {
        id: 'lateral-ventricles',
        x: 50,
        y: 45,
        label: 'Lateral ventricles',
        description:
          'CSF-filled cavities; enlargement suggests hydrocephalus or atrophy.',
      },
      {
        id: 'caudate-thalamus',
        x: 58,
        y: 50,
        label: 'Caudate nucleus & thalamus',
        description:
          'Basal ganglia components; involved in motor control, cognition, and sensory relay.',
      },
      {
        id: 'corpus-callosum',
        x: 50,
        y: 35,
        label: 'Corpus callosum',
        description:
          'Largest white matter commissure connecting the hemispheres; agenesis is a recognized malformation.',
      },
    ],
    source: 'Grafe D, et al. Quantitative T1 mapping of the normal brain from early infancy to adulthood. Pediatr Radiol. 2021;51(11):2058-2068. PMC7897197. Figure 1.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'myelination-milestones',
    title: 'Myelination Milestones by Age',
    description:
      'Myelination progresses in an orderly caudal-to-rostral and central-to-peripheral pattern during normal brain development. T1 and T2 signal changes on MRI reflect myelin maturation, with T1 shortening preceding T2 shortening by approximately 2-3 months. Knowledge of normal myelination milestones is essential for identifying delayed or abnormal white matter development.',
    difficulty: 'basic',
    imagePath: '/images/mri/myelination-milestones-real.jpg',
    imageAlt:
      'Clinical axial MRI comparison showing progressive myelination across five children aged 4 to 72 months on TI1, MP2RAGE, MP-RAGE, and T2-weighted sequences with age-dependent white matter signal changes',
    modality: 'MRI',
    sequence: 'T1 and T2',
    plane: 'Axial',
    clinicalSignificance:
      'Myelination progresses caudal-to-rostral and central-to-peripheral. Delayed myelination on MRI suggests metabolic or genetic white matter disease. T1 signal change leads T2 by approximately 2-3 months. Knowledge of normal milestones is essential for identifying delayed or abnormal myelination.',
    annotations: [
      {
        id: 'plic-birth',
        x: 15,
        y: 50,
        label: 'PLIC at birth',
        description:
          'Posterior limb of internal capsule is myelinated at birth; earliest identifiable myelinated structure on MRI.',
      },
      {
        id: 'cerebellar-peduncles-3mo',
        x: 30,
        y: 65,
        label: 'Cerebellar peduncles 3mo',
        description:
          'Cerebellar white matter myelination visible by 3 months; motor coordination development.',
      },
      {
        id: 'splenium-cc-4mo',
        x: 40,
        y: 40,
        label: 'Splenium CC 4mo',
        description:
          'Splenium of corpus callosum myelinates by 4 months; posterior-to-anterior progression.',
      },
      {
        id: 'genu-cc-6mo',
        x: 55,
        y: 35,
        label: 'Genu CC 6mo',
        description:
          'Genu of corpus callosum myelinates by 6 months; frontal lobe connections developing.',
      },
      {
        id: 'frontal-wm-12-24mo',
        x: 75,
        y: 30,
        label: 'Frontal WM 12-24mo',
        description:
          'Frontal white matter completes myelination by 24 months; last region to myelinate.',
      },
      {
        id: 't1-vs-t2-signal',
        x: 85,
        y: 75,
        label: 'T1 vs T2 signal',
        description:
          'T1 shortening (bright) precedes T2 shortening (dark) during myelination by approximately 2-3 months.',
      },
    ],
    source: 'Kuhne F, et al. Assessment of myelination in infants and young children by T1 relaxation time measurements using the MP2RAGE sequence. Pediatr Radiol. 2021;51(11):2058-2068. PMC8476383. Figure 5.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'epilepsy-mri-protocol',
    title: 'Epilepsy MRI Protocol Sequences',
    description:
      'The ILAE Neuroimaging Task Force recommends a dedicated epilepsy MRI protocol that includes specific sequences optimized for detecting epileptogenic lesions. Standard brain MRI is insufficient and may miss up to 50% of structural abnormalities relevant to epilepsy surgery planning.',
    difficulty: 'basic',
    imagePath: '/images/mri/epilepsy-mri-protocol-real.jpg',
    imageAlt:
      'Clinical MRI panels comparing DWI and T2 FLAIR sequences across different epilepsy-related conditions including status epilepticus, acute ischemic infarction, autoimmune encephalitis, and PRES',
    modality: 'MRI',
    sequence: 'Multiple',
    plane: 'Multiple',
    clinicalSignificance:
      'ILAE Neuroimaging Task Force recommends dedicated epilepsy MRI protocol with thin-cut coronal oblique slices perpendicular to hippocampal long axis. Standard \'brain MRI\' is insufficient — up to 50% of lesions may be missed without epilepsy-specific sequences.',
    annotations: [
      {
        id: 't1-3d-volumetric',
        x: 25,
        y: 30,
        label: 'T1 3D volumetric',
        description:
          'High-resolution anatomic detail; hippocampal volumetry, cortical thickness measurement, and detection of subtle cortical dysplasia.',
      },
      {
        id: 't2-coronal-oblique',
        x: 75,
        y: 30,
        label: 'T2 coronal oblique',
        description:
          'Perpendicular to hippocampal long axis; best for hippocampal internal structure and mesial temporal sclerosis detection.',
      },
      {
        id: 'flair',
        x: 25,
        y: 70,
        label: 'FLAIR',
        description:
          'Most sensitive for cortical and juxtacortical lesions; detects FCD, cortical tubers, gliosis, and encephalitis.',
      },
      {
        id: 'dwi-adc',
        x: 75,
        y: 70,
        label: 'DWI/ADC',
        description:
          'Detects acute seizure-related changes, cytotoxic edema, and acute ischemia. Restricted diffusion in acute phase.',
      },
      {
        id: 'swi',
        x: 50,
        y: 50,
        label: 'SWI',
        description:
          'Susceptibility-weighted imaging detects calcifications, blood products, and cavernous malformations often missed on conventional sequences.',
      },
    ],
    source: 'Huang TH, et al. Brain imaging in epilepsy -- focus on diffusion-weighted imaging. Diagnostics (Basel). 2022;12(11):2602. PMC9689253. Figure 3.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
];

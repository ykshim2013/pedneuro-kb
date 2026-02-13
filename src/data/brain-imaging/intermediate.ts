import type { BrainImagingPattern } from './types';

export const intermediatePatterns: BrainImagingPattern[] = [
  {
    id: 'mesial-temporal-sclerosis',
    title: 'Mesial Temporal Sclerosis (Hippocampal Sclerosis)',
    description:
      'Mesial temporal sclerosis (MTS) is the most common structural abnormality found in patients with temporal lobe epilepsy. MRI findings include hippocampal volume loss, increased T2/FLAIR signal, loss of internal architecture, and ipsilateral temporal horn dilation. Quantitative hippocampal volumetry increases diagnostic sensitivity, and concordance with EEG lateralization is essential for surgical planning.',
    difficulty: 'intermediate',
    imagePath: '/images/mri/mesial-temporal-sclerosis-real.jpg',
    imageAlt:
      'Clinical coronal and axial MRI showing marked hippocampal asymmetry with hippocampal atrophy and increased T2/FLAIR signal intensity consistent with mesial temporal sclerosis',
    modality: 'MRI',
    sequence: 'FLAIR / T2 coronal',
    plane: 'Coronal',
    syndrome: 'Temporal Lobe Epilepsy',
    clinicalSignificance:
      'Most common structural finding in temporal lobe epilepsy; bilateral in 10-20%. Quantitative hippocampal volumetry increases diagnostic sensitivity. Concordance with EEG lateralization is essential for surgical planning. MTS with hippocampal FLAIR signal change and volume loss has excellent surgical outcome (70-80% seizure freedom).',
    annotations: [
      {
        id: 'normal-hippocampus',
        x: 25,
        y: 50,
        label: 'Normal hippocampus',
        description:
          'Left hippocampus with preserved volume, normal T2/FLAIR signal, and intact internal architecture (hippocampal digitations).',
      },
      {
        id: 'atrophic-hippocampus',
        x: 75,
        y: 50,
        label: 'Atrophic hippocampus',
        description:
          'Right hippocampus with volume loss compared to contralateral side; hallmark finding of MTS.',
      },
      {
        id: 'flair-hyperintensity',
        x: 72,
        y: 42,
        label: 'FLAIR hyperintensity',
        description:
          'Increased FLAIR/T2 signal in the sclerotic hippocampus reflects gliosis and neuronal loss.',
      },
      {
        id: 'temporal-horn-dilation',
        x: 78,
        y: 60,
        label: 'Temporal horn dilation',
        description:
          'Ipsilateral temporal horn enlargement (ex vacuo) from hippocampal volume loss.',
      },
      {
        id: 'mammillary-body-atrophy',
        x: 55,
        y: 35,
        label: 'Mammillary body atrophy',
        description:
          'Ipsilateral fornix and mammillary body atrophy from Wallerian degeneration of the hippocampal efferent pathway.',
      },
    ],
    source: 'Villamizar-Torres D, et al. Mesial temporal sclerosis and epilepsy: a narrative review. Acta Epileptologica. 2024;6:30. PMC11960268. Figure 3.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'focal-cortical-dysplasia',
    title: 'Focal Cortical Dysplasia (FCD)',
    description:
      'Focal cortical dysplasia is the most common cause of drug-resistant focal epilepsy requiring surgery in children. MRI features include cortical thickening, blurring of the gray-white matter junction, and the transmantle sign (a hyperintense band extending from cortex to ventricle on FLAIR), which is pathognomonic for FCD type IIb. Detection requires dedicated epilepsy MRI protocol, preferably at 3T.',
    difficulty: 'intermediate',
    imagePath: '/images/mri/focal-cortical-dysplasia-real.jpg',
    imageAlt:
      'Clinical coronal SPOILED GRE and FLAIR MRI showing abnormal hyperintense signal band extending from ventricle to subcortical area (transmantle sign) with cortical thickening characteristic of focal cortical dysplasia type IIb',
    modality: 'MRI',
    sequence: 'FLAIR / T1',
    plane: 'Coronal',
    syndrome: 'Drug-Resistant Focal Epilepsy',
    clinicalSignificance:
      'Most common cause of drug-resistant focal epilepsy requiring surgery in children. FCD type II (with balloon cells) is most reliably detected on MRI. Transmantle sign is pathognomonic for type IIb. 3T MRI with epilepsy protocol recommended; surgical resection achieves seizure freedom in 60-80%.',
    annotations: [
      {
        id: 'cortical-thickening',
        x: 30,
        y: 35,
        label: 'Cortical thickening',
        description:
          'Increased cortical thickness at the dysplastic region compared to normal adjacent cortex.',
      },
      {
        id: 'blurred-gm-wm',
        x: 32,
        y: 45,
        label: 'Blurred GM-WM junction',
        description:
          'Loss of normal gray-white matter boundary; highly suggestive of FCD.',
      },
      {
        id: 'transmantle-sign',
        x: 28,
        y: 55,
        label: 'Transmantle sign',
        description:
          'FLAIR hyperintense band extending from cortex to ventricle; pathognomonic for FCD type IIb.',
      },
      {
        id: 'bottom-of-sulcus',
        x: 30,
        y: 30,
        label: 'Bottom-of-sulcus',
        description:
          'FCD type IIb characteristically located at the depth of a sulcus with a prominent transmantle sign.',
      },
      {
        id: 'normal-contralateral',
        x: 70,
        y: 45,
        label: 'Normal contralateral',
        description:
          'Normal gray-white matter differentiation on contralateral side for comparison.',
      },
    ],
    source: 'Matsuo T, et al. Case report: the origin of transmantle-like features. Front Radiol. 2022;2:927764. PMC10365096. Figure 2.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'cortical-tubers-tsc',
    title: 'Cortical Tubers and Subependymal Nodules (TSC)',
    description:
      'Tuberous sclerosis complex (TSC) is characterized by hamartomatous lesions throughout the brain including cortical tubers, subependymal nodules (SENs), subependymal giant cell astrocytomas (SEGAs), and white matter radial migration lines. Cortical tubers are the epileptogenic lesion, and their number and location correlate with seizure severity and cognitive outcome.',
    difficulty: 'intermediate',
    imagePath: '/images/mri/cortical-tubers-tsc-real.jpg',
    imageAlt:
      'Clinical axial T2-weighted MRI of a 12-year-old male with TSC showing cortical tubers as hyperintense areas, subependymal nodules along ventricular borders, radial migration line, and white matter cystic lesion',
    modality: 'MRI',
    sequence: 'FLAIR / T1 / T2',
    plane: 'Axial',
    syndrome: 'Tuberous Sclerosis Complex',
    clinicalSignificance:
      'Cortical tubers are the epileptogenic lesion in TSC; tuber number and location correlate with seizure severity and cognitive outcome. Serial MRI surveillance for SEGA recommended every 1-3 years until age 25. Tuber cyst-like change may evolve over time. mTOR inhibitor (everolimus) can reduce SEGA volume.',
    annotations: [
      {
        id: 'cortical-tubers',
        x: 30,
        y: 35,
        label: 'Cortical tubers',
        description:
          'FLAIR hyperintense cortical/subcortical lesions with disorganized architecture; the epileptogenic lesion in TSC.',
      },
      {
        id: 'subependymal-nodules',
        x: 55,
        y: 45,
        label: 'Subependymal nodules',
        description:
          'Small calcified nodules along ventricular walls; hallmark of TSC. Often calcify with age.',
      },
      {
        id: 'sega',
        x: 45,
        y: 30,
        label: 'SEGA',
        description:
          'Subependymal giant cell astrocytoma at foramen of Monro; growing SEN >1 cm or enhancing. Can cause obstructive hydrocephalus.',
      },
      {
        id: 'radial-migration-lines',
        x: 65,
        y: 55,
        label: 'Radial migration lines',
        description:
          'White matter bands extending from ventricle to cortex on FLAIR; represent disordered neuronal migration.',
      },
      {
        id: 'multiple-locations',
        x: 70,
        y: 30,
        label: 'Multiple locations',
        description:
          'Tubers are typically multiple and distributed across both hemispheres; tuber count correlates with seizure severity and cognitive outcome.',
      },
    ],
    source: 'von Ranke FM, et al. Imaging of tuberous sclerosis complex: a pictorial review. Radiol Bras. 2017;50(1):48-54. PMC5347503. Figure 2.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'hie-patterns',
    title: 'Hypoxic-Ischemic Injury Patterns',
    description:
      'Hypoxic-ischemic encephalopathy (HIE) produces distinct injury patterns on MRI depending on the severity and duration of the insult. Partial prolonged hypoxia causes watershed (border zone) white matter injury, while acute total asphyxia causes profound injury to metabolically active deep gray structures (basal ganglia and thalami). DWI is the most sensitive sequence in the acute phase.',
    difficulty: 'intermediate',
    imagePath: '/images/mri/hie-patterns-real.jpg',
    imageAlt:
      'Clinical neonatal MRI showing HIE injury patterns on DWI/ADC: watershed (peripheral) type with bilateral diffusion restriction, basal ganglia-thalamus (central) pattern, and global pattern with widespread diffusion restriction',
    modality: 'MRI',
    sequence: 'DWI / T1 / T2',
    plane: 'Axial',
    syndrome: 'Neonatal Encephalopathy',
    clinicalSignificance:
      'Pattern of injury predicts motor and cognitive outcome. Basal ganglia/thalami pattern is associated with dyskinetic cerebral palsy. Watershed pattern is associated with cognitive deficits with relative motor sparing. DWI is most sensitive in the first 24-72 hours. Therapeutic hypothermia modifies injury pattern and improves outcomes.',
    annotations: [
      {
        id: 'watershed-pattern',
        x: 15,
        y: 40,
        label: 'Watershed pattern',
        description:
          'Parasagittal white matter injury from partial prolonged hypoxia; affects border zones between major arterial territories.',
      },
      {
        id: 'profound-pattern',
        x: 65,
        y: 40,
        label: 'Profound pattern',
        description:
          'Bilateral basal ganglia and thalami injury from acute total asphyxia; affects metabolically active deep gray structures.',
      },
      {
        id: 'perirolandic-cortex',
        x: 65,
        y: 25,
        label: 'Perirolandic cortex',
        description:
          'Central cortex involvement in profound injury pattern; correlates with spastic quadriplegic cerebral palsy.',
      },
      {
        id: 'periventricular-wm',
        x: 15,
        y: 60,
        label: 'Periventricular WM',
        description:
          'Periventricular white matter injury predominates in preterm infants (periventricular leukomalacia).',
      },
      {
        id: 'dwi-restriction',
        x: 40,
        y: 30,
        label: 'DWI restriction',
        description:
          'Diffusion restriction appears earliest (24-72 hours) and is the most sensitive acute imaging finding.',
      },
      {
        id: 'outcome-correlation',
        x: 40,
        y: 75,
        label: 'Outcome correlation',
        description:
          'Watershed pattern: cognitive deficits, relative motor sparing. Profound pattern: dyskinetic/spastic CP, severe motor impairment.',
      },
    ],
    source: 'Lakatos A, et al. Neurodevelopmental effect of intracranial hemorrhage observed in hypoxic ischemic brain injury in hypothermia-treated asphyxiated neonates -- an MRI study. BMC Pediatr. 2019;19:430. PMC6849254. Figure 3.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
];

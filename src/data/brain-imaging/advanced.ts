import type { BrainImagingPattern } from './types';

export const advancedPatterns: BrainImagingPattern[] = [
  {
    id: 'leukodystrophy-patterns',
    title: 'Leukodystrophy White Matter Patterns',
    description:
      'Leukodystrophies are inherited white matter disorders with characteristic MRI patterns that narrow the differential diagnosis. Key differentiating features include the direction of progression (centrifugal vs centripetal), regional predominance (anterior vs posterior), involvement of subcortical U-fibers, and presence of contrast enhancement. MR spectroscopy provides additional diagnostic clues.',
    difficulty: 'advanced',
    imagePath: '/images/mri/leukodystrophy-patterns.svg',
    imageAlt:
      'Four-panel axial T2/FLAIR MRI comparison showing characteristic white matter patterns of periventricular (MLD/Krabbe), subcortical U-fiber (Canavan), frontal-predominant (Alexander), and posterior-predominant (X-ALD) leukodystrophies',
    modality: 'MRI',
    sequence: 'T2 / FLAIR',
    plane: 'Axial',
    clinicalSignificance:
      'MRI pattern narrows differential diagnosis significantly. Direction of progression (centrifugal vs centripetal) and regional predominance (anterior vs posterior) are key differentiators. MR spectroscopy assists diagnosis (elevated NAA in Canavan, elevated lactate in mitochondrial). Serial MRI documents progression rate and treatment response.',
    annotations: [
      {
        id: 'periventricular-pattern',
        x: 15,
        y: 45,
        label: 'Periventricular pattern',
        description:
          'Butterfly-shaped confluent T2 hyperintensity spreading outward from ventricles. Seen in metachromatic leukodystrophy (MLD) and Krabbe disease.',
      },
      {
        id: 'subcortical-u-fiber',
        x: 50,
        y: 30,
        label: 'Subcortical U-fiber involvement',
        description:
          'Early subcortical white matter involvement including U-fibers. Characteristic of Canavan disease (with elevated NAA) and L-2-hydroxyglutaric aciduria.',
      },
      {
        id: 'frontal-predominant',
        x: 85,
        y: 30,
        label: 'Frontal-predominant pattern',
        description:
          'Anterior-predominant white matter disease with possible contrast enhancement. Alexander disease (macrocephaly + frontal WM disease + basal ganglia involvement).',
      },
      {
        id: 'posterior-predominant',
        x: 50,
        y: 65,
        label: 'Posterior-predominant pattern',
        description:
          'Parieto-occipital white matter with enhancing leading edge. X-linked adrenoleukodystrophy (ALD); enhancement indicates active demyelination.',
      },
      {
        id: 'pattern-recognition',
        x: 85,
        y: 75,
        label: 'Pattern recognition approach',
        description:
          'Direction of progression (centrifugal vs centripetal) and regional predominance (anterior vs posterior) narrows the differential diagnosis significantly.',
      },
    ],
    source: 'van der Knaap MS, Bugiani M. Acta Neuropathol. 2017;134(3):351-382.',
    license: 'Educational diagram',
  },
  {
    id: 'posterior-fossa-tumors',
    title: 'Posterior Fossa Tumors in Children',
    description:
      'Posterior fossa tumors are the most common solid brain tumors in children. The four major types are medulloblastoma, pilocytic astrocytoma, ependymoma, and diffuse intrinsic pontine glioma (DIPG/DMG). Each has characteristic imaging features that guide diagnosis, surgical planning, and prognostication.',
    difficulty: 'advanced',
    imagePath: '/images/mri/posterior-fossa-tumors.svg',
    imageAlt:
      'Sagittal T1 post-contrast and T2 MRI panels showing characteristic imaging features of medulloblastoma (midline vermian), pilocytic astrocytoma (cyst with mural nodule), DIPG (diffuse pontine expansion), and ependymoma (extending through foramina)',
    modality: 'MRI',
    sequence: 'T1 post-contrast / T2',
    plane: 'Sagittal',
    clinicalSignificance:
      'Posterior fossa tumors are the most common solid pediatric brain tumors. Diffusion restriction on DWI suggests medulloblastoma (high cellularity). \'Cyst with mural nodule\' strongly suggests pilocytic astrocytoma (WHO grade I). DIPG/DMG has a median survival of 9-11 months; diagnosis is radiographic.',
    annotations: [
      {
        id: 'medulloblastoma',
        x: 15,
        y: 45,
        label: 'Medulloblastoma',
        description:
          'Solid midline vermian mass filling 4th ventricle. Restricted diffusion (high cellularity). Homogeneous enhancement. Most common malignant pediatric brain tumor.',
      },
      {
        id: 'pilocytic-astrocytoma',
        x: 50,
        y: 45,
        label: 'Pilocytic astrocytoma',
        description:
          'Cystic mass with enhancing mural nodule in cerebellar hemisphere. WHO grade I. Excellent prognosis with surgical resection.',
      },
      {
        id: 'dipg-dmg',
        x: 85,
        y: 45,
        label: 'DIPG/DMG',
        description:
          'Diffuse pontine expansion with T2 hyperintensity. Minimal or no enhancement. Encases basilar artery. Diagnosis is primarily radiographic; biopsy not routinely performed.',
      },
      {
        id: 'ependymoma',
        x: 50,
        y: 75,
        label: 'Ependymoma',
        description:
          'Plastic tumor that extends through foramina of Luschka and Magendie ("toothpaste-like"). Heterogeneous enhancement. Calcification common.',
      },
      {
        id: 'hydrocephalus',
        x: 50,
        y: 20,
        label: 'Hydrocephalus',
        description:
          'Obstructive hydrocephalus from 4th ventricle compression. Dilated lateral and 3rd ventricles. May present with headache, vomiting, papilledema.',
      },
    ],
    source: 'Udaka YT, Packer RJ. Neurol Clin. 2018;36(3):533-556.',
    license: 'Educational diagram',
  },
  {
    id: 'arterial-territory-strokes',
    title: 'Arterial Territory Strokes in Children',
    description:
      'Pediatric stroke etiology differs fundamentally from adults, with arteriopathies (focal cerebral arteriopathy, moyamoya) being more common than atherosclerosis. Recognition of arterial territory patterns on MRI is essential for rapid diagnosis. DWI is the most sensitive acute imaging sequence, and MRA/CTA is essential to evaluate for underlying arteriopathy.',
    difficulty: 'advanced',
    imagePath: '/images/mri/arterial-territory-strokes.svg',
    imageAlt:
      'Axial DWI and MRA MRI showing arterial territory distributions of MCA, ACA, PCA, lenticulostriate, and vertebrobasilar territories with corresponding clinical deficits',
    modality: 'MRI',
    sequence: 'DWI / MRA / FLAIR',
    plane: 'Axial',
    clinicalSignificance:
      'Pediatric stroke etiology differs from adults: arteriopathy (focal cerebral arteriopathy, moyamoya) more common than atherosclerosis. MCA territory most commonly affected. Neonatal stroke often presents with seizures rather than focal deficits. DWI is the most sensitive acute sequence. MRA/CTA essential to evaluate for arteriopathy.',
    annotations: [
      {
        id: 'mca-territory',
        x: 25,
        y: 40,
        label: 'MCA territory',
        description:
          'Lateral frontal, parietal, and temporal cortex. Largest vascular territory and most commonly affected in pediatric stroke. Hemiparesis, aphasia (dominant), neglect (non-dominant).',
      },
      {
        id: 'aca-territory',
        x: 50,
        y: 15,
        label: 'ACA territory',
        description:
          'Medial frontal and parietal cortex. Contralateral leg weakness > arm, personality changes, urinary incontinence.',
      },
      {
        id: 'pca-territory',
        x: 65,
        y: 75,
        label: 'PCA territory',
        description:
          'Occipital lobe, medial temporal. Contralateral homonymous hemianopia, visual agnosia, memory impairment.',
      },
      {
        id: 'lenticulostriate-territory',
        x: 35,
        y: 55,
        label: 'Lenticulostriate territory',
        description:
          'Basal ganglia, internal capsule. Common territory in neonatal stroke. Presents with seizures in neonates, hemiparesis in older children.',
      },
      {
        id: 'vertebrobasilar-territory',
        x: 50,
        y: 88,
        label: 'Vertebrobasilar territory',
        description:
          'Brainstem, cerebellum. Vertigo, ataxia, cranial nerve palsies, crossed signs. Posterior circulation strokes are less common but often missed.',
      },
    ],
    source: 'Mackay MT et al. Lancet Neurol. 2011;10(1):52-60.',
    license: 'Educational diagram',
  },
  {
    id: 'holoprosencephaly-spectrum',
    title: 'Holoprosencephaly Spectrum',
    description:
      'Holoprosencephaly (HPE) is the most common forebrain malformation, resulting from incomplete cleavage of the prosencephalon. It exists on a severity spectrum from alobar (complete failure of hemispheric separation) to lobar (mostly separated hemispheres with subtle fusion). The middle interhemispheric variant (MIH) is an atypical form with selective posterior frontal and parietal nonseparation.',
    difficulty: 'advanced',
    imagePath: '/images/mri/holoprosencephaly-spectrum.svg',
    imageAlt:
      'Four-panel axial and coronal MRI comparison showing the holoprosencephaly spectrum from alobar (single monoventricle) through semilobar and lobar forms to the middle interhemispheric variant',
    modality: 'MRI',
    sequence: 'T1 / T2',
    plane: 'Axial and Coronal',
    clinicalSignificance:
      'Most common forebrain malformation (1:10,000-20,000 live births). Severity spectrum from alobar (incompatible with long survival) to lobar (variable cognitive outcome). Associated with SHH, ZIC2, SIX3, TGIF1 mutations. Absent septum pellucidum with fused frontal horns in lobar HPE can be subtle. Maternal diabetes is a recognized risk factor.',
    annotations: [
      {
        id: 'alobar-hpe',
        x: 15,
        y: 45,
        label: 'Alobar HPE',
        description:
          'Single monoventricle, completely fused thalami, absent falx and interhemispheric fissure. Most severe form. Incompatible with prolonged survival.',
      },
      {
        id: 'semilobar-hpe',
        x: 40,
        y: 45,
        label: 'Semilobar HPE',
        description:
          'Partial posterior interhemispheric separation, partially formed falx posteriorly, fused anterior frontal lobes. Moderate severity.',
      },
      {
        id: 'lobar-hpe',
        x: 65,
        y: 45,
        label: 'Lobar HPE',
        description:
          'Mostly separated hemispheres with fused frontal horns and absent septum pellucidum. Mildest form. Variable cognitive outcome.',
      },
      {
        id: 'mih-variant',
        x: 85,
        y: 45,
        label: 'MIH variant',
        description:
          'Middle interhemispheric variant: posterior frontal and parietal nonseparation with normal anterior and posterior structures. Atypical form.',
      },
      {
        id: 'facial-correlation',
        x: 50,
        y: 85,
        label: 'Facial correlation',
        description:
          'Severity of brain malformation correlates with facial dysmorphism ("the face predicts the brain"). Ranges from cyclopia (alobar) to midface hypoplasia (lobar).',
      },
    ],
    source: 'Dubourg C et al. Orphanet J Rare Dis. 2007;2:8.',
    license: 'Educational diagram',
  },
];

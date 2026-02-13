import type { CTPattern } from './types';

export const basicPatterns: CTPattern[] = [
  {
    id: 'normal-ct-anatomy',
    title: 'Normal Pediatric CT Anatomy',
    description:
      'Normal axial non-contrast CT of the pediatric brain showing age-appropriate gray-white matter differentiation, normal ventricular size, and key anatomical landmarks. Understanding normal CT anatomy is essential before identifying pathology.',
    difficulty: 'basic',
    imagePath: '/images/ct/normal-ct-anatomy-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT of a pediatric brain at the level of the basal ganglia showing normal gray-white matter differentiation, symmetric lateral ventricles, and midline structures',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'Normal pediatric CT serves as the baseline for identifying pathology. Key landmarks include symmetric gray-white differentiation, normal ventricular size (Evans index <0.3), visible basal ganglia and thalami, and age-appropriate sulcal pattern. In neonates and young infants, higher brain water content creates different density patterns than in older children.',
    annotations: [
      {
        id: 'gray-matter',
        x: 22,
        y: 28,
        label: 'Gray matter (cortex)',
        description:
          'Cerebral cortex appears relatively hyperdense (30-40 HU) compared to underlying white matter on non-contrast CT due to higher cellular density and blood volume. Cortical thickness is normally 2-4 mm. Loss of gray-white differentiation is an ominous sign of diffuse cerebral edema or ischemia.',
      },
      {
        id: 'white-matter',
        x: 35,
        y: 35,
        label: 'White matter',
        description:
          'Cerebral white matter appears relatively hypodense (20-30 HU) compared to cortex due to myelin lipid content. In neonates and young infants (<6 months), unmyelinated white matter has higher water content and appears more hypodense, making gray-white differentiation less distinct than in older children.',
      },
      {
        id: 'lateral-ventricles',
        x: 50,
        y: 42,
        label: 'Lateral ventricles',
        description:
          'CSF-filled cavities appearing hypodense (0-5 HU) on CT. Evans index (maximum frontal horn width divided by maximum inner table width) should be <0.3 in normal patients. Asymmetric ventricles are a normal variant in up to 5-10% of children. Temporal horn dilation is the earliest sign of hydrocephalus.',
      },
      {
        id: 'basal-ganglia',
        x: 42,
        y: 50,
        label: 'Basal ganglia',
        description:
          'The caudate nucleus, putamen, and globus pallidus form the basal ganglia, appearing as gray matter density structures flanking the lateral ventricles and internal capsule. These structures are selectively vulnerable to hypoxic-ischemic injury, carbon monoxide poisoning, and metabolic disorders. Bilateral basal ganglia hyperdensity suggests acute hemorrhage or calcification.',
      },
      {
        id: 'sylvian-fissure',
        x: 15,
        y: 50,
        label: 'Sylvian fissure',
        description:
          'The lateral sulcus (Sylvian fissure) separates the frontal and parietal lobes from the temporal lobe and contains the middle cerebral artery (MCA) branches. A hyperdense MCA sign (acute thrombus appearing bright in the Sylvian fissure) indicates acute MCA territory stroke. Asymmetric Sylvian fissure effacement suggests ipsilateral mass effect.',
      },
      {
        id: 'falx-cerebri',
        x: 50,
        y: 20,
        label: 'Falx cerebri',
        description:
          'Midline dural reflection separating the cerebral hemispheres. Appears as a thin hyperdense line in the interhemispheric fissure due to calcification (increases with age). The falx serves as a key midline landmark: deviation indicates subfalcine herniation from mass effect. Falx calcification is physiologic in older children and adolescents.',
      },
      {
        id: 'skull-tables',
        x: 78,
        y: 15,
        label: 'Skull (inner and outer tables)',
        description:
          'The calvarium consists of outer table, diploe (marrow space), and inner table, all best evaluated on bone window (W:2000/L:500). In infants, sutures are open and fontanelles patent; premature sutural closure (craniosynostosis) is evaluated on 3D CT reconstruction. Skull thickness increases with age. The inner table surface should be smooth; irregularity suggests underlying pathology.',
      },
    ],
    source:
      'Born AP, et al. Normal brain CT in children: a systematic review and proposed reference values. Neuroradiology. 2023;65(7):1091-1105. doi:10.1007/s00234-023-03158-3.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'ct-windows-comparison',
    title: 'CT Window Settings: Brain, Bone, and Subdural',
    description:
      'Demonstration of how different CT window width and level settings reveal different pathology. Brain window (W:80/L:40) optimizes gray-white differentiation. Bone window (W:2000/L:500) shows skull fractures and calcifications. Subdural window (W:200/L:80) improves detection of subtle extra-axial collections.',
    difficulty: 'basic',
    imagePath: '/images/ct/ct-windows-comparison-real.jpg',
    imageAlt:
      'Clinical axial head CT displayed in three different window settings: brain window showing gray-white matter differentiation, bone window showing calvarium and fracture detail, and subdural window showing subtle extra-axial collections',
    window: 'Brain / Bone / Subdural',
    plane: 'Axial',
    clinicalSignificance:
      'Window settings dramatically affect diagnostic yield. Brain window (W:80/L:40) shows parenchymal pathology. Bone window (W:2000/L:500) is essential for fracture detection -- NEVER skip in trauma. Subdural window (W:200/L:80) detects subtle isodense or thin subdural collections missed on standard brain window. Always review head CT in multiple windows.',
    annotations: [
      {
        id: 'brain-window-settings',
        x: 18,
        y: 40,
        label: 'Brain window (W:80/L:40)',
        description:
          'Standard brain window with width 80 HU and level 40 HU optimizes gray-white matter contrast for detecting parenchymal abnormalities including edema, hemorrhage, infarction, and masses. This is the primary window for evaluating brain parenchyma but can miss subtle extra-axial pathology and fractures.',
      },
      {
        id: 'bone-window-settings',
        x: 50,
        y: 40,
        label: 'Bone window (W:2000/L:500)',
        description:
          'Wide window width (2000 HU) and high level (500 HU) optimizes visualization of osseous structures. Essential for detecting linear skull fractures, depressed fractures, and mastoid/paranasal sinus opacification. Must be reviewed in every pediatric trauma CT. Differentiates fractures from sutures by their irregular course, sharp edges, and lack of sclerotic margins.',
      },
      {
        id: 'subdural-window-settings',
        x: 82,
        y: 40,
        label: 'Subdural window (W:200/L:80)',
        description:
          'Intermediate window settings (width 200 HU, level 80 HU) optimized for detecting subtle extra-axial fluid collections. Isodense subdural hematomas (subacute phase, 3 days to 3 weeks) are nearly invisible on standard brain window but become apparent on subdural window due to improved contrast between hematoma and adjacent calvarium or brain surface.',
      },
      {
        id: 'fracture-detection',
        x: 50,
        y: 18,
        label: 'Fracture detection on bone window',
        description:
          'Skull fractures appear as sharp lucent lines disrupting the cortical continuity on bone window. Linear fractures may be invisible on brain window. Key distinguishing features from sutures: fractures are non-sclerotic, do not follow expected suture paths, and may have sharp angulations. Fractures crossing the middle meningeal artery groove increase epidural hematoma risk.',
      },
      {
        id: 'soft-tissue-window',
        x: 18,
        y: 75,
        label: 'Soft tissue window (W:350/L:50)',
        description:
          'Soft tissue window settings optimize visualization of scalp soft tissue swelling, subgaleal hematoma, and cephalohematoma. Scalp swelling overlying a fracture is an important secondary sign of trauma. Subgaleal hematoma (between galea aponeurotica and periosteum) can cross suture lines and may cause significant blood loss in infants.',
      },
      {
        id: 'air-detection',
        x: 82,
        y: 75,
        label: 'Pneumocephalus detection',
        description:
          'Intracranial air (pneumocephalus) appears as extremely hypodense foci (-1000 HU) and is best detected on bone or lung window settings. Presence of intracranial air after trauma indicates an open (compound) fracture or fracture communicating with a paranasal sinus or mastoid air cells. Tension pneumocephalus (Mount Fuji sign) is a neurosurgical emergency.',
      },
    ],
    source: 'Osborn AG et al. Diagnostic Imaging Brain. 4th ed. Elsevier 2024.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
];

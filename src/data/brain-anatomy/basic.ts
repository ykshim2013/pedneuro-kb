import type { AnatomyPattern } from './types';

export const basicPatterns: AnatomyPattern[] = [
  {
    id: 'axial-brain-anatomy',
    title: 'Axial Brain Anatomy at Basal Ganglia Level',
    description:
      'Axial brain anatomy at the level of the basal ganglia, demonstrating major structures visible on cross-section. This reference plane shows the four cortical lobes, deep gray matter structures (caudate nucleus, putamen, globus pallidus, thalamus), the ventricular system (lateral ventricles at the level of the frontal horns and body), major white matter tracts (internal capsule with anterior and posterior limbs), and commissural pathways (corpus callosum). The insula is visible deep to the sylvian fissure.',
    difficulty: 'basic',
    imagePath: '/images/anatomy/axial-brain-anatomy.svg',
    imageAlt:
      'Schematic axial brain diagram at basal ganglia level showing labeled cortical lobes, deep gray structures, ventricular system, and major white matter tracts',
    view: 'Axial',
    system: 'Structural',
    clinicalSignificance:
      'Axial sections at the basal ganglia level are the most commonly used reference plane in clinical neuroimaging. This single slice displays all four lobes (frontal, temporal, parietal, occipital), basal ganglia components (caudate nucleus, putamen, globus pallidus), thalamus, internal capsule (anterior limb containing frontopontine and thalamocortical fibers; posterior limb containing the corticospinal tract), corpus callosum, lateral ventricles, and insula. Abnormalities in these structures correlate with specific clinical deficits: basal ganglia lesions cause movement disorders (dystonia, chorea); thalamic lesions impair sensory relay and consciousness; internal capsule lacunar infarcts produce pure motor hemiparesis; and insular involvement is an early sign of MCA territory infarction.',
    annotations: [
      {
        id: 'frontal-lobe',
        x: 30,
        y: 20,
        label: 'Frontal lobe',
        description:
          'Largest lobe, located anterior to the central sulcus. Contains primary motor cortex (precentral gyrus), premotor and supplementary motor areas, Broca\'s area (left hemisphere, inferior frontal gyrus), and prefrontal cortex for executive function, planning, and behavioral regulation.',
      },
      {
        id: 'temporal-lobe',
        x: 12,
        y: 58,
        label: 'Temporal lobe',
        description:
          'Located inferior to the sylvian fissure. Contains primary auditory cortex (Heschl\'s gyrus), Wernicke\'s area (left posterior superior temporal gyrus), hippocampus (memory consolidation), and amygdala (emotion processing). Temporal lobe epilepsy is the most common focal epilepsy syndrome.',
      },
      {
        id: 'parietal-lobe',
        x: 30,
        y: 75,
        label: 'Parietal lobe',
        description:
          'Located posterior to the central sulcus and superior to the lateral fissure. Contains primary somatosensory cortex (postcentral gyrus), sensory association areas for spatial processing, and the angular and supramarginal gyri involved in language and calculation.',
      },
      {
        id: 'occipital-lobe',
        x: 50,
        y: 88,
        label: 'Occipital lobe',
        description:
          'Most posterior lobe. Contains primary visual cortex (V1, calcarine sulcus) and visual association areas. Lesions produce contralateral homonymous hemianopia. Supplied by the posterior cerebral artery.',
      },
      {
        id: 'caudate-nucleus',
        x: 40,
        y: 38,
        label: 'Caudate nucleus',
        description:
          'C-shaped deep gray structure with its head bordering the lateral ventricle. Involved in motor planning, procedural learning, and cognitive processing. Progressive caudate atrophy is the hallmark neuroimaging finding in Huntington disease.',
      },
      {
        id: 'putamen',
        x: 32,
        y: 48,
        label: 'Putamen',
        description:
          'Largest component of the basal ganglia, located lateral to the globus pallidus. Primary role in motor execution and motor learning. The putamen together with the caudate forms the striatum. Predilection site for kernicterus (bilirubin encephalopathy) in neonates and for hypertensive hemorrhage in adults.',
      },
      {
        id: 'globus-pallidus',
        x: 38,
        y: 50,
        label: 'Globus pallidus',
        description:
          'Medial to the putamen; divided into internal (GPi) and external (GPe) segments. Major output nucleus of the basal ganglia relaying to the thalamus. T1 hyperintensity of the globus pallidus is seen in hepatic disease (manganese deposition), total parenteral nutrition, and neurofibromatosis type 1.',
      },
      {
        id: 'thalamus',
        x: 50,
        y: 55,
        label: 'Thalamus',
        description:
          'Paired ovoid gray matter structures flanking the third ventricle. The primary sensory relay center for all modalities except olfaction. Contains multiple functionally distinct nuclei (ventral posterolateral for somatosensory, lateral geniculate for vision, medial geniculate for audition). Bilateral thalamic lesions occur in deep venous thrombosis, acute necrotizing encephalopathy, and Japanese encephalitis.',
      },
      {
        id: 'internal-capsule',
        x: 36,
        y: 44,
        label: 'Internal capsule',
        description:
          'V-shaped white matter tract between the caudate/thalamus medially and the lentiform nucleus laterally. The posterior limb (PLIC) contains the corticospinal tract and is myelinated at birth. The anterior limb (ALIC) contains frontopontine and thalamocortical fibers. Lacunar infarcts of the PLIC cause contralateral pure motor hemiparesis.',
      },
      {
        id: 'corpus-callosum',
        x: 50,
        y: 32,
        label: 'Corpus callosum',
        description:
          'Largest white matter commissure connecting the cerebral hemispheres. Comprises genu (anterior, connecting prefrontal cortices), body (connecting motor and sensory cortices), and splenium (posterior, connecting visual and parietal cortices). Agenesis of the corpus callosum is a recognized malformation associated with Aicardi syndrome, holoprosencephaly spectrum, and many genetic syndromes.',
      },
      {
        id: 'insula',
        x: 18,
        y: 45,
        label: 'Insula',
        description:
          'Deep cortical structure located within the sylvian fissure, covered by the frontal, parietal, and temporal opercula. Supplied by the middle cerebral artery. Functions include interoception, pain processing, and autonomic regulation. Early insular involvement is a sensitive sign of MCA territory infarction (insular ribbon sign on CT).',
      },
      {
        id: 'lateral-ventricles',
        x: 50,
        y: 42,
        label: 'Lateral ventricles',
        description:
          'Paired CSF-filled cavities comprising frontal horns, body, atria (trigone), temporal horns, and occipital horns. The choroid plexus within produces CSF. Ventricular enlargement may indicate hydrocephalus (with transependymal CSF flow) or cerebral atrophy (ex vacuo dilation). Asymmetric enlargement suggests obstructive pathology at the foramen of Monro.',
      },
    ],
    source:
      'Netter FH. Atlas of Human Anatomy. 7th ed. Elsevier; 2019.',
    license: 'Educational schematic diagram',
  },
  {
    id: 'sagittal-midline-anatomy',
    title: 'Sagittal Midline Brain Anatomy',
    description:
      'Midsagittal view of the brain demonstrating midline structures critical for pediatric neuroimaging interpretation. This plane reveals the corpus callosum (genu, body, splenium), the complete ventricular system (lateral ventricle body, third ventricle, cerebral aqueduct, fourth ventricle), brainstem divisions (midbrain, pons, medulla), cerebellum (vermis and hemispheres), pituitary gland, and hypothalamus. The midsagittal plane is essential for evaluating posterior fossa malformations and craniocervical junction anomalies.',
    difficulty: 'basic',
    imagePath: '/images/anatomy/sagittal-midline-anatomy.svg',
    imageAlt:
      'Schematic midsagittal brain diagram showing corpus callosum, ventricular system, brainstem, cerebellum, and pituitary gland',
    view: 'Sagittal',
    system: 'Structural',
    clinicalSignificance:
      'The midsagittal plane is the key imaging plane for evaluating several critical pediatric neurological conditions. It reveals the corpus callosum (agenesis or dysgenesis associated with Aicardi syndrome, holoprosencephaly, and many genetic syndromes), cerebellar vermis (hypoplasia in Dandy-Walker malformation; molar tooth sign in Joubert syndrome), brainstem (diffuse pontine expansion in DIPG/DMG), and pituitary gland (height varies by age; craniopharyngioma is the most common suprasellar tumor in children). This is the primary plane for evaluating Chiari malformations (tonsillar herniation below the foramen magnum) and craniocervical junction anomalies including basilar invagination and atlantoaxial instability.',
    annotations: [
      {
        id: 'cc-genu',
        x: 38,
        y: 28,
        label: 'Corpus callosum - Genu',
        description:
          'Anterior portion of the corpus callosum connecting the prefrontal cortices bilaterally. The rostrum extends inferiorly from the genu. Genu myelination is complete by approximately 6 months of age.',
      },
      {
        id: 'cc-body',
        x: 48,
        y: 22,
        label: 'Corpus callosum - Body',
        description:
          'Middle portion of the corpus callosum connecting motor, sensory, and association cortices between hemispheres. Thinning of the body occurs in hydrocephalus due to stretching by the dilated ventricles.',
      },
      {
        id: 'cc-splenium',
        x: 60,
        y: 28,
        label: 'Corpus callosum - Splenium',
        description:
          'Posterior portion connecting visual and parietal cortices bilaterally. The splenium myelinates before the genu (by approximately 4 months). Splenial lesions are seen in acute demyelinating encephalomyelitis (ADEM), clinically mild encephalitis/encephalopathy with a reversible splenial lesion (MERS), and anti-epileptic drug toxicity.',
      },
      {
        id: 'lateral-ventricle',
        x: 45,
        y: 32,
        label: 'Lateral ventricle (body)',
        description:
          'Body of the lateral ventricle seen in midsagittal section as a narrow CSF space above the thalamus. The lateral ventricles are normally narrow in this plane; prominence suggests hydrocephalus or atrophy.',
      },
      {
        id: 'third-ventricle',
        x: 50,
        y: 42,
        label: 'Third ventricle',
        description:
          'Midline slit-like cavity between the paired thalami. Contains the massa intermedia (interthalamic adhesion) crossing its cavity. The hypothalamic and infundibular recesses are located anteroinferiorly. Hamartoma of the tuber cinereum (hypothalamic hamartoma) arises from the floor of the third ventricle and causes gelastic seizures.',
      },
      {
        id: 'aqueduct',
        x: 55,
        y: 50,
        label: 'Cerebral aqueduct (of Sylvius)',
        description:
          'Narrow channel (1-2 mm diameter) connecting the third and fourth ventricles through the midbrain. Aqueductal stenosis is the most common cause of congenital obstructive hydrocephalus, producing dilation of the lateral and third ventricles with a normal-sized fourth ventricle. Can be congenital (X-linked L1CAM mutation) or acquired (post-hemorrhagic, post-infectious).',
      },
      {
        id: 'fourth-ventricle',
        x: 58,
        y: 58,
        label: 'Fourth ventricle',
        description:
          'Diamond-shaped cavity located between the brainstem anteriorly and the cerebellum posteriorly. CSF exits through the median foramen of Magendie and the paired lateral foramina of Luschka into the subarachnoid space. Fourth ventricle outlet obstruction produces dilation of all four ventricles.',
      },
      {
        id: 'brainstem',
        x: 52,
        y: 55,
        label: 'Brainstem',
        description:
          'Comprises the midbrain (superior, containing cerebral peduncles and superior/inferior colliculi), pons (middle, ventral prominence), and medulla oblongata (inferior, continuous with spinal cord). Contains cranial nerve nuclei (III-XII), reticular activating system, respiratory and cardiovascular centers, and ascending/descending long tracts.',
      },
      {
        id: 'cerebellum',
        x: 68,
        y: 60,
        label: 'Cerebellum',
        description:
          'Located in the posterior fossa. The vermis (midline) is best evaluated on midsagittal imaging and is critical for diagnosing Dandy-Walker malformation (vermian hypoplasia with cystic dilation of the fourth ventricle) and Joubert syndrome (molar tooth sign from vermian hypoplasia with thickened elongated superior cerebellar peduncles). Coordinates balance, motor tone, and fine motor movements.',
      },
      {
        id: 'pituitary',
        x: 42,
        y: 52,
        label: 'Pituitary gland',
        description:
          'Located in the sella turcica. Normal height varies by age and sex (increases during puberty, especially in females). Craniopharyngioma is the most common suprasellar tumor in children, often with calcification and a cystic component. Ectopic posterior pituitary bright spot on T1 is seen in septo-optic dysplasia and congenital hypopituitarism.',
      },
    ],
    source:
      'Barkovich AJ, Raybaud C. Pediatric Neuroimaging. 6th ed. Wolters Kluwer; 2019.',
    license: 'Educational schematic diagram',
  },
  {
    id: 'coronal-brain-anatomy',
    title: 'Coronal Brain Anatomy at Hippocampal Level',
    description:
      'Coronal section at the level of the hippocampus demonstrating mesial temporal structures (hippocampus, amygdala), temporal horn of the lateral ventricle, sylvian fissure, basal ganglia, corpus callosum, and cingulate gyrus. This is the standard imaging plane for evaluating mesial temporal sclerosis in epilepsy surgery planning, as recommended by the ILAE Neuroimaging Task Force.',
    difficulty: 'basic',
    imagePath: '/images/anatomy/coronal-brain-anatomy.svg',
    imageAlt:
      'Schematic coronal brain diagram at hippocampal level showing labeled mesial temporal structures, basal ganglia, ventricles, and corpus callosum',
    view: 'Coronal',
    system: 'Structural',
    clinicalSignificance:
      'The coronal plane perpendicular to the hippocampal long axis is the standard for evaluating mesial temporal sclerosis (MTS) in epilepsy surgery planning, as recommended by the ILAE Neuroimaging Task Force. Key structures assessed include the hippocampus (volume asymmetry and T2/FLAIR signal), amygdala (enlargement in autoimmune encephalitis), temporal horn of the lateral ventricle (dilation ipsilateral to hippocampal atrophy in MTS as an ex vacuo effect), basal ganglia, corpus callosum, and cingulate gyrus (compressed during subfalcine herniation). This plane is also valuable for evaluating cortical dysplasia and polymicrogyria along the sylvian fissure.',
    annotations: [
      {
        id: 'hippocampus',
        x: 28,
        y: 65,
        label: 'Hippocampus',
        description:
          'Mesial temporal structure critical for memory formation and consolidation. On coronal imaging, the normal hippocampus has well-defined internal architecture (hippocampal digitations). In mesial temporal sclerosis, the hippocampus shows volume loss, T2/FLAIR hyperintensity, and loss of internal structure. Bilateral hippocampal T2 hyperintensity is seen in autoimmune and viral (HSV) encephalitis.',
      },
      {
        id: 'amygdala',
        x: 22,
        y: 55,
        label: 'Amygdala',
        description:
          'Located anterior to the hippocampus in the mesial temporal lobe. Critical for emotion processing, fear conditioning, and social cognition. Amygdala enlargement with T2 hyperintensity is a recognized finding in autoimmune encephalitis (anti-LGI1, anti-NMDA receptor). Amygdala resection may be included in anterior temporal lobectomy for epilepsy.',
      },
      {
        id: 'temporal-horn',
        x: 32,
        y: 60,
        label: 'Temporal horn of lateral ventricle',
        description:
          'The temporal horn of the lateral ventricle courses through the temporal lobe adjacent to the hippocampus. Asymmetric dilation of the temporal horn ipsilateral to hippocampal atrophy is an indirect sign of mesial temporal sclerosis (ex vacuo effect). The choroid plexus within the temporal horn can be the site of choroid plexus papilloma in infants.',
      },
      {
        id: 'sylvian-fissure',
        x: 18,
        y: 42,
        label: 'Sylvian fissure',
        description:
          'Also known as the lateral sulcus. Separates the frontal and parietal lobes superiorly from the temporal lobe inferiorly. Contains the middle cerebral artery branches and its bifurcation. Perisylvian polymicrogyria is a recognized cortical malformation causing oromotor dysfunction, epilepsy, and cognitive impairment.',
      },
      {
        id: 'basal-ganglia-coronal',
        x: 35,
        y: 42,
        label: 'Basal ganglia',
        description:
          'On coronal section: caudate nucleus is visible medial to the lateral ventricle, and the lentiform nucleus (putamen laterally, globus pallidus medially) is lateral to the internal capsule. This view demonstrates the relationship between the basal ganglia and the ventricular system, which is important for planning stereotactic procedures including deep brain stimulation.',
      },
      {
        id: 'third-ventricle-coronal',
        x: 50,
        y: 45,
        label: 'Third ventricle',
        description:
          'The third ventricle appears as a midline slit between the thalami on coronal imaging. Widening of the third ventricle occurs in thalamic atrophy and communicating hydrocephalus. Colloid cysts at the anterosuperior aspect of the third ventricle (at the foramen of Monro) can cause acute obstructive hydrocephalus with sudden death.',
      },
      {
        id: 'corpus-callosum-coronal',
        x: 50,
        y: 22,
        label: 'Corpus callosum (body)',
        description:
          'The body of the corpus callosum is the dominant midline landmark on coronal imaging, connecting the hemispheres. Its absence (agenesis) is identified by parallel non-converging lateral ventricles (racing car sign on coronal view) with colpocephaly (dilated occipital horns). Probst bundles (white matter running anteroposteriorly instead of crossing) indent the medial ventricles.',
      },
      {
        id: 'cingulate-gyrus',
        x: 42,
        y: 28,
        label: 'Cingulate gyrus',
        description:
          'Located on the medial surface of each hemisphere, immediately above the corpus callosum. A component of the limbic system involved in emotion, attention, and pain processing. The cingulate gyrus is the first structure compressed during subfalcine herniation, which can lead to ACA territory infarction from compression of the pericallosal arteries.',
      },
    ],
    source:
      'Blumenfeld H. Neuroanatomy through Clinical Cases. 3rd ed. Sinauer Associates; 2021.',
    license: 'Educational schematic diagram',
  },
];

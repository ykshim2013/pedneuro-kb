import type { CTPattern } from './types';

export const advancedPatterns: CTPattern[] = [
  {
    id: 'skull-fractures',
    title: 'Skull Fractures: Linear, Depressed, and Diastatic',
    description:
      'CT bone window showing different types of pediatric skull fractures. Linear fractures (most common) appear as lucent lines; depressed fractures have inward displacement of bone fragments; diastatic fractures widen suture lines. Bone window is essential -- fractures are often invisible on brain window. Growing skull fractures (leptomeningeal cysts) are unique to young children.',
    difficulty: 'advanced',
    imagePath: '/images/ct/skull-fractures-real.jpg',
    imageAlt:
      'Clinical axial CT on bone window showing pediatric skull fracture types including linear, depressed, and diastatic fractures with associated soft tissue swelling',
    window: 'Bone',
    plane: 'Axial',
    clinicalSignificance:
      'Linear fractures crossing the middle meningeal artery groove suggest EDH risk. Depressed fractures greater than 1 full table thickness require surgical elevation. Diastatic fractures crossing sutures suggest greater force mechanism. Growing skull fractures (leptomeningeal cysts) are unique to children under 3 years and require surgical repair. Occipital fractures in non-mobile infants suggest NAT. Always correlate with brain window for underlying injury.',
    annotations: [
      {
        id: 'linear-fracture',
        x: 75,
        y: 25,
        label: 'Linear fracture',
        description:
          'The most common pediatric skull fracture type (approximately 75%). Appears as a sharp lucent line on bone window, often invisible on brain window. Linear fractures are non-sclerotic (unlike sutures) and do not follow expected suture paths. They may have sharp angulations. Parietal bone is the most commonly fractured location.',
      },
      {
        id: 'depressed-fracture',
        x: 25,
        y: 20,
        label: 'Depressed fracture',
        description:
          'Inward displacement of bone fragments below the level of the surrounding inner table. Surgical elevation is indicated when depression exceeds one full table thickness (approximately 5-8 mm), when there is underlying parenchymal injury, or when there is cosmetic deformity. CT with 3D reconstruction best demonstrates the degree of depression and fragment configuration.',
      },
      {
        id: 'diastatic-fracture',
        x: 50,
        y: 15,
        label: 'Diastatic fracture',
        description:
          'Traumatic widening of a cranial suture beyond normal width (greater than 2 mm in infants, greater than 1 mm in older children). Indicates significant force transmitted to the skull. Diastatic fractures are more common in young children with unfused sutures. Lambdoid suture diastasis is commonly seen in occipital impacts.',
      },
      {
        id: 'mma-groove',
        x: 15,
        y: 50,
        label: 'Middle meningeal artery groove',
        description:
          'The middle meningeal artery runs in a groove on the inner surface of the temporal bone. A linear fracture crossing this groove carries high risk of arterial laceration and epidural hematoma formation. This finding mandates close clinical observation or immediate repeat CT if neurological deterioration occurs.',
      },
      {
        id: 'growing-fracture',
        x: 70,
        y: 55,
        label: 'Growing skull fracture',
        description:
          'A growing skull fracture (leptomeningeal cyst) is unique to children under 3 years. It occurs when a dural tear accompanies a fracture, allowing CSF pulsations and brain herniation to progressively widen the fracture gap. The fracture widens rather than heals over time. Diagnosis requires follow-up imaging showing interval fracture widening. Surgical repair of the dura is required.',
      },
      {
        id: 'fracture-vs-suture',
        x: 50,
        y: 70,
        label: 'Fracture vs suture differentiation',
        description:
          'Key features distinguishing fractures from sutures: fractures have sharp non-sclerotic edges (sutures have sclerotic interdigitating edges); fractures do not follow expected anatomic suture paths; fractures may branch or have sharp angulations (sutures follow smooth predictable courses); fractures may cross sutures (an important diagnostic clue). Accessory sutures (e.g., mendosal suture) can mimic fractures.',
      },
    ],
    source: 'Kemp AM, et al. Neuroimaging: what neuroradiological features distinguish abusive from non-abusive head trauma? A systematic review. Arch Dis Child. 2011;96(12):1103-1112. doi:10.1136/archdischild-2011-300630.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'cerebral-edema-herniation',
    title: 'Cerebral Edema and Herniation Syndromes',
    description:
      'CT findings of diffuse cerebral edema (loss of gray-white differentiation, sulcal effacement, cisternal compression) and herniation patterns (subfalcine, transtentorial, tonsillar). In children, diffuse cerebral edema is the most common CT finding in severe traumatic brain injury. The "reversal sign" (white cerebellum sign) indicates severe diffuse anoxic injury with very poor prognosis.',
    difficulty: 'advanced',
    imagePath: '/images/ct/cerebral-edema-herniation-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing diffuse cerebral edema with loss of gray-white matter differentiation, effaced sulci, compressed basal cisterns, and signs of transtentorial herniation',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'Cerebral edema CT signs: loss of gray-white differentiation, compressed or effaced basal cisterns, small ventricles (unless hydrocephalus). Subfalcine herniation: cingulate gyrus under falx causing ACA compression and leg weakness. Uncal (transtentorial) herniation: medial temporal lobe compresses CN III causing ipsilateral pupil dilation and contralateral hemiparesis. Reversal sign (cerebellum appears hyperdense relative to diffusely edematous hemispheres) indicates devastating anoxic brain injury.',
    annotations: [
      {
        id: 'loss-gw-diff',
        x: 35,
        y: 35,
        label: 'Loss of gray-white differentiation',
        description:
          'Diffuse loss of the normal density difference between cortical gray matter and subcortical white matter is one of the earliest CT signs of diffuse cerebral edema. The brain parenchyma appears uniformly hypodense. This finding indicates severe, often irreversible brain injury and is associated with poor neurological outcome.',
      },
      {
        id: 'sulcal-effacement',
        x: 20,
        y: 25,
        label: 'Sulcal effacement',
        description:
          'Progressive compression and disappearance of the cortical sulci indicates increasing intracranial pressure and brain swelling. Complete sulcal effacement with a smooth brain surface is an ominous sign. Compare with the contralateral hemisphere and with age-matched normal CT to assess the degree of effacement.',
      },
      {
        id: 'cisternal-compression',
        x: 50,
        y: 60,
        label: 'Basal cistern compression',
        description:
          'Effacement of the basal cisterns (suprasellar, perimesencephalic, ambient, quadrigeminal) is a critical sign of raised intracranial pressure and impending herniation. The perimesencephalic cisterns should be evaluated on every head CT. Complete cisternal effacement indicates severe intracranial hypertension and warrants emergent intervention.',
      },
      {
        id: 'subfalcine',
        x: 55,
        y: 30,
        label: 'Subfalcine herniation',
        description:
          'The cingulate gyrus herniates beneath the free edge of the falx cerebri, displacing the midline structures. Subfalcine herniation can compress the ipsilateral anterior cerebral artery (ACA), causing secondary ischemic infarction in the ACA territory (medial frontal and parietal cortex). Midline shift greater than 5 mm measured at the septum pellucidum level is clinically significant.',
      },
      {
        id: 'uncal-herniation',
        x: 25,
        y: 65,
        label: 'Uncal (transtentorial) herniation',
        description:
          'The medial temporal lobe (uncus) herniates over the tentorial edge into the tentorial notch. This compresses the ipsilateral CN III (causing pupillary dilation, ptosis), the contralateral cerebral peduncle (causing ipsilateral hemiparesis via Kernohan notch phenomenon), and the posterior cerebral artery (causing occipital infarction). CT shows widening of the ipsilateral ambient cistern with obliteration of the contralateral cistern.',
      },
      {
        id: 'tonsillar-herniation',
        x: 50,
        y: 85,
        label: 'Tonsillar herniation',
        description:
          'Downward herniation of the cerebellar tonsils through the foramen magnum. CT findings include crowding at the foramen magnum, effacement of the perimedullary cisterns, and tonsillar descent below the foramen magnum (best seen on sagittal reformats). Tonsillar herniation compresses the medulla, causing respiratory arrest and cardiovascular collapse. This is the terminal herniation event.',
      },
      {
        id: 'reversal-sign',
        x: 50,
        y: 78,
        label: 'Reversal sign (white cerebellum sign)',
        description:
          'The reversal sign describes a CT pattern where the cerebellum and brainstem appear relatively hyperdense compared to the diffusely edematous and hypodense cerebral hemispheres. This "reversal" of the normal density relationship indicates severe diffuse anoxic or hypoxic-ischemic brain injury. The reversal sign carries an extremely poor prognosis, with near-universal severe disability or brain death.',
      },
    ],
    source: 'Kochanek PM, et al. Management of pediatric severe traumatic brain injury: 2019 consensus and guidelines-based algorithm. Pediatr Crit Care Med. 2019;20(3S):S13-S27. doi:10.1097/PCC.0000000000001737.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'intracranial-calcifications',
    title: 'Intracranial Calcifications: TORCH and Neurocutaneous',
    description:
      'CT patterns of pathologic intracranial calcifications in children. TORCH infections produce characteristic patterns: CMV (periventricular), toxoplasmosis (scattered basal ganglia and cortical), congenital Zika (subcortical, with microcephaly). Neurocutaneous syndromes: TSC (subependymal nodules), Sturge-Weber (cortical tram-track), NF1 (optic pathway glioma calcification rare). CT is more sensitive than MRI for calcification detection.',
    difficulty: 'advanced',
    imagePath: '/images/ct/intracranial-calcifications-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing pathologic intracranial calcifications with periventricular and basal ganglia distribution in a pediatric patient',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'CT is the gold standard for detecting intracranial calcifications (MRI has poor sensitivity for calcium). TORCH: CMV causes periventricular calcifications plus microcephaly plus hearing loss; toxoplasmosis causes scattered calcifications plus hydrocephalus plus chorioretinitis; Zika causes subcortical calcifications plus severe microcephaly plus arthrogryposis. TSC: subependymal calcified nodules (hallmark). Sturge-Weber: cortical calcifications following gyral pattern ("tram-track" sign).',
    annotations: [
      {
        id: 'periventricular-calc',
        x: 42,
        y: 40,
        label: 'Periventricular calcifications (CMV)',
        description:
          'Periventricular calcifications are the hallmark of congenital cytomegalovirus (CMV) infection. CMV is the most common congenital TORCH infection. Calcifications develop in the subependymal germinal zone where the virus replicates in neural progenitor cells. Associated findings include microcephaly, cortical malformations (polymicrogyria, lissencephaly), white matter abnormalities, and sensorineural hearing loss.',
      },
      {
        id: 'basal-ganglia-calc',
        x: 45,
        y: 52,
        label: 'Basal ganglia calcifications (Toxoplasmosis)',
        description:
          'Scattered calcifications in the basal ganglia, thalami, and cortex are characteristic of congenital toxoplasmosis. Unlike CMV (periventricular), toxoplasmosis calcifications are more randomly distributed throughout the brain parenchyma. The classic triad is intracranial calcifications plus hydrocephalus plus chorioretinitis. Toxoplasmosis calcifications tend to be larger and coarser than CMV calcifications.',
      },
      {
        id: 'subcortical-calc',
        x: 30,
        y: 30,
        label: 'Subcortical calcifications (Zika)',
        description:
          'Congenital Zika virus infection produces calcifications predominantly at the gray-white matter junction (subcortical). Associated findings include severe microcephaly (head circumference more than 3 SD below mean), simplified gyral pattern, ventriculomegaly, and arthrogryposis. The calcification pattern helps distinguish Zika from CMV (periventricular) and toxoplasmosis (scattered).',
      },
      {
        id: 'subependymal-nodule-calc',
        x: 55,
        y: 45,
        label: 'Subependymal nodules (TSC)',
        description:
          'Calcified subependymal nodules along the ventricular walls are a hallmark of tuberous sclerosis complex (TSC). These nodules are hamartomatous growths that calcify with age. They are best detected on CT because MRI has limited sensitivity for calcification. A subependymal nodule near the foramen of Monro that enhances and grows is classified as a subependymal giant cell astrocytoma (SEGA).',
      },
      {
        id: 'tram-track',
        x: 22,
        y: 22,
        label: 'Tram-track calcification (Sturge-Weber)',
        description:
          'Cortical calcifications following the gyral pattern in Sturge-Weber syndrome create a characteristic "tram-track" appearance on CT. The calcifications are typically unilateral and occur in the parieto-occipital cortex ipsilateral to the facial port-wine stain (nevus flammeus). Underlying cortical atrophy with ipsilateral calvarial thickening and choroid plexus enlargement are associated findings.',
      },
      {
        id: 'physiologic-calc',
        x: 50,
        y: 20,
        label: 'Physiologic calcifications',
        description:
          'Normal physiologic calcifications must be distinguished from pathologic calcifications. Common physiologic sites include: pineal gland (after age 8-10), choroid plexus glomus (after age 3-5), habenular commissure, dura (falx, tentorium), and basal ganglia (after age 40). Pineal calcification before age 6 or choroid plexus calcification before age 3 should raise concern for pathology.',
      },
      {
        id: 'ct-sensitivity',
        x: 75,
        y: 65,
        label: 'CT superiority for calcium detection',
        description:
          'CT is significantly more sensitive than MRI for detecting intracranial calcifications. Calcium appears hyperdense (greater than 100 HU) on CT and is easily identified. On MRI, calcifications can appear variable (hypointense, hyperintense, or isointense) depending on the sequence and calcium crystal structure. When intracranial calcifications are suspected, non-contrast CT should be the initial imaging modality.',
      },
    ],
    source: 'Barkovich AJ. Pediatric Neuroimaging 6th ed. Wolters Kluwer 2019',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'posterior-fossa-ct',
    title: 'Posterior Fossa CT Findings in Children',
    description:
      'CT evaluation of the posterior fossa in children, showing normal anatomy and common pathology including Chiari I malformation (tonsillar ectopia), Dandy-Walker malformation (vermian hypoplasia with cystic dilation of 4th ventricle), posterior fossa tumor (medulloblastoma, pilocytic astrocytoma), and cerebellar hemorrhage. CT is often the first imaging modality in emergency settings.',
    difficulty: 'advanced',
    imagePath: '/images/ct/posterior-fossa-ct-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing posterior fossa anatomy and pathology in a pediatric patient with a posterior fossa mass and associated obstructive hydrocephalus',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'Posterior fossa tumors are the most common solid brain tumors in children. CT shows mass effect, hydrocephalus, calcification (ependymoma), hemorrhage (pilocytic astrocytoma), and dense enhancement (medulloblastoma). Dandy-Walker: large posterior fossa cyst, elevated tentorium, vermian agenesis. CT is often the initial study in pediatric emergency settings; MRI is subsequently performed for definitive characterization.',
    annotations: [
      {
        id: 'fourth-ventricle-ct',
        x: 50,
        y: 60,
        label: 'Fourth ventricle',
        description:
          'The fourth ventricle is a diamond-shaped CSF space in the posterior fossa between the cerebellum posteriorly and the pons/medulla anteriorly. On axial CT, it appears as a small hypodense structure. Compression, displacement, or obliteration of the fourth ventricle by a posterior fossa mass causes obstructive hydrocephalus with upstream dilation of the lateral and third ventricles.',
      },
      {
        id: 'cerebellum-ct',
        x: 35,
        y: 70,
        label: 'Cerebellar hemispheres',
        description:
          'The cerebellar hemispheres appear as symmetric structures with characteristic foliar pattern on CT. Cerebellar hemorrhage in children can result from trauma, vascular malformations (AVM, cavernoma), hemorrhagic transformation of stroke, or bleeding into a tumor. Acute cerebellar hemorrhage is a neurosurgical emergency due to risk of brainstem compression and obstructive hydrocephalus.',
      },
      {
        id: 'vermis-ct',
        x: 50,
        y: 72,
        label: 'Cerebellar vermis',
        description:
          'The vermis is the midline structure connecting the cerebellar hemispheres. Vermian hypoplasia or agenesis is a key feature of Dandy-Walker malformation (complete or partial vermian agenesis with cystic dilation of the fourth ventricle and enlarged posterior fossa). Medulloblastoma, the most common malignant pediatric brain tumor, characteristically arises from the vermis.',
      },
      {
        id: 'posterior-fossa-mass',
        x: 50,
        y: 55,
        label: 'Posterior fossa mass',
        description:
          'Posterior fossa tumors in children include medulloblastoma (hyperdense midline mass, restricted diffusion), pilocytic astrocytoma (cystic mass with enhancing mural nodule, cerebellar hemisphere), ependymoma (arises from fourth ventricle, extends through foramina), and brainstem glioma/DIPG (diffuse pontine expansion). CT is the initial diagnostic study; MRI is required for definitive characterization.',
      },
      {
        id: 'hydrocephalus-pf',
        x: 50,
        y: 30,
        label: 'Obstructive hydrocephalus',
        description:
          'Posterior fossa masses cause obstructive hydrocephalus by compressing the fourth ventricle or cerebral aqueduct. CT shows dilation of the lateral and third ventricles with a normal or compressed fourth ventricle. Temporal horn dilation is the earliest sign. Periventricular hypodensity indicates active transependymal CSF flow. Emergent CSF diversion (EVD or ETV) may be required before tumor surgery.',
      },
      {
        id: 'cisterna-magna',
        x: 50,
        y: 82,
        label: 'Cisterna magna',
        description:
          'The cisterna magna is the CSF space posterior to the cerebellum and inferior to the vermis. An enlarged cisterna magna (mega cisterna magna) is a normal variant that must be distinguished from Dandy-Walker malformation (which has vermian agenesis and an elevated tentorium) and arachnoid cyst (which has mass effect). Mega cisterna magna has an intact vermis and no mass effect.',
      },
    ],
    source: 'Lieb JM et al. Radiologie (Heidelberg). 2023;63(8):583-591. PMC10382353',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
];

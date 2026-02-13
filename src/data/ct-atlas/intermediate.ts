import type { CTPattern } from './types';

export const intermediatePatterns: CTPattern[] = [
  {
    id: 'epidural-hematoma',
    title: 'Epidural Hematoma',
    description:
      'Biconvex (lens-shaped) extra-axial hyperdense collection between the inner table of the skull and the dura. Typically arterial (middle meningeal artery) following temporal bone fracture. The classic "lucid interval" presentation in children is less common than in adults. EDH is a neurosurgical emergency requiring urgent evacuation.',
    difficulty: 'intermediate',
    imagePath: '/images/ct/epidural-hematoma-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing a biconvex hyperdense epidural hematoma in the temporal region with associated midline shift and mass effect',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'EDH is a neurosurgical emergency. Biconvex shape (does NOT cross suture lines because dura is adherent). Approximately 85% arterial (middle meningeal artery from temporal bone fracture). Lucid interval: brief improvement followed by rapid deterioration from uncal herniation. Surgical evacuation within 1-2 hours of deterioration is critical for good outcome.',
    annotations: [
      {
        id: 'biconvex-shape',
        x: 18,
        y: 45,
        label: 'Biconvex (lens-shaped) collection',
        description:
          'The hallmark shape of an epidural hematoma is biconvex (lenticular), distinguishing it from the crescent-shaped subdural hematoma. The biconvex shape results from the dura being stripped from the inner table by arterial pressure, but the dural attachments at suture lines limit its spread.',
      },
      {
        id: 'midline-shift',
        x: 55,
        y: 35,
        label: 'Midline shift',
        description:
          'Displacement of midline structures (falx, septum pellucidum) away from the hematoma indicates significant mass effect. Midline shift greater than 5 mm is generally considered an indication for surgical evacuation. Progressive shift indicates clinical deterioration.',
      },
      {
        id: 'temporal-location',
        x: 12,
        y: 55,
        label: 'Temporal location',
        description:
          'The temporal region is the most common location for EDH (approximately 70-80%) because the middle meningeal artery runs in a groove on the inner table of the temporal bone, making it vulnerable to laceration from temporal bone fractures.',
      },
      {
        id: 'associated-fracture',
        x: 10,
        y: 35,
        label: 'Associated skull fracture',
        description:
          'Approximately 85-95% of epidural hematomas in adults are associated with a skull fracture (best seen on bone window). In children younger than 2 years, EDH can occur without fracture because the calvarium is more pliable and can deform without fracturing. Always review bone window.',
      },
      {
        id: 'mass-effect',
        x: 35,
        y: 55,
        label: 'Mass effect',
        description:
          'Compression of the ipsilateral lateral ventricle, sulcal effacement, and contralateral ventricular dilation (trapping) indicate significant mass effect requiring urgent surgical intervention. The ipsilateral ventricle may be completely effaced.',
      },
      {
        id: 'brain-herniation',
        x: 50,
        y: 65,
        label: 'Herniation signs',
        description:
          'Uncal (transtentorial) herniation: medial temporal lobe herniates over the tentorial edge, compressing the ipsilateral CN III (dilated pupil) and contralateral cerebral peduncle (ipsilateral hemiparesis, Kernohan notch phenomenon). Effacement of the perimesencephalic cisterns is an early sign.',
      },
    ],
    source: 'Araki T, et al. Acute epidural hematoma in children. Pediatr Neurosurg. 2017;52(6):346-353. doi:10.1159/000479610.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'subdural-hematoma',
    title: 'Subdural Hematoma',
    description:
      'Crescent-shaped extra-axial collection between the dura and arachnoid. In children, acute SDH raises concern for non-accidental trauma (NAT/abusive head trauma), especially when bilateral, mixed density, or in young infants without adequate accidental history. CT density evolves: acute (hyperdense) to subacute (isodense) to chronic (hypodense).',
    difficulty: 'intermediate',
    imagePath: '/images/ct/subdural-hematoma-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing a crescent-shaped hyperdense subdural hematoma along the cerebral convexity with mass effect and midline shift',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'In pediatric patients, bilateral or mixed-density SDH in infants under 2 years strongly suggests non-accidental trauma (NAT). CT density changes with age: acute (0-3 days, hyperdense 50-70 HU), subacute (3 days to 3 weeks, isodense and easily missed on brain window), chronic (over 3 weeks, hypodense). Use subdural windows to detect isodense phase. Retinal hemorrhages plus SDH plus encephalopathy equals the shaken baby syndrome triad.',
    annotations: [
      {
        id: 'crescent-shape',
        x: 80,
        y: 25,
        label: 'Crescent-shaped collection',
        description:
          'Subdural hematomas conform to the brain surface in a crescent (concavoconvex) shape, distinguishing them from the biconvex shape of epidural hematomas. SDH can freely cross suture lines because the collection is deep to the dura, unlike EDH which is limited by dural attachments at sutures.',
      },
      {
        id: 'crossing-sutures',
        x: 75,
        y: 45,
        label: 'Crosses suture lines',
        description:
          'Unlike epidural hematomas, subdural hematomas cross suture lines because the collection lies beneath the dura. This is a key differentiating feature. SDH can extend along the entire convexity, into the interhemispheric fissure, or along the tentorium.',
      },
      {
        id: 'density-staging',
        x: 82,
        y: 60,
        label: 'Density staging',
        description:
          'CT density reflects the age of blood products: acute (0-3 days) appears hyperdense at 50-70 HU; subacute (3 days to 3 weeks) becomes isodense to brain and is easily missed on standard brain window; chronic (over 3 weeks) appears hypodense. Mixed density suggests recurrent hemorrhage or hyperacute bleeding into chronic SDH.',
      },
      {
        id: 'bilateral-collections',
        x: 20,
        y: 30,
        label: 'Bilateral collections',
        description:
          'Bilateral subdural hematomas in an infant, especially of mixed density (suggesting hemorrhage of different ages), is highly suspicious for non-accidental trauma (abusive head trauma). This finding in an infant without a clear accidental mechanism mandates child protective evaluation including skeletal survey and ophthalmologic examination.',
      },
      {
        id: 'effacement-sulci',
        x: 65,
        y: 40,
        label: 'Sulcal effacement',
        description:
          'Effacement (compression) of the cortical sulci beneath the subdural collection indicates mass effect. The degree of sulcal effacement correlates with the volume of the collection and intracranial pressure. Complete sulcal effacement with midline shift may require surgical drainage.',
      },
      {
        id: 'midline-shift-sdh',
        x: 50,
        y: 50,
        label: 'Midline shift',
        description:
          'Displacement of midline structures indicates significant mass effect. In acute SDH, shift greater than 5 mm or hematoma thickness greater than 10 mm generally indicates need for surgical evacuation. In chronic SDH, gradual shift may be tolerated better due to brain compensation over time.',
      },
    ],
    source: 'Choudhary AK, et al. Consensus statement on abusive head trauma in infants and young children. Pediatr Radiol. 2018;48(8):1048-1065. doi:10.1007/s00247-018-4149-1.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'subarachnoid-hemorrhage',
    title: 'Subarachnoid Hemorrhage',
    description:
      'Hyperdense blood filling the subarachnoid cisterns and sulci. In children, SAH most commonly results from trauma or vascular malformations (AVM, aneurysm) rather than the berry aneurysm rupture typical in adults. CT sensitivity for SAH is approximately 98% within 6 hours but decreases rapidly thereafter. LP with xanthochromia confirms when CT is negative.',
    difficulty: 'intermediate',
    imagePath: '/images/ct/subarachnoid-hemorrhage-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing hyperdense blood in the basal cisterns and Sylvian fissures consistent with acute subarachnoid hemorrhage',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'CT is approximately 98% sensitive for SAH within 6 hours, dropping to approximately 50% at 5 days. Fisher grade (I-IV) predicts vasospasm risk. In children, causes include trauma, AVM, mycotic aneurysm (endocarditis), and coagulopathy. CT angiography (CTA) is the initial vascular study. Thunderclap headache in a child warrants emergent non-contrast CT followed by CTA if SAH is found.',
    annotations: [
      {
        id: 'cistern-blood',
        x: 50,
        y: 55,
        label: 'Cisternal blood',
        description:
          'Hyperdense blood filling the basal cisterns (suprasellar, perimesencephalic, ambient, quadrigeminal) is the most sensitive CT finding for SAH. The suprasellar cistern (pentagonal shape) and perimesencephalic cistern are evaluated first. Normal cisterns contain hypodense CSF; hyperdense material indicates blood.',
      },
      {
        id: 'sulcal-blood',
        x: 25,
        y: 30,
        label: 'Sulcal blood',
        description:
          'Hyperdense blood filling the cortical sulci appears as bright lines within the normally dark CSF spaces. Focal sulcal SAH (limited to a few sulci) may indicate underlying cortical vein thrombosis, AVM, or focal contusion rather than aneurysmal rupture. Compare side-to-side for asymmetric sulcal hyperdensity.',
      },
      {
        id: 'fisher-grade',
        x: 50,
        y: 40,
        label: 'Fisher grade assessment',
        description:
          'Modified Fisher scale predicts vasospasm risk: Grade 0 (no SAH), Grade 1 (thin SAH, no IVH), Grade 2 (thin SAH with IVH), Grade 3 (thick SAH, no IVH), Grade 4 (thick SAH with IVH). Thick SAH (greater than 1 mm) in the basal cisterns carries the highest risk of delayed cerebral ischemia from vasospasm.',
      },
      {
        id: 'hydrocephalus-risk',
        x: 50,
        y: 25,
        label: 'Hydrocephalus risk',
        description:
          'SAH can cause acute obstructive hydrocephalus by blocking CSF absorption at the arachnoid granulations or by obstructing the aqueduct or fourth ventricle outlets with blood clot. Enlarged temporal horns and third ventricle dilation on the initial CT indicate acute hydrocephalus requiring emergent CSF diversion.',
      },
      {
        id: 'vascular-etiology',
        x: 45,
        y: 70,
        label: 'Vascular etiology in children',
        description:
          'In children, SAH etiology differs from adults. Common causes include trauma (most common), AVM rupture, mycotic aneurysm (infective endocarditis), coagulopathy (hemophilia, ITP), and moyamoya disease. Berry aneurysm rupture is less common in children than adults. CTA or catheter angiography is essential for identifying treatable vascular lesions.',
      },
    ],
    source: 'Jordan LC, Hillis AE. Hemorrhagic stroke in children. Pediatr Neurol. 2007;36(2):73-80. doi:10.1016/j.pediatrneurol.2006.09.017.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'intraventricular-hemorrhage',
    title: 'Intraventricular Hemorrhage',
    description:
      'Hyperdense blood within the ventricular system. IVH in preterm neonates is classified by Papile grading (Grades I-IV). In older children, IVH may result from extension of intraparenchymal hemorrhage, AVM rupture, or choroid plexus pathology. IVH can cause acute obstructive hydrocephalus requiring emergent CSF diversion.',
    difficulty: 'intermediate',
    imagePath: '/images/ct/intraventricular-hemorrhage-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing hyperdense blood within the lateral ventricles with blood-CSF levels in the occipital horns and early hydrocephalus',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'Preterm neonatal IVH (Papile grading): Grade I (germinal matrix only), Grade II (IVH without ventricular dilation), Grade III (IVH with ventricular dilation), Grade IV (IVH with parenchymal hemorrhagic infarction). Grades III-IV carry significant risk of posthemorrhagic hydrocephalus (PHH) requiring VP shunt. In older children, blood-CSF level (hematocrit effect) in dependent occipital horns is characteristic.',
    annotations: [
      {
        id: 'ventricular-blood',
        x: 50,
        y: 40,
        label: 'Intraventricular blood',
        description:
          'Acute blood within the ventricles appears hyperdense (50-70 HU) against the hypodense CSF background (0-5 HU). Blood may fill and cast the ventricle, making the entire ventricular cavity appear bright. Small amounts of IVH may be subtle and appear as faint hyperdensity layering dependently.',
      },
      {
        id: 'hematocrit-level',
        x: 55,
        y: 70,
        label: 'Blood-CSF level (hematocrit effect)',
        description:
          'In the dependent portions of the ventricles (typically the occipital horns in a supine patient), red blood cells sediment by gravity creating a characteristic blood-CSF level. The dependent hyperdense blood layer and the supernatant hypodense CSF create a horizontal interface. This finding is pathognomonic for IVH.',
      },
      {
        id: 'hydrocephalus-ivh',
        x: 40,
        y: 30,
        label: 'Acute hydrocephalus',
        description:
          'IVH can cause acute hydrocephalus by obstructing CSF outflow at the foramen of Monro, aqueduct, or fourth ventricle outlets with blood clot. Temporal horn dilation (earliest sign), third ventricle expansion, and periventricular hypodensity (transependymal CSF flow) indicate acute obstructive hydrocephalus requiring emergent intervention.',
      },
      {
        id: 'germinal-matrix',
        x: 30,
        y: 45,
        label: 'Germinal matrix region',
        description:
          'The germinal matrix (subependymal region at the caudothalamic groove) is the source of neonatal IVH in preterm infants. This highly vascularized tissue involutes by 34 weeks gestational age. Germinal matrix hemorrhage appears as a focal hyperdensity at the caudothalamic notch (head of caudate nucleus near the foramen of Monro).',
      },
      {
        id: 'choroid-plexus-ivh',
        x: 65,
        y: 50,
        label: 'Choroid plexus',
        description:
          'The choroid plexus normally appears slightly hyperdense and calcified in older children. Choroid plexus hemorrhage or choroid plexus papilloma can be sources of IVH, particularly in full-term neonates. Choroid plexus pathology should be considered when IVH occurs in a full-term infant, as germinal matrix hemorrhage is uncommon at term.',
      },
      {
        id: 'papile-grading',
        x: 20,
        y: 60,
        label: 'Papile grading system',
        description:
          'Grade I: germinal matrix hemorrhage only (subependymal). Grade II: IVH filling less than 50% of ventricular volume without ventricular dilation. Grade III: IVH with ventricular dilation (greater than 50% filled). Grade IV: IVH with periventricular hemorrhagic infarction (venous infarction, not simple extension). Prognosis worsens with increasing grade.',
      },
    ],
    source: 'Papile LA, et al. Incidence and evolution of subependymal and intraventricular hemorrhage: a study of infants with birth weights less than 1,500 gm. J Pediatr. 1978;92(4):529-534. doi:10.1016/S0022-3476(78)80282-0.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'hydrocephalus-patterns',
    title: 'Hydrocephalus: Obstructive vs Communicating',
    description:
      'CT patterns differentiating obstructive (non-communicating) from communicating hydrocephalus. Obstructive: selective upstream ventricular dilation proximal to obstruction site. Communicating: diffuse ventricular enlargement with patent aqueduct. Key CT signs include temporal horn dilation (earliest sign), periventricular hypodensity (transependymal CSF flow), and Evans index greater than 0.3.',
    difficulty: 'intermediate',
    imagePath: '/images/ct/hydrocephalus-patterns-real.jpg',
    imageAlt:
      'Clinical axial non-contrast CT showing dilated lateral ventricles with periventricular hypodensity indicating active hydrocephalus with transependymal CSF flow',
    window: 'Brain',
    plane: 'Axial',
    clinicalSignificance:
      'Temporal horn dilation is the earliest and most sensitive CT sign of hydrocephalus. Evans index (frontal horn width divided by inner table width) greater than 0.3 is diagnostic. Periventricular hypodensity indicates transependymal CSF flow (active hydrocephalus). Obstructive: cause determines treatment (ETV vs VP shunt). Aqueductal stenosis (dilated lateral plus 3rd ventricles, normal 4th) vs posterior fossa mass (all ventricles dilated above obstruction).',
    annotations: [
      {
        id: 'temporal-horn-dilatation',
        x: 18,
        y: 65,
        label: 'Temporal horn dilation',
        description:
          'Dilation of the temporal horns is the earliest and most sensitive CT sign of hydrocephalus. Normal temporal horns are slit-like or invisible on CT. Temporal horns greater than 2 mm in width are abnormal. This finding appears before frontal horn enlargement and is particularly useful for detecting early or mild hydrocephalus.',
      },
      {
        id: 'evans-index',
        x: 50,
        y: 30,
        label: 'Evans index measurement',
        description:
          'Evans index is calculated as the maximum width of the frontal horns divided by the maximum internal diameter of the skull at the same level. A value greater than 0.3 indicates ventriculomegaly. This measurement helps distinguish hydrocephalus from cerebral atrophy (ex vacuo ventriculomegaly), though clinical correlation is essential.',
      },
      {
        id: 'periventricular-edema',
        x: 38,
        y: 42,
        label: 'Periventricular hypodensity',
        description:
          'Periventricular hypodensity (low density rim around the ventricles) indicates transependymal migration of CSF, a sign of active (acute or subacute) hydrocephalus with elevated intraventricular pressure. This finding helps distinguish active hydrocephalus (with transependymal flow) from arrested hydrocephalus (without transependymal flow).',
      },
      {
        id: 'third-ventricle-dilated',
        x: 50,
        y: 50,
        label: 'Third ventricle dilation',
        description:
          'Dilation of the third ventricle (normally less than 5 mm in children) indicates hydrocephalus affecting the proximal ventricular system. A dilated third ventricle with normal fourth ventricle localizes obstruction to the aqueduct of Sylvius (aqueductal stenosis). Ballooning of the third ventricle floor can be seen in long-standing obstructive hydrocephalus.',
      },
      {
        id: 'fourth-ventricle-size',
        x: 50,
        y: 75,
        label: 'Fourth ventricle assessment',
        description:
          'Fourth ventricle size is critical for localizing the level of obstruction. Normal fourth ventricle with dilated lateral and third ventricles indicates aqueductal obstruction. Dilated fourth ventricle with dilated lateral and third ventricles suggests obstruction at the fourth ventricle outlets (foramen of Magendie/Luschka) or communicating hydrocephalus.',
      },
      {
        id: 'obstruction-level',
        x: 72,
        y: 55,
        label: 'Obstruction level localization',
        description:
          'The level of obstruction is determined by identifying which ventricles are dilated: foramen of Monro obstruction (one lateral ventricle dilated), aqueductal stenosis (both laterals and 3rd dilated, 4th normal), fourth ventricle outlet obstruction (all ventricles dilated), communicating (all ventricles dilated with patent aqueduct). Level determines surgical approach.',
      },
      {
        id: 'communicating-pattern',
        x: 25,
        y: 40,
        label: 'Communicating hydrocephalus pattern',
        description:
          'In communicating hydrocephalus, all ventricles are symmetrically dilated because the obstruction is at the level of arachnoid granulations or subarachnoid space, not within the ventricular system. Common causes in children include post-meningitis, post-hemorrhagic, and leptomeningeal carcinomatosis. Distinguished from obstructive type by demonstrating patent aqueduct on imaging.',
      },
    ],
    source: 'Rekate HL. A contemporary definition and classification of hydrocephalus. Semin Pediatr Neurol. 2009;16(1):9-15. doi:10.1016/j.spen.2009.01.002.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
];

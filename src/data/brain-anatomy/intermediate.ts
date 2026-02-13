import type { AnatomyPattern } from './types';

export const intermediatePatterns: AnatomyPattern[] = [
  {
    id: 'vascular-territories',
    title: 'Cerebral Vascular Territories',
    description:
      'Color-coded map of the three major cerebral arterial territories (anterior cerebral artery, middle cerebral artery, posterior cerebral artery) shown on axial section, including watershed (border zone) regions and deep perforator territories. This schematic is essential for localizing ischemic stroke to the correct vascular distribution and understanding the clinical deficits associated with each territory.',
    difficulty: 'intermediate',
    imagePath: '/images/anatomy/vascular-territories.svg',
    imageAlt:
      'Color-coded schematic of cerebral vascular territories showing ACA, MCA, and PCA distributions with watershed zones and deep perforator territories',
    view: 'Axial',
    system: 'Vascular',
    clinicalSignificance:
      'Vascular territory recognition is essential for stroke localization and management. The MCA territory is the largest and most commonly affected in pediatric stroke, supplying the lateral frontal, parietal, and temporal cortex. The ACA territory supplies medial frontal and parietal cortex. The PCA territory supplies the occipital lobe and medial temporal structures. Watershed (border zone) regions between major arterial territories are selectively vulnerable to hypotension and cardiac arrest, producing a characteristic parasagittal injury pattern. Lenticulostriate perforators, which are small branches of the proximal MCA (M1 segment), supply the basal ganglia and internal capsule and represent the most common territory for neonatal arterial ischemic stroke.',
    annotations: [
      {
        id: 'aca-territory',
        x: 50,
        y: 18,
        label: 'ACA territory',
        description:
          'Anterior cerebral artery territory (blue): supplies the medial surfaces of the frontal and parietal lobes, including the paracentral lobule. ACA stroke produces contralateral leg weakness greater than arm weakness, personality and behavioral changes (abulia, disinhibition), and urinary incontinence from medial frontal involvement.',
      },
      {
        id: 'mca-territory',
        x: 22,
        y: 42,
        label: 'MCA territory',
        description:
          'Middle cerebral artery territory (red): the largest vascular territory, supplying the lateral surfaces of the frontal, parietal, and temporal lobes including the insula. MCA stroke produces contralateral hemiparesis (face and arm greater than leg), aphasia if dominant hemisphere (Broca\'s or Wernicke\'s depending on branch), or hemispatial neglect if non-dominant hemisphere. Most commonly affected territory in pediatric arterial ischemic stroke.',
      },
      {
        id: 'pca-territory',
        x: 50,
        y: 82,
        label: 'PCA territory',
        description:
          'Posterior cerebral artery territory (green): supplies the occipital lobe, medial temporal lobe (including hippocampus), and inferior temporal surface. PCA stroke produces contralateral homonymous hemianopia, visual agnosia, and memory impairment (if hippocampus involved). Bilateral PCA infarction causes cortical blindness (Anton syndrome if anosognosia present).',
      },
      {
        id: 'anterior-watershed',
        x: 35,
        y: 28,
        label: 'Anterior watershed zone',
        description:
          'Border zone between ACA and MCA territories. Vulnerable to hypoperfusion injury from systemic hypotension, cardiac arrest, or severe anemia. Bilateral anterior watershed infarction produces proximal upper extremity weakness with preserved distal function ("man in a barrel" syndrome). In neonates, parasagittal watershed injury from partial prolonged asphyxia produces cognitive deficits with relative motor sparing.',
      },
      {
        id: 'posterior-watershed',
        x: 38,
        y: 72,
        label: 'Posterior watershed zone',
        description:
          'Border zone between MCA and PCA territories. Vulnerable to hypoperfusion injury. Posterior reversible encephalopathy syndrome (PRES) characteristically involves the posterior watershed zones with vasogenic edema, presenting with headache, visual changes, seizures, and altered consciousness in the setting of hypertension, immunosuppression, or eclampsia.',
      },
      {
        id: 'deep-perforators',
        x: 42,
        y: 48,
        label: 'Lenticulostriate perforators',
        description:
          'Small perforating branches arising from the M1 segment of the MCA. Supply the basal ganglia (caudate head, putamen, globus pallidus) and internal capsule (anterior limb and genu). These are end-arteries without collateral supply, making them vulnerable to lacunar infarction. The lenticulostriate territory is the most common site of neonatal arterial ischemic stroke, presenting with neonatal seizures and later with hemiparetic cerebral palsy.',
      },
      {
        id: 'choroidal-territory',
        x: 55,
        y: 55,
        label: 'Anterior choroidal artery territory',
        description:
          'The anterior choroidal artery (a small branch of the distal ICA) supplies a critical territory including the posterior limb of the internal capsule, hippocampus, optic tract, lateral geniculate body, and choroid plexus. Despite the small caliber of this vessel, infarction produces a classic triad of contralateral hemiparesis, hemianesthesia, and homonymous hemianopia.',
      },
    ],
    source:
      'Tatu L, et al. Arterial territories of the human brain. Neurology. 1998;50(6):1699-1708.',
    license: 'Educational schematic diagram',
  },
  {
    id: 'ventricular-system',
    title: 'Ventricular System and CSF Flow',
    description:
      'Schematic diagram of the complete ventricular system illustrating CSF production by the choroid plexus, the flow pathway from lateral ventricles through the foramina of Monro to the third ventricle, through the cerebral aqueduct to the fourth ventricle, and out through the foramina of Magendie (midline) and Luschka (lateral) into the subarachnoid space for reabsorption at the arachnoid granulations. Understanding this pathway is fundamental for diagnosing and classifying hydrocephalus.',
    difficulty: 'intermediate',
    imagePath: '/images/anatomy/ventricular-system.svg',
    imageAlt:
      'Schematic diagram of ventricular system and CSF flow pathway from lateral ventricles through foramina to subarachnoid space',
    view: 'Schematic',
    system: 'CSF',
    clinicalSignificance:
      'Understanding the CSF flow pathway is critical for diagnosing the etiology and level of obstruction in hydrocephalus. Obstruction at any point produces upstream ventricular dilation. Aqueductal stenosis (the most common cause of congenital obstructive hydrocephalus) dilates the lateral and third ventricles while the fourth ventricle remains normal-sized. Foramen of Monro obstruction (by colloid cyst, or subependymal giant cell astrocytoma in tuberous sclerosis) causes unilateral or bilateral lateral ventricular dilation with a normal third and fourth ventricle. Fourth ventricle outlet obstruction (Dandy-Walker malformation, posterior fossa tumor) dilates all four ventricles. Communicating hydrocephalus (impaired CSF reabsorption at arachnoid granulations, as in post-hemorrhagic or post-meningitic hydrocephalus) dilates all ventricles without a focal point of obstruction.',
    annotations: [
      {
        id: 'lateral-ventricles-csf',
        x: 30,
        y: 22,
        label: 'Lateral ventricles',
        description:
          'The largest CSF-containing spaces, comprising frontal horns, body, atria (trigone), temporal horns, and occipital horns. The choroid plexus within the lateral ventricles is the primary site of CSF production. Total CSF production in adults is approximately 500 mL/day (20 mL/hour), with complete CSF turnover occurring 3-4 times daily. Asymmetric lateral ventricular enlargement suggests ipsilateral obstruction at the foramen of Monro.',
      },
      {
        id: 'foramen-monro',
        x: 50,
        y: 32,
        label: 'Foramen of Monro',
        description:
          'The interventricular foramen connecting each lateral ventricle to the third ventricle. Obstruction at this level (by colloid cyst, subependymal giant cell astrocytoma in TSC, or intraventricular tumor) causes uni- or bilateral lateral ventricular dilation with a normal-sized third ventricle. Acute bilateral obstruction can cause sudden death from acute hydrocephalus. SEGA surveillance MRI in TSC specifically monitors for growth at this location.',
      },
      {
        id: 'third-ventricle-csf',
        x: 50,
        y: 42,
        label: 'Third ventricle',
        description:
          'Midline slit-like cavity between the paired thalami. Contains the massa intermedia (interthalamic adhesion) traversing its cavity. Anteroinferior recesses include the optic and infundibular recesses. The floor of the third ventricle is the target for endoscopic third ventriculostomy (ETV), a surgical alternative to shunt placement for obstructive hydrocephalus.',
      },
      {
        id: 'aqueduct-csf',
        x: 50,
        y: 52,
        label: 'Cerebral aqueduct',
        description:
          'The narrowest point of the ventricular system (1-2 mm diameter), connecting the third and fourth ventricles through the midbrain. Aqueductal stenosis is the most common cause of congenital obstructive hydrocephalus, producing dilation of the lateral and third ventricles with normal fourth ventricle size. Can be congenital (X-linked L1CAM mutation, also known as MASA syndrome) or acquired (post-hemorrhagic, post-infectious, tectal plate glioma compressing the aqueduct).',
      },
      {
        id: 'fourth-ventricle-csf',
        x: 50,
        y: 62,
        label: 'Fourth ventricle',
        description:
          'Diamond-shaped cavity between the brainstem (anteriorly) and the cerebellum (posteriorly). The floor of the fourth ventricle contains cranial nerve nuclei (CN VI and VII among others) and the area postrema (chemoreceptor trigger zone). CSF exits through three openings: one median (Magendie) and two lateral (Luschka). Posterior fossa tumors (medulloblastoma, ependymoma) commonly compress or fill the fourth ventricle, causing obstructive hydrocephalus.',
      },
      {
        id: 'foramen-magendie',
        x: 50,
        y: 72,
        label: 'Foramen of Magendie',
        description:
          'Single midline aperture in the roof of the fourth ventricle, opening into the cisterna magna. The primary exit route for CSF from the ventricular system into the posterior subarachnoid space. Obstruction or absence of this foramen (as in Dandy-Walker malformation, where the vermis is hypoplastic and the fourth ventricle is cystically dilated) produces non-communicating hydrocephalus.',
      },
      {
        id: 'foramina-luschka',
        x: 35,
        y: 68,
        label: 'Foramina of Luschka',
        description:
          'Paired lateral apertures of the fourth ventricle opening into the cerebellopontine angle cisterns. CSF exits laterally into the subarachnoid space surrounding the brainstem. Ependymomas characteristically extend through the foramina of Luschka in a "toothpaste-like" or "plastic" fashion, which is a distinguishing imaging feature from medulloblastoma.',
      },
      {
        id: 'choroid-plexus',
        x: 70,
        y: 25,
        label: 'Choroid plexus',
        description:
          'Vascularized epithelial tissue responsible for CSF production, located in the lateral ventricles (body and atria), third ventricle (roof), and fourth ventricle (roof). Choroid plexus papilloma is a rare tumor most common in infants (lateral ventricle) and children (fourth ventricle) that can cause hydrocephalus through CSF overproduction. Xanthogranulomas and cysts of the choroid plexus are common incidental findings.',
      },
    ],
    source:
      'Sakka L, et al. Anatomy and physiology of cerebrospinal fluid. Eur Ann Otorhinolaryngol Head Neck Dis. 2011;128(6):309-316.',
    license: 'Educational schematic diagram',
  },
  {
    id: 'circle-of-willis',
    title: 'Circle of Willis and Cerebral Vasculature',
    description:
      'Ventral view of the complete Circle of Willis showing the arterial anastomotic ring at the base of the brain formed by the internal carotid arteries (anterior circulation) and the vertebrobasilar system (posterior circulation), connected by the anterior communicating artery and the paired posterior communicating arteries. This vascular anatomy is critical for understanding collateral circulation, stroke etiology, and cerebrovascular disease in children including moyamoya disease and aneurysms.',
    difficulty: 'intermediate',
    imagePath: '/images/anatomy/circle-of-willis.svg',
    imageAlt:
      'Schematic ventral view of Circle of Willis showing internal carotid arteries, anterior and posterior circulation, communicating arteries, and major branch vessels',
    view: 'Ventral',
    system: 'Vascular',
    clinicalSignificance:
      'The Circle of Willis provides critical collateral circulation between the anterior (internal carotid) and posterior (vertebrobasilar) circulations. A complete and functional circle is present in only approximately 25% of the population; anatomic variants (hypoplastic or absent segments) are common and clinically significant when collateral flow is needed. In pediatric neurology, the Circle of Willis is important for understanding moyamoya disease (progressive stenosis of the distal ICA with development of fragile collateral "puff of smoke" vessels on angiography), cerebral aneurysms (rare in children but associated with coarctation of the aorta, autosomal dominant polycystic kidney disease, and connective tissue disorders), and arteriovenous malformations.',
    annotations: [
      {
        id: 'ica',
        x: 35,
        y: 80,
        label: 'Internal carotid artery (ICA)',
        description:
          'Enters the skull through the carotid canal and cavernous sinus, terminating at its bifurcation into the ACA and MCA. The ICA supplies the majority of the anterior circulation. Progressive stenosis of the distal supraclinoid ICA is the hallmark of moyamoya disease, which is a major cause of pediatric stroke in East Asian populations and can occur in association with sickle cell disease, Down syndrome, and neurofibromatosis type 1.',
      },
      {
        id: 'mca-cow',
        x: 18,
        y: 42,
        label: 'Middle cerebral artery (MCA)',
        description:
          'The largest branch of the ICA, supplying the lateral cortical surface. The M1 (sphenoidal) segment gives rise to lenticulostriate perforators and bifurcates into superior and inferior divisions. The M1 bifurcation and proximal M2 segments are the most common sites of thrombotic occlusion in pediatric arterial ischemic stroke. MCA territory infarction produces the most clinically apparent stroke syndrome.',
      },
      {
        id: 'aca-cow',
        x: 42,
        y: 30,
        label: 'Anterior cerebral artery (ACA)',
        description:
          'Supplies the medial frontal and parietal cortex. The A1 segment connects the ICA bifurcation to the anterior communicating artery. A1 hypoplasia or aplasia is a common anatomic variant that can limit collateral flow. The pericallosal and callosomarginal arteries are the distal ACA branches that supply the medial hemispheric surface.',
      },
      {
        id: 'acomm',
        x: 50,
        y: 28,
        label: 'Anterior communicating artery (AComm)',
        description:
          'Short vessel connecting the bilateral ACAs, completing the anterior portion of the Circle of Willis. The most common site of intracranial aneurysm in adults. AComm aneurysm rupture produces subarachnoid hemorrhage in the interhemispheric fissure. In children, aneurysms are less common but may be associated with connective tissue disorders or infections (mycotic aneurysms).',
      },
      {
        id: 'pca-cow',
        x: 30,
        y: 48,
        label: 'Posterior cerebral artery (PCA)',
        description:
          'Supplies the occipital lobe and medial temporal lobe. The P1 segment connects the basilar tip to the posterior communicating artery. The fetal variant PCA (PCA arising from the ICA via a large PComm rather than from the basilar artery) is a common anatomic variant present in approximately 20% of individuals. PCA territory infarction causes contralateral homonymous hemianopia.',
      },
      {
        id: 'pcomm',
        x: 38,
        y: 55,
        label: 'Posterior communicating artery (PComm)',
        description:
          'Connects the ICA to the PCA, providing the critical link between anterior and posterior circulations. The PComm is the most important collateral pathway when either the ICA or basilar artery is occluded. PComm aneurysm is the second most common intracranial aneurysm site in adults and classically presents with CN III palsy (pupil-involving) due to the proximity of CN III as it exits the midbrain.',
      },
      {
        id: 'basilar',
        x: 50,
        y: 65,
        label: 'Basilar artery',
        description:
          'Formed by the union of the paired vertebral arteries at the pontomedullary junction. Ascends along the ventral surface of the pons, giving rise to anterior inferior cerebellar arteries (AICA), pontine perforators, superior cerebellar arteries (SCA), and terminating at the basilar bifurcation into the paired PCAs. Basilar artery occlusion is a neurological emergency causing brainstem ischemia with locked-in syndrome or death.',
      },
      {
        id: 'vertebral',
        x: 55,
        y: 85,
        label: 'Vertebral arteries',
        description:
          'Ascend through the cervical transverse foramina (C6-C1), enter the skull through the foramen magnum, and give rise to the posterior inferior cerebellar arteries (PICA) before uniting to form the basilar artery. Vertebral artery dissection, which can occur spontaneously or after minor cervical trauma, is an important cause of posterior circulation stroke in children and young adults.',
      },
      {
        id: 'sca',
        x: 38,
        y: 55,
        label: 'Superior cerebellar artery (SCA)',
        description:
          'The last major branch arising from the basilar artery before its terminal bifurcation. Supplies the superior surface of the cerebellum, the superior cerebellar peduncle, and parts of the midbrain tegmentum. SCA territory infarction causes ipsilateral cerebellar ataxia and may be associated with contralateral pain and temperature loss from involvement of the spinothalamic tract.',
      },
      {
        id: 'pica',
        x: 60,
        y: 75,
        label: 'Posterior inferior cerebellar artery (PICA)',
        description:
          'The largest branch of the vertebral artery, supplying the inferior cerebellum and lateral medulla. PICA occlusion produces the lateral medullary syndrome (Wallenberg syndrome): ipsilateral facial pain and temperature loss, Horner syndrome, cerebellar ataxia, and contralateral body pain and temperature loss with dysphagia and hoarseness from CN IX/X involvement.',
      },
    ],
    source:
      'Osborn AG, et al. Diagnostic Imaging: Brain. 4th ed. Elsevier; 2024.',
    license: 'Educational schematic diagram',
  },
];

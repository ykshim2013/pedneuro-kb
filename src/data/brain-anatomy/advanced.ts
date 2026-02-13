import type { AnatomyPattern } from './types';

export const advancedPatterns: AnatomyPattern[] = [
  {
    id: 'brainstem-cross-sections',
    title: 'Brainstem Cross-Sections: Midbrain, Pons, Medulla',
    description:
      'Three axial cross-sections at the levels of the midbrain, pons, and medulla illustrating the internal anatomy of the brainstem. Each level has characteristic structural landmarks visible on MRI: midbrain (cerebral peduncles, substantia nigra, red nucleus, cerebral aqueduct with tectum), pons (basis pontis, middle cerebellar peduncles, pontine tegmentum), and medulla (pyramids, inferior olivary nuclei, gracile and cuneate nuclei). Understanding brainstem internal anatomy is essential for localizing lesions in diffuse intrinsic pontine glioma (DIPG/DMG), brainstem infarcts, demyelinating disease, and cranial nerve palsies.',
    difficulty: 'advanced',
    imagePath: '/images/anatomy/brainstem-cross-sections.svg',
    imageAlt:
      'Three brainstem cross-section diagrams showing midbrain (with cerebral peduncles, substantia nigra, red nucleus), pons (with basis pontis, middle cerebellar peduncle), and medulla (with pyramids, olivary nuclei)',
    view: 'Axial (3 levels)',
    system: 'Structural',
    clinicalSignificance:
      'Brainstem lesion localization requires detailed knowledge of internal anatomy at each level. DIPG/DMG (diffuse midline glioma, H3 K27-altered) expands the pons diffusely with T2 hyperintensity and minimal or no enhancement; it is diagnosed radiographically and carries a median survival of 9-11 months. Midbrain lesions produce CN III palsy, Parinaud syndrome (dorsal midbrain syndrome with upgaze palsy, convergence-retraction nystagmus, and light-near dissociation), and Weber syndrome (ipsilateral CN III palsy with contralateral hemiparesis). Pontine lesions cause CN VI and VII palsies, and bilateral ventral pontine infarction produces locked-in syndrome (quadriplegia with preserved consciousness and vertical eye movements). Medullary lesions cause respiratory failure and lower cranial nerve (CN IX-XII) palsies. The hallmark of brainstem localization is crossed signs: ipsilateral cranial nerve deficits with contralateral long tract signs (motor or sensory).',
    annotations: [
      {
        id: 'cerebral-peduncle',
        x: 15,
        y: 32,
        label: 'Cerebral peduncle (midbrain)',
        description:
          'The ventral portion of the midbrain containing the descending corticospinal, corticobulbar, and corticopontine tracts (collectively the basis pedunculi or crus cerebri). Unilateral peduncular lesions produce Weber syndrome: ipsilateral CN III palsy with contralateral hemiparesis. On MRI, the cerebral peduncles appear as paired structures separated by the interpeduncular fossa.',
      },
      {
        id: 'substantia-nigra',
        x: 18,
        y: 42,
        label: 'Substantia nigra (midbrain)',
        description:
          'Located between the cerebral peduncle (ventral) and the tegmentum (dorsal). The pars compacta contains dopaminergic neurons that project to the striatum via the nigrostriatal pathway. Degeneration of these neurons is the pathological hallmark of Parkinson disease. On high-field MRI, the substantia nigra appears T2 hypointense due to neuromelanin and iron content. In pediatric neurology, nigral injury is seen in mitochondrial disorders (Leigh syndrome) and kernicterus.',
      },
      {
        id: 'red-nucleus',
        x: 20,
        y: 35,
        label: 'Red nucleus (midbrain)',
        description:
          'Paired round structures in the midbrain tegmentum, clearly visible on axial MRI as the most reliable landmark for identifying the midbrain level. The red nucleus relays cerebellar output to the thalamus and spinal cord (rubrospinal tract). Lesions involving the red nucleus and adjacent structures produce Claude syndrome (ipsilateral CN III palsy with contralateral ataxia) or Benedikt syndrome (CN III palsy, contralateral ataxia, and contralateral tremor/chorea).',
      },
      {
        id: 'aqueduct-bs',
        x: 22,
        y: 22,
        label: 'Cerebral aqueduct (midbrain)',
        description:
          'Located dorsal to the midbrain tegmentum and ventral to the tectum (quadrigeminal plate containing the superior and inferior colliculi). Aqueductal stenosis, whether congenital or acquired (tectal plate glioma, post-hemorrhagic), produces triventricular hydrocephalus. The periaqueductal gray matter surrounding the aqueduct is involved in pain modulation and is affected in Wernicke encephalopathy (thiamine deficiency).',
      },
      {
        id: 'basis-pontis',
        x: 50,
        y: 42,
        label: 'Basis pontis (pons)',
        description:
          'The massive ventral portion of the pons containing pontine nuclei (relay stations for corticopontocerebellar pathway) and transverse pontine fibers. This structure is diffusely expanded and T2 hyperintense in DIPG/DMG, which is the most common brainstem tumor in children. Central pontine myelinolysis (osmotic demyelination syndrome) characteristically produces a trident-shaped T2 hyperintensity in the central basis pontis, sparing the peripheral fibers and tegmentum.',
      },
      {
        id: 'mcp',
        x: 42,
        y: 35,
        label: 'Middle cerebellar peduncle (MCP)',
        description:
          'The largest cerebellar peduncle, connecting the basis pontis to the cerebellar hemisphere via transverse pontine fibers. The MCP is a characteristic site of involvement in several conditions: osmotic demyelination syndrome (extrapontine myelinolysis), multiple sclerosis, progressive multifocal leukoencephalopathy (PML), and spinocerebellar ataxias. MCP signal abnormality is also described in fragile X-associated tremor/ataxia syndrome (FXTAS) as the "MCP sign."',
      },
      {
        id: 'tegmentum',
        x: 55,
        y: 30,
        label: 'Pontine tegmentum',
        description:
          'The dorsal portion of the pons between the basis pontis and the fourth ventricle. Contains the nuclei of CN V (trigeminal: facial sensation and mastication), CN VI (abducens: lateral rectus), and CN VII (facial: facial expression, taste, stapedius), as well as the reticular formation (arousal and consciousness) and ascending sensory tracts (medial lemniscus, spinothalamic tract). Tegmental lesions produce cranial nerve palsies with sensory and/or motor long tract signs.',
      },
      {
        id: 'pyramid',
        x: 82,
        y: 42,
        label: 'Medullary pyramids',
        description:
          'Paired ventral structures of the medulla containing the corticospinal tracts. The pyramidal decussation at the caudal medulla is where approximately 85-90% of corticospinal fibers cross to the contralateral side, forming the lateral corticospinal tract. This explains why cortical and brainstem lesions above the decussation produce contralateral motor deficits, while spinal cord lesions produce ipsilateral motor deficits below the level of injury.',
      },
      {
        id: 'olivary-nucleus',
        x: 78,
        y: 35,
        label: 'Inferior olivary nucleus (medulla)',
        description:
          'Large convoluted gray matter structure in the ventrolateral medulla that relays input to the contralateral cerebellum via the inferior cerebellar peduncle. Hypertrophic olivary degeneration (HOD) is a unique form of trans-synaptic degeneration that occurs following lesions of the dentatorubral pathway (Guillain-Mollaret triangle: red nucleus, inferior olive, dentate nucleus). On MRI, HOD appears as T2 hyperintensity and enlargement of the inferior olive, and clinically manifests as palatal myoclonus.',
      },
      {
        id: 'gracile-cuneate',
        x: 85,
        y: 22,
        label: 'Gracile and cuneate nuclei (dorsal medulla)',
        description:
          'Located in the dorsal medulla, these nuclei are the first-order relay stations for the dorsal column-medial lemniscus pathway. The gracile nucleus (medial, fasciculus gracilis) relays proprioception and fine touch from the lower extremities, while the cuneate nucleus (lateral, fasciculus cuneatus) relays from the upper extremities. Second-order neurons cross as the internal arcuate fibers and ascend as the medial lemniscus to the thalamus. Dorsal column dysfunction produces loss of proprioception, vibration sense, and two-point discrimination.',
      },
    ],
    source:
      'Haines DE. Neuroanatomy in Clinical Context. 10th ed. Wolters Kluwer; 2019.',
    license: 'Educational schematic diagram',
  },
  {
    id: 'cranial-nerves',
    title: 'Cranial Nerves: Ventral View',
    description:
      'Ventral view of the brain showing all 12 pairs of cranial nerves (CN I-XII) with their exit points from the brain and brainstem. Each nerve is annotated with its name, key functions, and clinical significance. Cranial nerve examination is fundamental to pediatric neurological assessment and is essential for localizing pathology to specific brainstem levels, skull base regions, or peripheral nerve segments.',
    difficulty: 'advanced',
    imagePath: '/images/anatomy/cranial-nerves.svg',
    imageAlt:
      'Schematic ventral view of brain showing all 12 cranial nerves (I-XII) with labeled exit points, names, and key functions',
    view: 'Ventral',
    system: 'Cranial Nerves',
    clinicalSignificance:
      'Cranial nerve dysfunction is a critical localizing sign in pediatric neurology. Each cranial nerve exits the brainstem at a specific level, allowing precise lesion localization. CN III palsy with contralateral hemiparesis (Weber syndrome) localizes to the midbrain. CN VI palsy is a non-localizing sign of raised intracranial pressure because of its long intracranial course along the clivus, making it vulnerable to stretching with brain displacement. CN VII (facial nerve) palsy is one of the most commonly tested clinical distinctions: upper motor neuron (UMN) lesions spare the forehead due to bilateral cortical innervation of the upper face, while lower motor neuron (LMN) lesions (Bell palsy, CPA tumor, brainstem lesion) cause complete ipsilateral facial weakness. Bulbar dysfunction involving CN IX-XII indicates medullary or lower brainstem pathology and carries risk of aspiration and respiratory compromise.',
    annotations: [
      {
        id: 'cn-i',
        x: 50,
        y: 12,
        label: 'CN I (Olfactory)',
        description:
          'Sensory nerve for smell. Olfactory receptor neurons in the nasal mucosa project through the cribriform plate to the olfactory bulb. Unique among cranial nerves in having direct cortical projection without thalamic relay. Anosmia occurs with head trauma (shearing of olfactory filaments through cribriform plate), frontal lobe tumors (olfactory groove meningioma), and neurodegenerative diseases. In children, congenital anosmia associated with hypogonadotropic hypogonadism is Kallmann syndrome.',
      },
      {
        id: 'cn-ii',
        x: 50,
        y: 20,
        label: 'CN II (Optic)',
        description:
          'Sensory nerve for vision. Technically a CNS tract (myelinated by oligodendrocytes, not Schwann cells). Optic nerve fibers from the nasal retina cross at the optic chiasm (chiasmal lesion causes bitemporal hemianopia), while temporal fibers remain ipsilateral. Papilledema (optic disc swelling from raised intracranial pressure) is a critical sign in pediatric neurology. Optic neuritis is a common presentation of pediatric multiple sclerosis and neuromyelitis optica spectrum disorder.',
      },
      {
        id: 'cn-iii',
        x: 42,
        y: 32,
        label: 'CN III (Oculomotor)',
        description:
          'Motor nerve exiting the ventral midbrain in the interpeduncular fossa. Innervates the superior rectus, inferior rectus, medial rectus, inferior oblique, and levator palpebrae superioris. Also carries parasympathetic fibers (Edinger-Westphal nucleus) for pupil constriction and accommodation. Complete CN III palsy produces the classic triad: "down and out" eye position (unopposed lateral rectus and superior oblique), ptosis (levator palpebrae paralysis), and mydriasis (pupil dilation from parasympathetic loss). Pupil involvement suggests compressive etiology (aneurysm, uncal herniation) rather than ischemic.',
      },
      {
        id: 'cn-iv',
        x: 58,
        y: 34,
        label: 'CN IV (Trochlear)',
        description:
          'The only cranial nerve that exits dorsally (from the posterior midbrain below the inferior colliculus) and crosses to innervate the contralateral superior oblique muscle. Also the thinnest cranial nerve with the longest intracranial course, making it vulnerable to head trauma. The superior oblique performs intorsion, depression in adduction, and abduction. CN IV palsy causes vertical diplopia (worse on looking down and toward the opposite side) and a compensatory head tilt away from the affected side (positive Bielschowsky head tilt test).',
      },
      {
        id: 'cn-v',
        x: 25,
        y: 42,
        label: 'CN V (Trigeminal)',
        description:
          'The largest cranial nerve, exiting the lateral pons. Has three divisions: V1 (ophthalmic, sensory to forehead and upper face), V2 (maxillary, sensory to midface), and V3 (mandibular, sensory to lower face and motor to muscles of mastication including masseter, temporalis, and pterygoids). The corneal reflex (afferent V1, efferent VII) tests CN V sensory function. Trigeminal neuralgia is rare in children and should prompt investigation for structural lesion (tumor, demyelination) or neurovascular compression.',
      },
      {
        id: 'cn-vi',
        x: 45,
        y: 48,
        label: 'CN VI (Abducens)',
        description:
          'Motor nerve exiting at the pontomedullary junction. Innervates the lateral rectus muscle (abduction of the eye). Has the longest intracranial subarachnoid course of any cranial nerve, ascending along the clivus and passing over the petrous apex. This long course makes it uniquely vulnerable to stretching from raised intracranial pressure, making CN VI palsy a classic "false localizing sign" that indicates elevated ICP rather than a focal pontine lesion. In children, new-onset CN VI palsy requires urgent evaluation for intracranial hypertension.',
      },
      {
        id: 'cn-vii',
        x: 35,
        y: 50,
        label: 'CN VII (Facial)',
        description:
          'Mixed nerve exiting at the pontomedullary junction (cerebellopontine angle). Motor function: facial expression muscles. Sensory: taste from anterior two-thirds of the tongue. Parasympathetic: lacrimal, submandibular, and sublingual gland secretion. Also innervates the stapedius muscle (dampening of loud sounds). The critical clinical distinction is UMN versus LMN facial palsy: UMN lesions (cortical or subcortical) spare the forehead due to bilateral cortical input to the upper face motor neurons, while LMN lesions (Bell palsy, CPA tumor, brainstem) cause complete ipsilateral facial weakness including the forehead.',
      },
      {
        id: 'cn-viii',
        x: 30,
        y: 52,
        label: 'CN VIII (Vestibulocochlear)',
        description:
          'Sensory nerve exiting at the pontomedullary junction (cerebellopontine angle). Cochlear division: hearing (spiral ganglion neurons from the organ of Corti). Vestibular division: balance and spatial orientation (superior and inferior vestibular ganglia from semicircular canals, utricle, and saccule). Vestibular schwannoma (acoustic neuroma) at the CPA is the hallmark tumor of neurofibromatosis type 2 (bilateral vestibular schwannomas). Sensorineural hearing loss in children requires evaluation including audiometry, ABR, and MRI to exclude retrocochlear pathology.',
      },
      {
        id: 'cn-ix',
        x: 38,
        y: 60,
        label: 'CN IX (Glossopharyngeal)',
        description:
          'Mixed nerve exiting the lateral medulla (postolivary sulcus). Motor: stylopharyngeus muscle (elevates pharynx during swallowing). Sensory: pharyngeal sensation, taste from posterior one-third of the tongue, and carotid body/sinus (baroreceptor and chemoreceptor afferents). Parasympathetic: parotid gland secretion via the otic ganglion. CN IX palsy produces loss of the gag reflex (afferent limb; CN X is the efferent limb) and ipsilateral loss of taste on the posterior tongue.',
      },
      {
        id: 'cn-x',
        x: 45,
        y: 62,
        label: 'CN X (Vagus)',
        description:
          'The longest cranial nerve, exiting the lateral medulla and extending to the thoracic and abdominal viscera. Motor: pharyngeal and laryngeal muscles (recurrent laryngeal nerve). Sensory: pharynx, larynx, external ear. Parasympathetic: heart (bradycardia), lungs (bronchoconstriction), and gastrointestinal tract (motility). Unilateral CN X palsy causes ipsilateral vocal cord paralysis with hoarseness, uvular deviation away from the lesion side, and dysphagia. In neonates, vocal cord paralysis may be congenital or secondary to birth trauma.',
      },
      {
        id: 'cn-xi',
        x: 55,
        y: 65,
        label: 'CN XI (Accessory)',
        description:
          'Motor nerve with a unique dual origin: cranial root (from the lateral medulla, joining the vagus nerve) and spinal root (from the upper cervical cord C1-C5, ascending through the foramen magnum). The spinal root innervates the sternocleidomastoid (SCM) and trapezius muscles. CN XI palsy causes weakness of head turning (SCM) and shoulder shrug (trapezius). The spinal root is vulnerable to injury during posterior triangle neck surgery (lymph node biopsy). Torticollis in infants should be distinguished from CN XI pathology.',
      },
      {
        id: 'cn-xii',
        x: 50,
        y: 70,
        label: 'CN XII (Hypoglossal)',
        description:
          'Motor nerve exiting the ventral medulla between the pyramid and the inferior olive, passing through the hypoglossal canal. Innervates all intrinsic and extrinsic tongue muscles (except palatoglossus, which is CN X). LMN lesion causes ipsilateral tongue atrophy, fasciculations, and deviation toward the lesion side on protrusion (due to unopposed action of the contralateral genioglossus). UMN lesion causes tongue deviation away from the cortical lesion side (contralateral to the lesion). In children, tongue fasciculations suggest spinal muscular atrophy or other lower motor neuron disease.',
      },
    ],
    source:
      'Blumenfeld H. Neuroanatomy through Clinical Cases. 3rd ed. Sinauer Associates; 2021.',
    license: 'Educational schematic diagram',
  },
];

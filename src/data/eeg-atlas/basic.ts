import type { EEGPattern } from './types';

export const basicPatterns: EEGPattern[] = [
  {
    id: 'electrode-placement',
    title: '10-20 System Electrode Placement',
    description:
      'The International 10-20 system is a standardized method for scalp electrode placement used in clinical EEG. Electrodes are positioned at 10% and 20% intervals along measured distances between standard anatomical landmarks (nasion, inion, preauricular points).',
    difficulty: 'basic',
    imagePath: '/images/eeg/10-20-system.svg',
    imageAlt:
      'Diagram of the International 10-20 electrode placement system showing standard scalp positions on a head schematic viewed from above',
    clinicalSignificance:
      'Standardized electrode placement system for consistent EEG recording. Ensures reproducibility across recordings and institutions. Odd numbers denote left hemisphere, even numbers denote right hemisphere, and "z" denotes midline.',
    annotations: [
      {
        id: 'fp1',
        x: 38,
        y: 12,
        label: 'Fp1',
        description:
          'Left frontopolar electrode. 10% above nasion on the left. Monitors frontal eye fields and prefrontal cortex activity.',
      },
      {
        id: 'fp2',
        x: 62,
        y: 12,
        label: 'Fp2',
        description:
          'Right frontopolar electrode. 10% above nasion on the right. Monitors frontal eye fields and prefrontal cortex activity.',
      },
      {
        id: 'f3',
        x: 30,
        y: 30,
        label: 'F3',
        description:
          'Left frontal electrode. Overlies the left frontal lobe, capturing motor planning and executive function areas.',
      },
      {
        id: 'f4',
        x: 70,
        y: 30,
        label: 'F4',
        description:
          'Right frontal electrode. Overlies the right frontal lobe, capturing motor planning and executive function areas.',
      },
      {
        id: 'fz',
        x: 50,
        y: 25,
        label: 'Fz',
        description:
          'Midline frontal electrode. Positioned at the vertex of the frontal region along the midline sagittal plane.',
      },
      {
        id: 'c3',
        x: 25,
        y: 50,
        label: 'C3',
        description:
          'Left central electrode. Overlies the left primary motor and sensory cortex (hand area). Key for sensorimotor rhythm monitoring.',
      },
      {
        id: 'c4',
        x: 75,
        y: 50,
        label: 'C4',
        description:
          'Right central electrode. Overlies the right primary motor and sensory cortex (hand area). Key for sensorimotor rhythm monitoring.',
      },
      {
        id: 'cz',
        x: 50,
        y: 50,
        label: 'Cz',
        description:
          'Midline central electrode (vertex). Positioned at the intersection of nasion-inion and preauricular lines. Important for vertex sharp transients in sleep.',
      },
      {
        id: 't3',
        x: 10,
        y: 50,
        label: 'T3',
        description:
          'Left mid-temporal electrode. Overlies the left temporal lobe. Critical for detecting temporal lobe epileptiform discharges.',
      },
      {
        id: 't4',
        x: 90,
        y: 50,
        label: 'T4',
        description:
          'Right mid-temporal electrode. Overlies the right temporal lobe. Critical for detecting temporal lobe epileptiform discharges.',
      },
      {
        id: 'p3',
        x: 30,
        y: 70,
        label: 'P3',
        description:
          'Left parietal electrode. Overlies the left parietal association cortex involved in sensory integration.',
      },
      {
        id: 'p4',
        x: 70,
        y: 70,
        label: 'P4',
        description:
          'Right parietal electrode. Overlies the right parietal association cortex involved in sensory integration.',
      },
      {
        id: 'pz',
        x: 50,
        y: 75,
        label: 'Pz',
        description:
          'Midline parietal electrode. Positioned along the midline between central and occipital regions.',
      },
      {
        id: 'o1',
        x: 38,
        y: 90,
        label: 'O1',
        description:
          'Left occipital electrode. Overlies the left visual cortex. Primary site for recording the posterior dominant rhythm (alpha).',
      },
      {
        id: 'o2',
        x: 62,
        y: 90,
        label: 'O2',
        description:
          'Right occipital electrode. Overlies the right visual cortex. Primary site for recording the posterior dominant rhythm (alpha).',
      },
    ],
    source: 'Jasper HH. The ten-twenty electrode system of the International Federation. Electroencephalogr Clin Neurophysiol. 1958;10:371-375.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'normal-pdr',
    title: 'Normal Posterior Dominant Rhythm (PDR)',
    description:
      'The posterior dominant rhythm (PDR) is the dominant frequency recorded over the occipital regions during relaxed wakefulness with eyes closed. In adults it is 8-13 Hz (alpha band). It attenuates with eye opening and is best seen in bipolar longitudinal montage.',
    difficulty: 'basic',
    imagePath: '/images/eeg/normal-pdr.svg',
    imageAlt:
      'Multi-channel EEG trace showing normal posterior dominant alpha rhythm at 10 Hz over occipital channels with attenuation upon eye opening',
    frequency: '8-13 Hz (alpha)',
    distribution: 'Occipital, bilateral',
    clinicalSignificance:
      'PDR maturation follows the [Age+2] Hz rule in early childhood (e.g., 6 Hz at age 4). A PDR that is slow for age suggests diffuse encephalopathy. Asymmetry of >1 Hz or >50% amplitude suggests a structural or functional lesion on the lower-amplitude or slower side.',
    annotations: [
      {
        id: 'alpha-o1',
        x: 72,
        y: 78,
        label: 'Alpha rhythm (O1)',
        description:
          'Prominent 10 Hz sinusoidal alpha activity over left occipital channel. Amplitude typically 20-60 microvolts in adults.',
      },
      {
        id: 'alpha-o2',
        x: 72,
        y: 85,
        label: 'Alpha rhythm (O2)',
        description:
          'Symmetric 10 Hz alpha activity over right occipital channel. Symmetry with O1 is normal; >50% amplitude asymmetry is abnormal.',
      },
      {
        id: 'eyes-open',
        x: 85,
        y: 50,
        label: 'Eyes open - attenuation',
        description:
          'Alpha rhythm attenuates (blocks) with eye opening. This reactivity confirms a physiologic PDR. Lack of reactivity is abnormal.',
      },
      {
        id: 'frontal-low-amp',
        x: 30,
        y: 15,
        label: 'Frontal low-amplitude fast activity',
        description:
          'Normal low-amplitude beta activity (13-30 Hz) predominates over frontal regions during wakefulness. Higher amplitude beta may be seen with benzodiazepine or barbiturate use.',
      },
      {
        id: 'anterior-spread',
        x: 45,
        y: 50,
        label: 'Anterior gradient',
        description:
          'Normal anterior-to-posterior amplitude gradient: lower amplitude anteriorly, higher posteriorly. Reversal of this gradient is abnormal.',
      },
    ],
    source: 'Niedermeyer E, da Silva FL. Electroencephalography: Basic Principles, Clinical Applications, and Related Fields. 5th ed. Lippincott Williams & Wilkins; 2005.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'pdr-maturation',
    title: 'PDR Maturation by Age',
    description:
      'The posterior dominant rhythm increases in frequency throughout childhood, beginning at approximately 3-4 Hz in infancy and reaching adult alpha frequency (10 Hz) by around age 8-10 years. Understanding expected PDR for age is essential for interpreting pediatric EEGs.',
    difficulty: 'basic',
    imagePath: '/images/eeg/pdr-maturation.svg',
    imageAlt:
      'Chart showing posterior dominant rhythm frequency maturation from infancy through adolescence, with representative EEG traces at each age',
    clinicalSignificance:
      'PDR increases approximately 1 Hz per year in early childhood; adult alpha (10 Hz) is typically reached by age 8-10. A rough rule is PDR = Age + 2 Hz (for ages 1-5). PDR that is more than 2 Hz below expected for age suggests diffuse cerebral dysfunction.',
    annotations: [
      {
        id: 'neonate',
        x: 8,
        y: 80,
        label: 'Neonate: 3-4 Hz',
        description:
          'Neonatal occipital activity is 3-4 Hz delta range. A recognizable PDR is not typically present until approximately 3 months of age.',
      },
      {
        id: 'infant-6mo',
        x: 22,
        y: 65,
        label: '6 months: 5 Hz',
        description:
          'By 6 months, occipital dominant activity reaches approximately 5 Hz (theta range). Reactive to visual stimuli.',
      },
      {
        id: 'toddler-1yr',
        x: 35,
        y: 55,
        label: '1 year: 6 Hz',
        description:
          'By 12 months, PDR typically reaches 6 Hz. Activity becomes more organized and reactive to eye opening/closing.',
      },
      {
        id: 'child-3yr',
        x: 48,
        y: 42,
        label: '3 years: 8 Hz',
        description:
          'By age 3, PDR enters the alpha frequency range at approximately 8 Hz. Background becomes better organized.',
      },
      {
        id: 'child-5yr',
        x: 60,
        y: 33,
        label: '5 years: 8-9 Hz',
        description:
          'At age 5, PDR is approximately 8-9 Hz. Posterior slow waves of youth may intermix with alpha activity.',
      },
      {
        id: 'child-8yr',
        x: 75,
        y: 22,
        label: '8 years: 9-10 Hz',
        description:
          'By age 8, PDR approaches adult frequency at 9-10 Hz. Background organization resembles adult pattern.',
      },
      {
        id: 'adolescent',
        x: 90,
        y: 15,
        label: '10+ years: 10-11 Hz',
        description:
          'By age 10, adult alpha frequency (10-11 Hz) is reached. PDR remains stable through adolescence and adulthood.',
      },
    ],
    source: 'Kellaway P. Orderly approach to visual analysis: elements of the normal EEG and their characteristics in children and adults. In: Ebersole JS, Pedley TA, eds. Current Practice of Clinical Electroencephalography. 3rd ed. Lippincott Williams & Wilkins; 2003:100-159.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'normal-sleep',
    title: 'Normal Sleep EEG Patterns',
    description:
      'Sleep architecture produces characteristic EEG patterns including vertex sharp transients (V-waves), sleep spindles, and K-complexes. Recognizing normal sleep graphoelements is essential to avoid misinterpreting them as epileptiform discharges.',
    difficulty: 'basic',
    imagePath: '/images/eeg/normal-sleep.svg',
    imageAlt:
      'Multi-channel EEG trace showing normal NREM sleep stage 2 features including vertex waves, sleep spindles, and K-complexes',
    clinicalSignificance:
      'Sleep architecture development is age-dependent. Sleep spindles appear by 6-8 weeks post-term and must not be confused with epileptiform discharges. Vertex waves emerge by 3-4 months. Absent or asymmetric spindles may indicate thalamic or hemispheric dysfunction.',
    annotations: [
      {
        id: 'vertex-wave',
        x: 20,
        y: 42,
        label: 'Vertex sharp transient (V-wave)',
        description:
          'Sharply contoured, surface-negative wave maximal at Cz during drowsiness and light NREM sleep (N1). Amplitude up to 200 microvolts. Appears by 3-4 months of age.',
      },
      {
        id: 'sleep-spindle',
        x: 45,
        y: 30,
        label: 'Sleep spindle',
        description:
          'Rhythmic 12-14 Hz burst lasting 0.5-2 seconds, maximal over central regions (C3/C4). Generated by thalamocortical circuits. Appears by 6-8 weeks post-term. Should be symmetric.',
      },
      {
        id: 'k-complex',
        x: 70,
        y: 45,
        label: 'K-complex',
        description:
          'High-amplitude biphasic wave (initial sharp negative, then slower positive component) followed by a sleep spindle. Maximal at vertex/frontal regions. Hallmark of NREM stage N2. Appears by approximately 5 months of age.',
      },
      {
        id: 'slow-wave',
        x: 85,
        y: 65,
        label: 'Delta slowing (N3)',
        description:
          'High-amplitude (>75 microvolts) delta activity (0.5-2 Hz) occupying >20% of an epoch defines NREM stage N3 (slow-wave sleep). Prominent in children, decreases with age.',
      },
      {
        id: 'posts',
        x: 30,
        y: 82,
        label: 'Positive occipital sharp transients of sleep (POSTS)',
        description:
          'Positive sharp waves over occipital regions during light sleep. Surface-positive, may appear in runs. A normal sleep variant that should not be mistaken for epileptiform activity.',
      },
    ],
    source: 'Berry RB, et al. The AASM Manual for the Scoring of Sleep and Associated Events: Rules, Terminology and Technical Specifications. Version 2.6. American Academy of Sleep Medicine; 2020.',
    license: 'Educational use - original diagram',
  },
];

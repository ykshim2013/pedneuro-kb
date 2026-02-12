import type { EEGPattern } from './types';

export const intermediatePatterns: EEGPattern[] = [
  {
    id: 'spike-wave-3hz',
    title: '3 Hz Spike-and-Wave (Childhood Absence Epilepsy)',
    description:
      'Generalized 3 Hz spike-and-wave discharges are the electrographic hallmark of childhood absence epilepsy (CAE). Discharges consist of a spike (or sharp wave) followed by a slow wave, repeating at approximately 3 Hz. They are bilateral, synchronous, and symmetric with bifrontal maximum. Discharges begin and end abruptly and last 4-20 seconds, often provoked by hyperventilation.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/spike-wave-3hz-real.jpg',
    imageAlt:
      'Clinical EEG recording showing generalized 3 Hz spike-and-wave discharge in an 18-year-old patient with childhood absence epilepsy',
    syndrome: 'Childhood Absence Epilepsy',
    frequency: '2.5-4 Hz (typically 3 Hz)',
    distribution: 'Generalized, bifrontal maximum',
    clinicalSignificance:
      'Hallmark of childhood absence epilepsy; activated by hyperventilation in >90% of untreated patients. Normal background between discharges is expected. Frequency may slow slightly toward end of longer bursts. Atypical features (slow background, asymmetry, <2.5 Hz) suggest a different syndrome such as Lennox-Gastaut.',
    annotations: [
      {
        id: 'spike-component',
        x: 35,
        y: 25,
        label: 'Spike component',
        description:
          'Brief (<70 ms) high-amplitude spike preceding each slow wave. Represents a synchronous cortical depolarization. Best seen at frontal electrodes (Fp1/Fp2, F3/F4).',
      },
      {
        id: 'wave-component',
        x: 50,
        y: 35,
        label: 'Slow wave component',
        description:
          'Rounded slow wave (~300 ms) following the spike. Represents a period of cortical inhibition (hyperpolarization). Together with the spike, forms the characteristic spike-wave complex.',
      },
      {
        id: 'bifrontal-max',
        x: 20,
        y: 15,
        label: 'Bifrontal maximum',
        description:
          'Amplitude of the spike-and-wave complex is highest over bifrontal electrodes (Fp1/Fp2, F3/F4). This anterior predominance is typical for CAE.',
      },
      {
        id: '3hz-rhythm',
        x: 70,
        y: 50,
        label: '3 Hz repetition rate',
        description:
          'The spike-wave complex repeats at approximately 3 cycles per second (2.5-4 Hz). The rate may slow to 2.5 Hz toward the end of a prolonged burst. Frequency <2.5 Hz suggests atypical absence or LGS.',
      },
    ],
    source: 'Nascimento FA, et al. Seminar in epileptology: Normal awake and sleep patterns, interictal abnormalities, and ictal patterns on scalp EEG. Epileptic Disord. 2025;27:803-842. PMC12574496. Figure 17.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'centrotemporal-spikes',
    title: 'Centrotemporal Spikes (Self-Limited Epilepsy with Centrotemporal Spikes)',
    description:
      'Centrotemporal spikes (CTS) are high-amplitude, stereotyped spikes with a characteristic blunt morphology and horizontal dipole, maximal over the centrotemporal (rolandic) region. They are the signature interictal pattern of self-limited epilepsy with centrotemporal spikes (SLECTS, formerly benign rolandic epilepsy), the most common childhood epilepsy syndrome.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/centrotemporal-spikes-real.jpg',
    imageAlt:
      'Clinical interictal EEG recording showing independent left and right centrotemporal spikes in an 8-year-old boy with self-limited epilepsy with centrotemporal spikes',
    syndrome: 'Self-Limited Epilepsy with Centrotemporal Spikes',
    distribution: 'C3/C4, T3/T4 (centrotemporal)',
    clinicalSignificance:
      'Most common benign childhood epilepsy pattern. Spikes are dramatically activated during NREM sleep, often increasing 10-fold. The interictal EEG may be normal during wakefulness. Spikes may persist for years after seizures stop. Bilateral independent CTS are common and do not alter prognosis.',
    annotations: [
      {
        id: 'centrotemporal-spike',
        x: 40,
        y: 45,
        label: 'Centrotemporal spike',
        description:
          'Characteristic high-amplitude (100-300 microvolts) spike with a rounded/blunt peak followed by a prominent slow wave. Maximal at centrotemporal electrodes (C3/C4, T3/T4). The spike duration is typically 60-80 ms.',
      },
      {
        id: 'tangential-dipole',
        x: 60,
        y: 30,
        label: 'Tangential dipole',
        description:
          'CTS demonstrate a tangential dipole: negative maximum at centrotemporal region with a positive field at frontal electrodes. This dipole orientation reflects the tangential generator in the rolandic cortex.',
      },
      {
        id: 'bilateral-independent',
        x: 25,
        y: 65,
        label: 'Bilateral independent spikes',
        description:
          'Independent centrotemporal spikes can occur on both sides. Bilateral independent CTS are common in SLECTS and do not alter the benign prognosis.',
      },
      {
        id: 'normal-background',
        x: 80,
        y: 75,
        label: 'Normal background activity',
        description:
          'The interictal background is normal in SLECTS. Normal PDR and sleep architecture are preserved. Abnormal background activity should prompt consideration of alternative diagnoses.',
      },
    ],
    source: 'Fawzy A, et al. Childhood absence epilepsy associated with concomitant centrotemporal spikes. Cureus. 2022;14(9):e28489. PMC9513283. Figure 2.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0)',
  },
  {
    id: 'polyspike-wave',
    title: 'Polyspike-and-Wave (Juvenile Myoclonic Epilepsy)',
    description:
      'Generalized polyspike-and-wave discharges consist of bursts of multiple spikes (polyspikes, typically 3-6 spikes) followed by irregular slow waves. This pattern is the electrographic signature of juvenile myoclonic epilepsy (JME), usually appearing in adolescence. The discharges are irregular, often 3-6 Hz, and correlate clinically with myoclonic jerks.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/polyspike-wave-real.jpg',
    imageAlt:
      'Clinical EEG recording showing generalized 3.5-4 Hz polyspike-and-wave discharge in a 14-year-old patient with juvenile myoclonic epilepsy',
    syndrome: 'Juvenile Myoclonic Epilepsy',
    frequency: '3-6 Hz (irregular)',
    distribution: 'Generalized',
    clinicalSignificance:
      'Characteristic of JME; polyspike bursts correlate temporally with myoclonic jerks, particularly upon awakening. Photosensitivity (photoparoxysmal response) is common, seen in approximately 30-40% of patients. Background is typically normal. JME is lifelong in most patients and requires long-term treatment with broad-spectrum AEDs.',
    annotations: [
      {
        id: 'polyspike',
        x: 35,
        y: 30,
        label: 'Polyspike component',
        description:
          'Burst of 3-6 rapid spikes occurring in quick succession before the slow wave. Each spike is 20-50 ms in duration. Polyspikes correlate with the myoclonic jerk on EMG. Higher spike count often corresponds to more clinically evident myoclonus.',
      },
      {
        id: 'slow-wave',
        x: 55,
        y: 40,
        label: 'Slow wave component',
        description:
          'Irregular slow wave following the polyspike burst. The slow wave represents a period of cortical inhibition. The overall complex has an irregular, fragmented appearance compared to the regular 3 Hz spike-wave of CAE.',
      },
      {
        id: 'generalized-dist',
        x: 20,
        y: 55,
        label: 'Generalized distribution',
        description:
          'The discharge is bisynchronous and symmetric across all channels, reflecting a generalized cortical generator. Frontocentral predominance is typical.',
      },
      {
        id: 'irregular-freq',
        x: 75,
        y: 50,
        label: 'Irregular 3.5-4 Hz rhythm',
        description:
          'Unlike the metronomic 3 Hz rhythm of CAE, JME discharges are irregular in frequency (3-6 Hz) and morphology. Bursts are typically brief (1-3 seconds), often occurring in clusters upon awakening or with photic stimulation.',
      },
    ],
    source: 'Nascimento FA, et al. Seminar in epileptology: Normal awake and sleep patterns, interictal abnormalities, and ictal patterns on scalp EEG. Epileptic Disord. 2025;27:803-842. PMC12574496. Figure 18.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
  {
    id: 'focal-seizure',
    title: 'Focal Seizure Onset and Evolution',
    description:
      'Focal (partial) seizures originate from a localized cortical region and demonstrate characteristic electrographic evolution: rhythmic activity begins at one electrode or a few electrodes, then increases in amplitude, decreases in frequency, and spreads to adjacent electrodes. This organized evolution distinguishes true seizures from artifacts and interictal discharges.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/focal-seizure-real.jpg',
    imageAlt:
      'Clinical EEG recording showing focal (frontal) seizure onset with rhythmic ictal discharge evolving in frequency and amplitude',
    distribution: 'Focal, with evolution',
    clinicalSignificance:
      'Focal seizure evolution demonstrates an organizing epileptic network; the site of earliest rhythmic change helps localize the seizure onset zone for surgical evaluation. Classic evolution follows: low-amplitude fast activity at onset, progressive increase in amplitude with decrease in frequency, and spatial spread to neighboring electrodes. Post-ictal slowing at the region of onset further confirms localization.',
    annotations: [
      {
        id: 'seizure-onset',
        x: 15,
        y: 35,
        label: 'Seizure onset',
        description:
          'Initial rhythmic ictal discharge (>20 microvolts) appearing focally. This is the electrographic seizure onset and localizes the seizure origin. May be preceded by attenuation or a DC shift.',
      },
      {
        id: 'rhythmic-evolution',
        x: 45,
        y: 45,
        label: 'Rhythmic evolution',
        description:
          'The initial activity organizes into rhythmic patterns with increasing amplitude. This organized rhythmic evolution is a key feature distinguishing electrographic seizures from interictal patterns or artifacts.',
      },
      {
        id: 'freq-change',
        x: 70,
        y: 55,
        label: 'Frequency-amplitude evolution',
        description:
          'As the seizure progresses, frequency decreases while amplitude increases. The rhythm may transition from fast activity to theta to delta range. This frequency-amplitude evolution reflects progressive recruitment of cortical neurons.',
      },
      {
        id: 'spatial-spread',
        x: 85,
        y: 30,
        label: 'Spatial spread',
        description:
          'The rhythmic seizure activity propagates to neighboring electrodes and eventually may involve the entire hemisphere or generalize secondarily.',
      },
    ],
    source: 'Beniczky S, et al. Morphological description of frontal EEG interictal and ictal discharges in an adult cohort of 175 patients. J Clin Med. 2021;10(6):1219. PMC7999909. Figure 3a.',
    license: 'CC BY 4.0 (Creative Commons Attribution 4.0 International)',
  },
];

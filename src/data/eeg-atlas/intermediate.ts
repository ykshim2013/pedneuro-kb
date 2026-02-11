import type { EEGPattern } from './types';

export const intermediatePatterns: EEGPattern[] = [
  {
    id: 'spike-wave-3hz',
    title: '3 Hz Spike-and-Wave (Childhood Absence Epilepsy)',
    description:
      'Generalized 3 Hz spike-and-wave discharges are the electrographic hallmark of childhood absence epilepsy (CAE). Discharges consist of a spike (or sharp wave) followed by a slow wave, repeating at approximately 3 Hz. They are bilateral, synchronous, and symmetric with bifrontal maximum. Discharges begin and end abruptly and last 4-20 seconds, often provoked by hyperventilation.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/spike-wave-3hz.svg',
    imageAlt:
      'Multi-channel EEG showing generalized 3 Hz spike-and-wave discharges with abrupt onset and offset, bifrontal maximum, during a clinical absence seizure',
    syndrome: 'Childhood Absence Epilepsy',
    frequency: '2.5-4 Hz (typically 3 Hz)',
    distribution: 'Generalized, bifrontal maximum',
    clinicalSignificance:
      'Hallmark of childhood absence epilepsy; activated by hyperventilation in >90% of untreated patients. Normal background between discharges is expected. Frequency may slow slightly toward end of longer bursts. Atypical features (slow background, asymmetry, <2.5 Hz) suggest a different syndrome such as Lennox-Gastaut.',
    annotations: [
      {
        id: 'spike-component',
        x: 30,
        y: 20,
        label: 'Spike component',
        description:
          'Brief (<70 ms) high-amplitude spike preceding each slow wave. Represents a synchronous cortical depolarization. Best seen at frontal electrodes (Fp1/Fp2, F3/F4).',
      },
      {
        id: 'wave-component',
        x: 38,
        y: 25,
        label: 'Slow wave component',
        description:
          'Rounded slow wave (~300 ms) following the spike. Represents a period of cortical inhibition (hyperpolarization). Together with the spike, forms the characteristic spike-wave complex.',
      },
      {
        id: 'abrupt-onset',
        x: 12,
        y: 50,
        label: 'Abrupt onset',
        description:
          'The discharge begins without warning from a normal background. Abrupt onset and offset are characteristic of typical absence seizures. Gradual onset suggests an atypical absence.',
      },
      {
        id: 'bifrontal-max',
        x: 50,
        y: 12,
        label: 'Bifrontal maximum',
        description:
          'Amplitude of the spike-and-wave complex is highest over bifrontal electrodes (Fp1/Fp2, F3/F4). This anterior predominance is typical for CAE.',
      },
      {
        id: '3hz-rhythm',
        x: 55,
        y: 45,
        label: '3 Hz repetition rate',
        description:
          'The spike-wave complex repeats at approximately 3 cycles per second (2.5-4 Hz). The rate may slow to 2.5 Hz toward the end of a prolonged burst. Frequency <2.5 Hz suggests atypical absence or LGS.',
      },
    ],
    source: 'Panayiotopoulos CP. A Clinical Guide to Epileptic Syndromes and their Treatment. 2nd ed. Springer; 2010.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'centrotemporal-spikes',
    title: 'Centrotemporal Spikes (Self-Limited Epilepsy with Centrotemporal Spikes)',
    description:
      'Centrotemporal spikes (CTS) are high-amplitude, stereotyped spikes with a characteristic blunt morphology and horizontal dipole, maximal over the centrotemporal (rolandic) region. They are the signature interictal pattern of self-limited epilepsy with centrotemporal spikes (SLECTS, formerly benign rolandic epilepsy), the most common childhood epilepsy syndrome.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/centrotemporal-spikes.svg',
    imageAlt:
      'Multi-channel EEG showing centrotemporal spikes with characteristic blunt morphology maximal at C3/T3 electrodes, with tangential dipole and normal background',
    syndrome: 'Self-Limited Epilepsy with Centrotemporal Spikes',
    distribution: 'C3/C4, T3/T4 (centrotemporal)',
    clinicalSignificance:
      'Most common benign childhood epilepsy pattern. Spikes are dramatically activated during NREM sleep, often increasing 10-fold. The interictal EEG may be normal during wakefulness. Spikes may persist for years after seizures stop. Bilateral independent CTS are common and do not alter prognosis.',
    annotations: [
      {
        id: 'blunt-spike',
        x: 45,
        y: 48,
        label: 'Blunt spike morphology',
        description:
          'Characteristic high-amplitude (100-300 microvolts) spike with a rounded/blunt peak followed by a prominent slow wave. The spike duration is typically 60-80 ms, slightly longer than typical sharp transients.',
      },
      {
        id: 'horizontal-dipole',
        x: 55,
        y: 30,
        label: 'Horizontal (tangential) dipole',
        description:
          'CTS demonstrate a tangential dipole: negative maximum at C3/C4 (centrotemporal) with a positive field at frontal electrodes (F3/F4). This dipole orientation reflects the tangential generator in the rolandic cortex.',
      },
      {
        id: 'sleep-activation',
        x: 75,
        y: 55,
        label: 'Sleep activation',
        description:
          'Spike frequency increases markedly during NREM sleep, often by 10-fold or more. Sleep recording is essential if the awake EEG is normal in a child with suspected SLECTS. In some cases, spikes become nearly continuous during sleep.',
      },
      {
        id: 'normal-background',
        x: 20,
        y: 75,
        label: 'Normal background activity',
        description:
          'The interictal background is normal in SLECTS. Normal PDR and sleep architecture are preserved. Abnormal background activity should prompt consideration of alternative diagnoses.',
      },
    ],
    source: 'Wirrell EC, et al. Centrotemporal sharp waves and the prognosis of childhood epilepsy. Epilepsia. 1995;36(suppl 3):S111.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'polyspike-wave',
    title: 'Polyspike-and-Wave (Juvenile Myoclonic Epilepsy)',
    description:
      'Generalized polyspike-and-wave discharges consist of bursts of multiple spikes (polyspikes, typically 3-6 spikes) followed by irregular slow waves. This pattern is the electrographic signature of juvenile myoclonic epilepsy (JME), usually appearing in adolescence. The discharges are irregular, often 3-6 Hz, and correlate clinically with myoclonic jerks.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/polyspike-wave.svg',
    imageAlt:
      'Multi-channel EEG showing generalized polyspike-and-wave discharges with 4-6 Hz irregular rhythm, correlating with myoclonic jerks in juvenile myoclonic epilepsy',
    syndrome: 'Juvenile Myoclonic Epilepsy',
    frequency: '3-6 Hz (irregular)',
    distribution: 'Generalized',
    clinicalSignificance:
      'Characteristic of JME; polyspike bursts correlate temporally with myoclonic jerks, particularly upon awakening. Photosensitivity (photoparoxysmal response) is common, seen in approximately 30-40% of patients. Background is typically normal. JME is lifelong in most patients and requires long-term treatment with broad-spectrum AEDs.',
    annotations: [
      {
        id: 'polyspike',
        x: 35,
        y: 22,
        label: 'Polyspike component',
        description:
          'Burst of 3-6 rapid spikes occurring in quick succession before the slow wave. Each spike is 20-50 ms in duration. Polyspikes correlate with the myoclonic jerk on EMG. Higher spike count often corresponds to more clinically evident myoclonus.',
      },
      {
        id: 'slow-wave',
        x: 48,
        y: 28,
        label: 'Slow wave component',
        description:
          'Irregular slow wave following the polyspike burst. The slow wave represents a period of cortical inhibition. The overall complex has an irregular, fragmented appearance compared to the regular 3 Hz spike-wave of CAE.',
      },
      {
        id: 'generalized-dist',
        x: 50,
        y: 55,
        label: 'Generalized distribution',
        description:
          'The discharge is bisynchronous and symmetric across all channels, reflecting a generalized cortical generator. Frontocentral predominance is typical. Focal onset should raise suspicion for secondary bilateral synchrony rather than primary generalized epilepsy.',
      },
      {
        id: 'irregular-freq',
        x: 70,
        y: 40,
        label: 'Irregular 3-6 Hz rhythm',
        description:
          'Unlike the metronomic 3 Hz rhythm of CAE, JME discharges are irregular in frequency (3-6 Hz) and morphology. Bursts are typically brief (1-3 seconds), often occurring in clusters upon awakening or with photic stimulation.',
      },
    ],
    source: 'Janz D. Epilepsy with impulsive petit mal (juvenile myoclonic epilepsy). Acta Neurol Scand. 1985;72(5):449-459.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'focal-seizure',
    title: 'Focal Seizure Onset and Evolution',
    description:
      'Focal (partial) seizures originate from a localized cortical region and demonstrate characteristic electrographic evolution: rhythmic activity begins at one electrode or a few electrodes, then increases in amplitude, decreases in frequency, and spreads to adjacent electrodes. This organized evolution distinguishes true seizures from artifacts and interictal discharges.',
    difficulty: 'intermediate',
    imagePath: '/images/eeg/focal-seizure-onset.svg',
    imageAlt:
      'Multi-channel EEG showing focal seizure onset with low-amplitude fast activity at a single electrode evolving into organized rhythmic theta then delta activity with spatial spread',
    distribution: 'Focal, with evolution',
    clinicalSignificance:
      'Focal seizure evolution demonstrates an organizing epileptic network; the site of earliest rhythmic change helps localize the seizure onset zone for surgical evaluation. Classic evolution follows: low-amplitude fast activity at onset, progressive increase in amplitude with decrease in frequency, and spatial spread to neighboring electrodes. Post-ictal slowing at the region of onset further confirms localization.',
    annotations: [
      {
        id: 'seizure-onset',
        x: 15,
        y: 38,
        label: 'Seizure onset',
        description:
          'Initial low-amplitude fast activity (often beta or gamma range, >13 Hz) appearing focally at one or a small cluster of electrodes. This is the electrographic seizure onset and localizes the seizure origin. May be preceded by a DC shift or attenuation.',
      },
      {
        id: 'rhythmic-evolution',
        x: 40,
        y: 35,
        label: 'Rhythmic evolution',
        description:
          'The initial fast activity organizes into rhythmic theta (4-7 Hz) patterns with increasing amplitude. This organized rhythmic evolution is a key feature distinguishing electrographic seizures from interictal patterns or artifacts.',
      },
      {
        id: 'freq-change',
        x: 60,
        y: 42,
        label: 'Frequency decrease / amplitude increase',
        description:
          'As the seizure progresses, frequency decreases while amplitude increases. The rhythm may transition from fast activity to theta to delta range. This frequency-amplitude evolution reflects progressive recruitment of cortical neurons.',
      },
      {
        id: 'spatial-spread',
        x: 78,
        y: 60,
        label: 'Spatial spread to adjacent channels',
        description:
          'The rhythmic seizure activity propagates to neighboring electrodes and eventually may involve the entire hemisphere or generalize secondarily. Tracking the spatial spread pattern provides information about seizure propagation pathways.',
      },
    ],
    source: 'Foldvary N, et al. The localizing value of ictal EEG in focal epilepsy. Neurology. 2001;57(11):2022-2028.',
    license: 'Educational use - original diagram',
  },
];

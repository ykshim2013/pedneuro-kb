import type { EEGPattern } from './types';

export const advancedPatterns: EEGPattern[] = [
  {
    id: 'hypsarrhythmia',
    title: 'Hypsarrhythmia (West Syndrome / Infantile Spasms)',
    description:
      'Hypsarrhythmia is a severely disorganized, high-amplitude, chaotic interictal EEG pattern pathognomonic of infantile spasms (West syndrome). It is characterized by near-continuous high-amplitude (>300 microvolts) slow waves mixed with multifocal spikes and sharp waves, with loss of normal background organization and interhemispheric asynchrony.',
    difficulty: 'advanced',
    imagePath: '/images/eeg/hypsarrhythmia.svg',
    imageAlt:
      'Multi-channel EEG showing classic hypsarrhythmia pattern with chaotic high-amplitude slow waves, multifocal spikes, interhemispheric asynchrony, and electrodecrement during a spasm',
    syndrome: 'Infantile Spasms (West Syndrome)',
    distribution: 'Generalized, chaotic',
    clinicalSignificance:
      'Hallmark of infantile spasms; urgency to treat is paramount because delayed treatment correlates with worse developmental outcome. Standard treatment includes ACTH or vigabatrin (first-line for tuberous sclerosis complex). Resolution of hypsarrhythmia on follow-up EEG is a key treatment response marker. Modified hypsarrhythmia variants (asymmetric, with focal features) may suggest a structural etiology.',
    annotations: [
      {
        id: 'high-amplitude',
        x: 25,
        y: 30,
        label: 'High amplitude (>300 uV)',
        description:
          'Background activity consists of very high-amplitude (often 300-1000+ microvolts) irregular slow waves. This chaotic high-voltage activity replaces all normal age-expected background patterns.',
      },
      {
        id: 'asynchrony',
        x: 50,
        y: 20,
        label: 'Interhemispheric asynchrony',
        description:
          'Left and right hemisphere activity is asynchronous and independent. This lack of interhemispheric synchrony distinguishes hypsarrhythmia from other high-amplitude patterns and reflects severe disruption of normal bilateral cortical connectivity.',
      },
      {
        id: 'multifocal-spikes',
        x: 40,
        y: 55,
        label: 'Multifocal spikes and sharp waves',
        description:
          'Spikes and sharp waves arise independently from multiple cortical regions, changing location from moment to moment. No single consistent focus is identified. This multifocal quality reflects diffuse cortical hyperexcitability.',
      },
      {
        id: 'no-normal-bg',
        x: 15,
        y: 72,
        label: 'Absence of normal background',
        description:
          'All normal age-expected patterns are absent: no recognizable PDR, no sleep spindles, no organized sleep-wake differentiation. The entire recording is dominated by the chaotic hypsarrhythmic pattern.',
      },
      {
        id: 'electrodecrement',
        x: 78,
        y: 45,
        label: 'Electrodecrement during spasm',
        description:
          'During an infantile spasm, a sudden generalized electrodecremental response (diffuse voltage attenuation or flattening) occurs, often lasting 1-3 seconds. This ictal electrodecrement may be accompanied by a high-amplitude slow wave or fast activity and correlates with the clinical spasm (flexor, extensor, or mixed).',
      },
    ],
    source: 'Hrachovy RA, Frost JD Jr. Infantile epileptic encephalopathy with hypsarrhythmia (infantile spasms/West syndrome). J Clin Neurophysiol. 2003;20(6):408-425.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'burst-suppression',
    title: 'Burst-Suppression Pattern',
    description:
      'Burst-suppression is a severe EEG pattern consisting of alternating periods of high-amplitude mixed-frequency bursts and near-isoelectric suppression. In neonates, it is the hallmark of early infantile developmental and epileptic encephalopathy (DEE), formerly Ohtahara syndrome. It may also be seen in severe hypoxic-ischemic encephalopathy (HIE), deep anesthesia, and hypothermia.',
    difficulty: 'advanced',
    imagePath: '/images/eeg/burst-suppression.svg',
    imageAlt:
      'Multi-channel EEG showing burst-suppression pattern with alternating high-amplitude bursts of mixed sharp and slow activity and periods of near-isoelectric suppression',
    syndrome: 'Early Infantile DEE (Ohtahara syndrome)',
    distribution: 'Generalized, periodic',
    clinicalSignificance:
      'Indicates severe brain dysfunction. In neonates, persistent burst-suppression (present in both wakefulness and sleep) is characteristic of early infantile DEE (Ohtahara syndrome) and is associated with pathogenic variants in STXBP1, KCNQ2, SCN2A, and structural brain malformations. In older patients, burst-suppression may indicate severe HIE, pentobarbital coma, or hypothermia. Prognosis is generally poor when pattern persists beyond acute reversible causes.',
    annotations: [
      {
        id: 'burst-phase',
        x: 22,
        y: 35,
        label: 'Burst phase',
        description:
          'High-amplitude (150-300+ microvolts) bursts lasting 1-10 seconds, containing a mixture of sharp waves, spikes, and slow waves. Bursts may contain epileptiform elements including polyspikes. The burst morphology is often invariant and stereotyped.',
      },
      {
        id: 'suppression-phase',
        x: 55,
        y: 50,
        label: 'Suppression phase',
        description:
          'Periods of marked voltage attenuation (<10 microvolts) lasting 2-20 seconds. Near-isoelectric suppression reflects profound cortical inactivity. In Ohtahara syndrome, suppression intervals are typically 3-5 seconds.',
      },
      {
        id: 'isoelectric',
        x: 60,
        y: 70,
        label: 'Near-isoelectric suppression (<10 uV)',
        description:
          'During suppression, voltage falls to near-isoelectric levels. True electrocerebral inactivity (<2 microvolts) is more ominous. The degree of voltage suppression correlates with severity of the underlying pathology.',
      },
      {
        id: 'periodicity',
        x: 85,
        y: 30,
        label: 'Cycle periodicity',
        description:
          'Burst-suppression demonstrates quasi-periodic cycling with relatively regular burst-suppression intervals. Cycle length (burst + suppression) is typically 3-20 seconds. Shorter suppression intervals and reactive burst-suppression (where stimulation triggers a burst) carry a relatively better prognosis than non-reactive patterns.',
      },
    ],
    source: 'Ohtahara S, Yamatogi Y. Ohtahara syndrome: with special reference to its developmental aspects for differentiating from early myoclonic encephalopathy. Epilepsy Res. 2006;70(Suppl 1):S58-S67.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'slow-spike-wave',
    title: 'Slow Spike-and-Wave (Lennox-Gastaut Syndrome)',
    description:
      'Slow spike-and-wave (SSW) complexes at 1.5-2.5 Hz are the electrographic hallmark of Lennox-Gastaut syndrome (LGS). Unlike the regular 3 Hz spike-wave of CAE, SSW is slower, more irregular, and occurs on an abnormal background. Generalized paroxysmal fast activity (GPFA) during sleep is another key electrographic feature of LGS.',
    difficulty: 'advanced',
    imagePath: '/images/eeg/slow-spike-wave.svg',
    imageAlt:
      'Multi-channel EEG showing generalized slow spike-and-wave complexes at 1.5-2.5 Hz with frontal predominance and diffusely slow background in Lennox-Gastaut syndrome',
    syndrome: 'Lennox-Gastaut Syndrome',
    frequency: '1.5-2.5 Hz',
    distribution: 'Generalized, frontal maximum',
    clinicalSignificance:
      'Hallmark of Lennox-Gastaut syndrome; distinguish from 3 Hz CAE pattern by the slower frequency (1.5-2.5 Hz vs 3 Hz) and the abnormally slow and disorganized background. LGS is characterized by the triad: multiple seizure types (tonic, atypical absence, drop attacks), slow spike-wave on EEG, and intellectual disability. GPFA during NREM sleep is highly characteristic and often correlates with subtle tonic seizures.',
    annotations: [
      {
        id: 'slow-frequency',
        x: 35,
        y: 25,
        label: 'Slow frequency (1.5-2.5 Hz)',
        description:
          'The spike-and-wave repetition rate is 1.5-2.5 Hz, distinctly slower than the 3 Hz of CAE. This slow frequency reflects more widespread and severe cortical dysfunction. Individual complexes may vary in morphology within a burst.',
      },
      {
        id: 'frontal-predominance',
        x: 50,
        y: 15,
        label: 'Frontal predominance',
        description:
          'SSW complexes are typically of maximal amplitude over frontal regions (Fp1/Fp2, F3/F4, Fz). The frontal predominance is more marked than in CAE. Voltage may be asymmetric, suggesting a lateralized structural lesion in some cases.',
      },
      {
        id: 'abnormal-background',
        x: 20,
        y: 65,
        label: 'Abnormal (slow) background',
        description:
          'A critically distinguishing feature from CAE: the interictal background is diffusely slow and poorly organized. Normal PDR is absent or slow for age. This abnormal background reflects the diffuse cerebral dysfunction underlying LGS.',
      },
      {
        id: 'gpfa',
        x: 75,
        y: 50,
        label: 'GPFA (generalized paroxysmal fast activity)',
        description:
          'Runs of generalized fast activity (10-25 Hz) lasting 1-10 seconds, seen predominantly during NREM sleep. GPFA is highly characteristic of LGS and may correlate with subtle tonic seizures. Presence of GPFA supports the LGS diagnosis even when SSW is not prominent.',
      },
    ],
    source: 'Arzimanoglou A, et al. Lennox-Gastaut syndrome: a consensus approach on diagnosis, assessment, management, and trial methodology. Lancet Neurol. 2009;8(1):82-93.',
    license: 'Educational use - original diagram',
  },
  {
    id: 'neonatal-eeg',
    title: 'Neonatal EEG: Trace Alternant and Discontinuous Patterns',
    description:
      'Trace alternant (TA) is a normal discontinuous EEG pattern seen during quiet (NREM) sleep in term neonates. It consists of alternating bursts of high-amplitude mixed-frequency activity (100-200 microvolts) and lower-amplitude periods (25-50 microvolts interburst intervals), with a cycle length of 3-8 seconds. TA is distinct from pathologic burst-suppression by its higher interburst voltage and normal developmental context.',
    difficulty: 'advanced',
    imagePath: '/images/eeg/neonatal-eeg.svg',
    imageAlt:
      'Multi-channel neonatal EEG showing trace alternant pattern during quiet sleep with alternating high-amplitude bursts and lower-amplitude interburst intervals',
    distribution: 'Generalized, discontinuous',
    clinicalSignificance:
      'Normal neonatal quiet sleep pattern. Trace alternant is expected in full-term neonates and becomes continuous (trace continue) by 44 weeks conceptional age (CA). Persistence of discontinuous patterns beyond 44 weeks CA is abnormal and suggests encephalopathy. Key distinction from burst-suppression: TA interburst voltage remains >25 microvolts (burst-suppression has <10 microvolts), and TA is seen only in quiet sleep (burst-suppression persists in all states).',
    annotations: [
      {
        id: 'burst',
        x: 25,
        y: 35,
        label: 'High-amplitude burst',
        description:
          'Bursts of mixed-frequency activity (delta and theta) at 100-200 microvolts amplitude lasting 3-8 seconds. Contains a mixture of sharp transients and slow waves that is normal for neonatal age. Burst morphology should be symmetric between hemispheres.',
      },
      {
        id: 'interburst',
        x: 55,
        y: 55,
        label: 'Interburst interval (>25 uV)',
        description:
          'Lower-amplitude periods between bursts, typically 25-50 microvolts (NOT isoelectric). This is the key distinction from pathologic burst-suppression, where interburst voltage falls below 10 microvolts. Interburst intervals of 3-6 seconds are normal in term neonates.',
      },
      {
        id: 'trace-alternant',
        x: 40,
        y: 18,
        label: 'Trace alternant pattern',
        description:
          'The overall alternating pattern of higher and lower amplitude periods defines trace alternant. This pattern is specific to quiet sleep in neonates from approximately 36-44 weeks CA. During active (REM) sleep, the EEG shows continuous mixed-frequency activity (activite moyenne).',
      },
      {
        id: 'normal-finding',
        x: 80,
        y: 75,
        label: 'Normal neonatal finding',
        description:
          'Trace alternant is a developmentally appropriate pattern in term neonates. It should transition to continuous background by 44 weeks CA. Assessment of neonatal EEG continuity must account for conceptional age, sleep state, and medication effects (sedatives increase discontinuity).',
      },
    ],
    source: 'Shellhaas RA, et al. The American Clinical Neurophysiology Society\'s guideline on continuous electroencephalography monitoring in neonates. J Clin Neurophysiol. 2011;28(6):611-617.',
    license: 'Educational use - original diagram',
  },
];

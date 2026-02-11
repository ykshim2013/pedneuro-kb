export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'epilepsy',
    name: 'Epilepsy & Seizure Disorders',
    description: 'Seizure classification, epilepsy syndromes, AEDs, EEG interpretation, and status epilepticus management',
    icon: '⚡',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'neuromuscular',
    name: 'Neuromuscular Disorders',
    description: 'DMD/BMD, SMA, peripheral neuropathies, myopathies, and neuromuscular junction disorders',
    icon: '💪',
    color: 'from-red-500 to-rose-600',
  },
  {
    id: 'neurodevelopmental',
    name: 'Neurodevelopmental Disorders',
    description: 'ASD, ADHD, intellectual disability, developmental delay, and learning disorders',
    icon: '🧒',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'movement-disorders',
    name: 'Movement Disorders',
    description: 'Dystonia, chorea, tics, tremor, ataxia, and paroxysmal movement disorders',
    icon: '🔄',
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'neurogenetics',
    name: 'Neurogenetics',
    description: 'Genetic syndromes, channelopathies, trinucleotide repeat disorders, and genetic testing',
    icon: '🧬',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'neuroimmunology',
    name: 'Neuroimmunology',
    description: 'MS, ADEM, NMOSD, autoimmune encephalitis, and neuroinflammatory conditions',
    icon: '🛡️',
    color: 'from-cyan-500 to-sky-600',
  },
  {
    id: 'neurometabolic',
    name: 'Neurometabolic Disorders',
    description: 'Lysosomal storage diseases, mitochondrial disorders, amino acid disorders, and organic acidurias',
    icon: '🔬',
    color: 'from-lime-500 to-green-600',
  },
  {
    id: 'cerebrovascular',
    name: 'Cerebrovascular Disorders',
    description: 'Pediatric stroke, moyamoya, vascular malformations, and cerebral sinovenous thrombosis',
    icon: '🩸',
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 'cns-infections',
    name: 'CNS Infections',
    description: 'Meningitis, encephalitis, brain abscess, and congenital infections (TORCH)',
    icon: '🦠',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'neuro-oncology',
    name: 'Neuro-oncology',
    description: 'Brain tumors, spinal cord tumors, paraneoplastic syndromes, and treatment effects',
    icon: '🎯',
    color: 'from-gray-500 to-slate-600',
  },
  {
    id: 'neurocutaneous',
    name: 'Neurocutaneous Syndromes',
    description: 'NF1, NF2, tuberous sclerosis, Sturge-Weber, and other phakomatoses',
    icon: '🔍',
    color: 'from-fuchsia-500 to-purple-600',
  },
  {
    id: 'headache',
    name: 'Headache & Pain Disorders',
    description: 'Migraine, tension-type headache, cluster headache, and chronic pain syndromes',
    icon: '🤕',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'sleep',
    name: 'Sleep Disorders',
    description: 'Narcolepsy, sleep apnea, parasomnias, and sleep-related epilepsy',
    icon: '😴',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'neonatal',
    name: 'Neonatal Neurology',
    description: 'HIE, neonatal seizures, IVH, PVL, and congenital brain malformations',
    icon: '👶',
    color: 'from-pink-500 to-rose-600',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

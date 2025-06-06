import { GreenCardCategory } from '@/types/immigration';

export const greenCardCategories: GreenCardCategory[] = [
  {
    id: 'eb1',
    name: 'EB-1: Extraordinary Ability',
    description: 'For individuals with extraordinary ability in sciences, arts, education, business, or athletics',
    requirements: [
      'Demonstrated extraordinary ability through sustained national or international acclaim',
      'Achievements recognized in the field through extensive documentation',
      'No job offer required for EB-1A',
      'Job offer required for EB-1B (Outstanding Professor/Researcher)'
    ],
    estimatedTimeline: '6-12 months (premium processing available)',
    documents: [
      'Evidence of major international awards',
      'Published material about the applicant',
      'Evidence of judging others\' work',
      'Evidence of original contributions',
      'Evidence of authorship of scholarly articles'
    ]
  },
  {
    id: 'eb2',
    name: 'EB-2: Advanced Degree or National Interest Waiver',
    description: 'For professionals with advanced degrees or exceptional ability, or those who qualify for a National Interest Waiver',
    requirements: [
      'Advanced degree (master\'s or higher) or equivalent',
      'Job offer and PERM labor certification (unless NIW)',
      'For NIW: Demonstrated exceptional ability and national importance'
    ],
    estimatedTimeline: '1-2 years (longer with PERM)',
    documents: [
      'Advanced degree certificate',
      'Job offer letter',
      'PERM certification (if applicable)',
      'Evidence of exceptional ability',
      'Letters of recommendation'
    ]
  },
  {
    id: 'eb3',
    name: 'EB-3: Skilled Worker or Professional',
    description: 'For skilled workers, professionals, and other workers',
    requirements: [
      'Job offer from U.S. employer',
      'PERM labor certification',
      'Minimum 2 years of experience or training for skilled workers',
      'Bachelor\'s degree for professionals'
    ],
    estimatedTimeline: '2-3 years',
    documents: [
      'Job offer letter',
      'PERM certification',
      'Educational certificates',
      'Work experience documentation',
      'Proof of qualifications'
    ]
  },
  {
    id: 'family_immediate',
    name: 'Family-Based (Immediate Relative)',
    description: 'For immediate relatives of U.S. citizens (spouse, parent, or unmarried child under 21)',
    requirements: [
      'Must be an immediate relative of a U.S. citizen',
      'U.S. citizen petitioner must be at least 21 years old',
      'Must prove bona fide relationship'
    ],
    estimatedTimeline: '12-24 months',
    documents: [
      'Birth certificate or marriage certificate',
      'Proof of U.S. citizenship of petitioner',
      'Evidence of relationship',
      'Financial documents',
      'Passport photos'
    ]
  }
]; 
import { UserResponse, EligibilityResult } from '@/types/immigration';
import { greenCardCategories } from './greenCardCategories';

type AssessmentCriteria = {
  category: string;
  conditions: {
    [key: string]: boolean | string;
  };
  confidence: number;
};

const assessmentCriteria: AssessmentCriteria[] = [
  {
    category: 'eb1',
    conditions: {
      extraordinary_ability: true,
      work_experience: 'more_than_5'
    },
    confidence: 0.9
  },
  {
    category: 'eb2',
    conditions: {
      education_level: 'masters',
      job_offer: true,
      work_experience: '2_to_5'
    },
    confidence: 0.8
  },
  {
    category: 'eb3',
    conditions: {
      job_offer: true,
      work_experience: '2_to_5'
    },
    confidence: 0.7
  },
  {
    category: 'family_immediate',
    conditions: {
      us_citizen_relative: true
    },
    confidence: 0.9
  }
];

export function assessEligibility(responses: UserResponse[]): EligibilityResult[] {
  const results: EligibilityResult[] = [];
  const responseMap = new Map(responses.map(r => [r.questionId, r.answer]));

  for (const criteria of assessmentCriteria) {
    let matches = 0;
    let totalConditions = 0;

    for (const [key, expectedValue] of Object.entries(criteria.conditions)) {
      const actualValue = responseMap.get(key);
      if (actualValue !== undefined) {
        totalConditions++;
        if (actualValue === expectedValue) {
          matches++;
        }
      }
    }

    if (totalConditions > 0) {
      const matchRatio = matches / totalConditions;
      const category = greenCardCategories.find(c => c.id === criteria.category);
      
      if (category && matchRatio > 0.5) {
        results.push({
          category,
          confidence: criteria.confidence * matchRatio,
          explanation: {
            en: generateExplanation(category, matchRatio, 'en'),
            zh: generateExplanation(category, matchRatio, 'zh')
          }
        });
      }
    }
  }

  return results.sort((a, b) => b.confidence - a.confidence);
}

function generateExplanation(category: any, matchRatio: number, language: 'en' | 'zh'): string {
  const confidence = Math.round(matchRatio * 100);
  
  if (language === 'en') {
    return `Based on your responses, you may be eligible for ${category.name} with ${confidence}% confidence. ` +
           `This category is ${category.description}. ` +
           `The estimated processing time is ${category.estimatedTimeline}.`;
  } else {
    return `根据您的回答，您可能有资格申请${category.name}，匹配度为${confidence}%。 ` +
           `该类别${category.description}。 ` +
           `预计处理时间为${category.estimatedTimeline}。`;
  }
} 
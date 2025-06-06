export type GreenCardCategory = {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  estimatedTimeline: string;
  documents: string[];
};

export type ScreenerQuestion = {
  id: string;
  text: {
    en: string;
    zh: string;
  };
  type: 'boolean' | 'multiple_choice';
  options?: {
    value: string;
    text: {
      en: string;
      zh: string;
    };
  }[];
};

export type UserResponse = {
  questionId: string;
  answer: boolean | string;
};

export type EligibilityResult = {
  category: GreenCardCategory;
  confidence: number;
  explanation: {
    en: string;
    zh: string;
  };
}; 
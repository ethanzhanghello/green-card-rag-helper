import { ScreenerQuestion } from '@/types/immigration';

export const screenerQuestions: ScreenerQuestion[] = [
  {
    id: 'current_visa',
    text: {
      en: 'Are you currently employed in the U.S. with a visa?',
      zh: '您目前是否持有美国工作签证并在美国工作？'
    },
    type: 'boolean'
  },
  {
    id: 'education_level',
    text: {
      en: 'What is your highest level of education?',
      zh: '您的最高学历是什么？'
    },
    type: 'multiple_choice',
    options: [
      {
        value: 'bachelors',
        text: {
          en: 'Bachelor\'s Degree',
          zh: '学士学位'
        }
      },
      {
        value: 'masters',
        text: {
          en: 'Master\'s Degree',
          zh: '硕士学位'
        }
      },
      {
        value: 'phd',
        text: {
          en: 'Ph.D. or higher',
          zh: '博士学位或更高'
        }
      },
      {
        value: 'other',
        text: {
          en: 'Other',
          zh: '其他'
        }
      }
    ]
  },
  {
    id: 'us_citizen_relative',
    text: {
      en: 'Do you have any immediate relatives who are U.S. citizens?',
      zh: '您是否有直系亲属是美国公民？'
    },
    type: 'boolean'
  },
  {
    id: 'job_offer',
    text: {
      en: 'Do you have a job offer from a U.S. employer?',
      zh: '您是否已获得美国雇主的工作邀请？'
    },
    type: 'boolean'
  },
  {
    id: 'extraordinary_ability',
    text: {
      en: 'Have you received national or international recognition for your achievements?',
      zh: '您是否因成就而获得过国家或国际认可？'
    },
    type: 'boolean'
  },
  {
    id: 'work_experience',
    text: {
      en: 'How many years of work experience do you have in your field?',
      zh: '您在本领域有多少年的工作经验？'
    },
    type: 'multiple_choice',
    options: [
      {
        value: 'less_than_2',
        text: {
          en: 'Less than 2 years',
          zh: '少于2年'
        }
      },
      {
        value: '2_to_5',
        text: {
          en: '2-5 years',
          zh: '2-5年'
        }
      },
      {
        value: 'more_than_5',
        text: {
          en: 'More than 5 years',
          zh: '5年以上'
        }
      }
    ]
  }
]; 
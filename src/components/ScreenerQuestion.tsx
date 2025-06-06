import { ScreenerQuestion as ScreenerQuestionType } from '@/types/immigration';
import { useTranslation } from 'react-i18next';

interface Props {
  question: ScreenerQuestionType;
  onAnswer: (answer: boolean | string) => void;
  language: 'en' | 'zh';
}

export default function ScreenerQuestion({ question, onAnswer, language }: Props) {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        {t(`screener.questions.${question.id}`)}
      </h3>
      
      {question.type === 'boolean' ? (
        <div className="space-x-4">
          <button
            onClick={() => onAnswer(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {t('common.yes')}
          </button>
          <button
            onClick={() => onAnswer(false)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            {t('common.no')}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className="w-full px-4 py-2 text-left bg-gray-50 hover:bg-gray-100 rounded"
            >
              {t(`screener.${question.id === 'education_level' ? 'education_options' : 'experience_options'}.${option.value}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 
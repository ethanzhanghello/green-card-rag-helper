import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserResponse, EligibilityResult } from '@/types/immigration';
import { screenerQuestions } from '@/lib/screenerQuestions';
import { assessEligibility } from '@/lib/eligibilityAssessment';
import ScreenerQuestion from './ScreenerQuestion';

export default function GreenCardScreener() {
  const { t, i18n } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [results, setResults] = useState<EligibilityResult[]>([]);

  const handleAnswer = (answer: boolean | string) => {
    const currentQuestion = screenerQuestions[currentQuestionIndex];
    const newResponses = [...responses, { questionId: currentQuestion.id, answer }];
    setResponses(newResponses);

    if (currentQuestionIndex < screenerQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const assessmentResults = assessEligibility(newResponses);
      setResults(assessmentResults);
    }
  };

  const resetScreener = () => {
    setCurrentQuestionIndex(0);
    setResponses([]);
    setResults([]);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  if (results.length > 0) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {t('common.results')}
          </h2>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            {i18n.language === 'en' ? '中文' : 'English'}
          </button>
        </div>

        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{result.category.name}</h3>
              <p className="text-gray-600 mb-4">
                {t('results.confidence', { 
                  category: result.category.name,
                  confidence: Math.round(result.confidence * 100)
                })}
                {t('results.description', { description: result.category.description })}
                {t('results.timeline', { timeline: result.category.estimatedTimeline })}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">
                  {t('common.requirements')}:
                </h4>
                <ul className="list-disc list-inside">
                  {result.category.requirements.map((req, i) => (
                    <li key={i} className="text-gray-600">{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  {t('common.requiredDocuments')}:
                </h4>
                <ul className="list-disc list-inside">
                  {result.category.documents.map((doc, i) => (
                    <li key={i} className="text-gray-600">{doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={resetScreener}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {t('common.startOver')}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {t('screener.title')}
        </h2>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          {i18n.language === 'en' ? '中文' : 'English'}
        </button>
      </div>

      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{
              width: `${((currentQuestionIndex + 1) / screenerQuestions.length) * 100}%`
            }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {t('common.question')} {currentQuestionIndex + 1} {t('common.of')} {screenerQuestions.length}
        </p>
      </div>

      <ScreenerQuestion
        question={screenerQuestions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        language={i18n.language as 'en' | 'zh'}
      />
    </div>
  );
} 
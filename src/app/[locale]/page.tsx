'use client';

import { useTranslations } from 'next-intl';
import GreenCardScreener from '@/components/GreenCardScreener';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        <GreenCardScreener />
      </div>
    </main>
  );
} 
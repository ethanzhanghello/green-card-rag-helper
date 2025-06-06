import {getRequestConfig} from 'next-intl/server';

// Phase 2: Internationalization Setup
// - next-intl configuration
// - Message loading and handling
// - Locale validation
// - Default locale fallback

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../messages/${locale}.json`)).default
})); 
import i18next from 'i18next';
import Backend from 'i18next-http-backend';

export async function initI18n() {
  await i18next.use(Backend).init({
    fallbackLng: 'en',
    supportedLngs: ['en','es','fr','de','pt','ar','zh','ja','ko','it'],
    backend: { loadPath: 'https://cdn.tpbucket.locales/{{lng}}.json' }
  });
}

export function t(key: string, lng?: string, vars?: Record<string, any>) {
  return i18next.getFixedT(lng || 'en')(key, vars);
}

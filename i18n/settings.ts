// i18n/settings.ts
export const fallbackLng = 'en';
export const languages = ['en', 'pt'];
export const defaultNS = 'common';

export function getOptions() {
    return {
        supportedLngs: languages,
        fallbackLng,
        defaultNS,
    };
}

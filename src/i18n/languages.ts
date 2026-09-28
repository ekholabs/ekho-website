// The languages the page exists in. English is the default and lives at the
// root; the others get their own path, their own built page and their own
// hreflang, because this site is static and a language switch that swapped text
// with JavaScript would be invisible to anything that is not a browser.
export const languages = {
  en: { label: 'English', short: 'EN' },
  de: { label: 'Deutsch', short: 'DE' },
  es: { label: 'Español', short: 'ES' },
  fr: { label: 'Français', short: 'FR' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/**
 * The ones actually offered: built, listed in the language menu, and declared
 * to search engines. Existing in the codebase is not the same as being
 * published, and es and fr are machine translations that no native speaker has
 * read — which is fine in a repository and not fine on a page that speaks for
 * EKHO, since nobody here would notice a mistake in them. Add them back to this
 * list once somebody has.
 */
export const langs: Lang[] = ['en', 'de'];

/** '/' for English, '/de/' for the rest. */
export const pathFor = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

/** The language a URL belongs to, for the switch and for hreflang. */
export function langFromPath(pathname: string): Lang {
  const seg = pathname.split('/').filter(Boolean)[0];
  return langs.includes(seg as Lang) ? (seg as Lang) : defaultLang;
}

import { en } from './en';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { defaultLang, type Lang } from './languages';

const copy = { en, de, es, fr } as const;

export const t = (lang: Lang) => copy[lang] ?? copy[defaultLang];
export * from './languages';
export type { Copy } from './en';

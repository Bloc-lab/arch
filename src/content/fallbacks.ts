import type { Lang } from '../context/ContentContext';
import archCs from './arch-cs.json';
import archEn from './arch-en.json';

/** Výchozí mapa klíč → text pro demo / seed CMS (viz arch-cs.json / arch-en.json). */
export type ArchContentDefaults = Record<string, string>;

export const ARCH_DEFAULTS_CS = archCs as ArchContentDefaults;
export const ARCH_DEFAULTS_EN = archEn as ArchContentDefaults;

export function pickContent(map: Record<string, string>, key: string, lang: Lang): string {
  const v = map[key];
  if (v !== undefined && v.trim() !== '') return v;
  const fb = lang === 'en' ? ARCH_DEFAULTS_EN : ARCH_DEFAULTS_CS;
  return fb[key] ?? `(${key})`;
}

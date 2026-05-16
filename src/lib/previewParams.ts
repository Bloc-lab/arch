/** sessionStorage: při navigaci v SPA zůstane náhledový token zachovaný i bez query v URL. */
const STORAGE_PREVIEW_TOKEN = 'sablona1:cms:previewToken';

/**
 * Přečte previewToken z query; pokud je v URL přítomen (i prázdný), aktualizuje session.
 * Pokud v query chybí, vrátí token ze session (pokračování náhledu po vnitřní navigaci).
 */
export function getEffectivePreviewToken(search: string): string | null {
  const params = new URLSearchParams(search);
  const raw = params.get('previewToken');
  if (raw !== null) {
    const trimmed = raw.trim();
    if (trimmed) {
      sessionStorage.setItem(STORAGE_PREVIEW_TOKEN, trimmed);
      return trimmed;
    }
    sessionStorage.removeItem(STORAGE_PREVIEW_TOKEN);
    return null;
  }
  return sessionStorage.getItem(STORAGE_PREVIEW_TOKEN);
}

export function readLangFromSearch(search: string): 'cs' | 'en' | null {
  const l = new URLSearchParams(search).get('lang');
  return l === 'cs' || l === 'en' ? l : null;
}

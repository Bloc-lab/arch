export type ContentMap = Record<string, string>;

export type SiteInfo = {
  siteName: string;
  logoUrl: string | null;
};

export type CmsHttpError = {
  status: number;
  message: string;
};

export type CmsPreviewFetchOptions = {
  /** Z session nebo z ?previewToken= v URL (stejný token pro content i site-info). */
  previewToken?: string | null;
};

function trimBaseUrl(url: string): string {
  return url.replace(/\/+$/, '');
}

/** Skutečná URL z `.env`; v dev se použije proxy, takže pro fetch se vrátí ''. */
function cmsConfiguredBase(): string {
  const raw =
    import.meta.env.VITE_PUBLIC_CMS_API_URL ??
    import.meta.env.PUBLIC_CMS_API_URL ??
    '';
  return trimBaseUrl(String(raw).trim());
}

export function getCmsApiBaseUrl(): string {
  const configured = cmsConfiguredBase();
  if (import.meta.env.DEV && configured) return '';
  return configured;
}

export function getCmsApiKey(): string {
  const key =
    import.meta.env.VITE_CMS_API_KEY ?? import.meta.env.PUBLIC_CMS_API_KEY ?? '';
  return String(key).trim();
}

function contentQueryString(lang: 'cs' | 'en', previewToken: string | null | undefined): string {
  const params = new URLSearchParams();
  params.set('lang', lang);
  const t = typeof previewToken === 'string' ? previewToken.trim() : '';
  if (t) params.set('previewToken', t);
  return params.toString();
}

export async function fetchContent(
  lang: 'cs' | 'en',
  options?: CmsPreviewFetchOptions,
): Promise<{ ok: true; data: ContentMap } | { ok: false; error: CmsHttpError }> {
  const configuredBase = cmsConfiguredBase();
  const base = getCmsApiBaseUrl();
  const apiKey = getCmsApiKey();

  if (!configuredBase || !apiKey) {
    return {
      ok: false,
      error: {
        status: 0,
        message:
          'Chybí konfigurace API: nastavte VITE_PUBLIC_CMS_API_URL (nebo PUBLIC_CMS_API_URL) a VITE_CMS_API_KEY (nebo PUBLIC_CMS_API_KEY) v souboru .env.',
      },
    };
  }

  const qs = contentQueryString(lang, options?.previewToken);
  const url = `${base}/api/v1/content?${qs}`;
  let response: Response;
  try {
    response = await fetch(url, {
      headers: { 'X-API-KEY': apiKey, Accept: 'application/json' },
    });
  } catch {
    return {
      ok: false,
      error: {
        status: 0,
        message:
          'Nepodařilo se spojit s CMS backendem (síťová chyba nebo špatná URL). Zkontrolujte VITE_PUBLIC_CMS_API_URL.',
      },
    };
  }

  if (!response.ok) {
    const bodyText = await response.text().catch(() => '');
    let detail = '';
    try {
      const j = JSON.parse(bodyText) as { message?: string; error?: string };
      detail = j.message ?? j.error ?? '';
    } catch {
      detail = bodyText.slice(0, 200);
    }
    return {
      ok: false,
      error: {
        status: response.status,
        message: humanizeContentError(response.status, detail),
      },
    };
  }

  try {
    const data = (await response.json()) as unknown;
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return {
        ok: false,
        error: { status: 500, message: 'Neočekávaný formát odpovědi API (očekáván JSON objekt).' },
      };
    }
    const flat: ContentMap = {};
    for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
      flat[k] = v == null ? '' : String(v);
    }
    return { ok: true, data: flat };
  } catch {
    return {
      ok: false,
      error: { status: 500, message: 'Nepodařilo se parsovat JSON odpověď z /api/v1/content.' },
    };
  }
}

/**
 * Branding (název webu, logo). Tenant se pozná podle X-API-KEY (ne Host při volání na Render).
 */
export async function fetchSiteInfo(
  lang: 'cs' | 'en',
  options?: CmsPreviewFetchOptions,
): Promise<{ ok: true; data: SiteInfo } | { ok: false; error: CmsHttpError }> {
  const configuredBase = cmsConfiguredBase();
  const base = getCmsApiBaseUrl();
  const apiKey = getCmsApiKey();

  if (!configuredBase || !apiKey) {
    return {
      ok: false,
      error: {
        status: 0,
        message:
          'Chybí konfigurace API: nastavte VITE_PUBLIC_CMS_API_URL (nebo PUBLIC_CMS_API_URL) a VITE_CMS_API_KEY (nebo PUBLIC_CMS_API_KEY) v souboru .env.',
      },
    };
  }

  const qs = contentQueryString(lang, options?.previewToken);
  const url = `${base}/api/v1/public/site-info?${qs}`;
  let response: Response;
  try {
    response = await fetch(url, {
      headers: { 'X-API-KEY': apiKey, Accept: 'application/json' },
    });
  } catch {
    return {
      ok: false,
      error: {
        status: 0,
        message:
          'Nepodařilo se spojit s CMS backendem (síťová chyba nebo špatná URL). Zkontrolujte VITE_PUBLIC_CMS_API_URL.',
      },
    };
  }

  if (!response.ok) {
    const bodyText = await response.text().catch(() => '');
    let detail = '';
    try {
      const j = JSON.parse(bodyText) as { message?: string; error?: string };
      detail = j.message ?? j.error ?? '';
    } catch {
      detail = bodyText.slice(0, 200);
    }
    return {
      ok: false,
      error: {
        status: response.status,
        message: humanizeContentError(response.status, detail),
      },
    };
  }

  try {
    const data = (await response.json()) as unknown;
    if (!data || typeof data !== 'object') {
      return {
        ok: false,
        error: { status: 500, message: 'Neočekávaný formát odpovědi API (site-info).' },
      };
    }
    const siteName =
      typeof (data as { siteName?: unknown }).siteName === 'string'
        ? (data as { siteName: string }).siteName
        : '';
    const logoRaw = (data as { logoUrl?: unknown }).logoUrl;
    const logoUrl =
      logoRaw === null
        ? null
        : typeof logoRaw === 'string'
          ? logoRaw
          : null;
    return { ok: true, data: { siteName: siteName.trim(), logoUrl } };
  } catch {
    return {
      ok: false,
      error: { status: 500, message: 'Nepodařilo se parsovat JSON z /api/v1/public/site-info.' },
    };
  }
}

/** @deprecated Použijte {@link fetchSiteInfo}. */
export const fetchSiteSettings = fetchSiteInfo;

function humanizeContentError(status: number, detail: string): string {
  const d = detail.trim();
  if (status === 403 && /preview token expired/i.test(d)) {
    return (
      'Platnost odkazu náhledu vypršela (obvykle cca 1 hodina). ' +
      'V administraci vygenerujte nový odkaz náhledu a otevřete stránku znovu s novým parametrem previewToken.'
    );
  }
  if (status === 401 || status === 403) {
    return (
      `Přístup odmítnut (${status}). Zkontrolujte platnost API klíče v X-API-KEY.` +
      (d ? ` ${d}` : '')
    );
  }
  if (status === 404) {
    return `Endpoint nenalezen (404). Zkontrolujte base URL backendu.${d ? ` ${d}` : ''}`;
  }
  if (status >= 500) {
    return `Chyba na serveru (${status}). Zkuste to znovu později.${d ? ` ${d}` : ''}`;
  }
  if (status === 0) {
    return d || 'Neznámá chyba konfigurace.';
  }
  return `Požadavek selhal (${status}).${d ? ` ${d}` : ''}`;
}

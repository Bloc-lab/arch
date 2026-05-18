import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLocation } from 'react-router-dom';
import {
  fetchContent,
  fetchSiteInfo,
  type ContentMap,
  type CmsHttpError,
  type SiteInfo,
} from '../lib/cms';
import { getEffectivePreviewToken, readLangFromSearch } from '../lib/previewParams';

export type Lang = 'cs' | 'en';

type ContentState =
  | { status: 'idle' | 'loading'; data: ContentMap | null; error: null }
  | { status: 'ready'; data: ContentMap; error: null }
  | { status: 'error'; data: ContentMap | null; error: CmsHttpError };

type ContentContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  state: ContentState;
  /** Načítání obsahu z CMS (první load nebo změna jazyka). */
  loading: boolean;
  siteInfo: SiteInfo | null;
  /** Efektivní token pro náhled (URL nebo session po navigaci v SPA). */
  previewToken: string | null;
  refetch: () => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

function initialLangFromUrl(): Lang {
  if (typeof window === 'undefined') return 'cs';
  const l = readLangFromSearch(window.location.search);
  return l ?? 'cs';
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [lang, setLang] = useState<Lang>(initialLangFromUrl);
  const [state, setState] = useState<ContentState>({
    status: 'idle',
    data: null,
    error: null,
  });
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);

  const previewToken = useMemo(
    () => getEffectivePreviewToken(location.search),
    [location.search],
  );

  useEffect(() => {
    const fromUrl = readLangFromSearch(location.search);
    if (fromUrl) setLang(fromUrl);
  }, [location.search]);

  const load = useCallback(async () => {
    setState((s) => ({
      status: 'loading',
      data: s.data,
      error: null,
    }));
    const token = getEffectivePreviewToken(location.search);
    const [contentResult, settingsResult] = await Promise.all([
      fetchContent(lang, { previewToken: token }),
      fetchSiteInfo(lang, { previewToken: token }),
    ]);
    if (!contentResult.ok) {
      setState((s) => ({
        status: 'error',
        data: s.data,
        error: contentResult.error,
      }));
      return;
    }
    if (!settingsResult.ok) {
      setState((s) => ({
        status: 'error',
        data: s.data,
        error: settingsResult.error,
      }));
      return;
    }
    setState({ status: 'ready', data: contentResult.data, error: null });
    setSiteInfo(settingsResult.data);
  }, [lang, location.search]);

  useEffect(() => {
    void load();
  }, [load]);

  const loading = state.status === 'idle' || state.status === 'loading';

  const value = useMemo<ContentContextValue>(
    () => ({
      lang,
      setLang,
      state,
      loading,
      siteInfo,
      previewToken,
      refetch: load,
    }),
    [lang, state, loading, siteInfo, previewToken, load],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContentContext(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContentContext musí být uvnitř ContentProvider');
  return ctx;
}

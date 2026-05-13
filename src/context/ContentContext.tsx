import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  fetchContent,
  fetchSiteInfo,
  type ContentMap,
  type CmsHttpError,
  type SiteInfo,
} from '../lib/cms';

export type Lang = 'cs' | 'en';

type ContentState =
  | { status: 'idle' | 'loading'; data: ContentMap | null; error: null }
  | { status: 'ready'; data: ContentMap; error: null }
  | { status: 'error'; data: ContentMap | null; error: CmsHttpError };

type ContentContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  state: ContentState;
  siteInfo: SiteInfo | null;
  refetch: () => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('cs');
  const [state, setState] = useState<ContentState>({
    status: 'idle',
    data: null,
    error: null,
  });
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);

  const load = useCallback(async () => {
    setState((s) => ({
      status: 'loading',
      data: s.data,
      error: null,
    }));
    const result = await fetchContent(lang);
    if (result.ok) {
      setState({ status: 'ready', data: result.data, error: null });
    } else {
      setState((s) => ({
        status: 'error',
        data: s.data,
        error: result.error,
      }));
    }
  }, [lang]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const info = await fetchSiteInfo();
      if (!cancelled && info) setSiteInfo(info);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<ContentContextValue>(
    () => ({
      lang,
      setLang,
      state,
      siteInfo,
      refetch: load,
    }),
    [lang, state, siteInfo, load],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContentContext(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContentContext musí být uvnitř ContentProvider');
  return ctx;
}

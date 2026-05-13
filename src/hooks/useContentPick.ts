import { useCallback } from 'react';
import { useContentContext } from '../context/ContentContext';
import { pickContent } from '../content/fallbacks';

export function useContentPick(): (key: string) => string {
  const { state, lang } = useContentContext();
  const map = state.status === 'ready' ? state.data : {};
  return useCallback((key: string) => pickContent(map, key, lang), [map, lang]);
}

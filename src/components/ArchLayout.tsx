import { Link, Outlet, useLocation } from 'react-router-dom';
import { ApiStatusBanner } from './ApiStatusBanner';
import { ArchSiteNav } from './arch/ArchSiteNav';
import { useContentContext } from '../context/ContentContext';
import { clearPreviewSession } from '../lib/previewParams';
import {
  ArchContentSkeleton,
  type ArchSkeletonVariant,
} from './skeleton/ArchContentSkeleton';
import { ArchFooterSkeleton } from './skeleton/ArchFooterSkeleton';
import { ArchNavSkeleton } from './skeleton/ArchNavSkeleton';

function skeletonVariant(pathname: string): ArchSkeletonVariant {
  if (pathname.startsWith('/o-nas')) return 'about';
  if (pathname.startsWith('/cenik')) return 'pricing';
  if (pathname.startsWith('/kontakt')) return 'contact';
  return 'home';
}

function closePreviewTo(location: ReturnType<typeof useLocation>): string {
  clearPreviewSession();
  const params = new URLSearchParams(location.search);
  params.delete('previewToken');
  params.delete('lang');
  const query = params.toString();
  return `${location.pathname}${query ? `?${query}` : ''}${location.hash}`;
}

export function ArchLayout() {
  const { loading, previewToken } = useContentContext();
  const location = useLocation();
  const isPreview = previewToken !== null;
  const variant = skeletonVariant(location.pathname);

  const mainPtLoading = loading ? (isPreview ? 'pt-[7.5rem]' : 'pt-20') : '';

  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans text-on-background antialiased">
      {isPreview ? (
        <div className="fixed top-0 z-[60] flex h-10 w-full items-center border-b border-sky-200 bg-sky-50 px-4 text-sm text-sky-950">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
            <strong className="font-semibold">Náhled – nepublikované změny</strong>
            <Link
              to={closePreviewTo(location)}
              className="shrink-0 rounded-md border border-sky-200 bg-white px-3 py-1 font-medium text-sky-950 shadow-sm hover:bg-sky-100"
            >
              Zavřít náhled
            </Link>
          </div>
        </div>
      ) : null}

      {loading ? (
        <div
          className={`h-1 w-full animate-pulse bg-gradient-to-r from-slate-200 via-secondary-container/80 to-slate-200 dark:from-slate-700 dark:via-slate-500 dark:to-slate-700 ${
            isPreview ? 'mt-10' : ''
          }`}
          aria-hidden
        />
      ) : null}

      {loading ? (
        <ArchNavSkeleton offsetTop={isPreview} />
      ) : (
        <ArchSiteNav offsetTop={isPreview} />
      )}

      <main className={`flex-1 ${mainPtLoading}`}>
        <ApiStatusBanner />
        {loading ? (
          <ArchContentSkeleton variant={variant} />
        ) : (
          <Outlet />
        )}
      </main>

      {loading ? <ArchFooterSkeleton /> : null}
    </div>
  );
}


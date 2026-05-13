import { NavLink, useLocation } from 'react-router-dom';
import { useContentContext } from '../../context/ContentContext';
import { useContentPick } from '../../hooks/useContentPick';

function cn(...parts: (string | false | undefined | null)[]): string {
  return parts.filter(Boolean).join(' ');
}

export function ArchSiteNav() {
  const t = useContentPick();
  const { lang, setLang } = useContentContext();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  const logoUrl = t('admin.logo').trim();

  const inactive =
    'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100';
  const active = 'border-b-2 border-brand-accent pb-1 text-slate-900 dark:text-white';

  const navLinkClass = (isActive: boolean) =>
    cn('text-body-md transition-all duration-300', isActive ? active : inactive);

  const shell =
    'border-slate-100 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90';

  const logoClass =
    'text-xl font-bold uppercase tracking-tighter text-slate-900 dark:text-slate-50';

  const ctaClass =
    'scale-95 rounded-lg bg-primary px-6 py-3 text-label-caps uppercase tracking-widest text-on-primary transition-transform active:scale-90';

  const langWrap = 'flex rounded-full border border-slate-200 dark:border-slate-700';

  const langBtnActive = 'bg-slate-900 text-white dark:bg-white dark:text-slate-900';
  const langBtnIdle = 'text-slate-600 dark:text-slate-300';

  return (
    <header className={cn('fixed left-0 right-0 top-0 z-50 w-full border-b', shell)}>
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-8">
        <NavLink to="/" className={cn('flex min-w-0 items-center gap-3', logoClass)}>
          {logoUrl ? (
            <img src={logoUrl} alt="" className="h-10 max-w-[160px] object-contain" />
          ) : null}
          <span>{t('admin.siteName')}</span>
        </NavLink>

        <div className="hidden items-center space-x-12 md:flex">
          <a className={navLinkClass(onHome)} href="/#portfolio">
            {t('nav.portfolio')}
          </a>
          <NavLink to="/cenik" className={({ isActive }) => navLinkClass(isActive)}>
            {t('nav.pricing')}
          </NavLink>
          <NavLink to="/kontakt" className={({ isActive }) => navLinkClass(isActive)}>
            {t('nav.contact')}
          </NavLink>
          <NavLink to="/kontakt" className={ctaClass}>
            {t('nav.ctaQuote')}
          </NavLink>
          <div className={cn(langWrap)}>
            <button
              type="button"
              className={cn(
                'rounded-l-full px-3 py-1.5 text-xs font-bold',
                lang === 'cs' ? langBtnActive : langBtnIdle,
              )}
              onClick={() => setLang('cs')}
            >
              CS
            </button>
            <button
              type="button"
              className={cn(
                'rounded-r-full px-3 py-1.5 text-xs font-bold',
                lang === 'en' ? langBtnActive : langBtnIdle,
              )}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className={cn(langWrap)}>
            <button
              type="button"
              className={cn(
                'rounded-l-full px-3 py-1.5 text-xs font-bold',
                lang === 'cs' ? langBtnActive : langBtnIdle,
              )}
              onClick={() => setLang('cs')}
            >
              CS
            </button>
            <button
              type="button"
              className={cn(
                'rounded-r-full px-3 py-1.5 text-xs font-bold',
                lang === 'en' ? langBtnActive : langBtnIdle,
              )}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <button type="button" className="text-slate-900 dark:text-white" aria-label="Menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

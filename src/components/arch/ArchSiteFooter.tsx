import type { ReactNode } from 'react';
import { useContentPick } from '../../hooks/useContentPick';

const footerLinkClass =
  'text-body-md text-slate-500 transition-colors duration-200 hover:text-brand-accent dark:text-slate-400';

function OptionalHref({ href, children }: { href: string; children: ReactNode }) {
  const h = href.trim();
  if (!h) return <span className={footerLinkClass}>{children}</span>;
  return (
    <a className={footerLinkClass} href={h}>
      {children}
    </a>
  );
}

export function ArchSiteFooter() {
  const t = useContentPick();

  const socialRow = [
    { href: t('footer.socialInstagramHref'), icon: 'photo_camera', label: 'Instagram' },
    { href: t('footer.socialLinkedinHref'), icon: 'handshake', label: 'LinkedIn' },
    { href: t('footer.socialFacebookHref'), icon: 'groups', label: 'Facebook' },
  ].filter((item) => item.href.trim().length > 0);

  return (
    <footer className="w-full border-t border-slate-200 bg-[#F9FAFB] py-20 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-8 sm:gap-12 md:grid-cols-3 md:gap-x-14 md:gap-y-12 lg:max-w-6xl lg:gap-x-20">
        <div>
          <div className="mb-6 text-lg font-bold uppercase text-slate-900 dark:text-slate-50">
            {t('admin.siteName')}
          </div>
          <p className="mb-8 text-body-md text-slate-500 dark:text-slate-400">{t('footer.blurb')}</p>
          {socialRow.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {socialRow.map((item) => (
                <a
                  key={item.label}
                  aria-label={item.label}
                  className="text-slate-400 transition-colors duration-200 hover:text-brand-accent"
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <h4 className="mb-6 text-label-caps text-slate-900 dark:text-slate-50">
            {t('footer.columnNavigation')}
          </h4>
          <ul className="space-y-4">
            <li>
              <OptionalHref href={t('footer.linkNav1Href')}>{t('footer.linkNav1')}</OptionalHref>
            </li>
            <li>
              <OptionalHref href={t('footer.linkNav2Href')}>{t('footer.linkNav2')}</OptionalHref>
            </li>
            <li>
              <OptionalHref href={t('footer.linkNav3Href')}>{t('footer.linkNav3')}</OptionalHref>
            </li>
            <li>
              <OptionalHref href={t('footer.linkNav4Href')}>{t('footer.linkNav4')}</OptionalHref>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-label-caps text-slate-900 dark:text-slate-50">{t('footer.columnConnect')}</h4>
          <p className="mb-2 text-body-md text-slate-500 dark:text-slate-400">{t('footer.addressLine1')}</p>
          <p className="mb-6 text-body-md text-slate-500 dark:text-slate-400">{t('footer.addressLine2')}</p>
          {t('footer.email').trim() ? (
            <p className="text-body-md">
              <a className={footerLinkClass} href={`mailto:${t('footer.email').trim()}`}>
                {t('footer.email')}
              </a>
            </p>
          ) : null}
        </div>
      </div>
      <div className="mx-auto mt-16 flex w-full max-w-5xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-8 pt-8 text-center text-sm text-body-md text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:mt-20 md:flex-row md:text-left lg:max-w-6xl">
        <p>{t('footer.copyright')}</p>
        <div className="flex space-x-6">
          <a className={footerLinkClass} href={t('footer.linkPrivacyHref')}>
            {t('footer.privacyLabel')}
          </a>
          <a className={footerLinkClass} href={t('footer.linkTermsHref')}>
            {t('footer.termsLabel')}
          </a>
        </div>
      </div>
    </footer>
  );
}

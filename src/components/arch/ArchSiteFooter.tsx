import { useContentPick } from '../../hooks/useContentPick';

export function ArchSiteFooter() {
  const t = useContentPick();

  return (
    <footer className="w-full border-t border-slate-200 bg-[#F9FAFB] py-20 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-6 text-lg font-bold uppercase text-slate-900 dark:text-slate-50">
            {t('admin.siteName')}
          </div>
          <p className="mb-8 text-body-md text-slate-500 dark:text-slate-400">{t('footer.blurb')}</p>
          <div className="flex space-x-4">
            <a
              className="text-slate-400 transition-colors duration-200 hover:text-brand-accent"
              href="#"
              aria-label="Social"
            >
              <span className="material-symbols-outlined">camera_indoor</span>
            </a>
            <a
              className="text-slate-400 transition-colors duration-200 hover:text-brand-accent"
              href="#"
              aria-label="Social"
            >
              <span className="material-symbols-outlined">work</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-6 text-label-caps text-slate-900 dark:text-slate-50">{t('footer.columnExpertise')}</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400">
            <li>
              <a className="text-body-md transition-colors duration-200 hover:text-brand-accent" href="#">
                {t('footer.linkExp1')}
              </a>
            </li>
            <li>
              <a className="text-body-md transition-colors duration-200 hover:text-brand-accent" href="#">
                {t('footer.linkExp2')}
              </a>
            </li>
            <li>
              <a className="text-body-md transition-colors duration-200 hover:text-brand-accent" href="#">
                {t('footer.linkExp3')}
              </a>
            </li>
            <li>
              <a className="text-body-md transition-colors duration-200 hover:text-brand-accent" href="#">
                {t('footer.linkExp4')}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-label-caps text-slate-900 dark:text-slate-50">
            {t('footer.columnNavigation')}
          </h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400">
            <li>
              <a className="text-body-md transition-colors duration-200 hover:text-brand-accent" href="/#portfolio">
                {t('footer.linkNav1')}
              </a>
            </li>
            <li>
              <a className="text-body-md transition-colors duration-200 hover:text-brand-accent" href="/#craft">
                {t('footer.linkNav2')}
              </a>
            </li>
            <li>
              <a className="font-semibold text-body-md text-brand-accent" href="#">
                {t('footer.linkNav3')}
              </a>
            </li>
            <li>
              <a className="text-body-md transition-colors duration-200 hover:text-brand-accent" href="#">
                {t('footer.linkNav4')}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-label-caps text-slate-900 dark:text-slate-50">{t('footer.columnConnect')}</h4>
          <p className="mb-2 text-body-md text-slate-500 dark:text-slate-400">{t('footer.addressLine1')}</p>
          <p className="mb-6 text-body-md text-slate-500 dark:text-slate-400">{t('footer.addressLine2')}</p>
          <p className="text-body-md font-bold text-brand-accent">
            <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-8 pt-8 text-sm text-body-md text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">
        <p>{t('footer.copyright')}</p>
        <div className="flex space-x-6">
          <a className="hover:text-brand-accent" href={t('footer.linkPrivacyHref')}>
            {t('footer.privacyLabel')}
          </a>
          <a className="hover:text-brand-accent" href={t('footer.linkTermsHref')}>
            {t('footer.termsLabel')}
          </a>
        </div>
      </div>
    </footer>
  );
}

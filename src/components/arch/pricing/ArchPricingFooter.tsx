import { useContentPick } from '../../../hooks/useContentPick';

export function ArchPricingFooter() {
  const t = useContentPick();

  return (
    <footer className="mt-40 border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-start gap-8 px-8 py-20">
        <div className="col-span-12 lg:col-span-4">
          <div className="mb-6 font-serif text-xl text-neutral-100">{t('admin.siteName')}</div>
          <p className="mb-8 font-sans text-sm uppercase leading-relaxed tracking-widest text-neutral-500">
            {t('pricingPage.footer.blurb')}
          </p>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <h5 className="mb-6 font-sans text-sm uppercase tracking-widest text-neutral-100">
            {t('pricingPage.footer.columnCompany')}
          </h5>
          <div className="flex flex-col gap-4">
            <a className="font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-orange-700" href="/#portfolio">
              {t('pricingPage.footer.linkPortfolio')}
            </a>
            <a className="font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-orange-700" href="/cenik">
              {t('pricingPage.footer.linkProcess')}
            </a>
            <a className="font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-orange-700" href="#">
              {t('pricingPage.footer.linkSustainability')}
            </a>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <h5 className="mb-6 font-sans text-sm uppercase tracking-widest text-neutral-100">
            {t('pricingPage.footer.columnLegal')}
          </h5>
          <div className="flex flex-col gap-4">
            <a className="font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-orange-700" href="#">
              {t('pricingPage.footer.linkPrivacy')}
            </a>
            <a className="font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-orange-700" href="#">
              {t('pricingPage.footer.linkTerms')}
            </a>
            <a className="font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-orange-700" href="#">
              {t('pricingPage.footer.linkAccessibility')}
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <h5 className="mb-6 font-sans text-sm uppercase tracking-widest text-neutral-100">
            {t('pricingPage.footer.columnNewsletter')}
          </h5>
          <div className="flex gap-2">
            <input
              className="w-full border border-neutral-800 bg-neutral-900 px-4 py-3 font-sans text-xs uppercase tracking-widest text-white outline-none focus:border-orange-800 focus:ring-0"
              placeholder={t('pricingPage.footer.newsletterPlaceholder')}
              type="email"
              readOnly
              aria-readonly="true"
            />
            <button type="button" className="bg-orange-800 px-4 py-3 text-white hover:bg-orange-700">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="col-span-12 mt-8 border-t border-neutral-800 pt-8">
          <div className="font-sans text-sm uppercase tracking-widest text-neutral-500">{t('pricingPage.footer.copyright')}</div>
        </div>
      </div>
    </footer>
  );
}

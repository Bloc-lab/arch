import { useContentPick } from '../../../hooks/useContentPick';

export function ArchPricingFinalCta() {
  const t = useContentPick();

  return (
    <section className="mx-auto mb-section-gap max-w-[1440px] px-8 text-center">
      <div className="mx-auto max-w-3xl border-t border-outline-variant pt-24">
        <h2 className="mb-6 text-headline-xl text-primary">{t('pricingPage.final.title')}</h2>
        <p className="mb-10 text-body-lg text-on-surface-variant">{t('pricingPage.final.lead')}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-lg bg-primary px-10 py-5 font-label-caps uppercase tracking-widest text-white transition-all hover:bg-primary-container"
          >
            {t('pricingPage.final.btnPrimary')}
          </button>
          <button
            type="button"
            className="rounded-lg border-2 border-primary bg-transparent px-10 py-5 font-label-caps uppercase tracking-widest text-primary transition-all hover:bg-surface-container"
          >
            {t('pricingPage.final.btnSecondary')}
          </button>
        </div>
      </div>
    </section>
  );
}

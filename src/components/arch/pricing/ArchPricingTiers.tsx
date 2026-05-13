import { useContentPick } from '../../../hooks/useContentPick';

export function ArchPricingTiers() {
  const t = useContentPick();

  return (
    <section className="mx-auto mb-section-gap max-w-[1440px] px-8">
      <div className="mb-12">
        <span className="mb-2 block text-label-caps uppercase text-secondary">{t('pricingPage.tiers.eyebrow')}</span>
        <h2 className="text-headline-lg text-primary">{t('pricingPage.tiers.title')}</h2>
      </div>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:shadow-md">
          <span className="mb-4 block text-label-caps text-on-surface-variant">{t('pricingPage.plan1.category')}</span>
          <h3 className="mb-2 text-headline-md text-primary">{t('pricingPage.plan1.title')}</h3>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-body-md text-on-surface-variant">{t('pricingPage.plan1.pricePrefix')}</span>
            <span className="text-headline-lg text-secondary">{t('pricingPage.plan1.price')}</span>
          </div>
          <p className="mb-8 text-body-md text-on-surface-variant">{t('pricingPage.plan1.desc')}</p>
          <button
            type="button"
            className="w-full rounded-lg border-2 border-primary py-4 font-label-caps uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary"
          >
            {t('pricingPage.plan1.cta')}
          </button>
        </div>

        <div className="relative transform overflow-hidden rounded-xl bg-primary p-8 shadow-xl md:-translate-y-4">
          <div className="absolute right-0 top-0 rounded-bl-xl bg-secondary px-4 py-2 font-label-caps text-white">
            {t('pricingPage.plan2.badgePopular')}
          </div>
          <span className="mb-4 block text-label-caps text-primary-fixed">{t('pricingPage.plan2.category')}</span>
          <h3 className="mb-2 text-headline-md text-white">{t('pricingPage.plan2.title')}</h3>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-body-md text-primary-fixed">{t('pricingPage.plan2.pricePrefix')}</span>
            <span className="text-headline-lg text-secondary-fixed">{t('pricingPage.plan2.price')}</span>
          </div>
          <p className="mb-8 text-body-md text-primary-fixed">{t('pricingPage.plan2.desc')}</p>
          <button
            type="button"
            className="w-full rounded-lg bg-secondary py-4 font-label-caps uppercase text-white transition-all duration-300 hover:bg-secondary-container"
          >
            {t('pricingPage.plan2.cta')}
          </button>
        </div>

        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:shadow-md">
          <span className="mb-4 block text-label-caps text-on-surface-variant">{t('pricingPage.plan3.category')}</span>
          <h3 className="mb-2 text-headline-md text-primary">{t('pricingPage.plan3.title')}</h3>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-body-md text-on-surface-variant">{t('pricingPage.plan3.pricePrefix')}</span>
            <span className="text-headline-lg text-secondary">{t('pricingPage.plan3.price')}</span>
          </div>
          <p className="mb-8 text-body-md text-on-surface-variant">{t('pricingPage.plan3.desc')}</p>
          <button
            type="button"
            className="w-full rounded-lg border-2 border-primary py-4 font-label-caps uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary"
          >
            {t('pricingPage.plan3.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

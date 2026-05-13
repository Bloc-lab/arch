import { useContentPick } from '../../../hooks/useContentPick';

export function ArchPricingHero() {
  const t = useContentPick();

  return (
    <section className="mx-auto mb-section-gap max-w-[1440px] px-8">
      <div className="grid grid-cols-12 items-center gap-gutter">
        <div className="col-span-12 lg:col-span-6">
          <span className="mb-4 block text-label-caps uppercase text-secondary">{t('pricingPage.hero.badge')}</span>
          <h1 className="mb-6 text-headline-xl text-primary">{t('pricingPage.hero.title')}</h1>
          <p className="mb-8 max-w-xl text-body-lg text-on-surface-variant">{t('pricingPage.hero.lead')}</p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            <img
              alt={t('pricingPage.hero.imageAlt')}
              className="h-full w-full object-cover"
              src={t('pricingPage.hero.image')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

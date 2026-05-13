import { useContentPick } from '../../hooks/useContentPick';

export function ArchPortfolioSection() {
  const t = useContentPick();

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-8 py-section-gap">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <h2 className="mb-4 text-headline-xl text-primary">{t('portfolio.title')}</h2>
          <p className="max-w-xl text-body-lg text-on-surface-variant">{t('portfolio.desc')}</p>
        </div>
        <div className="hidden space-x-2 md:flex">
          <span className="rounded-full bg-surface-container-high px-4 py-2 text-label-caps text-primary">
            {t('portfolio.tag1')}
          </span>
          <span className="rounded-full bg-surface-container-high px-4 py-2 text-label-caps text-primary">
            {t('portfolio.tag2')}
          </span>
          <span className="rounded-full bg-surface-container-high px-4 py-2 text-label-caps text-primary">
            {t('portfolio.tag3')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="group relative h-[600px] overflow-hidden rounded-xl shadow-sm md:col-span-8">
          <img
            alt={t('portfolio.card1.imageAlt')}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={t('portfolio.card1.image')}
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/60 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-on-primary">
              <span className="mb-2 block text-label-caps text-secondary">{t('portfolio.card1.location')}</span>
              <h3 className="text-headline-lg">{t('portfolio.card1.title')}</h3>
            </div>
          </div>
        </div>

        <div className="group relative h-[600px] overflow-hidden rounded-xl shadow-sm md:col-span-4">
          <img
            alt={t('portfolio.card2.imageAlt')}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={t('portfolio.card2.image')}
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/60 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-on-primary">
              <span className="mb-2 block text-label-caps text-secondary">{t('portfolio.card2.location')}</span>
              <h3 className="text-headline-lg">{t('portfolio.card2.title')}</h3>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl border border-outline-variant shadow-lg md:col-span-12">
          <div className="absolute inset-0 flex">
            <div className="group relative h-full w-1/2">
              <img
                alt={t('portfolio.beforeImageAlt')}
                className="h-full w-full object-cover grayscale"
                src={t('portfolio.beforeImage')}
              />
              <div className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1 text-label-caps text-on-primary">
                {t('portfolio.beforeLabel')}
              </div>
            </div>
            <div className="group relative h-full w-1/2">
              <img
                alt={t('portfolio.afterImageAlt')}
                className="h-full w-full object-cover"
                src={t('portfolio.afterImage')}
              />
              <div className="absolute right-4 top-4 rounded-md bg-secondary px-3 py-1 text-label-caps text-on-secondary">
                {t('portfolio.afterLabel')}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative h-full w-1 bg-secondary">
              <div className="pointer-events-auto absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-secondary text-on-secondary shadow-xl">
                <span className="material-symbols-outlined">unfold_more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-sm md:col-span-4">
          <img
            alt={t('portfolio.detail1.imageAlt')}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={t('portfolio.detail1.image')}
          />
        </div>
        <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-sm md:col-span-4">
          <img
            alt={t('portfolio.detail2.imageAlt')}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={t('portfolio.detail2.image')}
          />
        </div>
        <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-sm md:col-span-4">
          <img
            alt={t('portfolio.detail3.imageAlt')}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={t('portfolio.detail3.image')}
          />
        </div>
      </div>
    </section>
  );
}

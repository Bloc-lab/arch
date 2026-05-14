import { useContentPick } from '../../hooks/useContentPick';
import { ArchBeforeAfterCompare } from './ArchBeforeAfterCompare';

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

        <div className="md:col-span-12">
          <ArchBeforeAfterCompare
            afterAlt={t('portfolio.afterImageAlt')}
            afterLabel={t('portfolio.afterLabel')}
            afterSrc={t('portfolio.afterImage')}
            beforeAlt={t('portfolio.beforeImageAlt')}
            beforeLabel={t('portfolio.beforeLabel')}
            beforeSrc={t('portfolio.beforeImage')}
          />
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

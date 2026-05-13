import { useContentPick } from '../../hooks/useContentPick';

export function ArchCtaSection() {
  const t = useContentPick();

  return (
    <section id="cta-contact" className="relative overflow-hidden bg-primary py-section-gap">
      <div className="absolute inset-0 opacity-20">
        <img
          alt={t('cta.bgImageAlt')}
          className="h-full w-full object-cover"
          src={t('cta.bgImage')}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-8 text-headline-xl text-on-primary">{t('cta.title')}</h2>
        <p className="mb-12 text-body-lg text-on-primary/80">{t('cta.lead')}</p>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <button
            type="button"
            className="w-full rounded-lg bg-secondary px-10 py-5 text-headline-md text-on-secondary transition-transform hover:scale-105 md:w-auto"
          >
            {t('cta.btnPrimary')}
          </button>
          <button
            type="button"
            className="w-full rounded-lg border border-on-primary/30 px-10 py-5 text-headline-md text-on-primary transition-colors hover:bg-white/10 md:w-auto"
          >
            {t('cta.btnSecondary')}
          </button>
        </div>
      </div>
    </section>
  );
}

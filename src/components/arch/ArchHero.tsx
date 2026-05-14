import { useContentPick } from '../../hooks/useContentPick';

export function ArchHero() {
  const t = useContentPick();

  return (
    <header className="relative flex h-[921px] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          alt={t('hero.imageAlt')}
          className="h-full w-full object-cover"
          src={t('hero.image')}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block text-label-caps uppercase tracking-[0.2em] text-secondary">
            {t('hero.badge')}
          </span>
          <h1 className="mb-6 text-headline-xl text-on-primary">{t('hero.title')}</h1>
          <p className="mb-10 text-body-lg text-on-primary-container opacity-90">{t('hero.lead')}</p>
          <div className="flex space-x-4">
            <a
              href="#cta-contact"
              className="group flex items-center rounded-lg bg-secondary px-8 py-4 text-headline-md text-on-secondary transition-all duration-300"
            >
              {t('hero.ctaPrimary')}
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <span className="mb-2 text-label-caps text-on-primary/60">{t('hero.scrollHint')}</span>
        <span className="material-symbols-outlined animate-bounce text-on-primary/60">expand_more</span>
      </div>
    </header>
  );
}

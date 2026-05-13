import { Link } from 'react-router-dom';
import { useContentPick } from '../../../hooks/useContentPick';

export function ArchContactBanner() {
  const t = useContentPick();

  return (
    <section className="mx-auto mb-40 max-w-[1440px] px-8">
      <div className="group relative h-[400px] overflow-hidden rounded-2xl">
        <img
          alt={t('contactPage.banner.imageAlt')}
          className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
          src={t('contactPage.banner.image')}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/40 p-8 text-center text-white backdrop-blur-[2px]">
          <h2 className="mb-6 text-headline-xl">{t('contactPage.banner.title')}</h2>
          <Link
            to="/#portfolio"
            className="rounded bg-secondary px-10 py-4 text-label-caps uppercase tracking-widest text-white transition-transform hover:scale-105"
          >
            {t('contactPage.banner.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}

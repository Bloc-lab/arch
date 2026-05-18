import { ArchSiteFooter } from '../components/arch/ArchSiteFooter';
import { useContentPick } from '../hooks/useContentPick';

export function AboutPage() {
  const t = useContentPick();

  return (
    <>
      <section className="mx-auto max-w-3xl px-8 pb-24 pt-32">
        <p className="mb-3 text-label-caps text-secondary">{t('nav.about')}</p>
        <h1 className="mb-8 text-headline-xl text-primary">{t('nav.about')}</h1>
        <div className="whitespace-pre-wrap text-body-lg text-on-surface-variant">{t('about.text')}</div>
        <p className="mt-10 text-sm text-on-surface-variant">
          Klíč API / seed: <code className="rounded bg-surface-container-high px-1">about.text</code>
        </p>
      </section>
      <ArchSiteFooter />
    </>
  );
}

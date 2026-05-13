import { useContentPick } from '../../hooks/useContentPick';

export function ArchCraftSection() {
  const t = useContentPick();

  return (
    <section id="craft" className="bg-surface-container-low py-section-gap">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img
              alt={t('craft.imageAlt')}
              className="w-full rounded-xl shadow-2xl"
              src={t('craft.image')}
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="mb-4 block text-label-caps text-secondary">{t('craft.label')}</span>
            <h2 className="mb-8 text-headline-xl leading-tight text-primary">{t('craft.title')}</h2>
            <p className="mb-12 text-body-lg text-on-surface-variant">{t('craft.lead')}</p>
            <ul className="space-y-8">
              <li className="flex items-start space-x-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                  <span className="material-symbols-outlined text-on-primary">architecture</span>
                </div>
                <div>
                  <h4 className="mb-2 text-headline-md text-primary">{t('craft.bullet1.title')}</h4>
                  <p className="text-body-md text-on-surface-variant">{t('craft.bullet1.desc')}</p>
                </div>
              </li>
              <li className="flex items-start space-x-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                  <span className="material-symbols-outlined text-on-primary">foundation</span>
                </div>
                <div>
                  <h4 className="mb-2 text-headline-md text-primary">{t('craft.bullet2.title')}</h4>
                  <p className="text-body-md text-on-surface-variant">{t('craft.bullet2.desc')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

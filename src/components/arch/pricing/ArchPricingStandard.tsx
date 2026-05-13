import { useContentPick } from '../../../hooks/useContentPick';

function FillIcon({ name }: { name: string }) {
  return (
    <span
      className="material-symbols-outlined text-secondary"
      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}

export function ArchPricingStandard() {
  const t = useContentPick();

  const cards = [
    { title: t('pricingPage.standard.card1.title'), desc: t('pricingPage.standard.card1.desc') },
    { title: t('pricingPage.standard.card2.title'), desc: t('pricingPage.standard.card2.desc') },
    { title: t('pricingPage.standard.card3.title'), desc: t('pricingPage.standard.card3.desc') },
    { title: t('pricingPage.standard.card4.title'), desc: t('pricingPage.standard.card4.desc') },
  ];

  return (
    <section className="relative mx-auto mb-section-gap max-w-[1440px] px-8">
      <div className="relative overflow-hidden rounded-3xl bg-surface-container-high p-12 lg:p-20">
        <div className="relative z-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="mb-6 text-headline-lg text-primary">{t('pricingPage.standard.title')}</h2>
            <p className="mb-8 text-body-md text-on-surface-variant">{t('pricingPage.standard.lead')}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FillIcon name="verified" />
                <span className="text-body-md font-semibold text-primary">{t('pricingPage.standard.row1.label')}</span>
              </div>
              <div className="flex items-center gap-4">
                <FillIcon name="schedule" />
                <span className="text-body-md font-semibold text-primary">{t('pricingPage.standard.row2.label')}</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-6 md:col-span-8 md:grid-cols-2">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
              >
                <h4 className="mb-2 text-headline-md text-primary">{c.title}</h4>
                <p className="text-sm text-on-surface-variant">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>
    </section>
  );
}

import { useContentPick } from '../../../hooks/useContentPick';

export function ArchPricingJourney() {
  const t = useContentPick();

  const steps = [
    {
      icon: 'architecture' as const,
      title: t('pricingPage.journey.step1.title'),
      desc: t('pricingPage.journey.step1.desc'),
    },
    {
      icon: 'brush' as const,
      title: t('pricingPage.journey.step2.title'),
      desc: t('pricingPage.journey.step2.desc'),
    },
    {
      icon: 'construction' as const,
      title: t('pricingPage.journey.step3.title'),
      desc: t('pricingPage.journey.step3.desc'),
    },
  ];

  return (
    <section className="mb-section-gap bg-surface-container-low py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-headline-lg text-primary">{t('pricingPage.journey.title')}</h2>
          <p className="mx-auto max-w-2xl text-body-md text-on-surface-variant">{t('pricingPage.journey.lead')}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="group relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-transparent bg-surface-container-highest transition-all duration-300 group-hover:border-secondary">
                <span className="material-symbols-outlined text-3xl text-secondary">{step.icon}</span>
              </div>
              <h3 className="mb-3 text-headline-md text-primary">{step.title}</h3>
              <p className="text-body-md text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useContentPick } from '../../../hooks/useContentPick';

const cardClass =
  'flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:shadow-md';

const ctaClass =
  'mt-auto w-full rounded-lg border-2 border-primary py-4 font-label-caps uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary';

function parseBullets(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

type TierPlan = {
  category: string;
  title: string;
  pricePrefix: string;
  price: string;
  desc: string;
  cta: string;
};

function PricingTierCard({ plan }: { plan: TierPlan }) {
  const bullets = parseBullets(plan.desc);

  return (
    <div className={cardClass}>
      <span className="mb-4 block text-label-caps text-on-surface-variant">{plan.category}</span>
      <h3 className="mb-2 text-headline-md text-primary">{plan.title}</h3>
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-body-md text-on-surface-variant">{plan.pricePrefix}</span>
        <span className="text-headline-lg text-secondary">{plan.price}</span>
      </div>
      {bullets.length > 0 ? (
        <ul className="mb-8 list-disc space-y-2 pl-5 text-body-md text-on-surface-variant marker:text-secondary">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <button type="button" className={ctaClass}>
        {plan.cta}
      </button>
    </div>
  );
}

export function ArchPricingTiers() {
  const t = useContentPick();

  const plans: TierPlan[] = [
    {
      category: t('pricingPage.plan1.category'),
      title: t('pricingPage.plan1.title'),
      pricePrefix: t('pricingPage.plan1.pricePrefix'),
      price: t('pricingPage.plan1.price'),
      desc: t('pricingPage.plan1.desc'),
      cta: t('pricingPage.plan1.cta'),
    },
    {
      category: t('pricingPage.plan2.category'),
      title: t('pricingPage.plan2.title'),
      pricePrefix: t('pricingPage.plan2.pricePrefix'),
      price: t('pricingPage.plan2.price'),
      desc: t('pricingPage.plan2.desc'),
      cta: t('pricingPage.plan2.cta'),
    },
    {
      category: t('pricingPage.plan3.category'),
      title: t('pricingPage.plan3.title'),
      pricePrefix: t('pricingPage.plan3.pricePrefix'),
      price: t('pricingPage.plan3.price'),
      desc: t('pricingPage.plan3.desc'),
      cta: t('pricingPage.plan3.cta'),
    },
  ];

  return (
    <section className="mx-auto mb-section-gap max-w-[1440px] px-8">
      <div className="mb-12">
        <span className="mb-2 block text-label-caps uppercase text-secondary">{t('pricingPage.tiers.eyebrow')}</span>
        <h2 className="text-headline-lg text-primary">{t('pricingPage.tiers.title')}</h2>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-gutter md:grid-cols-3">
        {plans.map((plan) => (
          <PricingTierCard key={plan.title} plan={plan} />
        ))}
      </div>
    </section>
  );
}

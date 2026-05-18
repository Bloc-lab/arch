import { ArchPricingFinalCta } from '../components/arch/pricing/ArchPricingFinalCta';
import { ArchPricingHero } from '../components/arch/pricing/ArchPricingHero';
import { ArchPricingJourney } from '../components/arch/pricing/ArchPricingJourney';
import { ArchPricingStandard } from '../components/arch/pricing/ArchPricingStandard';
import { ArchPricingTiers } from '../components/arch/pricing/ArchPricingTiers';

export function PricingPage() {
  return (
    <div className="bg-background text-body-md text-on-background antialiased">
      <div className="pt-32">
      <ArchPricingHero />
      <ArchPricingJourney />
      <ArchPricingTiers />
      <ArchPricingStandard />
      <ArchPricingFinalCta />
      </div>
    </div>
  );
}

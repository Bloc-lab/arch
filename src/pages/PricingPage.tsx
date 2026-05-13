import { ApiStatusBanner } from '../components/ApiStatusBanner';
import { ArchSiteNav } from '../components/arch/ArchSiteNav';
import { ArchPricingFinalCta } from '../components/arch/pricing/ArchPricingFinalCta';
import { ArchPricingFooter } from '../components/arch/pricing/ArchPricingFooter';
import { ArchPricingHero } from '../components/arch/pricing/ArchPricingHero';
import { ArchPricingJourney } from '../components/arch/pricing/ArchPricingJourney';
import { ArchPricingStandard } from '../components/arch/pricing/ArchPricingStandard';
import { ArchPricingTiers } from '../components/arch/pricing/ArchPricingTiers';
export function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-body-md font-sans text-on-background antialiased">
      <ArchSiteNav />
      <ApiStatusBanner />
      <main className="pt-32">
        <ArchPricingHero />
        <ArchPricingJourney />
        <ArchPricingTiers />
        <ArchPricingStandard />
        <ArchPricingFinalCta />
      </main>
      <ArchPricingFooter />
    </div>
  );
}

import { ApiStatusBanner } from '../components/ApiStatusBanner';
import { ArchCraftSection } from '../components/arch/ArchCraftSection';
import { ArchCtaSection } from '../components/arch/ArchCtaSection';
import { ArchHero } from '../components/arch/ArchHero';
import { ArchPortfolioSection } from '../components/arch/ArchPortfolioSection';
import { ArchSiteFooter } from '../components/arch/ArchSiteFooter';
import { ArchSiteNav } from '../components/arch/ArchSiteNav';

export function HomePage() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-background antialiased">
      <ArchSiteNav />
      <ApiStatusBanner />
      <ArchHero />
      <ArchPortfolioSection />
      <ArchCraftSection />
      <ArchCtaSection />
      <ArchSiteFooter />
    </div>
  );
}

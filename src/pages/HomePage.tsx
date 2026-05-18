import { ArchCraftSection } from '../components/arch/ArchCraftSection';
import { ArchCtaSection } from '../components/arch/ArchCtaSection';
import { ArchHero } from '../components/arch/ArchHero';
import { ArchPortfolioSection } from '../components/arch/ArchPortfolioSection';
export function HomePage() {
  return (
    <>
      <ArchHero />
      <ArchPortfolioSection />
      <ArchCraftSection />
      <ArchCtaSection />
    </>
  );
}

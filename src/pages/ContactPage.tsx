import { ApiStatusBanner } from '../components/ApiStatusBanner';
import { ArchSiteNav } from '../components/arch/ArchSiteNav';
import { ArchContactBanner } from '../components/arch/contact/ArchContactBanner';
import { ArchContactFooter } from '../components/arch/contact/ArchContactFooter';
import { ArchContactMain } from '../components/arch/contact/ArchContactMain';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ArchSiteNav />
      <ApiStatusBanner />
      <div className="pt-28 md:pt-32">
        <ArchContactMain />
        <ArchContactBanner />
      </div>
      <ArchContactFooter />
    </div>
  );
}

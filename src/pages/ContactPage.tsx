import { ArchContactBanner } from '../components/arch/contact/ArchContactBanner';
import { ArchContactFooter } from '../components/arch/contact/ArchContactFooter';
import { ArchContactMain } from '../components/arch/contact/ArchContactMain';

export function ContactPage() {
  return (
  <div className="bg-background font-sans antialiased">
    <div className="pt-28 md:pt-32">
      <ArchContactMain />
      <ArchContactBanner />
      <ArchContactFooter />
    </div>
  </div>
  );
}

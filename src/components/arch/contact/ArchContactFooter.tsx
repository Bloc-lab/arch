import { useContentPick } from '../../../hooks/useContentPick';

export function ArchContactFooter() {
  const t = useContentPick();

  const links = [
    { label: t('contactPage.footer.linkPrivacy'), href: '#' },
    { label: t('contactPage.footer.linkTerms'), href: '#' },
    { label: t('contactPage.footer.linkSustainability'), href: '#' },
    { label: t('contactPage.footer.linkAccessibility'), href: '#' },
  ];

  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-start gap-8 px-8 py-20">
        <div className="col-span-12 md:col-span-4">
          <div className="mb-6 font-serif text-xl uppercase text-neutral-100">{t('admin.siteName')}</div>
          <p className="font-sans text-sm uppercase tracking-widest text-neutral-500">{t('contactPage.footer.copyright')}</p>
        </div>
        <div className="col-span-12 flex flex-wrap gap-12 md:col-span-8 md:justify-end">
          {links.map((l) => (
            <a
              key={l.label}
              className="font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-orange-700"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

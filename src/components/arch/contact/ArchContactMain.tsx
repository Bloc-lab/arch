import { useContentPick } from '../../../hooks/useContentPick';
import { ArchContactForm } from './ArchContactForm';

export function ArchContactMain() {
  const t = useContentPick();

  const trustRows = [
    { icon: 'verified' as const, title: t('contactPage.trust1.title'), desc: t('contactPage.trust1.desc') },
    { icon: 'security' as const, title: t('contactPage.trust2.title'), desc: t('contactPage.trust2.desc') },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-[1440px] px-8 py-24 text-body-md text-on-surface lg:px-16">
      <div className="grid grid-cols-1 items-start gap-24 lg:grid-cols-2">
        <section className="space-y-16">
          <div className="space-y-6">
            <span className="text-label-caps uppercase tracking-widest text-secondary">{t('contactPage.hero.badge')}</span>
            <h1 className="max-w-lg text-headline-xl text-primary">{t('contactPage.hero.title')}</h1>
            <p className="max-w-md text-body-lg text-on-surface-variant">{t('contactPage.hero.lead')}</p>
          </div>

          <div className="space-y-12">
            {trustRows.map((row) => (
              <div key={row.title} className="group flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                  <span className="material-symbols-outlined">{row.icon}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-headline-md text-primary">{row.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{row.desc}</p>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-8 border-t border-outline-variant pt-12">
              <div>
                <p className="mb-4 text-label-caps uppercase text-on-surface-variant">
                  {t('contactPage.office.label')}
                </p>
                <address className="not-italic text-body-md text-primary">
                  {t('contactPage.office.line1')}
                  <br />
                  {t('contactPage.office.line2')}
                  <br />
                  {t('contactPage.office.line3')}
                </address>
              </div>
              <div>
                <p className="mb-4 text-label-caps uppercase text-on-surface-variant">
                  {t('contactPage.direct.label')}
                </p>
                <p className="text-body-md text-primary">
                  <a className="hover:underline" href={`mailto:${t('contactPage.direct.email')}`}>
                    {t('contactPage.direct.email')}
                  </a>
                  <br />
                  <a className="hover:underline" href={`tel:${t('contactPage.direct.phone').replace(/\D/g, '')}`}>
                    {t('contactPage.direct.phone')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <ArchContactForm />
      </div>
    </main>
  );
}

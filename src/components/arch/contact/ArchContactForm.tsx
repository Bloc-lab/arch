import { FormEvent } from 'react';
import { useContentPick } from '../../../hooks/useContentPick';

export function ArchContactForm() {
  const t = useContentPick();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const budgetOptions = [
    t('contactPage.form.budget1'),
    t('contactPage.form.budget2'),
    t('contactPage.form.budget3'),
  ];

  return (
    <section className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-12 shadow-2xl shadow-primary/5">
      <form className="space-y-8" method="post" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <label className="ml-1 text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
              {t('contactPage.form.nameLabel')}
            </label>
            <input
              className="w-full rounded-lg border border-outline-variant bg-background p-4 text-body-md outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary"
              placeholder={t('contactPage.form.namePlaceholder')}
              type="text"
              name="fullName"
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <label className="ml-1 text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
              {t('contactPage.form.emailLabel')}
            </label>
            <input
              className="w-full rounded-lg border border-outline-variant bg-background p-4 text-body-md outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary"
              placeholder={t('contactPage.form.emailPlaceholder')}
              type="email"
              name="email"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
            {t('contactPage.form.projectTypeLabel')}
          </label>
          <select
            className="w-full appearance-none rounded-lg border border-outline-variant bg-background p-4 text-body-md outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary"
            name="projectType"
            defaultValue=""
          >
            <option disabled value="">
              {t('contactPage.form.projectTypePlaceholderOption')}
            </option>
            <option value="kitchen">{t('contactPage.form.optionKitchen')}</option>
            <option value="bathroom">{t('contactPage.form.optionBathroom')}</option>
            <option value="full-home">{t('contactPage.form.optionFullHome')}</option>
            <option value="addition">{t('contactPage.form.optionAddition')}</option>
            <option value="outdoor">{t('contactPage.form.optionOutdoor')}</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
            {t('contactPage.form.budgetLabel')}
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {budgetOptions.map((label, i) => (
              <label key={label} className="cursor-pointer">
                <input className="peer hidden" name="budget" type="radio" value={`tier-${i}`} />
                <div className="rounded-lg border border-outline-variant p-4 text-center text-body-md transition-all peer-checked:border-secondary peer-checked:bg-secondary/5">
                  {label}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
            {t('contactPage.form.detailsLabel')}
          </label>
          <textarea
            className="w-full rounded-lg border border-outline-variant bg-background p-4 text-body-md outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary"
            placeholder={t('contactPage.form.detailsPlaceholder')}
            rows={4}
            name="details"
          />
        </div>

        <button
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary py-6 text-headline-md text-on-primary transition-all hover:bg-primary/90"
          type="submit"
        >
          {t('contactPage.form.submit')}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>

        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          {t('contactPage.form.responseNote')}
        </p>
      </form>
    </section>
  );
}

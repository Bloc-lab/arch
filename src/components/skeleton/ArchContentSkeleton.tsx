import { SkeletonBar } from './SkeletonBar';

export type ArchSkeletonVariant = 'home' | 'about' | 'pricing' | 'contact';

export function ArchContentSkeleton({ variant }: { variant: ArchSkeletonVariant }) {
  if (variant === 'about') {
    return (
      <main
        className="bg-surface px-8 pb-24 pt-8"
        aria-busy="true"
        role="status"
      >
        <span className="sr-only">Načítání obsahu stránky…</span>
        <article className="mx-auto max-w-3xl space-y-4">
          <SkeletonBar className="h-4 max-w-[8rem]" />
          <SkeletonBar className="h-12 max-w-md" />
          <div className="space-y-3 pt-6">
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-[92%]" />
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-[78%]" />
          </div>
        </article>
      </main>
    );
  }

  if (variant === 'pricing') {
    return (
      <div aria-busy="true" role="status" className="bg-background">
        <span className="sr-only">Načítání ceníku…</span>
        <section className="mx-auto max-w-7xl px-8 py-12">
          <SkeletonBar className="mx-auto h-4 max-w-[10rem]" />
          <SkeletonBar className="mx-auto mt-6 h-14 w-full max-w-2xl" />
          <SkeletonBar className="mx-auto mt-4 h-5 w-full max-w-xl" />
        </section>
        <section className="border-t border-slate-200/80 px-8 py-16 dark:border-slate-800">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-slate-200/60 p-8 dark:border-slate-700">
                <SkeletonBar className="h-8 w-2/3" />
                <SkeletonBar className="mt-6 h-10 w-24" />
                <div className="mt-6 space-y-2">
                  <SkeletonBar className="h-3 w-full" />
                  <SkeletonBar className="h-3 w-full" />
                  <SkeletonBar className="h-3 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-surface px-8 py-16">
          <div className="mx-auto max-w-4xl space-y-4">
            <SkeletonBar className="h-8 w-48" />
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-[90%]" />
          </div>
        </section>
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div aria-busy="true" role="status" className="bg-background px-8 pb-16">
        <span className="sr-only">Načítání kontaktu…</span>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <SkeletonBar className="h-10 max-w-xs" />
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-[85%]" />
            <div className="mt-8 space-y-3">
              <SkeletonBar className="h-12 w-full rounded-lg" />
              <SkeletonBar className="h-12 w-full rounded-lg" />
              <SkeletonBar className="h-32 w-full rounded-lg" />
              <SkeletonBar className="h-12 w-40 rounded-lg" />
            </div>
          </div>
          <SkeletonBar className="min-h-[20rem] w-full rounded-2xl lg:min-h-[28rem]" />
        </div>
      </div>
    );
  }

  return (
    <div aria-busy="true" role="status">
      <span className="sr-only">Načítání obsahu webu…</span>

      <section className="relative min-h-[32rem] bg-slate-200/50 px-8 py-24 dark:bg-slate-800/40 lg:min-h-[36rem]">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-2xl space-y-5">
            <SkeletonBar className="h-5 max-w-[12rem] rounded-full" />
            <SkeletonBar className="h-14 w-full max-w-xl" />
            <SkeletonBar className="h-14 w-[88%] max-w-lg" />
            <div className="space-y-2.5 pt-2">
              <SkeletonBar className="h-4 w-full" />
              <SkeletonBar className="h-4 w-[90%]" />
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <SkeletonBar className="h-12 w-44 rounded-lg" />
              <SkeletonBar className="h-12 w-36 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-surface px-8 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SkeletonBar className="mx-auto h-9 w-[min(100%,18rem)]" />
            <SkeletonBar className="mx-auto mt-4 h-4 w-[min(100%,24rem)]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonBar key={i} className="aspect-[4/3] w-full rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/80 px-8 py-16 dark:bg-slate-900/50">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <SkeletonBar className="h-9 max-w-xs" />
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-[92%]" />
          </div>
          <SkeletonBar className="aspect-[4/3] min-h-[14rem] w-full rounded-2xl" />
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-surface px-8 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/60 p-10 text-center dark:border-slate-700">
          <SkeletonBar className="mx-auto h-10 w-[min(100%,20rem)]" />
          <SkeletonBar className="mx-auto mt-4 h-4 w-[min(100%,24rem)]" />
          <SkeletonBar className="mx-auto mt-10 h-12 w-full max-w-xs rounded-lg" />
        </div>
      </section>
    </div>
  );
}

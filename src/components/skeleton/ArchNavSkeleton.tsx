import { SkeletonBar } from './SkeletonBar';

export function ArchNavSkeleton({ offsetTop = false }: { offsetTop?: boolean }) {
  return (
    <header
      className={`fixed left-0 right-0 z-50 w-full border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 ${
        offsetTop ? 'top-10' : 'top-0'
      }`}
      aria-busy="true"
      aria-label="Načítání navigace"
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-8">
        <div className="flex min-w-0 items-center gap-3">
          <SkeletonBar className="h-10 w-10 shrink-0 rounded-lg" />
          <SkeletonBar className="h-6 w-32 sm:w-40" />
        </div>
        <div className="hidden items-center gap-8 md:flex" aria-hidden>
          <SkeletonBar className="h-4 w-14" />
          <SkeletonBar className="h-4 w-12" />
          <SkeletonBar className="h-4 w-16" />
          <SkeletonBar className="h-4 w-14" />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <SkeletonBar className="h-8 w-16 rounded-full" />
          <SkeletonBar className="h-10 w-28 rounded-lg sm:w-32" />
        </div>
      </nav>
    </header>
  );
}

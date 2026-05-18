import { SkeletonBar } from './SkeletonBar';

export function ArchFooterSkeleton() {
  return (
    <footer
      className="border-t border-slate-200/80 bg-surface px-8 py-12 dark:border-slate-800"
      aria-hidden
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SkeletonBar className="h-6 w-36" />
        <div className="flex gap-4">
          <SkeletonBar className="h-4 w-20" />
          <SkeletonBar className="h-4 w-24" />
          <SkeletonBar className="h-4 w-16" />
        </div>
      </div>
    </footer>
  );
}


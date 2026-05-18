export function SkeletonBar({ className }: { className?: string }) {
  return <div className={`skeleton-shimmer rounded-md ${className ?? ''}`} aria-hidden />;
}

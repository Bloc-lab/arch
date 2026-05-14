import { useCallback, useRef, useState } from 'react';

type ArchBeforeAfterCompareProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function ArchBeforeAfterCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
}: ArchBeforeAfterCompareProps) {
  const [splitPct, setSplitPct] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplitPct(clamp(pct, 0, 100));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(splitPct)}
      aria-label={beforeLabel + ' / ' + afterLabel}
      className="relative h-[500px] cursor-ew-resize touch-none overflow-hidden rounded-xl border border-outline-variant shadow-lg select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setSplitPct((s) => clamp(s - 3, 0, 100));
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          setSplitPct((s) => clamp(s + 3, 0, 100));
        } else if (e.key === 'Home') {
          e.preventDefault();
          setSplitPct(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          setSplitPct(100);
        }
      }}
    >
      <img
        alt={afterAlt}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
        src={afterSrc}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ clipPath: `inset(0 ${100 - splitPct}% 0 0)` }}
      >
        <img
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover grayscale"
          draggable={false}
          src={beforeSrc}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-[2] w-1 -translate-x-1/2 bg-secondary"
        style={{ left: `${splitPct}%` }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-[3] flex items-center -translate-x-1/2"
        style={{ left: `${splitPct}%` }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-xl">
          <span className="material-symbols-outlined text-[22px]">swap_horiz</span>
        </div>
      </div>

      <div className="pointer-events-none absolute left-4 top-4 z-[4] rounded-md bg-primary px-3 py-1 text-label-caps text-on-primary">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute right-4 top-4 z-[4] rounded-md bg-secondary px-3 py-1 text-label-caps text-on-secondary">
        {afterLabel}
      </div>
    </div>
  );
}

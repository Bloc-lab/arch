import { useContentContext } from '../context/ContentContext';

export function ApiStatusBanner() {
  const { state, refetch } = useContentContext();

  if (state.status !== 'error' || !state.error) return null;

  const { status, message } = state.error;
  const title =
    status === 401 || status === 403
      ? 'Chyba oprávnění'
      : status >= 500
        ? 'Chyba serveru'
        : status === 404
          ? 'Nenalezeno'
          : status === 0
            ? 'Konfigurace / síť'
            : 'Chyba načtení obsahu';

  return (
    <div
      className="relative z-40 mt-20 border-b border-red-300 bg-red-100 text-red-950 dark:border-red-800 dark:bg-red-950 dark:text-red-50"
      role="alert"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="text-base font-semibold leading-snug text-red-950 dark:text-red-50">
            <span>{title}</span>
            {status > 0 ? (
              <span className="font-semibold opacity-90"> (HTTP {status})</span>
            ) : null}
          </div>
          <p className="break-words text-sm leading-relaxed text-red-900 dark:text-red-100">{message}</p>
        </div>
        <button
          type="button"
          className="shrink-0 self-start rounded-full border border-red-400 bg-white px-4 py-2 text-sm font-semibold text-red-950 shadow-sm hover:bg-red-50 dark:border-red-600 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-800"
          onClick={() => void refetch()}
        >
          Zkusit znovu
        </button>
      </div>
    </div>
  );
}

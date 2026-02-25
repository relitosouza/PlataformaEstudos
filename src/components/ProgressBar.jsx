export default function ProgressBar({ percentual }) {
  const pct = Math.min(100, Math.max(0, percentual))
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Progresso</span>
        <span className="font-semibold text-brand-800">{pct}%</span>
      </div>
      <div
        className="w-full bg-gray-200 rounded-full h-3"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso do módulo"
      >
        <div
          className="bg-brand-800 h-3 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function ModuloCard({ modulo, concluido, aberto, onToggle }) {
  const statusIcon = concluido ? '✅' : aberto ? '🔄' : '📖'
  const statusText = concluido ? 'Concluído' : aberto ? 'Em andamento' : 'Não iniciado'

  return (
    <div className={`border rounded-xl mb-3 overflow-hidden transition-shadow hover:shadow-md ${
      aberto ? 'border-brand-800 shadow-md' : 'border-gray-200'
    }`}>
      <button
        onClick={onToggle}
        aria-expanded={aberto}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl" aria-hidden="true">{statusIcon}</span>
          <div>
            <p className="font-semibold text-gray-800">{modulo.titulo}</p>
            <p className="text-xs text-gray-500 capitalize">{modulo.nivel} · {statusText}</p>
          </div>
        </div>
        <span className={`text-gray-400 transition-transform duration-200 ${aberto ? 'rotate-180' : ''}`} aria-hidden="true">
          ▼
        </span>
      </button>
    </div>
  )
}

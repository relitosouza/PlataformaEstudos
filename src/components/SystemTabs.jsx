export default function SystemTabs({ sistemas, ativo, onSelect }) {
  return (
    <div className="flex gap-2 border-b border-gray-200 mb-6">
      {sistemas.map(s => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`flex items-center gap-2 px-5 py-3 font-medium text-sm border-b-2 transition-colors ${
            ativo === s.id
              ? 'border-brand-800 text-brand-800'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <span aria-hidden="true">{s.icone}</span>
          {s.nome}
        </button>
      ))}
    </div>
  )
}

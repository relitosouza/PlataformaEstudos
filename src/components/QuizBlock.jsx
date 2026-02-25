import { useState } from 'react'

export default function QuizBlock({ quiz, onConcluir }) {
  if (!quiz || quiz.length === 0) return null

  const [respostas, setRespostas] = useState({})
  const [enviado, setEnviado] = useState(false)

  const acertos = quiz.filter((q, i) => respostas[i] === q.correta).length
  const todasRespondidas = Object.keys(respostas).length === quiz.length
  const aprovado = acertos === quiz.length

  function handleEnviar() {
    setEnviado(true)
    if (aprovado) onConcluir()
  }

  function handleReiniciar() {
    setRespostas({})
    setEnviado(false)
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-700 mb-4">✅ Quiz de Fixação</h3>
      <div className="space-y-5">
        {quiz.map((q, qi) => (
          <div key={qi} className="bg-gray-50 rounded-lg p-4">
            <p className="font-medium text-gray-800 mb-3">{qi + 1}. {q.pergunta}</p>
            <div className="space-y-2" role="group" aria-label={`Opções da questão ${qi + 1}`}>
              {q.opcoes.map((op, oi) => {
                const selecionada = respostas[qi] === oi
                const correta = q.correta === oi
                let estilo = 'border-gray-200 bg-white hover:border-brand-500'
                if (enviado) {
                  if (correta) estilo = 'border-green-500 bg-green-50'
                  else if (selecionada) estilo = 'border-red-400 bg-red-50'
                  else estilo = 'border-gray-200 bg-white opacity-60'
                } else if (selecionada) {
                  estilo = 'border-brand-800 bg-blue-50'
                }
                return (
                  <button
                    key={oi}
                    disabled={enviado}
                    onClick={() => setRespostas(prev => ({ ...prev, [qi]: oi }))}
                    className={`w-full text-left px-4 py-2 border-2 rounded-lg text-sm transition-colors ${estilo}`}
                  >
                    {op}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {!enviado ? (
        <button
          disabled={!todasRespondidas}
          onClick={handleEnviar}
          className="mt-4 w-full py-2 px-4 bg-brand-800 text-white rounded-lg font-medium
                     disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-700 transition-colors"
        >
          Enviar Respostas
        </button>
      ) : (
        <div className={`mt-4 p-4 rounded-lg text-center ${aprovado ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
          <p className="font-bold text-lg">{aprovado ? '🎉 Parabéns!' : '😅 Quase lá!'}</p>
          <p className="text-sm mt-1">
            {acertos} de {quiz.length} {acertos === 1 ? 'acerto' : 'acertos'}
            {aprovado ? ' — Módulo concluído!' : ' — Tente novamente'}
          </p>
          {!aprovado && (
            <button
              onClick={handleReiniciar}
              className="mt-3 px-4 py-1 bg-brand-800 text-white rounded text-sm hover:bg-brand-700"
            >
              Tentar novamente
            </button>
          )}
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import cursos from '../data/cursos.json'
import useProgresso from '../hooks/useProgresso'
import SystemTabs from '../components/SystemTabs'
import ProgressBar from '../components/ProgressBar'
import ModuloCard from '../components/ModuloCard'
import VideoPlayer from '../components/VideoPlayer'
import QuizBlock from '../components/QuizBlock'

export default function Trilha() {
  const [searchParams] = useSearchParams()
  const sistemaInicial = searchParams.get('sistema') || cursos.sistemas[0].id
  const [sistemaAtivo, setSistemaAtivo] = useState(sistemaInicial)
  const [moduloAberto, setModuloAberto] = useState(null)
  const { isConcluido, marcarConcluido, percentualSistema } = useProgresso()

  const sistema = cursos.sistemas.find(s => s.id === sistemaAtivo)
  const percentual = percentualSistema(sistemaAtivo, sistema.modulos.length)

  function handleSelectSistema(id) {
    setSistemaAtivo(id)
    setModuloAberto(null)
  }

  function toggleModulo(id) {
    setModuloAberto(prev => prev === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Trilha de Aprendizado</h1>
      <p className="text-gray-500 mb-8">Estude no seu ritmo. Seu progresso é salvo automaticamente.</p>

      <SystemTabs
        sistemas={cursos.sistemas}
        ativo={sistemaAtivo}
        onSelect={handleSelectSistema}
      />

      <ProgressBar percentual={percentual} />

      <div>
        {sistema.modulos.map(modulo => (
          <div key={modulo.id}>
            <ModuloCard
              modulo={modulo}
              concluido={isConcluido(modulo.id)}
              aberto={moduloAberto === modulo.id}
              onToggle={() => toggleModulo(modulo.id)}
            />

            {moduloAberto === modulo.id && (
              <div className="border border-brand-100 rounded-xl p-6 mb-4 bg-white -mt-3 shadow-sm">
                <div className="prose prose-sm max-w-none text-gray-700 mb-6">
                  <ReactMarkdown>{modulo.conteudo}</ReactMarkdown>
                </div>

                <VideoPlayer url={modulo.videoUrl} />

                {modulo.quiz.length > 0 ? (
                  <QuizBlock
                    quiz={modulo.quiz}
                    onConcluir={() => marcarConcluido(modulo.id)}
                  />
                ) : (
                  !isConcluido(modulo.id) && (
                    <button
                      onClick={() => marcarConcluido(modulo.id)}
                      className="mt-4 px-6 py-2 bg-brand-800 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
                    >
                      ✅ Marcar como concluído
                    </button>
                  )
                )}

                {isConcluido(modulo.id) && modulo.quiz.length === 0 && (
                  <p className="text-green-600 font-medium mt-4">✅ Módulo concluído!</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

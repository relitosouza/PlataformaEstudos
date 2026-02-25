import { Link } from 'react-router-dom'
import cursos from '../data/cursos.json'

const features = [
  { icone: '🎥', titulo: 'Vídeo-aulas', desc: 'Conteúdo em vídeo para cada módulo' },
  { icone: '📝', titulo: 'Conteúdo Detalhado', desc: 'Textos explicativos e passo a passo' },
  { icone: '✅', titulo: 'Quizzes', desc: 'Teste seus conhecimentos e fixe o aprendizado' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-6xl block mb-6" aria-hidden="true">🎓</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Plataforma de Estudos<br />
            <span className="text-brand-100">SMARAPD</span>
          </h1>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Aprenda os sistemas no seu ritmo. Conteúdo completo sobre o Sistema de Materiais e o Sistema Contábil.
          </p>
          <Link
            to="/trilha"
            className="inline-block bg-white text-brand-800 font-bold px-8 py-3 rounded-full
                       hover:bg-brand-50 transition-colors shadow-lg text-lg"
          >
            Começar Agora →
          </Link>
        </div>
      </section>

      {/* Sistema cards */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Escolha por onde começar
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cursos.sistemas.map(s => (
            <Link
              key={s.id}
              to={`/trilha?sistema=${s.id}`}
              className="border-2 border-gray-100 rounded-2xl p-8 hover:border-brand-800 hover:shadow-lg
                         transition-all group bg-white"
            >
              <span className="text-5xl block mb-4" aria-hidden="true">{s.icone}</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-800 transition-colors">
                {s.nome}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{s.descricao}</p>
              <p className="text-brand-800 font-semibold text-sm">
                {s.modulos.length} módulos · Acessar →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            O que você vai encontrar
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.titulo} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <span className="text-4xl block mb-3" aria-hidden="true">{f.icone}</span>
                <h3 className="font-bold text-gray-800 mb-1">{f.titulo}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const sistemas = [
  {
    icone: '📦',
    nome: 'Sistema de Materiais',
    desc: 'Responsável pelo controle e gestão de materiais, almoxarifado, requisições internas e controle de estoque.'
  },
  {
    icone: '💰',
    nome: 'Sistema Contábil',
    desc: 'Responsável pelos lançamentos contábeis, controle orçamentário, geração de balancetes e relatórios financeiros.'
  }
]

export default function Sobre() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const nome = form.nome.value.trim()
    const email = form.email.value.trim()
    const mensagem = form.mensagem.value.trim()
    if (!nome || !email || !mensagem) return
    const subject = encodeURIComponent(`Contato de ${nome}`)
    const body = encodeURIComponent(`${mensagem}\n\nEmail de retorno: ${email}`)
    window.location.href = `mailto:smarapd@exemplo.gov.br?subject=${subject}&body=${body}`
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      {/* Sobre */}
      <section className="mb-14">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre a Plataforma</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          A Plataforma de Estudos SMARAPD foi criada para capacitar servidores e colaboradores
          no uso dos sistemas institucionais. Aqui você encontra conteúdo estruturado, vídeos
          explicativos e quizzes de fixação para aprender no seu próprio ritmo.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {sistemas.map(s => (
            <div key={s.nome} className="border border-gray-200 rounded-xl p-5 bg-white">
              <span className="text-3xl block mb-2" aria-hidden="true">{s.icone}</span>
              <h2 className="font-bold text-gray-800 mb-1">{s.nome}</h2>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Missão */}
      <section className="mb-14 bg-blue-50 border border-blue-100 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-brand-800 mb-3">Nossa Missão</h2>
        <p className="text-gray-700 leading-relaxed">
          Facilitar o acesso ao conhecimento sobre os sistemas SMARAPD, garantindo que todos
          os usuários — independente do nível de experiência — possam utilizar as ferramentas
          com eficiência e segurança.
        </p>
      </section>

      {/* Contato */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dúvidas ou Sugestões?</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Preencha o formulário abaixo e entraremos em contato.
        </p>
        <form onSubmit={handleSubmit} noValidate className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input
              id="nome"
              name="nome"
              required
              type="text"
              placeholder="Seu nome completo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="seu.email@exemplo.gov.br"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={5}
              placeholder="Descreva sua dúvida ou sugestão..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-800 text-white font-semibold py-2 px-4 rounded-lg
                       hover:bg-brand-700 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>

    </div>
  )
}

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-12 mt-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 text-primary mb-6">
            <div className="size-6 flex items-center justify-center bg-primary text-white rounded">
              <span className="material-symbols-outlined text-lg">school</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold">TutorialSystem</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Fornecendo recursos educacionais de alta qualidade para sistemas de software e domínio técnico desde 2018.
          </p>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm">Plataforma</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><Link className="hover:text-primary transition-colors" to="/">Cursos</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/trilha">Biblioteca de Vídeos</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/manuais">Manuais</Link></li>
            <li><Link className="hover:text-primary transition-colors text-primary font-bold" to="/cms/cadastrar-video">Acesso CMS: Aulas</Link></li>
            <li><Link className="hover:text-primary transition-colors text-primary font-bold" to="/cms/gerenciar-apostilas">Acesso CMS: Apostilas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm">Suporte</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Central de Ajuda</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Fórum da Comunidade</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contato</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Docs da API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm">Legal</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Política de Privacidade</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Termos de Serviço</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Política de Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto pt-12 mt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2024 TutorialSystem. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-primary" href="#">Twitter</a>
          <a className="hover:text-primary" href="#">LinkedIn</a>
          <a className="hover:text-primary" href="#">YouTube</a>
          <a className="hover:text-primary" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

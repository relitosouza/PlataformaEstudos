import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-50 lg:px-20">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-primary">
          <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">TutorialSystem</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/cursos" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Cursos</Link>
          <Link to="/biblioteca-videos" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Biblioteca de Vídeos</Link>
          <Link to="/manuais" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Manuais</Link>
          <Link to="/certificados" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Certificados</Link>
          <Link to="/comunidade" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Comunidade</Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <label className="flex flex-col min-w-40 h-10 max-w-md w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
            <div className="text-slate-500 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-slate-500 px-4 pl-2 text-sm font-normal leading-normal" placeholder="Pesquisar tutoriais..." />
          </div>
        </label>
      </div>
    </header>
  )
}

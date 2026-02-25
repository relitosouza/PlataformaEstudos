import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-brand-800 text-white'
        : 'text-brand-100 hover:bg-brand-700 hover:text-white'
    }`

  return (
    <header className="bg-brand-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <p className="text-white font-bold text-base leading-tight">SMARAPD</p>
            <p className="text-brand-100 text-xs">Plataforma de Estudos</p>
          </div>
        </div>
        <nav className="flex gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/trilha" className={linkClass}>Trilha</NavLink>
          <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
        </nav>
      </div>
    </header>
  )
}

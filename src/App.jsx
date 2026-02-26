import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Trilha from './pages/Trilha'
import Sobre from './pages/Sobre'
import Aula from './pages/Aula'
import Manuais from './pages/Manuais'
import CadastrarVideo from './pages/CadastrarVideo'

export default function App() {
  const location = useLocation()
  const isCMS = location.pathname.startsWith('/cms')

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {!isCMS && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trilha" element={<Trilha />} />
          <Route path="/aula" element={<Aula />} />
          <Route path="/manuais" element={<Manuais />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cms/cadastrar-video" element={<CadastrarVideo />} />
        </Routes>
        {!isCMS && <Footer />}
      </div>
    </div>
  )
}

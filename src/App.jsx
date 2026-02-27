import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BibliotecaVideos from './pages/BibliotecaVideos'
import Sobre from './pages/Sobre'
import Aula from './pages/Aula'
import Manuais from './pages/Manuais'
import CadastrarVideo from './pages/CadastrarVideo'
import GerenciarApostilas from './pages/GerenciarApostilas'
import Cursos from './pages/Cursos'
import LoginCMS from './pages/LoginCMS'
import Comunidade from './pages/Comunidade'
import Certificados from './pages/Certificados'
import DashboardCMS from './pages/DashboardCMS'
import CursoDetalhes from './pages/CursoDetalhes'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const location = useLocation()
  const isCMS = location.pathname.startsWith('/cms')

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {!isCMS && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biblioteca-videos" element={<BibliotecaVideos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso" element={<CursoDetalhes />} />
          <Route path="/aula" element={<Aula />} />
          <Route path="/manuais" element={<Manuais />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cms/login" element={<LoginCMS />} />
          <Route path="/cms/dashboard" element={<ProtectedRoute><DashboardCMS /></ProtectedRoute>} />
          <Route path="/cms/cadastrar-video" element={<ProtectedRoute><CadastrarVideo /></ProtectedRoute>} />
          <Route path="/cms/gerenciar-apostilas" element={<ProtectedRoute><GerenciarApostilas /></ProtectedRoute>} />
        </Routes>
        {!isCMS && <Footer />}
      </div>
    </div>
  )
}

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Trilha from './pages/Trilha'
import Sobre from './pages/Sobre'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trilha" element={<Trilha />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

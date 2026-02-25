export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} SMARAPD — Plataforma de Estudos
      </p>
      <p className="text-xs mt-1">Sistema de Materiais · Sistema Contábil</p>
    </footer>
  )
}

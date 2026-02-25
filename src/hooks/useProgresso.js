import { useState } from 'react'

const STORAGE_KEY = 'smarapd_progresso'

function carregarProgresso() {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY)
    return salvo ? JSON.parse(salvo) : []
  } catch {
    return []
  }
}

export default function useProgresso() {
  const [concluidos, setConcluidos] = useState(carregarProgresso)

  function marcarConcluido(moduloId) {
    setConcluidos(prev => {
      if (prev.includes(moduloId)) return prev
      const novo = [...prev, moduloId]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(novo))
      return novo
    })
  }

  function isConcluido(moduloId) {
    return concluidos.includes(moduloId)
  }

  function percentualSistema(sistemaId, totalModulos) {
    const prefixo = sistemaId === 'materiais' ? 'mat-' : 'cont-'
    const concluídosSistema = concluidos.filter(id => id.startsWith(prefixo))
    return Math.floor((concluídosSistema.length / totalModulos) * 100)
  }

  return { marcarConcluido, isConcluido, percentualSistema, concluidos }
}
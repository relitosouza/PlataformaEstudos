import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import useProgresso from './useProgresso'

beforeEach(() => {
  localStorage.clear()
})

describe('useProgresso', () => {
  it('começa sem módulos concluídos', () => {
    const { result } = renderHook(() => useProgresso())
    expect(result.current.isConcluido('mat-01')).toBe(false)
  })

  it('marca módulo como concluído', () => {
    const { result } = renderHook(() => useProgresso())
    act(() => result.current.marcarConcluido('mat-01'))
    expect(result.current.isConcluido('mat-01')).toBe(true)
  })

  it('calcula percentual por sistema', () => {
    const { result } = renderHook(() => useProgresso())
    act(() => result.current.marcarConcluido('mat-01'))
    expect(result.current.percentualSistema('materiais', 3)).toBe(33)
  })

  it('persiste no localStorage entre remounts', () => {
    const { result: r1, unmount } = renderHook(() => useProgresso())
    act(() => r1.current.marcarConcluido('mat-01'))
    unmount()
    const { result: r2 } = renderHook(() => useProgresso())
    expect(r2.current.isConcluido('mat-01')).toBe(true)
  })

  it('retorna [] quando localStorage está corrompido', () => {
    localStorage.setItem('smarapd_progresso', '{INVALID_JSON')
    const { result } = renderHook(() => useProgresso())
    expect(result.current.concluidos).toEqual([])
  })

  it('não duplica módulo já concluído', () => {
    const { result } = renderHook(() => useProgresso())
    act(() => {
      result.current.marcarConcluido('mat-01')
      result.current.marcarConcluido('mat-01')
    })
    expect(result.current.concluidos).toHaveLength(1)
  })
})

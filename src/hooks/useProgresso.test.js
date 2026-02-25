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

  it('persiste no localStorage', () => {
    const { result, rerender } = renderHook(() => useProgresso())
    act(() => result.current.marcarConcluido('mat-01'))
    rerender()
    expect(result.current.isConcluido('mat-01')).toBe(true)
  })
})
import { describe, it, expect } from 'vitest'
describe('happy path', () => { 
  it('two number sum', () => {
    function sum(a: number, b: number): number {
      return a + b
    }

    let total: number = sum(2, 3)

    expect(total).toBe(5)
  })
})
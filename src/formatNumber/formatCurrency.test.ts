import { formatCurrency } from './formatCurrency'
import { init } from '../init/init'

describe('formatCurrency() danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should format 0 to '0,00 kr.' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00 kr.'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatCurrency() swedish', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })

  test("should format 0 to '0,00 sekr.' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00 sekr.'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
})

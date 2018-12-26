import { formatCurrency } from './formatCurrency'
import { init } from '../../init/init'
import { formatNumber } from './formatNumber';

describe('formatNumber() danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should format 0 to '0' as default", () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatNumber() swedish', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })

  test("should format 0 to '0' as default", () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  
  test("should truncate '12.345' to '12,34'", () => {
    // arrange
    const number = 12.345
    const expected = '12,34'
    // act
    const result = formatNumber(number, {showDecimals: true})
    // assert
    expect(result).toEqual(expected)
  })

  test("should add trailing 0: '12.4' to '12,40'", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
    // act
    const result = formatNumber(number, {showDecimals: true})
    // assert
    expect(result).toEqual(expected)
  })
})

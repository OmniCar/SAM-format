import { init } from '../init/init'
import { formatNumber } from './formatNumber'
import { ENGINE_METHOD_DIGESTS } from 'constants'

describe('formatNumber()', () => {
  test('should throw error if not initialized', () => {
    // assert
    expect(() => {
      formatNumber(0)
    }).toThrow('Formatter not initialized')
  })
})

describe('formatNumber()', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should format 0 as '0' as default", () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test("should format 1000 as '1.000' as default", () => {
    // arrange
    const number = 1000
    const expected = '1.000'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test("should format 0 as '0,00' as default if 'showDecimals'", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test("should format 1000 as '1.000,00' as default if 'showDecimals'", () => {
    // arrange
    const number = 1000
    const expected = '1.000,00'
    // act
    const result = formatNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should append symbol to number', () => {
    // arrange
    const number = 100
    const expected = '100 kr.'
    // act
    const result = formatNumber(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should prepend symbol to number', () => {
    // arrange
    const number = 100
    const expected = 'kr. 100'
    // act
    const result = formatNumber(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })
})

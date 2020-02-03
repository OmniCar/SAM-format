import { formatCurrency } from './formatCurrency'
import { init } from '../../init/init'

describe('formatCurrency() danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should NOT format 0 as '1,23' as default", () => {
    // arrange
    const number = 1.23
    const notExpected = '1.23'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).not.toEqual(notExpected) // Should NOT be equal
  })
  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should append currency kr. if 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 0
    const expected = '0,00 kr.'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should prepend currency kr. if 'symbolDisplayType = PREPEND'", () => {
    // arrange
    const number = 0
    const expected = 'kr.0,00'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
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

  test("should NOT format 0 as '1,23' as default", () => {
    // arrange
    const number = 1.23
    const notExpected = '1.23'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).not.toEqual(notExpected) // Should NOT be equal
  })
  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should append currency kr if 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 0
    const expected = '0,00 kr'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should prepend currency kr if 'symbolDisplayType = PREPEND'", () => {
    // arrange
    const number = 0
    const expected = 'kr0,00'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should limit to 2 decimals', () => {
    // arrange
    const number = 12.345
    const expected = '12,34'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })

  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatCurrency() danish', () => {
  beforeAll(() => {
    init({ isoName: 'fi-FI' })
  })

  test("should NOT format 0 as '1,23' as default", () => {
    // arrange
    const number = 1.23
    const notExpected = '1.23'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).not.toEqual(notExpected) // Should NOT be equal
  })
  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should append currency € if 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 0
    const expected = '0,00 €'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should prepend currency € if 'symbolDisplayType = PREPEND'", () => {
    // arrange
    const number = 0
    const expected = '€0,00'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatCurrency() brittish', () => {
  beforeAll(() => {
    init({ isoName: 'en-GB' })
  })

  test("should NOT format 0 as '1,23' as default", () => {
    // arrange
    const number = 1.23
    const notExpected = '1,23'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).not.toEqual(notExpected) // Should NOT be equal
  })
  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0.00'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should append currency £ if 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 0
    const expected = '0.00 £'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should prepend currency £ if 'symbolDisplayType = PREPEND'", () => {
    // arrange
    const number = 0
    const expected = '£0.00'
    // act
    const result = formatCurrency(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12.40'
    // act
    const result = formatCurrency(number)
    // assert
    expect(result).toEqual(expected)
  })
})

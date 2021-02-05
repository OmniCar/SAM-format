import { formatNumber } from './formatNumber'
import { init } from '../../init/init'

describe('formatNumber() Danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 3.49 as '3' with showDecimals to false", () => {
    // arrange
    const number = 3.49
    const expected = '3'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 5.50 as '6' with showDecimals to false", () => {
    // arrange
    const number = 5.50
    const expected = '6'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 9555 as '9.555,00' with showDecimals to true", () => {
    // arrange
    const number = 9555
    const expected = '9.555,00'
    const withDecimals = true
    // act
    const result = formatNumber(number, withDecimals)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatNumber() Swedish', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })

  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 3.49 as '3' with showDecimals to false", () => {
    // arrange
    const number = 3.49
    const expected = '3'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 5.50 as '6' with showDecimals to false", () => {
    // arrange
    const number = 5.50
    const expected = '6'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 9555 as '9 555,00' with showDecimals to true", () => {
    // arrange
    const number = 9555
    const expected = '9 555,00'
    const withDecimals = true
    // act
    const result = formatNumber(number, withDecimals)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatNumber() Finnish', () => {
  beforeAll(() => {
    init({ isoName: 'fi-FI' })
  })

  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 3.49 as '3' with showDecimals to false", () => {
    // arrange
    const number = 3.49
    const expected = '3'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 5.50 as '6' with showDecimals to false", () => {
    // arrange
    const number = 5.50
    const expected = '6'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 9555 as '9 555,00' with showDecimals to true", () => {
    // arrange
    const number = 9555
    const expected = '9 555,00'
    const withDecimals = true
    // act
    const result = formatNumber(number, withDecimals)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatNumber() Norwegian', () => {
  beforeAll(() => {
    init({ isoName: 'nb-NO' })
  })

  test("should format 0 to '0,00' as default", () => {
    // arrange
    const number = 0
    const expected = '0,00'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12,40'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 3.49 as '3' with showDecimals to false", () => {
    // arrange
    const number = 3.49
    const expected = '3'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 5.50 as '6' with showDecimals to false", () => {
    // arrange
    const number = 5.50
    const expected = '6'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 9555 as '9 555,00' with showDecimals to true", () => {
    // arrange
    const number = 9555
    const expected = '9 555,00'
    const withDecimals = true
    // act
    const result = formatNumber(number, withDecimals)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatNumber() Brittish', () => {
  beforeAll(() => {
    init({ isoName: 'en-GB' })
  })

  test("should format 0 to '0.00' as default", () => {
    // arrange
    const number = 0
    const expected = '0.00'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should add trailing 0's", () => {
    // arrange
    const number = 12.4
    const expected = '12.40'
    // act
    const result = formatNumber(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 3.49 as '3' with showDecimals to false", () => {
    // arrange
    const number = 3.49
    const expected = '3'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 5.50 as '6' with showDecimals to false", () => {
    // arrange
    const number = 5.50
    const expected = '6'
    const noDecimals = false
    // act
    const result = formatNumber(number, noDecimals)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 9555 as '9,555.00' with showDecimals to true", () => {
    // arrange
    const number = 9555
    const expected = '9,555.00'
    const withDecimals = true
    // act
    const result = formatNumber(number, withDecimals)
    // assert
    expect(result).toEqual(expected)
  })
})

import { init } from '../init/init'
import { formattedNumber } from './formattedNumber'

describe('formattedNumber()', () => {
  test('should throw error if not initialized', () => {
    // assert
    expect(() => {
      formattedNumber(0)
    }).toThrow('Formatter not initialized')
  })
})

describe('formattedNumber()', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test('should format 0 as "0" as default', () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1.000" as default', () => {
    // arrange
    const number = 1000
    const expected = '1.000'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1.000,00" as default if \'showDecimals\'', () => {
    // arrange
    const number = 1000
    const expected = '1.000,00'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should append symbol to number', () => {
    // arrange
    const number = 100
    const expected = '100 kr.'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should prepend symbol to number', () => {
    // arrange
    const number = 100
    const expected = 'kr.100'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 0.5 as "0,50" as default', () => {
    // arrange
    const number = '0.5'
    const expected = '0,50'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 10.5 as "10" if \'showDecimals = false\'', () => {
    // arrange
    const number = 10.5
    const expected = '10'
    // act
    const result = formattedNumber(number, { showDecimals: false })
    // assert
    expect(result).toEqual(expected)
  })
  test('should format string "10.5" as "10"', () => {
    // arrange
    const number = '10.5'
    const expected = '10'
    // act
    const result = formattedNumber(number, { showDecimals: false })
    // assert
    expect(result).toEqual(expected)
  })
  test('should throw error if string can not be converted to number', () => {
    // assert
    expect(() => {
      formattedNumber('aaa')
    }).toThrow('')
  })
})

describe('formattedNumber()', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })

  test('should format 0 as "0" as default', () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1 000" as default', () => {
    // arrange
    const number = 1000
    const expected = '1 000'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1 000,00" as default if \'showDecimals\'', () => {
    // arrange
    const number = 1000
    const expected = '1 000,00'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should append symbol to number', () => {
    // arrange
    const number = 100
    const expected = '100 kr'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should prepend symbol to number', () => {
    // arrange
    const number = 100
    const expected = 'kr100'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 0.5 as "0,50" as default', () => {
    // arrange
    const number = '0.5'
    const expected = '0,50'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formattedNumber()', () => {
  beforeAll(() => {
    init({ isoName: 'fi-FI' })
  })

  test('should format 0 as "0" as default', () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1 000" as default', () => {
    // arrange
    const number = 1000
    const expected = '1 000'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1 000,00" as default if \'showDecimals\'', () => {
    // arrange
    const number = 1000
    const expected = '1 000,00'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should append symbol to number', () => {
    // arrange
    const number = 100
    const expected = '100 €'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should prepend symbol to number', () => {
    // arrange
    const number = 100
    const expected = '€100'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 0.5 as "0,50" as with decimals', () => {
    // arrange
    const number = '0.5'
    const expected = '0,50'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formattedNumber()', () => {
  beforeAll(() => {
    init({ isoName: 'nb-NO' })
  })

  test('should format 0 as "0" as default', () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1 000" as default', () => {
    // arrange
    const number = 1000
    const expected = '1 000'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1 000,00" as default if \'showDecimals\'', () => {
    // arrange
    const number = 1000
    const expected = '1 000,00'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should append symbol to number', () => {
    // arrange
    const number = 100
    const expected = '100 kr'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should prepend symbol to number', () => {
    // arrange
    const number = 100
    const expected = 'kr100'
    // act
    const result = formattedNumber(number, { symbolDisplayType: 'PREPEND' })
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 0.5 as "0,50" as with decimals', () => {
    // arrange
    const number = '0.5'
    const expected = '0,50'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formattedNumber() brittish', () => {
  beforeAll(() => {
    init({ isoName: 'en-GB' })
  })

  test('should format 0 as "0" as default', () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1,000" as default', () => {
    // arrange
    const number = 1000
    const expected = '1,000'
    // act
    const result = formattedNumber(number)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 1000 as "1,000.00" as default if \'showDecimals\'', () => {
    // arrange
    const number = 1000
    const expected = '1,000.00'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should format 0.5 as "0.50" as default', () => {
    // arrange
    const number = '0.5'
    const expected = '0.50'
    // act
    const result = formattedNumber(number, { showDecimals: true })
    // assert
    expect(result).toEqual(expected)
  })
})

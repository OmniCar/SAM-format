import { formatMileage } from './formatMileage'
import { init } from '../../init/init'

describe('formatMileage() default', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should format 0 to '0' as default", () => {
    // arrange
    const number = 0
    const expected = '0'
    // act
    const result = formatMileage(number)
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 10000 to '10.000' as default", () => {
    // arrange
    const number = 10000
    const expected = '10.000'
    // act
    const result = formatMileage(number)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatMileage() danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should format 10 to '10 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 10
    const expected = '10 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 2500 to '2.500 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 2500
    const expected = '2.500 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 1.5 to '1 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 1.5
    const expected = '1 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatMileage() swedish', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })

  test("should format 10 to '10 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 10
    const expected = '10 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 2500 to '2.500 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 2500
    const expected = '2.500 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 1.5 to '1 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 1.5
    const expected = '1 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatMileage() finnish', () => {
  beforeAll(() => {
    init({ isoName: 'fi-FI' })
  })

  test("should format 10 to '10 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 10
    const expected = '10 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 2500 to '2.500 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 2500
    const expected = '2.500 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 1.5 to '1 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 1.5
    const expected = '1 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatMileage() brittish', () => {
  beforeAll(() => {
    init({ isoName: 'en-GB' })
  })

  test("should format 10 to '10 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 10
    const expected = '10 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 2500 to '2,500 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 2500
    const expected = '2,500 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
  test("should format 1.5 to '1 km' when 'symbolDisplayType = APPEND'", () => {
    // arrange
    const number = 1.5
    const expected = '1 km'
    // act
    const result = formatMileage(number, { symbolDisplayType: 'APPEND' })
    // assert
    expect(result).toEqual(expected)
  })
})

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
})

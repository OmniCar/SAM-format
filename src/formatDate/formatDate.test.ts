import { init } from '../init/init'
import { formatDate } from './formatDate'

describe('initialize formatter', () => {
  test('should throw error if not initialized before usage', () => {
    // arrange
    const date = new Date('2018-06-12')
    // assert
    expect(() => formatDate(date)).toThrow('Formatter not initialized')
  })
})

describe('formatDate() default', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })
  test('should throw error if invalid date format', () => {
    // arrange
    const date = new Date('aaa-aaa-aaa')
    // assert
    expect(() => formatDate(date)).toThrow('Invalid Date')
  })
  test("should prioritize 'rawFormat' if set", () => {
    // arrange
    const date = new Date('2018-06-12')
    const rawFormat = 'dd MMMM yyyy'
    const expected = '12 juni 2018'
    // act
    const result = formatDate(date, { rawFormat })
    // assert
    expect(result).toEqual(expected)
  })
  test("should append time if 'showTime' set", () => {
    // arrange
    const date = new Date('2018-06-12T14:00:00')
    const expected = '12.06.2018 kl. 14:00'
    // act
    const result = formatDate(date, { showTime: true })
    // assert
    expect(result).toEqual(expected)
  })
  test('should accept string input', () => {
    // arrange
    const date = '2018-06-12T12:00:00'
    const expected = '12.06.2018 kl. 12:00'
    // act
    const result = formatDate(date, { showTime: true })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatDate() danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })
  test("formatDate() should format new Date('2018-06-12') to '12.06.2018", () => {
    // arrange
    const date = new Date('2018-06-12')
    const expected = '12.06.2018'
    // act
    const result = formatDate(date)
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should prioritize 'rawFormat' if set", () => {
    // arrange
    const date = new Date('2018-06-12')
    const rawFormat = 'dd MMMM'
    const expected = '12 juni'
    // act
    const result = formatDate(date, { rawFormat })
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should format time with '.' as minute separator", () => {
    // arrange
    const date = new Date('2018-06-12T12:34:00')
    const expected = '12.06.2018 kl. 12:34'
    // act
    const result = formatDate(date, { showTime: true })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatDate() swedish', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })
  test("formatDate() should format new Date('2018-06-12') to '2018-06-12", () => {
    // arrange
    const date = new Date('2018-06-12')
    const expected = '2018-06-12'
    // act
    const result = formatDate(date)
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should prioritize 'rawFormat' if set", () => {
    // arrange
    const date = new Date('2018-06-12')
    const rawFormat = 'dd MMMM'
    const expected = '12 juni'
    // act
    const result = formatDate(date, { rawFormat })
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should format time with ':' as minute separator", () => {
    // arrange
    const date = new Date('2018-06-12T12:34:00')
    const expected = '2018-06-12 kl. 12:34'
    // act
    const result = formatDate(date, { showTime: true })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatDate() finnsih', () => {
  beforeAll(() => {
    init({ isoName: 'fi-FI' })
  })
  test("formatDate() should format new Date('2018-06-12') as '12.06.2020", () => {
    // arrange
    const date = new Date('2020-06-12')
    const expected = '12.06.2020'
    // act
    const result = formatDate(date)
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should prioritize 'rawFormat' if set", () => {
    // arrange
    const date = new Date('2018-12-12')
    const rawFormat = 'dd MMMM'
    const expected = '12 joulukuuta'
    // act
    const result = formatDate(date, { rawFormat })
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should format time with ':' as minute separator", () => {
    // arrange
    const date = new Date('2020-02-03T10:36:00')
    const expected = '03.02.2020 kl. 10:36'
    // act
    const result = formatDate(date, { showTime: true })
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatDate()', () => {
  beforeAll(() => {
    init({ isoName: 'en-GB' })
  })
  test("formatDate() should format new Date('2018-06-12') as '12/06/2020", () => {
    // arrange
    const date = new Date('2020-06-12')
    const expected = '12/06/2020'
    // act
    const result = formatDate(date)
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should prioritize 'rawFormat' if set", () => {
    // arrange
    const date = new Date('2018-03-12')
    const rawFormat = 'dd MMMM'
    const expected = '12 March'
    // act
    const result = formatDate(date, { rawFormat })
    // assert
    expect(result).toEqual(expected)
  })
  test("formatDate() should format time with ':' as minute separator", () => {
    // arrange
    const date = new Date('2020-02-03T10:36:00')
    const expected = '03/02/2020 10:36'
    // act
    const result = formatDate(date, { showTime: true })
    // assert
    expect(result).toEqual(expected)
  })
})

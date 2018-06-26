import { formatMileage } from './formatMileage'
import { init } from '../../init/init'

describe('formatMileage() danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test("should format 0 to '0 km.' as default", () => {
    // arrange
    const number = 0
    const expected = '0 km.'
    // act
    const result = formatMileage(number)
    // assert
    expect(result).toEqual(expected)
  })
})

describe('formatMileage() swedish', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })

  test("should format 0 to '0 m.' as default", () => {
    // arrange
    const number = 0
    const expected = '0 m.'
    // act
    const result = formatMileage(number)
    // assert
    expect(result).toEqual(expected)
  })
})

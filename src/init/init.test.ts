import { defaults, init } from './init'

describe('initFormat()', () => {
  test('should throw error if locale not found', () => {
    // arrange
    // act
    // assert
  })

  test('should throw error if locale not found', () => {
    // assert
    expect(() => init({ isoName: 'xx-XX' } as any)).toThrow(
      'Locale with iso name xx-XX was not found',
    )
  })
  test("should default to isoName 'en-GB' ", () => {
    // act
    init()
    // assert
    expect(defaults.isoName).toEqual('en-GB')
  })

  test('should set locale on initialization if found: Danish - Denmark', () => {
    // arrange
    const isoName = 'da-DK'
    const expected = 'da-DK'
    // act
    init({ isoName })
    // assert
    expect(defaults.isoName).toEqual(expected)
  })
  test('should set locale on initialization if found: Swedish - Sweden', () => {
    // arrange
    const isoName = 'sv-SE'
    const expected = 'sv-SE'
    // act
    init({ isoName })
    // assert
    expect(defaults.isoName).toEqual(expected)
  })
  test('should set locale on initialization if found: Finnish - Finland', () => {
    // arrange
    const isoName = 'fi-FI'
    const expected = 'fi-FI'
    // act
    init({ isoName })
    // assert
    expect(defaults.isoName).toEqual(expected)
  })
  test('should set locale on initialization if found: Norsk Bokmål - Norway', () => {
    // arrange
    const isoName = 'nb-NO'
    const expected = 'nb-NO'
    // act
    init({ isoName })
    // assert
    expect(defaults.isoName).toEqual(expected)
  })
})

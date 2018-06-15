import { formatCurrency } from './formatCurrency'
import { init, configuration } from './init'

describe('initFormat()', () => {
  test('should throw error if not initialized before usage', () => {
    // assert
    expect(() => formatCurrency(0)).toThrow('Formatter not initialized')
  })
  test('should throw error if locale not found', () => {
    // assert
    expect(() => init({ isoName: 'xx-XX' })).toThrow(
      'Locale with iso name xx-XX was not found',
    )
  })
  test("should default to isoName 'da-DK' ", () => {
    // act
    init()
    // assert
    expect(configuration.isoName).toEqual('da-DK')
  })
  test('should set locale on initialization if found', () => {
    // arrange
    const isoName = 'sv-SE'
    // act
    init({ isoName })
    // assert
    expect(configuration.isoName).toEqual(isoName)
  })
})

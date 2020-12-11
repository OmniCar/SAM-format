import { formatPhone } from '../formatString/formatString'
import { init } from '../init/init'

/**
 * Tests for Danish.
 */
describe('formatPhone() Danish', () => {
  beforeAll(() => {
    init({ isoName: 'da-DK' })
  })

  test('should format a compliant phone number with area code and using default options', () => {
    // arrange
    const phone = '+45 11 22 33 44'
    const expected = '+45 11 22 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number with area code and using default options', () => {
    // arrange
    const phone = '+4511223344'
    const expected = '+45 11 22 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number without area code and using default options', () => {
    // arrange
    const phone = '11223344'
    const expected = '11 22 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unevenly spaced phone number without area code and using default options', () => {
    // arrange
    const phone = '1 1 2  233   44'
    const expected = '11 22 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove all spacing when option addSpaces === false', () => {
    // arrange
    const phone = '1 1 2  233   44'
    const expected = '11223344'
    // act
    const result = formatPhone(phone, { addSpaces: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove the area code when option showAreaCode === false', () => {
    // arrange
    const phone = '+ 45 11 22 33 44'
    const expected = '11223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code', () => {
    // arrange
    const phone = '0045 11 22 33 44'
    const expected = '+4511223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code when spacing is present', () => {
    // arrange
    const phone = '  0045 11 22 33 44'
    const expected = '+4511223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })

  // Note: this test only exists in the Danish case since there is nothing locale-specific about it.
  test('should make an effort to format a non-compliant phone number', () => {
    // arrange
    const phone = '  11 22 33'
    const expected = '112233'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })
})

/**
 * Tests for Swedish.
 */
describe('formatPhone() Swedish', () => {
  beforeAll(() => {
    init({ isoName: 'sv-SE' })
  })

  test('should format a compliant phone number with area code and using default options', () => {
    // arrange
    const phone = '+46 11 222 33 44'
    const expected = '+46 11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number with area code and using default options', () => {
    // arrange
    const phone = '+46112223344'
    const expected = '+46 11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number without area code and using default options', () => {
    // arrange
    const phone = '112223344'
    const expected = '11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unevenly spaced phone number without area code and using default options', () => {
    // arrange
    const phone = '11  222 3 3    44'
    const expected = '11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove all spacing when option addSpaces === false', () => {
    // arrange
    const phone = '1 1 22  233   44'
    const expected = '112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove the area code when option showAreaCode === false', () => {
    // arrange
    const phone = '+ 45 11 222 33 44'
    const expected = '112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code', () => {
    // arrange
    const phone = '0046 11 222 33 44'
    const expected = '+46112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code when spacing is present', () => {
    // arrange
    const phone = '  0046 11 222 33 44'
    const expected = '+46112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })
})

/**
 * Tests for Finnish.
 */
describe('formatPhone() Finnish', () => {
  beforeAll(() => {
    init({ isoName: 'fi-FI' })
  })

  test('should format a compliant phone number with area code and using default options', () => {
    // arrange
    const phone = '+358 11 222 33 44'
    const expected = '+358 11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number with area code and using default options', () => {
    // arrange
    const phone = '+358112223344'
    const expected = '+358 11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number without area code and using default options', () => {
    // arrange
    const phone = '112223344'
    const expected = '11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unevenly spaced phone number without area code and using default options', () => {
    // arrange
    const phone = '11  222 3 3    44'
    const expected = '11-222 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove all spacing when option addSpaces === false', () => {
    // arrange
    const phone = '1 1 22  233   44'
    const expected = '112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove the area code when option showAreaCode === false', () => {
    // arrange
    const phone = '+ 358 11 222 33 44'
    const expected = '112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code', () => {
    // arrange
    const phone = '00358 11 222 33 44'
    const expected = '+358112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code when spacing is present', () => {
    // arrange
    const phone = '  00358 11 222 33 44'
    const expected = '+358112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })
})

/**
 * Tests for Norwegian.
 */
describe('formatPhone() Norwegian (Norsk Bokmål)', () => {
  beforeAll(() => {
    init({ isoName: 'nb-NO' })
  })

  test('should format a compliant phone number with area code and using default options', () => {
    // arrange
    const phone = '+47 11 22 33 44'
    const expected = '+47 11 22 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number with area code and using default options', () => {
    // arrange
    const phone = '+47112223344'
    const expected = '+47 11 22 23 344'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unspaced phone number without area code and using default options', () => {
    // arrange
    const phone = '11223344'
    const expected = '11 22 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format a compliant unevenly spaced phone number without area code and using default options', () => {
    // arrange
    const phone = '11  22 3 3    44'
    const expected = '11 22 33 44'
    // act
    const result = formatPhone(phone)
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove all spacing when option addSpaces === false', () => {
    // arrange
    const phone = '11 2 2  233  44'
    const expected = '112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should remove the area code when option showAreaCode === false', () => {
    // arrange
    const phone = ' + 4 7 11 222 33 44 '
    const expected = '112223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: false })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code', () => {
    // arrange
    const phone = '0047112233 44'
    const expected = '+4711223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })

  test('should replace "00" with "+" in the area code when spacing is present', () => {
    // arrange
    const phone = '  0047 11 22 33 44'
    const expected = '+4711223344'
    // act
    const result = formatPhone(phone, { addSpaces: false, showAreaCode: true })
    // assert
    expect(result).toEqual(expected)
  })
})

/**
 * Tests for formatting phone-numbers independently in other locales, while at
 * the same time the global locale is something else (for ex: "en-GB").
 */
describe('formatPhone() independently in other locales while the global locale is "en-GB"', () => {
  beforeAll(() => {
    init({ isoName: 'en-GB' })
  })

  test('should format the phone-number with "da-DK" locale', () => {
    // arrange
    const isoLocale = 'da-DK'
    const phone = '+45 11 22 33 44'
    const expected = '+45 11 22 33 44'
    // act
    const result = formatPhone(phone, {}, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })
  test('should format the phone-number with "da-DK" locale, WITHOUT area-code', () => {
    // arrange
    const isoLocale = 'da-DK'
    const phone = '+45 11 22 33 44'
    const optionsNoAreaCode = { showAreaCode: false }
    const expected = '11 22 33 44'
    // act
    const result = formatPhone(phone, optionsNoAreaCode, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })
  test('should format the phone-number with "da-DK" locale, WITHOUT area-code and spaces', () => {
    // arrange
    const isoLocale = 'da-DK'
    const phone = '+45 11 22 33 44'
    const optionsNoAreaCodeOrSpaces = { showAreaCode: false, addSpaces: false }
    const expected = '11223344'
    // act
    const result = formatPhone(phone, optionsNoAreaCodeOrSpaces, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format the phone-number with "sv-SE" locale', () => {
    // arrange
    const isoLocale = 'sv-SE'
    const phone = '+46317152233'
    const expected = '+46 31-715 22 33'
    // act
    const result = formatPhone(phone, {}, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })
  test('should format the phone-number with "sv-SE" locale, WITHOUT area-code', () => {
    // arrange
    const isoLocale = 'sv-SE'
    const phone = '+46317152233'
    const optionsNoAreaCode = { showAreaCode: false }
    const expected = '31-715 22 33'
    // act
    const result = formatPhone(phone, optionsNoAreaCode, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format the phone-number with "fi-FI" locale', () => {
    // arrange
    const isoLocale = 'fi-FI'
    const phone = '+358112223344'
    const expected = '+358 11-222 33 44'
    // act
    const result = formatPhone(phone, {}, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })
  test('should format the phone-number with "fi-FI" locale, WITHOUT area-code', () => {
    // arrange
    const isoLocale = 'fi-FI'
    const phone = '+358112223344'
    const optionsNoAreaCode = { showAreaCode: false }
    const expected = '11-222 33 44'
    // act
    const result = formatPhone(phone, optionsNoAreaCode, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })

  test('should format the phone-number with "nb-NO" locale', () => {
    // arrange
    const isoLocale = 'nb-NO'
    const phone = '+47 11 22 33 44'
    const expected = '+47 11 22 33 44'
    // act
    const result = formatPhone(phone, {}, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })
  test('should format the phone-number with "nb-NO" locale, WITHOUT area-code', () => {
    // arrange
    const isoLocale = 'nb-NO'
    const phone = '+47 11 22 33 44'
    const optionsNoAreaCode = { showAreaCode: false }
    const expected = '11 22 33 44'
    // act
    const result = formatPhone(phone, optionsNoAreaCode, isoLocale)
    // assert
    expect(result).toEqual(expected)
  })
})

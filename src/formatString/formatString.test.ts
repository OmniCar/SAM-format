import { formatPhone } from '../formatString/formatString'
import { init } from '../init/init'

describe('formatPhone() danish', () => {
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

describe('formatPhone() swedish', () => {
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
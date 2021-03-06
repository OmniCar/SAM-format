import { IsoLocale } from '@omnicar/sam-types'
import { defaults } from '../init/init'
import { IFormatStringOptions } from './IFormatStringOptions'

// Usage guide:
// phoneMap contains conversion patterns between given (expected) format and the format that is being converted into.
// newFormat should follow the phone number layout as it will look WITH spaces added. The algorithm will remove spaces
// by itself to produce the non-spaced version. When adding new formats, remember that 1) newFormat should probably
// start with $2 as the area code (value $1) is added by the algorithm, and 2) you don't need to prefix newFormat
// with an empty space in order to separate the main part of the number from the area code; again, the algorithm will
// do this for you.
const phoneMap: Map<
  IsoLocale,
  { givenFormat: RegExp; newFormat: string }
> = new Map()
phoneMap.set('da-DK', {
  givenFormat: /(\+\d{2})?(\d{2})(\d{2})(\d{2})(\d{2})/g,
  newFormat: '$2 $3 $4 $5',
})
// Note: Not sure if the below formatting for sv-SE is correct, delete?
// phoneMap.set('sv-SE', {
//   givenFormat: /(\+\d{2})?(\d{2})(\d{3})(\d{2})(\d{2})/g,
//   newFormat: '$2-$3 $4 $5',
// })
// phoneMap.set('sv-SE', {
//   givenFormat: /(\+\d{2})?(\d{2})(\d{2})(\d{2})(\d{2})/g,
//   newFormat: '$2 $3 $4 $5',
// })
phoneMap.set('sv-SE', {
  givenFormat: /(\+\d{2})?(\d{2})(\d{3})(\d{2})(\d{2})/g,
  newFormat: '$2-$3 $4 $5',
})
phoneMap.set('fi-FI', {
  givenFormat: /(\+\d{3})?(\d{2})(\d{3})(\d{2})(\d{2})/g,
  newFormat: '$2-$3 $4 $5',
})
phoneMap.set('nb-NO', {
  givenFormat: /(\+\d{2})?(\d{2})(\d{2})(\d{2})(\d{2})/g,
  newFormat: '$2 $3 $4 $5',
})

/**
 * formatPhone formats the given phone number according to locale. Supports spacing between number
 * groups and an option for whether area code should be displayed or not. The pattern '00<area-code>'
 * will be changed into '+<area-code>' as part of the normalization.
 *
 * @param phone
 * @param options as IFormatStringOptions, default is { showAreaCode = true, addSpaces = true }.
 *        NOTE: However for international (en-GB) the options is ignored.
 * @param isoLocale Format this phone-number following the rules of isoLocale given here, independently
 *        of what the global locale is set to use.
 *        If no isoLocale is given, then uses the "global" locale that is currently set.
 */
export function formatPhone(
  phone: string,
  { showAreaCode = true, addSpaces = true } = {} as IFormatStringOptions,
  isoLocale?: IsoLocale,
) {
  if (!phone) {
    return phone
  }

  const isInternationalFormat = isoLocale === 'en-GB' ? true : false
  const useIsoLocale = !isoLocale ? defaults.isoName : isoLocale // Note: If no isoLocale given, then use the "global" locale that is currently set.

  if (isInternationalFormat || useIsoLocale === 'en-GB') {
    let normalizedPhone = phone.replace(/[ \-\.,()]/g, '') // Note: WITHOUT the '+' char.
    normalizedPhone = normalizedPhone.replace(/^00/, '+') // Replace starting '00' with '+'
    normalizedPhone = normalizedPhone.replace(/0/, '') // The first '0' is removed. (It is assumed that the leading '0' is included in the area code.)

    return normalizedPhone.trim()
  } else {
    let formats = phoneMap.get('da-DK')

    formats = phoneMap.get(useIsoLocale)
    if (!formats) {
      throw Error(
        `You requested locale "${
          !isoLocale ? defaults.isoName : isoLocale
        }", but there are no phone formats for that locale`,
      )
    }

    // Add space between area code and main number for spaced numbers.
    let newFormat = addSpaces
      ? ' ' + formats.newFormat
      : formats.newFormat.replace(/[ \-+\.,]/g, '')

    if (showAreaCode) {
      newFormat = '$1' + newFormat
    }

    // Preprocessing: remove spaces and replace '00' with '+' in area code.
    const normalizedPhone = phone.replace(/ /g, '').replace(/^([ ]+)?00/g, '+') // Note: Including the '+' char.

    return normalizedPhone.replace(formats.givenFormat, newFormat.trim()).trim()
  }
}

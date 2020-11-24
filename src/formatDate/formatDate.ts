import { IsoLocale } from '@omnicar/sam-types'
import { defaults } from '../init/init'
import { currentLocale } from '../init/init'
import { format, isValid } from 'date-fns'
import { IFormatDateOptions } from './IFormatDateOptions'

/*
  Ref: https://date-fns.org/v2.10.0/docs/I18n
  "
    It might seem complicated to require and pass locales as options,
    but unlike Moment.js which bloats your build with all the locales
    by default date-fns forces developer to manually require
    locales when needed.
  "
*/
import { da, sv, fi, nb, enGB } from 'date-fns/locale' // NOTE: Add new locale here, and here in getLocaleFns(..)

/**
 * Get formatted date in current locale.
 * @param date
 * @param opts
 */
export function formatDate(
  date: Date | string | null,
  opts?: IFormatDateOptions,
): string {
  if (!defaults.isInitialized) {
    throw Error('Formatter not initialized')
  }

  // Bail out early if input is null or empty string.
  if (!date) {
    return ''
  }

  // Attempt convert string to date.
  if (typeof date === 'string') {
    try {
      date = new Date(date)
    } catch (error) {
      console.error('Error while trying to convert date string to date', error)
      throw error
    }
  }

  return getFormattedDate(date, opts)
}

/**
 * Note:
 * Formats the date (months names, etc) based on the provided locale
 * independent of current set locale (independet of the init
 * function of sam-format).
 *
 * @param date: The date object to format.
 * @param rawFormat: The format to display this date.
 * @param isoLocale: Use this locale to display the date.
 *
 * @returns The date formatted in the locale provided.
 */
export function formatLocalizedDate(
  date: Date,
  rawFormat: string,
  isoLocale: IsoLocale,
) {
  const locale: Locale = getLocaleFns(isoLocale)
  const options = {
    locale: locale,
    // weekStartsOn
  }

  return format(date, rawFormat, options)
}

/**
 * Note:
 * Locale is a string in the form 'xx-yy', where:
 *   xx = two letter language code
 *   yy = two letter country/region code
 * Language/short-locale is only the two letter language code.
 *
 * @param isoLocale A locale code in the form 'xx-yy'.
 * @returns A locale structure with functions from the provided iso-locale.
 */
function getLocaleFns(isoLocale: IsoLocale): Locale {
  switch (isoLocale.toString()) {
    case 'da-DK':
      return da
    case 'sv-SE':
      return sv
    case 'fi-FI':
      return fi
    case 'nb-NO':
      return nb
    case 'en-GB':
      return enGB
    default:
      throw Error('Locale not found for this IsoLocale: ' + isoLocale)
  }
}

/**
 * Get formatted date from underlying implementation
 * @param number
 * @param opts
 */
function getFormattedDate(date: Date, opts?: IFormatDateOptions): string {
  const { showTime = false, rawFormat = undefined } = opts || {}
  let formatted = ''

  // load locale data
  const { date: dateConfig, separators } = currentLocale

  if (dateConfig && separators) {
    let localeShort: string = defaults.isoName
    if (localeShort !== 'en-GB')
      localeShort = defaults.isoName.substring(0, defaults.isoName.indexOf('-'))

    let locale
    try {
      locale = require('date-fns/locale/' + localeShort)
    } catch (error) {
      console.error(error)
      throw Error(error)
    }

    // format time
    const minuteSep = separators.minute
    const timeFormat = !dateConfig.name.short
      ? `HH${minuteSep}mm`
      : `'${dateConfig.name.short}' HH${minuteSep}mm`

    const createdFormat = `${dateConfig.format}${
      showTime ? ' ' + timeFormat : ''
    }`

    if (!rawFormat && !isValid(date)) {
      throw Error('Invalid Date')
    }

    formatted = format(date, rawFormat || createdFormat, {
      locale: locale.default ? locale.default : locale,
    })
  }

  // if invalid date
  if (formatted.toLowerCase().includes('invalid')) {
    throw Error(formatted)
  }

  return formatted
}

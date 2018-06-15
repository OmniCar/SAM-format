import { configuration } from './init'
import { format } from 'date-fns'

/**
 * Options for formatting date
 * @showTime: append the time (hh:mm) after the date
 * @rawFormat: display date in a custom format
 */
export interface IFormatDateOpts {
  showTime?: boolean
  rawFormat?: string
}
/**
 * Get formatted date
 * @param date
 * @param opts
 */
export function formatDate(date: Date, opts?: IFormatDateOpts): string {
  if (!configuration.isInitialized) {
    throw Error('Formatter not initialized')
  }

  return getFormattedDate(date, opts)
}

/**
 * Get formatted date from underlying implementation
 * @param number
 * @param opts
 */
function getFormattedDate(date: Date, opts?: IFormatDateOpts): string {
  const { showTime = false, rawFormat = undefined } = opts || {}
  let formatted = ''

  // load locale data
  const { date: dateConfig, separators } = configuration

  if (dateConfig && separators) {
    const localeShort = configuration.isoName.substring(
      0,
      configuration.isoName.indexOf('-'),
    )
    let locale
    try {
      locale = require('date-fns/locale/' + localeShort)
    } catch (error) {
      console.error(error)
      throw Error(error)
    }

    // format time
    const minuteSep = separators.minute
    const timeFormat = ` ${dateConfig.name.short} hh${minuteSep}mm`

    formatted = format(
      date,
      rawFormat || `${dateConfig.format}${showTime ? timeFormat : ''}`,
      {
        locale,
      },
    )
  }

  // if invalid date
  if (formatted.toLowerCase().includes('invalid')) {
    throw Error(formatted)
  }

  return formatted
}

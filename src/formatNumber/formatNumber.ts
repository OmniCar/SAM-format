import { defaults } from '../init/init'
import { currentLocale } from '../init/init'
import format, { IFormatNumberOptions } from 'format-number'
import { IFormatNumberOptions as ISamFormatNumberOptions } from './IFormatNumberOptions'
/**
 * Get formatted number
 * @param number
 * @param opts
 */
export function formatNumber(
  number: number | string,
  opts?: ISamFormatNumberOptions,
): string {
  if (!defaults.isInitialized) {
    const msg = 'Formatter not initialized'
    console.error(msg)
    throw Error(msg)
  }

  if (typeof number === 'string') {
    number = parseFloat(number as string)
  }

  if (isNaN(number)) {
    const msg = `${number} is not a number`
    console.error(msg)
    throw Error(msg)
  }

  return getFormattedNumber(number, opts)
}

/**
 * Get formatted number from underlying implementation
 * @param number
 * @param opts
 */
function getFormattedNumber(
  number: number,
  opts?: ISamFormatNumberOptions,
): string {
  const {
    showDecimals = false,
    numberType = 'CURRENCY',
    symbolDisplayType = 'NONE',
  } = opts || {}

  let formatted = ''

  if (currentLocale.separators) {
    // config format-number
    const formatConf: IFormatNumberOptions = {}

    // get right section of configuration
    const type: string = (numberType as string).toLowerCase()
    const config = (currentLocale as any)[type] // cast to any because 'type' is dynamic
    const symbol: string = config.name.short

    switch (symbolDisplayType) {
      case 'APPEND':
        formatConf.suffix = ` ${symbol}`
        break
      case 'PREPEND':
        formatConf.prefix = `${symbol} `
        break
    }

    if (showDecimals) {
      formatConf.padRight = config.numDecimals
      formatConf.truncate = config.numDecimals
    } else {
      formatConf.truncate = 0
    }

    // separators
    formatConf.integerSeparator = currentLocale.separators.thousand
    formatConf.decimal = currentLocale.separators.decimal

    formatted = format(formatConf)(number)
  }
  return formatted
}

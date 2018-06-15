import { configuration } from './init'
import format, { IFormatNumberOptions } from 'format-number'

export type NumberType = 'MILEAGE' | 'CURRENCY'
export type SymbolDisplayType = 'APPEND' | 'PREPEND' | 'NONE'

export interface IFormatNumberOpts {
  showDecimals?: boolean
  numberType?: NumberType
  symbolDisplayType?: SymbolDisplayType
}
/**
 * Get formatted number
 * @param number
 * @param opts
 */
export function formatNumber(number: number, opts?: IFormatNumberOpts): string {
  if (!configuration.isInitialized) {
    throw Error('Formatter not initialized')
  }

  return getFormattedNumber(number, opts)
}

/**
 * Get formatted number from underlying implementation
 * @param number
 * @param opts
 */
function getFormattedNumber(number: number, opts?: IFormatNumberOpts): string {
  const {
    showDecimals = false,
    numberType = 'CURRENCY',
    symbolDisplayType = 'NONE',
  } =
    opts || {}

  let formatted = ''

  if (configuration.separators) {
    // config format-number
    const formatConf: IFormatNumberOptions = {}

    // get right section of configuration
    const type: string = (numberType as string).toLowerCase()
    const config = (configuration as any)[type] // cast to any because 'type' is dynamic
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
    }

    // separators
    formatConf.integerSeparator = configuration.separators.thousand
    formatConf.decimal = configuration.separators.decimal

    formatted = format(formatConf)(number)
  }
  return formatted
}

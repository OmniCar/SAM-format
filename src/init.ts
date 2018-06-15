import daDK from './locales/da-DK'

// locales supported currently
export type IsoLocale = 'da-DK' | 'sv-SE'

// formatter locale configuration
// root keys (ie. 'currency') are marked as optional to avoid
// having to declare all of them when initializing formatter
export interface ILocaleConfiguration {
  currency?: {
    symbol: string
    name: {
      long: string
      short: string
    }
    numDecimals: number
  }
  date?: {
    format: string
    name: {
      long: string
      short: string
    }
  }
  mileage?: {
    name: {
      long: string
      short: string
    }
    numDecimals: number
  }
  separators?: {
    thousand: string
    decimal: string
    minute: string
  }
}

// options to initialize formatter
export interface ISamFormatOptions extends ILocaleConfiguration {
  isInitialized?: boolean
  isoName: IsoLocale
}

// default options
export let configuration: ISamFormatOptions = {
  isInitialized: false,
  isoName: 'da-DK',
  ...daDK,
}

/**
 * Initialize a formatter before usage
 * @param options
 */
export function init(options?: ISamFormatOptions) {
  const isoName =
    options && options.isoName ? options.isoName : configuration.isoName!

  // get locale formatting from iso name
  try {
    const locale = require(`./locales/${isoName}`).default
    configuration = {
      ...configuration,
      ...options,
      ...{ ...locale, isInitialized: true },
    }
  } catch (error) {
    console.error(error)
    throw Error(`Locale with iso name ${isoName} was not found`)
  }
}

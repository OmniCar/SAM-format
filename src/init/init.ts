import { ILocaleConfiguration } from '../locales/ILocaleConfiguration'
import { ISamFormatOptions } from './ISamFormatOptions'

export let currentLocale: ILocaleConfiguration

// default options
export let defaults: ISamFormatOptions = {
  isInitialized: false,
  isoName: 'da-DK',
}

/**
 * Initialize a formatter before usage
 * @param options
 */
export function init(options?: ISamFormatOptions) {
  const isoName =
    options && options.isoName ? options.isoName : defaults.isoName!

  // get locale formatting from iso name
  try {
    const locale = require(`../locales/${isoName}`).default
    currentLocale = locale
    defaults = {
      ...defaults,
      ...options,
      isInitialized: true,
    }
  } catch (error) {
    console.error(error)
    throw Error(`Locale with iso name ${isoName} was not found`)
  }
}

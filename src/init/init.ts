import { ISamFormatOptions } from './ISamFormatOptions'
import { ILocaleConfiguration } from '../types'

export let currentLocale: ILocaleConfiguration

// default options
export let defaults: ISamFormatOptions = {
  isInitialized: false,
  isoName: 'en-GB',
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
    console.log('error', error)
    console.error(error)
    throw Error(`Locale with iso name ${isoName} was not found`)
  }
}

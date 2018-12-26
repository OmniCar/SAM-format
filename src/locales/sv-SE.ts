import { ILocaleConfiguration } from '../types'

const locale: ILocaleConfiguration = {
  currency: {
    symbol: 'SEK',
    name: {
      long: 'kroner',
      short: 'kr.',
    },
    numDecimals: 2,
  },
  date: {
    format: 'YYYY/MM/DD',
    name: {
      long: 'klocka',
      short: 'kl.',
    },
  },
  mileage: {
    name: {
      long: 'mil',
      short: 'm.',
    },
    numDecimals: 0,
  },
  number: {
    numDecimals: 2,
  },
  separators: {
    thousand: '.',
    decimal: ',',
    minute: ':',
  },
}

export default locale

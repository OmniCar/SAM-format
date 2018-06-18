import { ILocaleConfiguration } from './ILocaleConfiguration'

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
  separators: {
    thousand: '.',
    decimal: ',',
    minute: ':',
  },
}

export default locale

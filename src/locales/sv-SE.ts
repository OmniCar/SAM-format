import { ILocaleConfiguration } from '../types'

const locale: ILocaleConfiguration = {
  currency: {
    symbol: 'SEK',
    name: {
      long: 'kronor',
      short: 'kr',
    },
    numDecimals: 2,
  },
  date: {
    format: 'YYYY-MM-DD',
    name: {
      long: 'klockan',
      short: 'kl.',
    },
  },
  mileage: {
    name: {
      long: 'kilometer',
      short: 'km',
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

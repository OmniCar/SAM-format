import { ILocaleConfiguration } from '../types'

const locale: ILocaleConfiguration = {
  currency: {
    symbol: 'GBP',
    name: {
      long: 'pounds',
      short: '£',
    },
    numDecimals: 2,
  },
  date: {
    format: 'YYYY/MM/DD',
    name: {
      long: '',
      short: '',
    },
  },
  mileage: {
    name: {
      long: '',
      short: '',
    },
    numDecimals: 0,
  },
  separators: {
    thousand: ',',
    decimal: '.',
    minute: ':',
  },
}

export default locale

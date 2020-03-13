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
    format: 'dd/MM/yyyy',
    name: {
      long: '',
      short: '',
    },
  },
  mileage: {
    name: {
      long: 'kilometers',
      short: 'km',
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

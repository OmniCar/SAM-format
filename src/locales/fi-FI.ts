import { ILocaleConfiguration } from '../types'

const locale: ILocaleConfiguration = {
  currency: {
    symbol: 'EUR',
    name: {
      long: 'euro',
      short: '€',
    },
    numDecimals: 2,
  },
  date: {
    format: 'dd.MM.yyyy',
    name: {
      long: 'kello',
      short: 'kl.',
    },
  },
  mileage: {
    name: {
      long: 'kilometriä',
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

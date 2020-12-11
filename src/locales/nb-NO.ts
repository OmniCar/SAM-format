import { ILocaleConfiguration } from '../types'

const locale: ILocaleConfiguration = {
  currency: {
    symbol: 'NOK',
    name: {
      long: 'kroner',
      short: 'kr',
    },
    numDecimals: 2,
  },
  date: {
    format: 'dd.MM.yyyy',
    name: {
      long: 'klokka',
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
    thousand: ' ',
    decimal: ',',
    minute: ':',
  },
}

export default locale

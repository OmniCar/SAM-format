import { ILocaleConfiguration } from '../types'

const locale: ILocaleConfiguration = {
  currency: {
    symbol: 'DKK',
    name: {
      long: 'kroner',
      short: 'kr.',
    },
    numDecimals: 2,
  },
  number: {
    numDecimals: 2,
  },
  date: {
    format: 'dd.MM.yyyy',
    name: {
      long: 'klokken',
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

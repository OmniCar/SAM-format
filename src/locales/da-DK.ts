import { ILocaleConfiguration } from './ILocaleConfiguration'

const locale: ILocaleConfiguration = {
  currency: {
    symbol: 'DKK',
    name: {
      long: 'kroner',
      short: 'kr.',
    },
    numDecimals: 2,
  },
  date: {
    format: 'DD.MM.YYYY',
    name: {
      long: 'klokken',
      short: 'kl.',
    },
  },
  mileage: {
    name: {
      long: 'kilometer',
      short: 'km.',
    },
    numDecimals: 0,
  },
  separators: {
    thousand: '.',
    decimal: ',',
    minute: '.',
  },
}

export default locale

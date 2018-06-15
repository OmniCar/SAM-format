import { IFormatNumberOpts, formatNumber } from './formatNumber'

export function formatMileage(
  price: number,
  {
    showDecimals = false,
    symbolDisplayType = 'APPEND',
  } = {} as IFormatNumberOpts,
) {
  return formatNumber(price, {
    showDecimals,
    numberType: 'MILEAGE',
    symbolDisplayType,
  })
}

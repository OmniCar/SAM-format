import { IFormatNumberOpts, formatNumber } from './formatNumber'

export function formatCurrency(
  price: number,
  {
    showDecimals = true,
    symbolDisplayType = 'APPEND',
  } = {} as IFormatNumberOpts,
) {
  return formatNumber(price, {
    showDecimals,
    numberType: 'CURRENCY',
    symbolDisplayType,
  })
}

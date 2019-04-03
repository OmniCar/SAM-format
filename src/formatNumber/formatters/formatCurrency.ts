import { formatNumber } from '../formatNumber'
import { IFormatNumberOptions } from '../IFormatNumberOptions'

export function formatCurrency(
  price: number,
  {
    showDecimals = true,
    symbolDisplayType = 'NONE',
  }: IFormatNumberOptions = {},
) {
  return formatNumber(price, {
    showDecimals,
    numberType: 'CURRENCY',
    symbolDisplayType,
  })
}

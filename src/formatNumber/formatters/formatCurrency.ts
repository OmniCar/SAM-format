import { formatNumber } from '../formatNumber'
import { IFormatNumberOptions } from '../IFormatNumberOptions'

export function formatCurrency(
  price: number,
  {
    showDecimals = true,
    symbolDisplayType = 'APPEND',
  } = {} as IFormatNumberOptions,
) {
  return formatNumber(price, {
    showDecimals,
    numberType: 'CURRENCY',
    symbolDisplayType,
  })
}

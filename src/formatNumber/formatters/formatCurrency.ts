import { formatNumber } from '../formatNumber'
import { IFormatNumberOptions } from '../IFormatNumberOptions'

export function formatCurrency(
  price: number,
  {
    showDecimals = true,
    symbolDisplayType = 'NONE',
  } = {} as IFormatNumberOptions,
) {
  return formatNumber(price, {
    showDecimals,
    numberType: 'CURRENCY',
    symbolDisplayType,
  })
}

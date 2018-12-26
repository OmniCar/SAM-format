import { formatNumber } from '../formatNumber'
import { IFormatNumberOptions } from '../IFormatNumberOptions'
import { SymbolDisplayType } from '../NumberTypes'

export function formatCurrency(
  price: number,
  {
    showDecimals = true,
    symbolDisplayType = 'NONE' as SymbolDisplayType,
  } = {} as IFormatNumberOptions,
) {
  return formatNumber(price, {
    showDecimals,
    numberType: 'CURRENCY',
    symbolDisplayType,
  })
}

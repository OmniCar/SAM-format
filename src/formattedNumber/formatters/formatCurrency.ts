import { formattedNumber } from '../formattedNumber'
import { IFormattedNumberOptions } from '../IFormattedNumberOptions'

export function formatCurrency(
  price: number,
  {
    showDecimals = true,
    symbolDisplayType = 'NONE',
  }: IFormattedNumberOptions = {},
) {
  return formattedNumber(price, {
    showDecimals,
    numberType: 'CURRENCY',
    symbolDisplayType,
  })
}

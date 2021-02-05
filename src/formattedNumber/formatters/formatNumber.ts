import { formattedNumber } from '../formattedNumber'

export function formatNumber(
  number: number,
  showDecimals = true,  
): string {
  return formattedNumber(number, {
    showDecimals,
    numberType: 'NUMBER',
    symbolDisplayType:'NONE'
  })
}

import { IFormattedNumberOptions } from '../IFormattedNumberOptions'
import { formattedNumber } from '../formattedNumber'

export function formatMileage(
  mileage: number | string,
  opts?: IFormattedNumberOptions,
) {
  const { showDecimals = false, symbolDisplayType = 'NONE' } = opts || {}
  return formattedNumber(mileage, {
    numberType: 'MILEAGE',
    showDecimals,
    symbolDisplayType,
  })
}

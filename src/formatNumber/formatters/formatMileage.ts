import { IFormatNumberOptions } from '../IFormatNumberOptions'
import { formatNumber } from '../formatNumber'

export function formatMileage(
  mileage: number | string,
  opts?: IFormatNumberOptions,
) {
  const { showDecimals = false, symbolDisplayType = 'NONE' } = opts || {}
  return formatNumber(mileage, {
    numberType: 'MILEAGE',
    showDecimals,
    symbolDisplayType,
  })
}

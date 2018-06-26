import { IFormatNumberOptions } from '../IFormatNumberOptions'
import { formatNumber } from '../formatNumber'

export function formatMileage(price: number, opts?: IFormatNumberOptions) {
  const { showDecimals = false, symbolDisplayType = 'APPEND' } = opts || {}
  console.log(showDecimals)
  return formatNumber(price, {
    numberType: 'MILEAGE',
    showDecimals,
    symbolDisplayType,
  })
}

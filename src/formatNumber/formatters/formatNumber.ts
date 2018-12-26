import { formatNumber as numberFormat} from '../formatNumber'
import { IFormatNumberOptions } from '../IFormatNumberOptions'
import { SymbolDisplayType } from '../NumberTypes'

export function formatNumber(
  value: number,
  {
    showDecimals = false,
    symbolDisplayType = 'NONE' as SymbolDisplayType,
  } = {} as IFormatNumberOptions,
) {
  return numberFormat(value, {
    showDecimals,
    numberType: 'NUMBER',
    symbolDisplayType,
  })
}

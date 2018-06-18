import { NumberType, SymbolDisplayType } from './NumberTypes'

/**
 * Options for formatting number
 */
export interface IFormatNumberOptions {
  showDecimals?: boolean
  numberType?: NumberType
  symbolDisplayType?: SymbolDisplayType
}

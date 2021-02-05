import { NumberType, SymbolDisplayType } from './NumberTypes'

/**
 * Options for formatting number
 */
export interface IFormattedNumberOptions {
  showDecimals?: boolean
  numberType?: NumberType
  symbolDisplayType?: SymbolDisplayType
}

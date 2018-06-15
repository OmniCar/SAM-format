export declare type NumberType = 'MILEAGE' | 'CURRENCY';
export declare type SymbolDisplayType = 'APPEND' | 'PREPEND' | 'NONE';
export interface IFormatNumberOpts {
    showDecimals?: boolean;
    numberType?: NumberType;
    symbolDisplayType?: SymbolDisplayType;
}
/**
 * Get formatted number
 * @param number
 * @param opts
 */
export declare function formatNumber(number: number, opts?: IFormatNumberOpts): string;

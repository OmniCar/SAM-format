export declare type IsoLocale = 'da-DK' | 'sv-SE';
export interface ILocaleConfiguration {
    currency?: {
        symbol: string;
        name: {
            long: string;
            short: string;
        };
        numDecimals: number;
    };
    date?: {
        format: string;
        name: {
            long: string;
            short: string;
        };
    };
    mileage?: {
        name: {
            long: string;
            short: string;
        };
        numDecimals: number;
    };
    separators?: {
        thousand: string;
        decimal: string;
        minute: string;
    };
}
export interface ISamFormatOptions extends ILocaleConfiguration {
    isInitialized?: boolean;
    isoName: IsoLocale;
}
export declare let configuration: ISamFormatOptions;
/**
 * Initialize a formatter before usage
 * @param options
 */
export declare function init(options?: ISamFormatOptions): void;

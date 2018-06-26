import { ILocaleConfiguration } from '../locales/ILocaleConfiguration';
import { ISamFormatOptions } from './ISamFormatOptions';
export declare let currentLocale: ILocaleConfiguration;
export declare let defaults: ISamFormatOptions;
/**
 * Initialize a formatter before usage
 * @param options
 */
export declare function init(options?: ISamFormatOptions): void;

/**
 * Options for formatting date
 * @showTime: append the time (hh:mm) after the date
 * @rawFormat: display date in a custom format
 */
export interface IFormatDateOpts {
    showTime?: boolean;
    rawFormat?: string;
}
/**
 * Get formatted date
 * @param date
 * @param opts
 */
export declare function formatDate(date: Date, opts?: IFormatDateOpts): string;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = require("./init");
var date_fns_1 = require("date-fns");
/**
 * Get formatted date
 * @param date
 * @param opts
 */
function formatDate(date, opts) {
    if (!init_1.configuration.isInitialized) {
        throw Error('Formatter not initialized');
    }
    return getFormattedDate(date, opts);
}
exports.formatDate = formatDate;
/**
 * Get formatted date from underlying implementation
 * @param number
 * @param opts
 */
function getFormattedDate(date, opts) {
    var _a = opts || {}, _b = _a.showTime, showTime = _b === void 0 ? false : _b, _c = _a.rawFormat, rawFormat = _c === void 0 ? undefined : _c;
    var formatted = '';
    // load locale data
    var dateConfig = init_1.configuration.date, separators = init_1.configuration.separators;
    if (dateConfig && separators) {
        var localeShort = init_1.configuration.isoName.substring(0, init_1.configuration.isoName.indexOf('-'));
        var locale = void 0;
        try {
            locale = require('date-fns/locale/' + localeShort);
        }
        catch (error) {
            console.error(error);
            throw Error(error);
        }
        // format time
        var minuteSep = separators.minute;
        var timeFormat = " " + dateConfig.name.short + " hh" + minuteSep + "mm";
        formatted = date_fns_1.format(date, rawFormat || "" + dateConfig.format + (showTime ? timeFormat : ''), {
            locale: locale,
        });
    }
    // if invalid date
    if (formatted.toLowerCase().includes('invalid')) {
        throw Error(formatted);
    }
    return formatted;
}

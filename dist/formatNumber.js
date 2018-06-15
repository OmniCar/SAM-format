"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = require("./init");
var format_number_1 = require("format-number");
/**
 * Get formatted number
 * @param number
 * @param opts
 */
function formatNumber(number, opts) {
    if (!init_1.configuration.isInitialized) {
        throw Error('Formatter not initialized');
    }
    return getFormattedNumber(number, opts);
}
exports.formatNumber = formatNumber;
/**
 * Get formatted number from underlying implementation
 * @param number
 * @param opts
 */
function getFormattedNumber(number, opts) {
    var _a = opts || {}, _b = _a.showDecimals, showDecimals = _b === void 0 ? false : _b, _c = _a.numberType, numberType = _c === void 0 ? 'CURRENCY' : _c, _d = _a.symbolDisplayType, symbolDisplayType = _d === void 0 ? 'NONE' : _d;
    var formatted = '';
    if (init_1.configuration.separators) {
        // config format-number
        var formatConf = {};
        // get right section of configuration
        var type = numberType.toLowerCase();
        var config = init_1.configuration[type]; // cast to any because 'type' is dynamic
        var symbol = config.name.short;
        switch (symbolDisplayType) {
            case 'APPEND':
                formatConf.suffix = " " + symbol;
                break;
            case 'PREPEND':
                formatConf.prefix = symbol + " ";
                break;
        }
        if (showDecimals) {
            formatConf.padRight = config.numDecimals;
        }
        // separators
        formatConf.integerSeparator = init_1.configuration.separators.thousand;
        formatConf.decimal = init_1.configuration.separators.decimal;
        formatted = format_number_1.default(formatConf)(number);
    }
    return formatted;
}

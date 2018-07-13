"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = require("../init/init");
var init_2 = require("../init/init");
var format_number_1 = require("format-number");
/**
 * Get formatted number
 * @param number
 * @param opts
 */
function formatNumber(number, opts) {
    if (!init_1.defaults.isInitialized) {
        var msg = 'Formatter not initialized';
        console.error(msg);
        throw Error(msg);
    }
    if (typeof number === 'string') {
        number = parseFloat(number);
    }
    if (isNaN(number)) {
        var msg = number + " is not a number";
        console.error(msg);
        throw Error(msg);
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
    if (init_2.currentLocale.separators) {
        // config format-number
        var formatConf = {};
        // get right section of configuration
        var type = numberType.toLowerCase();
        var config = init_2.currentLocale[type]; // cast to any because 'type' is dynamic
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
        else {
            formatConf.truncate = 0;
        }
        // separators
        formatConf.integerSeparator = init_2.currentLocale.separators.thousand;
        formatConf.decimal = init_2.currentLocale.separators.decimal;
        formatted = format_number_1.default(formatConf)(number);
    }
    return formatted;
}

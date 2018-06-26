"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// default options
exports.defaults = {
    isInitialized: false,
    isoName: 'da-DK',
};
/**
 * Initialize a formatter before usage
 * @param options
 */
function init(options) {
    var isoName = options && options.isoName ? options.isoName : exports.defaults.isoName;
    // get locale formatting from iso name
    try {
        var locale = require("../locales/" + isoName).default;
        exports.currentLocale = locale;
        exports.defaults = tslib_1.__assign({}, exports.defaults, options, { isInitialized: true });
    }
    catch (error) {
        console.error(error);
        throw Error("Locale with iso name " + isoName + " was not found");
    }
}
exports.init = init;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var da_DK_1 = require("./locales/da-DK");
// default options
exports.configuration = tslib_1.__assign({ isInitialized: false, isoName: 'da-DK' }, da_DK_1.default);
/**
 * Initialize a formatter before usage
 * @param options
 */
function init(options) {
    var isoName = options && options.isoName ? options.isoName : exports.configuration.isoName;
    // get locale formatting from iso name
    try {
        var locale = require("./locales/" + isoName).default;
        exports.configuration = tslib_1.__assign({}, exports.configuration, options, tslib_1.__assign({}, locale, { isInitialized: true }));
    }
    catch (error) {
        console.error(error);
        throw Error("Locale with iso name " + isoName + " was not found");
    }
}
exports.init = init;

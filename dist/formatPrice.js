"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatNumber_1 = require("./formatNumber");
function formatPrice(price, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.showDecimals, showDecimals = _c === void 0 ? true : _c, _d = _b.numberType, numberType = _d === void 0 ? 'CURRENCY' : _d, _e = _b.symbolDisplayType, symbolDisplayType = _e === void 0 ? 'APPEND' : _e;
    return formatNumber_1.formatNumber(price, {
        showDecimals: showDecimals,
        numberType: numberType,
        symbolDisplayType: symbolDisplayType,
    });
}
exports.formatPrice = formatPrice;

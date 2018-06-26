"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatNumber_1 = require("../formatNumber");
function formatCurrency(price, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.showDecimals, showDecimals = _c === void 0 ? true : _c, _d = _b.symbolDisplayType, symbolDisplayType = _d === void 0 ? 'APPEND' : _d;
    return formatNumber_1.formatNumber(price, {
        showDecimals: showDecimals,
        numberType: 'CURRENCY',
        symbolDisplayType: symbolDisplayType,
    });
}
exports.formatCurrency = formatCurrency;

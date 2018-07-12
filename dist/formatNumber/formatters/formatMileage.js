"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatNumber_1 = require("../formatNumber");
function formatMileage(mileage, opts) {
    var _a = opts || {}, _b = _a.showDecimals, showDecimals = _b === void 0 ? false : _b, _c = _a.symbolDisplayType, symbolDisplayType = _c === void 0 ? 'NONE' : _c;
    return formatNumber_1.formatNumber(mileage, {
        numberType: 'MILEAGE',
        showDecimals: showDecimals,
        symbolDisplayType: symbolDisplayType,
    });
}
exports.formatMileage = formatMileage;

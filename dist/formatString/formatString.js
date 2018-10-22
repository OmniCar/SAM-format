"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = require("../init/init");
var phoneMap = new Map();
phoneMap.set('da-DK', formatDKPhone);
phoneMap.set('sv-SE', formatSEPhone);
function formatDKPhone(phone, opts) {
    var expectedFormat = /(\+\d{2})?(\d{2})(\d{2})(\d{2})(\d{2})/g;
    var newFormat = '$2$3$4$5';
    if (opts.addSpaces) {
        newFormat = ' $2 $3 $4 $5';
    }
    if (opts.showAreaCode) {
        newFormat = '$1' + newFormat;
    }
    return phone.replace(expectedFormat, newFormat.trim());
}
function formatSEPhone(phone, opts) {
    var expectedFormat = /(\+\d{2})?(\d{2})(\d{3})(\d{2})(\d{2})/g;
    var newFormat = '$2$3$4$5';
    if (opts.addSpaces) {
        newFormat = ' $2-$3 $4 $5';
    }
    if (opts.showAreaCode) {
        newFormat = '$1' + newFormat;
    }
    return phone.replace(expectedFormat, newFormat.trim());
}
function formatPhone(phone, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.showAreaCode, showAreaCode = _c === void 0 ? true : _c, _d = _b.addSpaces, addSpaces = _d === void 0 ? true : _d;
    if (!phone) {
        return phone;
    }
    var formatter = phoneMap.get(init_1.defaults.isoName);
    if (!formatter) {
        throw Error("You requested locale \"" + init_1.defaults.isoName + "\", but there are no phone formatters for that locale");
    }
    // Preprocessing: remove spaces and replace '00' with '+' in area code.
    var normalizedPhone = phone.replace(/ /g, '').replace(/^([ ]+)?00/g, '+');
    return formatter(normalizedPhone, { showAreaCode: showAreaCode, addSpaces: addSpaces }).trim();
}
exports.formatPhone = formatPhone;

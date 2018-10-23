"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = require("../init/init");
// Usage guide:
// phoneMap contains conversion patterns between given (expected) format and the format that is being converted into.
// newFormat should follow the phone number layout as it will look WITH spaces added. The algorithm will remove spaces
// by itself to produce the non-spaced version. When adding new formats, remember that 1) newFormat should probably
// start with $2 as the area code (value $1) is added by the algorithm, and 2) you don't need to prefix newFormat
// with an empty space in order to separate the main part of the number from the area code; again, the algorithm will
// do this for you.
var phoneMap = new Map();
phoneMap.set('da-DK', {
    givenFormat: /(\+\d{2})?(\d{2})(\d{2})(\d{2})(\d{2})/g,
    newFormat: '$2 $3 $4 $5',
});
phoneMap.set('sv-SE', {
    givenFormat: /(\+\d{2})?(\d{2})(\d{3})(\d{2})(\d{2})/g,
    newFormat: '$2-$3 $4 $5',
});
// formatPhone formats the given phone number according to locale. Supports spacing between number groups
// and an option for whether area code should be displayed or not. The pattern '00<area-code>' will be changed
// into '+<area-code>' as part of the normalization.
function formatPhone(phone, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.showAreaCode, showAreaCode = _c === void 0 ? true : _c, _d = _b.addSpaces, addSpaces = _d === void 0 ? true : _d;
    if (!phone) {
        return phone;
    }
    var formats = phoneMap.get(init_1.defaults.isoName);
    if (!formats) {
        throw Error("You requested locale \"" + init_1.defaults.isoName + "\", but there are no phone formats for that locale");
    }
    // Add space between area code and main number for spaced numbers.
    var newFormat = addSpaces
        ? ' ' + formats.newFormat
        : formats.newFormat.replace(/[ \-+\.,]/g, '');
    if (showAreaCode) {
        newFormat = '$1' + newFormat;
    }
    // Preprocessing: remove spaces and replace '00' with '+' in area code.
    var normalizedPhone = phone.replace(/ /g, '').replace(/^([ ]+)?00/g, '+');
    return normalizedPhone.replace(formats.givenFormat, newFormat.trim()).trim();
}
exports.formatPhone = formatPhone;

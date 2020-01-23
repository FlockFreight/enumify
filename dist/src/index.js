"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enumify = /** @class */ (function () {
    function Enumify() {
    }
    Enumify.closeEnum = function () {
        var e_1, _a;
        var enumKeys = [];
        var enumValues = [];
        try {
            // Traverse the enum entries
            for (var _b = __values(Object.entries(this)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                enumKeys.push(key);
                value.enumKey = key;
                value.enumOrdinal = enumValues.length;
                enumValues.push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Important: only add more static properties *after* processing the enum entries
        this.enumKeys = enumKeys;
        this.enumValues = enumValues;
        // TODO: prevent instantiation now. Freeze `this`?
    };
    /** Use case: parsing enum values */
    Enumify.enumValueOf = function (str) {
        var index = this.enumKeys.indexOf(str);
        if (index >= 0) {
            return this.enumValues[index];
        }
        return undefined;
    };
    Enumify[Symbol.iterator] = function () {
        return this.enumValues[Symbol.iterator]();
    };
    Enumify.prototype.toString = function () {
        return this.constructor.name + '.' + this.enumKey;
    };
    return Enumify;
}());
exports.Enumify = Enumify;
//# sourceMappingURL=index.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var src_1 = require("../src");
test('Color: basic features', function () {
    var e_1, _a;
    var Color = /** @class */ (function (_super) {
        __extends(Color, _super);
        function Color() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Color.red = new Color();
        Color.orange = new Color();
        Color.yellow = new Color();
        Color.green = new Color();
        Color.blue = new Color();
        Color.purple = new Color();
        Color._ = Color.closeEnum();
        return Color;
    }(src_1.Enumify));
    // Instance properties
    assert_1.strict.equal(Color.red.enumKey, 'red');
    assert_1.strict.equal(Color.red.enumOrdinal, 0);
    // Prototype methods
    assert_1.strict.equal('Color: ' + Color.red, // .toString()
    'Color: Color.red');
    // Static `.enumKeys` and static `.enumValues`
    assert_1.strict.deepEqual(Color.enumKeys, ['red', 'orange', 'yellow', 'green', 'blue', 'purple']);
    assert_1.strict.deepEqual(Color.enumValues, [Color.red, Color.orange, Color.yellow,
        Color.green, Color.blue, Color.purple]);
    // Static `.enumValueOf()`
    assert_1.strict.equal(Color.enumValueOf('yellow'), Color.yellow);
    // Iterability
    var result = [];
    var iterated = __spread(Color);
    try {
        for (var Color_1 = __values(Color), Color_1_1 = Color_1.next(); !Color_1_1.done; Color_1_1 = Color_1.next()) {
            var c = Color_1_1.value;
            result.push('Color: ' + c);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (Color_1_1 && !Color_1_1.done && (_a = Color_1.return)) _a.call(Color_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    assert_1.strict.deepEqual(iterated, [
        Color.red,
        Color.orange,
        Color.yellow,
        Color.green,
        Color.blue,
        Color.purple,
    ]);
});
test('Instance properties', function () {
    var Weekday = /** @class */ (function (_super) {
        __extends(Weekday, _super);
        function Weekday(isWorkDay) {
            var _this = _super.call(this) || this;
            _this.isWorkDay = isWorkDay;
            return _this;
        }
        Weekday.monday = new Weekday(true);
        Weekday.tuesday = new Weekday(true);
        Weekday.wednesday = new Weekday(true);
        Weekday.thursday = new Weekday(true);
        Weekday.friday = new Weekday(true);
        Weekday.saturday = new Weekday(false);
        Weekday.sunday = new Weekday(false);
        Weekday._ = Weekday.closeEnum();
        return Weekday;
    }(src_1.Enumify));
    assert_1.strict.equal(Weekday.sunday.isWorkDay, false);
    assert_1.strict.equal(Weekday.wednesday.isWorkDay, true);
});
test('switch', function () {
    var Weekday = /** @class */ (function (_super) {
        __extends(Weekday, _super);
        function Weekday() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Weekday.monday = new Weekday();
        Weekday.tuesday = new Weekday();
        Weekday.wednesday = new Weekday();
        Weekday.thursday = new Weekday();
        Weekday.friday = new Weekday();
        Weekday.saturday = new Weekday();
        Weekday.sunday = new Weekday();
        Weekday._ = Weekday.closeEnum();
        return Weekday;
    }(src_1.Enumify));
    function nextDay(weekday) {
        switch (weekday) {
            case Weekday.monday:
                return Weekday.tuesday;
            case Weekday.tuesday:
                return Weekday.wednesday;
            case Weekday.wednesday:
                return Weekday.thursday;
            case Weekday.thursday:
                return Weekday.friday;
            case Weekday.friday:
                return Weekday.saturday;
            case Weekday.saturday:
                return Weekday.sunday;
            case Weekday.sunday:
                return Weekday.monday;
            default:
                throw new Error();
        }
    }
    assert_1.strict.equal(nextDay(Weekday.tuesday), Weekday.wednesday);
    assert_1.strict.equal(nextDay(Weekday.sunday), Weekday.monday);
});
test('Instance getters', function () {
    var Weekday = /** @class */ (function (_super) {
        __extends(Weekday, _super);
        function Weekday(props) {
            var _this = _super.call(this) || this;
            Object.defineProperties(_this, Object.getOwnPropertyDescriptors(props));
            return _this;
        }
        Weekday.monday = new Weekday({
            get nextDay() { return Weekday.tuesday; }
        });
        Weekday.tuesday = new Weekday({
            get nextDay() { return Weekday.wednesday; }
        });
        Weekday.wednesday = new Weekday({
            get nextDay() { return Weekday.thursday; }
        });
        Weekday.thursday = new Weekday({
            get nextDay() { return Weekday.friday; }
        });
        Weekday.friday = new Weekday({
            get nextDay() { return Weekday.saturday; }
        });
        Weekday.saturday = new Weekday({
            get nextDay() { return Weekday.sunday; }
        });
        Weekday.sunday = new Weekday({
            get nextDay() { return Weekday.monday; }
        });
        Weekday._ = Weekday.closeEnum();
        return Weekday;
    }(src_1.Enumify));
    assert_1.strict.equal(Weekday.friday.nextDay, Weekday.saturday);
    assert_1.strict.equal(Weekday.sunday.nextDay, Weekday.monday);
});
test('Arbitrary enum values', function () {
    var Mode = /** @class */ (function (_super) {
        __extends(Mode, _super);
        function Mode(n) {
            var _this = _super.call(this) || this;
            _this.n = n;
            return _this;
        }
        Mode.user_r = new Mode(256);
        Mode.user_w = new Mode(128);
        Mode.user_x = new Mode(64);
        Mode.group_r = new Mode(32);
        Mode.group_w = new Mode(16);
        Mode.group_x = new Mode(8);
        Mode.all_r = new Mode(4);
        Mode.all_w = new Mode(2);
        Mode.all_x = new Mode(1);
        Mode._ = Mode.closeEnum();
        return Mode;
    }(src_1.Enumify));
    assert_1.strict.equal(Mode.user_r.n | Mode.user_w.n | Mode.user_x.n |
        Mode.group_r.n | Mode.group_x.n |
        Mode.all_r.n | Mode.all_x.n, 493);
    assert_1.strict.equal(Mode.user_r.n | Mode.user_w.n | Mode.user_x.n |
        Mode.group_r.n, 480);
});
//# sourceMappingURL=index_test.js.map
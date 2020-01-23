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
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(props) {
        var _this = _super.call(this) || this;
        Object.defineProperties(_this, Object.getOwnPropertyDescriptors(props));
        return _this;
    }
    State.prototype.accept = function (x) {
        throw new Error('Must be overridden');
    };
    State.start = new State({
        done: false,
        accept: function (x) {
            if (x === '1') {
                return State.one;
            }
            else {
                return State.start;
            }
        },
    });
    State.one = new State({
        done: false,
        accept: function (x) {
            if (x === '1') {
                return State.two;
            }
            else {
                return State.start;
            }
        },
    });
    State.two = new State({
        done: false,
        accept: function (x) {
            if (x === '1') {
                return State.three;
            }
            else {
                return State.start;
            }
        },
    });
    State.three = new State({
        done: true,
    });
    State._ = State.closeEnum();
    return State;
}(src_1.Enumify));
exports.State = State;
function run(state, inputString) {
    var e_1, _a;
    var trace = [];
    try {
        for (var inputString_1 = __values(inputString), inputString_1_1 = inputString_1.next(); !inputString_1_1.done; inputString_1_1 = inputString_1.next()) {
            var ch = inputString_1_1.value;
            if (state.done) {
                break;
            }
            state = state.accept(ch);
            trace.push(ch + " --> " + state);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (inputString_1_1 && !inputString_1_1.done && (_a = inputString_1.return)) _a.call(inputString_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return trace;
}
test('run', function () {
    assert_1.strict.deepEqual(run(State.start, '01011100'), [
        '0 --> State.start',
        '1 --> State.one',
        '0 --> State.start',
        '1 --> State.one',
        '1 --> State.two',
        '1 --> State.three',
    ]);
});
//# sourceMappingURL=state.js.map
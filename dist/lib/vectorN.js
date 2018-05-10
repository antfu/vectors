"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var version_1 = require("./version");
var VectorN = /** @class */ (function () {
    function VectorN(dimension, values) {
        if (dimension === void 0) { dimension = 3; }
        this._dimension = dimension;
        if (values.length !== this.dimension) {
            throw new Error("The values array of " + values.length + " is not matched with dimension " + dimension);
        }
        this._values = values.map(function (x) { return x; });
    }
    VectorN.fromArray = function (arr) {
        return new VectorN(arr.length, arr);
    };
    VectorN.zeros = function (dimension) {
        return new VectorN(dimension, new Array(dimension).fill(0));
    };
    Object.defineProperty(VectorN.prototype, "values", {
        get: function () {
            return this._values.map(function (x) { return x; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorN.prototype, "dimension", {
        get: function () {
            return this._dimension;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorN.prototype, "length", {
        get: function () {
            return Math.sqrt(this.values.map(function (x) { return Math.pow(x, 2); }).reduce(function (a, b) { return a + b; }, 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorN.prototype, "magnitude", {
        get: function () {
            return this.length;
        },
        enumerable: true,
        configurable: true
    });
    VectorN.prototype.isSameDimension = function (v) {
        return this.dimension === v.dimension;
    };
    VectorN.prototype.negative = function () {
        return new VectorN(this.dimension, this.values.map(function (x) { return -x; }));
    };
    VectorN.prototype.withValueAt = function (pos, value) {
        return new VectorN(this.dimension, this.values.map(function (x, idx) { return (idx === pos ? value : x); }));
    };
    VectorN.prototype.valueAt = function (pos) {
        return this.values[pos];
    };
    VectorN.prototype.add = function (v) {
        if (v instanceof VectorN) {
            this.dimensionMathCheck(v);
            return new VectorN(this.dimension, this.values.map(function (value, idx) { return value + v.values[idx]; }));
        }
        else {
            return new VectorN(this.dimension, this.values.map(function (x) { return x + v; }));
        }
    };
    VectorN.prototype.subtract = function (v) {
        if (v instanceof VectorN) {
            this.dimensionMathCheck(v);
            return new VectorN(this.dimension, this.values.map(function (value, idx) { return value - v.values[idx]; }));
        }
        else {
            return new VectorN(this.dimension, this.values.map(function (x) { return x - v; }));
        }
    };
    VectorN.prototype.multiply = function (v) {
        if (v instanceof VectorN) {
            this.dimensionMathCheck(v);
            return new VectorN(this.dimension, this.values.map(function (value, idx) { return value * v.values[idx]; }));
        }
        else {
            return new VectorN(this.dimension, this.values.map(function (x) { return x * v; }));
        }
    };
    VectorN.prototype.divide = function (v) {
        if (v instanceof VectorN) {
            this.dimensionMathCheck(v);
            return new VectorN(this.dimension, this.values.map(function (value, idx) { return value / v.values[idx]; }));
        }
        else {
            return new VectorN(this.dimension, this.values.map(function (x) { return x / v; }));
        }
    };
    VectorN.prototype.dot = function (v) {
        this.dimensionMathCheck(v);
        return this.values.map(function (value, idx) { return value * v.values[idx]; }).reduce(function (a, b) { return a + b; }, 0);
    };
    VectorN.prototype.equals = function (v) {
        if (!this.isSameDimension(v)) {
            return false;
        }
        for (var i = 0; i < this.dimension; i++) {
            if (this.values[i] !== v.values[i]) {
                return false;
            }
        }
        return true;
    };
    VectorN.prototype.toString = function () {
        return this.dimension + " Dimensions Vector [" + this.values.join(',') + "]";
    };
    VectorN.prototype.toArray = function () {
        return this.values.map(function (x) { return x; });
    };
    VectorN.prototype.dimensionMathCheck = function (v) {
        if (!this.isSameDimension(v)) {
            throw new TypeError("The diemsion " + this.dimension + " and " + v.dimension + " is not matched");
        }
    };
    VectorN.version = version_1.default;
    return VectorN;
}());
exports.default = VectorN;
//# sourceMappingURL=vectorN.js.map
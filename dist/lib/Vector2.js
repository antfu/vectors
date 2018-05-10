"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vectorN_1 = require("./vectorN");
var Vector2 = /** @class */ (function (_super) {
    __extends(Vector2, _super);
    function Vector2(x, y) {
        return _super.call(this, 2, [x || 0, y || 0]) || this;
    }
    Vector2.with = function (x, y) {
        return new Vector2(x, y);
    };
    Vector2.fromPolar = function (angle, length) {
        if (length === void 0) { length = 1; }
        return new Vector2(Math.cos(angle) * length, Math.sin(angle) * length);
    };
    Vector2.fromObject = function (obj, xAlias, yAlias) {
        if (xAlias === void 0) { xAlias = 'x'; }
        if (yAlias === void 0) { yAlias = 'y'; }
        return new Vector2(obj[xAlias], obj[yAlias]);
    };
    Vector2.fromArray = function (arr) {
        return new Vector2(arr[0], arr[1]);
    };
    Vector2.fromVectorN = function (v) {
        if (v.dimension !== 2) {
            throw new TypeError("Given VectorN's dimension is " + v.dimension + " instead of 2");
        }
        return Vector2.fromArray(v.values);
    };
    Object.defineProperty(Vector2.prototype, "x", {
        get: function () {
            return this.values[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this.values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "angle", {
        get: function () {
            return Math.atan2(this.y, this.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "length", {
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "direction", {
        get: function () {
            return this.angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "magnitude", {
        get: function () {
            return this.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "degree", {
        get: function () {
            return this.angle / Math.PI / 2 * 360;
        },
        enumerable: true,
        configurable: true
    });
    Vector2.prototype.withLength = function (length) {
        return Vector2.fromPolar(this.angle, length);
    };
    Vector2.prototype.withAngle = function (angle) {
        return Vector2.fromPolar(angle, this.length);
    };
    Vector2.prototype.withX = function (x) {
        return new Vector2(x, this.y);
    };
    Vector2.prototype.withY = function (y) {
        return new Vector2(this.x, y);
    };
    Vector2.prototype.rotate = function (angle) {
        return Vector2.fromPolar(this.angle + angle, this.length);
    };
    Vector2.prototype.normalize = function () {
        return this.withLength(1);
    };
    Vector2.prototype.norm = function () {
        return this.normalize;
    };
    Vector2.prototype.negative = function () {
        return new Vector2(-this.x, -this.y);
    };
    Vector2.prototype.add = function (v) {
        if (v instanceof Vector2)
            return new Vector2(this.x + v.x, this.y + v.y);
        else
            return new Vector2(this.x + v, this.y + v);
    };
    Vector2.prototype.addX = function (x) {
        return this.withX(this.x + x);
    };
    Vector2.prototype.addY = function (y) {
        return this.withY(this.y + y);
    };
    Vector2.prototype.subtract = function (v) {
        if (v instanceof Vector2)
            return new Vector2(this.x - v.x, this.y - v.y);
        else
            return new Vector2(this.x - v, this.y - v);
    };
    Vector2.prototype.multiply = function (v) {
        if (v instanceof Vector2)
            return new Vector2(this.x * v.x, this.y * v.y);
        else
            return new Vector2(this.x * v, this.y * v);
    };
    Vector2.prototype.divide = function (v) {
        if (v instanceof Vector2)
            return new Vector2(this.x / v.x, this.y / v.y);
        else
            return new Vector2(this.x / v, this.y / v);
    };
    Vector2.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y;
    };
    Vector2.prototype.cross = function (v) {
        return this.x * v.y - this.y * v.x;
    };
    Vector2.prototype.projectTo = function (v) {
        return Vector2.fromPolar(v.angle, this.projectToLegnth(v));
    };
    Vector2.prototype.projectToLegnth = function (v) {
        return this.length * Math.cos(-this.angleBetween(v));
    };
    Vector2.prototype.angleBetween = function (v) {
        return this.angle - v.angle;
    };
    Vector2.prototype.toObject = function (xAlias, yAlias) {
        if (xAlias === void 0) { xAlias = 'x'; }
        if (yAlias === void 0) { yAlias = 'y'; }
        return _a = {},
            _a[xAlias] = this.x,
            _a[yAlias] = this.y,
            _a;
        var _a;
    };
    Vector2.prototype.toString = function () {
        return "x: " + this.x + ", y: " + this.y;
    };
    Vector2.prototype.toArray = function () {
        return [this.x, this.y];
    };
    Vector2.ZERO = new Vector2(0, 0);
    return Vector2;
}(vectorN_1.default));
exports.default = Vector2;
//# sourceMappingURL=Vector2.js.map
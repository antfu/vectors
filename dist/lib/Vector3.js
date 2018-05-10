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
var Vector3 = /** @class */ (function (_super) {
    __extends(Vector3, _super);
    function Vector3(x, y, z) {
        return _super.call(this, 3, [x, y, z]) || this;
    }
    Vector3.with = function (x, y, z) {
        return new Vector3(x, y, z);
    };
    Vector3.fromObject = function (obj, xAlias, yAlias, zAlias) {
        if (xAlias === void 0) { xAlias = 'x'; }
        if (yAlias === void 0) { yAlias = 'y'; }
        if (zAlias === void 0) { zAlias = 'z'; }
        return new Vector3(obj[xAlias], obj[yAlias], obj[zAlias]);
    };
    Vector3.fromArray = function (arr) {
        return new Vector3(arr[0], arr[1], arr[2]);
    };
    Vector3.fromVectorN = function (v) {
        if (v.dimension !== 3) {
            throw new TypeError("Given VectorN's dimension is " + v.dimension + " instead of 3");
        }
        return Vector3.fromArray(v.values);
    };
    Object.defineProperty(Vector3.prototype, "x", {
        get: function () {
            return this.values[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "y", {
        get: function () {
            return this.values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "z", {
        get: function () {
            return this.values[2];
        },
        enumerable: true,
        configurable: true
    });
    Vector3.prototype.withX = function (x) {
        return new Vector3(x, this.y, this.z);
    };
    Vector3.prototype.withY = function (y) {
        return new Vector3(this.x, y, this.z);
    };
    Vector3.prototype.withZ = function (z) {
        return new Vector3(this.x, this.y, z);
    };
    Vector3.prototype.add = function (v) {
        return Vector3.fromVectorN(_super.prototype.add.call(this, v));
    };
    Vector3.prototype.addX = function (x) {
        return this.withX(this.x + x);
    };
    Vector3.prototype.addY = function (y) {
        return this.withY(this.y + y);
    };
    Vector3.prototype.addZ = function (z) {
        return this.withZ(this.z + z);
    };
    Vector3.prototype.subtract = function (v) {
        return Vector3.fromVectorN(_super.prototype.subtract.call(this, v));
    };
    Vector3.prototype.multiply = function (v) {
        return Vector3.fromVectorN(_super.prototype.multiply.call(this, v));
    };
    Vector3.prototype.divide = function (v) {
        return Vector3.fromVectorN(_super.prototype.divide.call(this, v));
    };
    Vector3.prototype.negative = function () {
        return Vector3.fromVectorN(_super.prototype.negative.call(this));
    };
    Vector3.ZERO = new Vector3(0, 0, 0);
    return Vector3;
}(vectorN_1.default));
exports.default = Vector3;
//# sourceMappingURL=Vector3.js.map
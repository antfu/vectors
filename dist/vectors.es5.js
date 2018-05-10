/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var version = '0.0.1';

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
    VectorN.version = version;
    return VectorN;
}());

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
        return _a = {}, _a[xAlias] = this.x, _a[yAlias] = this.y, _a;
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
}(VectorN));

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
}(VectorN));

var VectorN$1 = /** @class */ (function () {
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
    VectorN.version = version;
    return VectorN;
}());

var index = {
    Vector2: Vector2,
    Vector3: Vector3,
    VectorN: VectorN$1
};

export default index;
export { Vector2, Vector3, VectorN$1 as VectorN };

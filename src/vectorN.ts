import version from './version'

export default class VectorN {
  public static version = version
  private _values: Array<number>
  private _dimension: number

  constructor(dimension: number = 3, values: Array<number>) {
    this._dimension = dimension
    if (values.length !== this.dimension) {
      throw new Error(
        `The values array of ${values.length} is not matched with dimension ${dimension}`
      )
    }
    this._values = values.map(x => x)
  }

  static fromArray(arr: Array<any>) {
    return new VectorN(arr.length, arr)
  }
  static zeros(dimension: number) {
    return new VectorN(dimension, new Array(dimension).fill(0))
  }

  get values() {
    return this._values.map(x => x)
  }
  get dimension() {
    return this._dimension
  }
  get length() {
    return Math.sqrt(this.values.map(x => x ** 2).reduce((a, b) => a + b, 0))
  }
  get magnitude() {
    return this.length
  }

  isSameDimension(v: VectorN) {
    return this.dimension === v.dimension
  }
  negative() {
    return new VectorN(this.dimension, this.values.map(x => -x))
  }
  withValueAt(pos: number, value: number) {
    return new VectorN(this.dimension, this.values.map((x, idx) => (idx === pos ? value : x)))
  }
  valueAt(pos: number) {
    return this.values[pos]
  }
  add(v: VectorN | number) {
    if (v instanceof VectorN) {
      this.dimensionMathCheck(v)
      return new VectorN(this.dimension, this.values.map((value, idx) => value + v.values[idx]))
    } else {
      return new VectorN(this.dimension, this.values.map(x => x + v))
    }
  }
  subtract(v: VectorN | number) {
    if (v instanceof VectorN) {
      this.dimensionMathCheck(v)
      return new VectorN(this.dimension, this.values.map((value, idx) => value - v.values[idx]))
    } else {
      return new VectorN(this.dimension, this.values.map(x => x - v))
    }
  }
  multiply(v: VectorN | number) {
    if (v instanceof VectorN) {
      this.dimensionMathCheck(v)
      return new VectorN(this.dimension, this.values.map((value, idx) => value * v.values[idx]))
    } else {
      return new VectorN(this.dimension, this.values.map(x => x * v))
    }
  }
  divide(v: VectorN | number) {
    if (v instanceof VectorN) {
      this.dimensionMathCheck(v)
      return new VectorN(this.dimension, this.values.map((value, idx) => value / v.values[idx]))
    } else {
      return new VectorN(this.dimension, this.values.map(x => x / v))
    }
  }
  dot(v: VectorN) {
    this.dimensionMathCheck(v)
    return this.values.map((value, idx) => value * v.values[idx]).reduce((a, b) => a + b, 0)
  }
  equals(v: VectorN) {
    if (!this.isSameDimension(v)) {
      return false
    }
    for (let i = 0; i < this.dimension; i++) {
      if (this.values[i] !== v.values[i]) {
        return false
      }
    }
    return true
  }
  toString() {
    return `${this.dimension} Dimensions Vector [${this.values.join(',')}]`
  }
  toArray() {
    return this.values.map(x => x)
  }

  private dimensionMathCheck(v: VectorN) {
    if (!this.isSameDimension(v)) {
      throw new TypeError(`The diemsion ${this.dimension} and ${v.dimension} is not matched`)
    }
  }
}

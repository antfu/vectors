import VectorN from './vectorN'

export default class Vector2 extends VectorN {
  static ZERO = new Vector2(0, 0)

  constructor(x: number, y: number) {
    super(2, [x || 0, y || 0])
  }

  static with(x: number, y: number) {
    return new Vector2(x, y)
  }
  static fromPolar(angle: number, length: number = 1) {
    return new Vector2(Math.cos(angle) * length, Math.sin(angle) * length)
  }
  static fromObject(obj: any, xAlias = 'x', yAlias = 'y') {
    return new Vector2(obj[xAlias], obj[yAlias])
  }
  static fromArray(arr: Array<any>) {
    return new Vector2(arr[0], arr[1])
  }
  static fromVectorN(v: VectorN) {
    if (v.dimension !== 2) {
      throw new TypeError(`Given VectorN's dimension is ${v.dimension} instead of 2`)
    }
    return Vector2.fromArray(v.values)
  }

  get x() {
    return this.values[0]
  }
  get y() {
    return this.values[1]
  }
  get angle() {
    return Math.atan2(this.y, this.x)
  }
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
  get direction() {
    return this.angle
  }
  get magnitude() {
    return this.length
  }
  get degree() {
    return this.angle / Math.PI / 2 * 360
  }

  withLength(length: number) {
    return Vector2.fromPolar(this.angle, length)
  }
  withAngle(angle: number) {
    return Vector2.fromPolar(angle, this.length)
  }
  withX(x: number) {
    return new Vector2(x, this.y)
  }
  withY(y: number) {
    return new Vector2(this.x, y)
  }
  rotate(angle: number) {
    return Vector2.fromPolar(this.angle + angle, this.length)
  }

  normalize() {
    return this.withLength(1)
  }
  norm() {
    return this.normalize
  }
  negative() {
    return new Vector2(-this.x, -this.y)
  }
  add(v: Vector2 | number) {
    if (v instanceof Vector2) return new Vector2(this.x + v.x, this.y + v.y)
    else return new Vector2(this.x + v, this.y + v)
  }
  addX(x: number) {
    return this.withX(this.x + x)
  }
  addY(y: number) {
    return this.withY(this.y + y)
  }
  subtract(v: Vector2 | number) {
    if (v instanceof Vector2) return new Vector2(this.x - v.x, this.y - v.y)
    else return new Vector2(this.x - v, this.y - v)
  }
  multiply(v: Vector2 | number) {
    if (v instanceof Vector2) return new Vector2(this.x * v.x, this.y * v.y)
    else return new Vector2(this.x * v, this.y * v)
  }
  divide(v: Vector2 | number) {
    if (v instanceof Vector2) return new Vector2(this.x / v.x, this.y / v.y)
    else return new Vector2(this.x / v, this.y / v)
  }
  dot(v: Vector2) {
    return this.x * v.x + this.y * v.y
  }
  cross(v: Vector2) {
    return this.x * v.y - this.y * v.x
  }
  projectTo(v: Vector2) {
    return Vector2.fromPolar(v.angle, this.projectionLegnth(v))
  }
  projectionLegnth(v: Vector2) {
    return this.length * Math.cos(-this.angleBetween(v))
  }
  angleBetween(v: Vector2) {
    return this.angle - v.angle
  }
  toObject(xAlias = 'x', yAlias = 'y') {
    return {
      [xAlias]: this.x,
      [yAlias]: this.y
    }
  }
  toString() {
    return `x: ${this.x}, y: ${this.y}`
  }
  toArray() {
    return [this.x, this.y]
  }
}

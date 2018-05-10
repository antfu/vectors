import version from './version'

export default class Vector2D {
  private _x = 0
  private _y = 0

  static version = version
  static ZERO = new Vector2D()
  static with(x: number, y: number) {
    return new Vector2D(x, y)
  }
  static fromPolar(angle: number, length: number = 1) {
    return new Vector2D(Math.cos(angle) * length, Math.sin(angle) * length)
  }
  static fromObject(obj: any, xAlias = 'x', yAlias = 'y') {
    return new Vector2D(obj[xAlias], obj[yAlias])
  }
  static fromArray(arr: Array<any>) {
    return new Vector2D(arr[0], arr[1])
  }

  constructor(x: number = 0, y: number = 0) {
    this._x = x || 0
    this._y = y || 0
  }

  get x() {
    return this._x
  }
  get y() {
    return this._y
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
    return Vector2D.fromPolar(this.angle, length)
  }
  withAngle(angle: number) {
    return Vector2D.fromPolar(angle, this.length)
  }
  withX(x: number) {
    return new Vector2D(x, this.y)
  }
  withY(y: number) {
    return new Vector2D(this.x, y)
  }
  rotate(angle: number) {
    return Vector2D.fromPolar(this.angle + angle, this.length)
  }

  normalize() {
    return this.withLength(1)
  }
  norm() {
    return this.normalize
  }
  negative() {
    return new Vector2D(-this.x, -this.y)
  }
  add(v: Vector2D | number) {
    if (v instanceof Vector2D) return new Vector2D(this.x + v.x, this.y + v.y)
    else return new Vector2D(this.x + v, this.y + v)
  }
  addX(x: number) {
    return this.withX(this.x + x)
  }
  addY(y: number) {
    return this.withY(this.y + y)
  }
  subtract(v: Vector2D | number) {
    if (v instanceof Vector2D) return new Vector2D(this.x - v.x, this.y - v.y)
    else return new Vector2D(this.x - v, this.y - v)
  }
  multiply(v: Vector2D | number) {
    if (v instanceof Vector2D) return new Vector2D(this.x * v.x, this.y * v.y)
    else return new Vector2D(this.x * v, this.y * v)
  }
  divide(v: Vector2D | number) {
    if (v instanceof Vector2D) return new Vector2D(this.x / v.x, this.y / v.y)
    else return new Vector2D(this.x / v, this.y / v)
  }
  dot(v: Vector2D) {
    return this.x * v.x + this.y * v.y
  }
  cross(v: Vector2D) {
    return this.x * v.y - this.y * v.x
  }
  projectTo(v: Vector2D) {
    return Vector2D.fromPolar(v.angle, this.projectToLegnth(v))
  }
  projectToLegnth(v: Vector2D) {
    return this.length * Math.cos(-this.angleBetween(v))
  }
  angleBetween(v: Vector2D) {
    return this.angle - v.angle
  }
  equals(v: Vector2D) {
    return this.x === v.x && this.y === v.y
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

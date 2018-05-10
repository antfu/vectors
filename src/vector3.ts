import VectorN from './vectorN'

export default class Vector3 extends VectorN {
  static ZERO = new Vector3(0, 0, 0)

  constructor(x: number, y: number, z: number) {
    super(3, [x, y, z])
  }

  static with(x: number, y: number, z: number) {
    return new Vector3(x, y, z)
  }
  static fromObject(obj: any, xAlias = 'x', yAlias = 'y', zAlias = 'z') {
    return new Vector3(obj[xAlias], obj[yAlias], obj[zAlias])
  }
  static fromArray(arr: Array<any>) {
    return new Vector3(arr[0], arr[1], arr[2])
  }
  static fromVectorN(v: VectorN): Vector3 {
    if (v.dimension !== 3) {
      throw new TypeError(`Given VectorN's dimension is ${v.dimension} instead of 3`)
    }
    return Vector3.fromArray(v.values)
  }

  get x() {
    return this.values[0]
  }
  get y() {
    return this.values[1]
  }
  get z() {
    return this.values[2]
  }
  withX(x: number) {
    return new Vector3(x, this.y, this.z)
  }
  withY(y: number) {
    return new Vector3(this.x, y, this.z)
  }
  withZ(z: number) {
    return new Vector3(this.x, this.y, z)
  }

  add(v: Vector3 | number): Vector3 {
    return Vector3.fromVectorN(super.add(v))
  }
  addX(x: number) {
    return this.withX(this.x + x)
  }
  addY(y: number) {
    return this.withY(this.y + y)
  }
  addZ(z: number) {
    return this.withZ(this.z + z)
  }
  subtract(v: Vector3 | number): Vector3 {
    return Vector3.fromVectorN(super.subtract(v))
  }
  multiply(v: Vector3 | number): Vector3 {
    return Vector3.fromVectorN(super.multiply(v))
  }
  divide(v: Vector3 | number): Vector3 {
    return Vector3.fromVectorN(super.divide(v))
  }
  negative(): Vector3 {
    return Vector3.fromVectorN(super.negative())
  }
}

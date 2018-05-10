import { Vector3 } from '../src'
import version from '../src/version'

describe('vector3', () => {
  describe('static', () => {
    it('instantiable', () => {
      expect(new Vector3(0, 0, 0)).toBeInstanceOf(Vector3)
    })
    it('static members', () => {
      expect(Vector3.version).toBe(version)
      expect(Vector3.ZERO).toBeInstanceOf(Vector3)
    })
    it('#fromArray()', function() {
      const arr = [100, 200, 300]
      const vec = Vector3.fromArray(arr)

      expect(vec).toBeInstanceOf(Vector3)
      expect(vec).toHaveProperty('x', arr[0])
      expect(vec).toHaveProperty('y', arr[1])
      expect(vec).toHaveProperty('z', arr[2])
    })
    it('#fromObject()', function() {
      const obj1 = { x: 100, y: 200, z: 300 }
      const vec1 = Vector3.fromObject(obj1)

      expect(vec1).toBeInstanceOf(Vector3)
      expect(vec1).toHaveProperty('x', obj1.x)
      expect(vec1).toHaveProperty('y', obj1.y)
      expect(vec1).toHaveProperty('z', obj1.z)

      const obj2 = { centerX: 300, centerY: 400, centerZ: 500 }
      const vec2 = Vector3.fromObject(obj2, 'centerX', 'centerY', 'centerZ')
      expect(vec2).toBeInstanceOf(Vector3)
      expect(vec2).toHaveProperty('x', obj2.centerX)
      expect(vec2).toHaveProperty('y', obj2.centerY)
      expect(vec2).toHaveProperty('z', obj2.centerZ)
    })

    it('#with()', function() {
      const x = 100
      const y = 200
      const z = 300
      const vec = Vector3.with(x, y, z)

      expect(vec).toBeInstanceOf(Vector3)
      expect(vec).toHaveProperty('x', x)
      expect(vec).toHaveProperty('y', y)
      expect(vec).toHaveProperty('z', z)
    })
  })

  describe('chainable & basic operate', () => {
    it('zero', () => {
      const v1 = new Vector3(0, 0, 0)
      expect(v1.x).toBe(0)
      expect(v1.y).toBe(0)
      expect(v1.length).toBe(0)
      expect(v1.magnitude).toBe(0)
    })
    it('#add()', () => {
      const vec1 = new Vector3(20, 40, 50)
      const vec2 = new Vector3(30, 20, 60)
      const vec3 = vec1.add(vec2)
      const vec4 = vec2.add(vec1)
      const vec5 = vec1.add(20)

      expect(vec3).toBeInstanceOf(Vector3)
      expect(vec4).toBeInstanceOf(Vector3)
      expect(vec5).toBeInstanceOf(Vector3)
      expect(vec3.equals(vec4)).toBeTruthy()

      expect(vec3.x).toBe(50)
      expect(vec3.y).toBe(60)
      expect(vec3.z).toBe(110)

      expect(vec5.x).toBe(40)
      expect(vec5.y).toBe(60)
      expect(vec5.z).toBe(70)
    })
    it('#subtract()', () => {
      const vec1 = new Vector3(20, 40, 50)
      const vec2 = new Vector3(30, 20, 60)
      const vec3 = vec1.subtract(vec2)
      const vec4 = vec1.subtract(20)

      expect(vec3).toBeInstanceOf(Vector3)
      expect(vec4).toBeInstanceOf(Vector3)

      expect(vec3.x).toBe(-10)
      expect(vec3.y).toBe(20)
      expect(vec3.z).toBe(-10)

      expect(vec4.x).toBe(0)
      expect(vec4.y).toBe(20)
      expect(vec4.z).toBe(30)
    })
    it('#multiply()', () => {
      const vec1 = new Vector3(20, 40, 50)
      const vec2 = new Vector3(30, 20, 60)
      const vec3 = vec1.multiply(vec2)
      const vec4 = vec1.multiply(20)

      expect(vec3).toBeInstanceOf(Vector3)
      expect(vec4).toBeInstanceOf(Vector3)

      expect(vec3.x).toBe(20 * 30)
      expect(vec3.y).toBe(40 * 20)
      expect(vec3.z).toBe(50 * 60)
      expect(vec4.x).toBe(20 * 20)
      expect(vec3.y).toBe(40 * 20)
      expect(vec4.z).toBe(50 * 20)
    })
    it('#divide()', () => {
      const vec1 = new Vector3(20, 40, 50)
      const vec2 = new Vector3(30, 20, 60)
      const vec3 = vec1.divide(vec2)
      const vec4 = vec1.divide(20)

      expect(vec3).toBeInstanceOf(Vector3)
      expect(vec4).toBeInstanceOf(Vector3)

      expect(vec3.x).toBe(20 / 30)
      expect(vec3.y).toBe(40 / 20)
      expect(vec3.z).toBe(50 / 60)
      expect(vec4.x).toBe(20 / 20)
      expect(vec3.y).toBe(40 / 20)
      expect(vec4.z).toBe(50 / 20)
    })
    it('#addX()', () => {
      const vec1 = new Vector3(20, 40, 50)
      const vec2 = vec1.addX(10)

      expect(vec2).toBeInstanceOf(Vector3)

      expect(vec2.x).toBe(30)
      expect(vec2.y).toBe(40)
      expect(vec2.z).toBe(50)
    })
    it('#addY()', () => {
      const vec1 = new Vector3(20, 40, 50)
      const vec2 = vec1.addY(-10)

      expect(vec2).toBeInstanceOf(Vector3)

      expect(vec2.x).toBe(20)
      expect(vec2.y).toBe(30)
      expect(vec2.z).toBe(50)
    })
    it('#addZ()', () => {
      const vec1 = new Vector3(20, 40, 50)
      const vec2 = vec1.addZ(-10)

      expect(vec2).toBeInstanceOf(Vector3)

      expect(vec2.x).toBe(20)
      expect(vec2.y).toBe(40)
      expect(vec2.z).toBe(40)
    })
    it('#negative()', () => {
      const vec1 = new Vector3(20, -40, 50)
      const vec2 = vec1.negative()

      expect(vec2).toBeInstanceOf(Vector3)

      expect(vec2.x).toBe(-20)
      expect(vec2.y).toBe(40)
    })
    it('#dot()', () => {
      const vec1 = new Vector3(42, 21, 30)
      const vec2 = new Vector3(44, 42, 39)
      const result = vec1.dot(vec2)

      expect(result).toBe(42 * 44 + 21 * 42 + 30 * 39)
    })
  })

  describe('immuable', () => {
    it('immuable', () => {
      const zero = Vector3.ZERO
      expect(zero.x).toBe(0)
      expect(zero.y).toBe(0)
      const changed = zero.add(50)
      expect(zero.x).toBe(0)
      expect(zero.y).toBe(0)
      expect(changed.x).toBe(50)
      expect(changed.y).toBe(50)
      expect(zero === changed).toBeFalsy()
      expect(zero.equals(changed)).toBeFalsy()
    })
  })
})

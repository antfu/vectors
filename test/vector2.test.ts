import { Vector2 } from '../src'
import version from '../src/version'

describe('vector2', () => {
  describe('static', () => {
    it('instantiable', () => {
      expect(new Vector2(0, 0)).toBeInstanceOf(Vector2)
    })
    it('static members', () => {
      expect(Vector2.version).toBe(version)
      expect(Vector2.ZERO).toBeInstanceOf(Vector2)
    })
    it('#fromArray()', function() {
      const arr = [100, 200]
      const vec = Vector2.fromArray(arr)

      expect(vec).toBeInstanceOf(Vector2)
      expect(vec).toHaveProperty('x', arr[0])
      expect(vec).toHaveProperty('y', arr[1])
    })
    it('#fromObject()', function() {
      const obj1 = { x: 100, y: 200 }
      const vec1 = Vector2.fromObject(obj1)

      expect(vec1).toBeInstanceOf(Vector2)
      expect(vec1).toHaveProperty('x', obj1.x)
      expect(vec1).toHaveProperty('y', obj1.y)

      const obj2 = { centerX: 300, centerY: 400 }
      const vec2 = Vector2.fromObject(obj2, 'centerX', 'centerY')
      expect(vec2).toBeInstanceOf(Vector2)
      expect(vec2).toHaveProperty('x', obj2.centerX)
      expect(vec2).toHaveProperty('y', obj2.centerY)
    })
    it('#fromPolar()', function() {
      const vec = Vector2.fromPolar(Math.PI / 3, 2)

      expect(vec).toBeInstanceOf(Vector2)
      expect(vec.x).toBeCloseTo(1)
      expect(vec.y).toBeCloseTo(Math.sqrt(3))
    })
    it('#with()', function() {
      const x = 100
      const y = 200
      const vec = Vector2.with(x, y)

      expect(vec).toBeInstanceOf(Vector2)
      expect(vec).toHaveProperty('x', x)
      expect(vec).toHaveProperty('y', y)
    })
  })

  describe('chainable & basic operate', () => {
    it('zero', () => {
      const v1 = new Vector2(0, 0)
      expect(v1.x).toBe(0)
      expect(v1.y).toBe(0)
      expect(v1.length).toBe(0)
      expect(v1.magnitude).toBe(0)
      expect(v1.angle).toBe(0)
      expect(v1.direction).toBe(0)
      expect(v1.degree).toBe(0)
    })
    it('60 degrees', () => {
      const v1 = new Vector2(1, Math.sqrt(3))
      expect(v1.x).toBe(1)
      expect(v1.y).toBe(Math.sqrt(3))
      expect(v1.length).toBeCloseTo(2)
      expect(v1.magnitude).toBe(v1.length)
      expect(v1.angle).toBeCloseTo(Math.PI / 3)
      expect(v1.direction).toBe(v1.angle)
      expect(v1.degree).toBeCloseTo(60)
    })
    it('#add()', () => {
      const vec1 = new Vector2(20, 40)
      const vec2 = new Vector2(30, 20)
      const vec3 = vec1.add(vec2)
      const vec4 = vec2.add(vec1)
      const vec5 = vec1.add(20)

      expect(vec3).toBeInstanceOf(Vector2)
      expect(vec4).toBeInstanceOf(Vector2)
      expect(vec5).toBeInstanceOf(Vector2)
      expect(vec3.equals(vec4)).toBeTruthy()

      expect(vec3.x).toBe(50)
      expect(vec3.y).toBe(60)
      expect(vec5.x).toBe(40)
      expect(vec5.y).toBe(60)
    })
    it('#subtract()', () => {
      const vec1 = new Vector2(20, 40)
      const vec2 = new Vector2(30, 20)
      const vec3 = vec1.subtract(vec2)
      const vec4 = vec1.subtract(20)

      expect(vec3).toBeInstanceOf(Vector2)
      expect(vec4).toBeInstanceOf(Vector2)

      expect(vec3.x).toBe(-10)
      expect(vec3.y).toBe(20)
      expect(vec4.x).toBe(0)
      expect(vec4.y).toBe(20)
    })
    it('#multiply()', () => {
      const vec1 = new Vector2(20, 40)
      const vec2 = new Vector2(30, 20)
      const vec3 = vec1.multiply(vec2)
      const vec4 = vec1.multiply(20)

      expect(vec3).toBeInstanceOf(Vector2)
      expect(vec4).toBeInstanceOf(Vector2)

      expect(vec3.x).toBe(20 * 30)
      expect(vec3.y).toBe(40 * 20)
      expect(vec4.x).toBe(20 * 20)
      expect(vec4.y).toBe(40 * 20)
    })
    it('#divide()', () => {
      const vec1 = new Vector2(20, 40)
      const vec2 = new Vector2(30, 20)
      const vec3 = vec1.divide(vec2)
      const vec4 = vec1.divide(20)

      expect(vec3).toBeInstanceOf(Vector2)
      expect(vec4).toBeInstanceOf(Vector2)

      expect(vec3.x).toBe(20 / 30)
      expect(vec3.y).toBe(40 / 20)
      expect(vec4.x).toBe(20 / 20)
      expect(vec4.y).toBe(40 / 20)
    })
    it('#normalize()', () => {
      const vec1 = new Vector2(20, 40)
      const vec2 = vec1.normalize()

      expect(vec2).toBeInstanceOf(Vector2)

      expect(vec2.length).toBeCloseTo(1)
      expect(vec2.angle).toBe(vec1.angle)
    })
    it('#addX()', () => {
      const vec1 = new Vector2(20, 40)
      const vec2 = vec1.addX(10)

      expect(vec2).toBeInstanceOf(Vector2)

      expect(vec2.x).toBe(30)
      expect(vec2.y).toBe(40)
    })
    it('#addY()', () => {
      const vec1 = new Vector2(20, 40)
      const vec2 = vec1.addY(-10)

      expect(vec2).toBeInstanceOf(Vector2)

      expect(vec2.x).toBe(20)
      expect(vec2.y).toBe(30)
    })
    it('#rotate()', () => {
      const vec1 = new Vector2(1, Math.sqrt(3))
      const vec2 = vec1.rotate(Math.PI / 3)

      expect(vec2).toBeInstanceOf(Vector2)

      expect(vec2.length).toBeCloseTo(vec1.length)
      expect(vec2.angle).toBeCloseTo(vec1.angle + Math.PI / 3)
    })
    it('#negative()', () => {
      const vec1 = new Vector2(20, -40)
      const vec2 = vec1.negative()

      expect(vec2).toBeInstanceOf(Vector2)

      expect(vec2.x).toBe(-20)
      expect(vec2.y).toBe(40)
    })
    it('#dot()', () => {
      const vec1 = new Vector2(42, 21)
      const vec2 = new Vector2(44, 42)
      const result = vec1.dot(vec2)

      expect(result).toBe(2730)
    })
  })

  describe('immuable', () => {
    it('immuable', () => {
      const zero = Vector2.ZERO
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

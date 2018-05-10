import VectorN from './vectorN';
export default class Vector3 extends VectorN {
    static ZERO: Vector3;
    constructor(x: number, y: number, z: number);
    static with(x: number, y: number, z: number): Vector3;
    static fromObject(obj: any, xAlias?: string, yAlias?: string, zAlias?: string): Vector3;
    static fromArray(arr: Array<any>): Vector3;
    static fromVectorN(v: VectorN): Vector3;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    withX(x: number): Vector3;
    withY(y: number): Vector3;
    withZ(z: number): Vector3;
    add(v: Vector3 | number): Vector3;
    addX(x: number): Vector3;
    addY(y: number): Vector3;
    addZ(z: number): Vector3;
    subtract(v: Vector3 | number): Vector3;
    multiply(v: Vector3 | number): Vector3;
    divide(v: Vector3 | number): Vector3;
    negative(): Vector3;
}

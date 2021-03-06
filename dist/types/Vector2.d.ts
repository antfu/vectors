import VectorN from './vectorN';
export default class Vector2 extends VectorN {
    static ZERO: Vector2;
    constructor(x: number, y: number);
    static with(x: number, y: number): Vector2;
    static fromPolar(angle: number, length?: number): Vector2;
    static fromObject(obj: any, xAlias?: string, yAlias?: string): Vector2;
    static fromArray(arr: Array<any>): Vector2;
    static fromVectorN(v: VectorN): Vector2;
    readonly x: number;
    readonly y: number;
    readonly angle: number;
    readonly length: number;
    readonly direction: number;
    readonly magnitude: number;
    readonly degree: number;
    withLength(length: number): Vector2;
    withAngle(angle: number): Vector2;
    withX(x: number): Vector2;
    withY(y: number): Vector2;
    rotate(angle: number): Vector2;
    normalize(): Vector2;
    norm(): () => Vector2;
    negative(): Vector2;
    add(v: Vector2 | number): Vector2;
    addX(x: number): Vector2;
    addY(y: number): Vector2;
    subtract(v: Vector2 | number): Vector2;
    multiply(v: Vector2 | number): Vector2;
    divide(v: Vector2 | number): Vector2;
    dot(v: Vector2): number;
    cross(v: Vector2): number;
    projectTo(v: Vector2): Vector2;
    projectToLegnth(v: Vector2): number;
    angleBetween(v: Vector2): number;
    toObject(xAlias?: string, yAlias?: string): {
        [x: string]: number;
    };
    toString(): string;
    toArray(): number[];
}

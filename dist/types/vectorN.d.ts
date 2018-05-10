export default class VectorN {
    static version: string;
    private _values;
    private _dimension;
    constructor(dimension: number | undefined, values: Array<number>);
    static fromArray(arr: Array<any>): VectorN;
    static zeros(dimension: number): VectorN;
    readonly values: number[];
    readonly dimension: number;
    readonly length: number;
    readonly magnitude: number;
    isSameDimension(v: VectorN): boolean;
    negative(): VectorN;
    withValueAt(pos: number, value: number): VectorN;
    valueAt(pos: number): number;
    add(v: VectorN | number): VectorN;
    subtract(v: VectorN | number): VectorN;
    multiply(v: VectorN | number): VectorN;
    divide(v: VectorN | number): VectorN;
    dot(v: VectorN): number;
    equals(v: VectorN): boolean;
    toString(): string;
    toArray(): number[];
    private dimensionMathCheck(v);
}

export declare class Vec2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(vec: Vec2): Vec2;
    multiply(scale: number): Vec2;
    normalize(): Vec2;
}
export declare const getPath: (startPoint: Vec2, movement: Vec2[], close?: boolean) => string;

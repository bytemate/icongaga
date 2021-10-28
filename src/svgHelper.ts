export class Vec2 {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  add(vec: Vec2) {
    return new Vec2(this.x + vec.x, this.y + vec.y);
  }

  multiply(scale: number) {
    return new Vec2(this.x * scale, this.y * scale);
  }

  normalize() {
    const scale = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    return new Vec2(this.x / scale, this.y / scale);
  }
}

export const getPath = (startPoint: Vec2, movement: Vec2[], close = true) =>
  `M ${startPoint.x} ${startPoint.y} ${movement
    .map(vec => `l ${vec.x} ${vec.y}`)
    .join(' ')}${close ? ' z' : ''}`;

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(point: Point): Point {
    this.x += point.x;
    this.y += point.y;
    return this;
  }
}

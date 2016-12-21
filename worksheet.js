class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `${this.x}, ${this.y}`;
    }
}
class ColoredPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `${super.toString()} in ${this.color}`;
    }
}
ColoredPoint.origin = new ColoredPoint(0, 0, 'white');

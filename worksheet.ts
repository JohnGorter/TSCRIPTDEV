

abstract class Point {
    constructor(protected x: number, protected y: number) {}

    toString(){
        return `${this.x}, ${this.y}`;
    }
}

class ColoredPoint extends Point {
    constructor(x: number, y: number, private color: string){
        super(x, y);
    }

    toString(){
        return `${super.toString()} in ${this.color}`;
    }

    static origin = new ColoredPoint(0, 0, 'white');
}

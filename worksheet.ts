

class Point {
    constructor(protected x: number, protected y: number) {}

    toString(){
        return `${this.x}, ${this.y}`;
    }
}

class ColoredPoint extends Point {
    constructor(x: number, y: number, protected color: string){
        super(x, y);
    }

    toString(){
        return `${super.toString()} in ${this.color}`;
    }
}


class Point {
    constructor(public x: number, public y: number){}
}

interface Coordinated extends Point {
    z: number;
}

class OriginPoint implements Point {
    x = 0;
    y = 0;
}

class CoordinatedPoint implements Coordinated{
    z: number;
    y: number;
    x: number
}

class Point {
    constructor(public x: number, public y: number){}
}
const PointCopy = Point;


interface Point {
    x: number;
    y: number;
}
const origin: Point = { x: 0, y: 0 };

const readonlyOrigin = Object.freeze(origin);
readonlyOrigin.x = 34;


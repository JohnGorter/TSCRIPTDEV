var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point3D = (function () {
    function Point3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Point3D;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(x, y, z) {
        return _super.call(this, x, y, z) || this;
    }
    Child.prototype.getX = function () {
        return this.x;
        // => Error: Property 'x' is private and only accessible within class 'Point3D'
    };
    Child.prototype.getY = function () {
        return this.y; // => OK
    };
    return Child;
}(Point3D));
new Point3D(0, 0, 0).z; // => OK
new Point3D(0, 0, 0).y;
// => Error Property 'y' is protected and only accessible within class 'Point3D' and its subclasses.

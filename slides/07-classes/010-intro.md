## Prototypal inheritance

* JavaScript supports something called prototypal inheritance

```javascript
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return this.x + ", " + this.y;
    };
    return Point;
}());
var ColoredPoint = (function (_super) {
    __extends(ColoredPoint, _super);
    function ColoredPoint(x, y, color) {
        var _this = _super.call(this, x, y) || this;
        _this.color = color;
        return _this;
    }
    ColoredPoint.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " in " + this.color;
    };
    return ColoredPoint;
}(Point));
```

<!-- .element class="fragment" data-fragment-index="0" -->

Lets please never do that again.

<!-- .element class="fragment" data-fragment-index="1" -->

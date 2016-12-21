## Classes in TypeScript

Classes in TypeScript look slightly different

```typescript
abstract class Point {
    protected y: number;
    constructor(protected x: number, y: number) { this.y = y; }

    toString() {
        return `${this.x}, ${this.y}`;
    }
}

class ColoredPoint extends Point {
    constructor(x: number, y: number, private color: string) { super(x, y); }

    toString() {
        return `${super.toString()} in ${this.color}`;
    }
}
```

---

## Classes in TypeScript

Classes in TypeScript are more complete:
* Able to use `abstract` classes and methods
* Able to use `private`, `public` and `protected`
* Able to use `static` members
* Able to use generic classes
* A class is always associated with a type

```typescript
const point: ColoredPoint = new ColoredPoint(1, -3, 'red');
```

---

## Constructor

A constructor

---

## Static vs instance


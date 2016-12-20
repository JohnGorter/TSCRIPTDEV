## Extending interfaces

Interfaces can extend each other

```typescript
interface Point {
    x: number;
    y: number;
}

interface ColoredPoint extends Point {
    color: "red" | "blue" | "green";
}
```


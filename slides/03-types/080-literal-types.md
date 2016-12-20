### Literal types

Since TypeScript 2, a literal is also its own type.

```typescript
let theAwserToEverything: 42 = 42;
theAwserToEverything = 6; // => Type '6' is not assignable to type '42'.

let isTheAnswer42: true = 42;
let toBeOrNotToBe: 'thatsTheQuestion' = 'thatsTheQuestion';
```

This can be useful in some usecases, more on that later.

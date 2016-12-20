### Type: `never`

`never` represents a type of object that should not exist.

```typescript
const a = Math.random() > 0.5;
switch(a){
    case true:
    case false:
    break;
    default:
        logNever(a);
}

function logNever(value: never){
    console.log(`value ${value} should not exist, what is happening?`);
}
```

**Question**: When would `never` be useful?

<!-- .element class="fragment" -->

---

TypeScript tries to leap the gap between astronomy and quantom mechanics using `never`.


Something should not happen, but it might. Therefore, we better handle those cases appropriately.

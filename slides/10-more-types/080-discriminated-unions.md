## Discriminated Unions

Combine string literal types, union types, type guards and type aliases.

```typescript
interface Identifier {
    type: 'Identifier';
    name: string;
}
interface Literal {
    type: "Literal";
    value: string | boolean | number | null;
    raw: string;
}
type Node = Identifier | Literal;

const node: Node = /**/;
if (node.type === 'Literal') { // => OK, all types have a `type`
    node// => type: Literal
} else {
    node// => type: Identifier
}
```

It might look complicated, but can be extremly powerful

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Discriminate using an object

You can even discriminated using a readonly object

```typescript
const syntax: {
    readonly literal: 'Literal';
    readonly identifier: 'Identifier';
}  = {
    literal: 'Literal',
    identifier: 'Identifier'
}

if (node.type === syntax.literal) {
    node// => type: Literal
    node.value // Save to use
} else {
    node// => type: Identifier
}
```

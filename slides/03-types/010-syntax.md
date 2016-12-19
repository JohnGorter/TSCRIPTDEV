## Syntax

Add optional type info with colon (`:`) right after the declaration

```typescript
var name:string = 'nicojs';

function add(x:number, y:number):number {
    return x + y;
}

var list:number[] = [2, 4, 5]; // Synonym: var list:Array<number>

var isEven: (number) => boolean = function (n: number) {
    return n % 2 === 0;
}

name = true;
// => Syntax error: Type 'boolean' is not assignable to type 'string'

list = isEven;
// => Type '(number: any) => boolean' is not assignable to type 'number[]'.
```

---

## Syntax explained

Types...

* Are optional
* Only at compile time
* Closely resembles EcmaScript types
    * `string`, `boolean`, `number`, `array`, `undefined`, etc
* Inferred when possible
* Comparable to static code analysis

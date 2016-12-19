
Functions work the same in Typescript as ECMAScript

```Typescript
const z = 100;

function sumWithZ(x,y) {
   return x + y + z;
}
```

---

## Typed-Functions

Strongly typed function using type annotations.

```typescript
const z = 100;

function sumWithZ(x: number, y: number): number {
    return x + y + z;
}
```

Expect errors when you are doing something wrong.<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
const z = "Hello world!"

function sumWithZ(x: number, y: number): number {
    return x + y + z;
    // => Type 'string' is not assignable to type 'number'.
}
```
<!-- .element class="fragment" data-fragment-index="0" -->

---

## Optional parameters

Optional parameters are supported using `?`

```typescript
function printName(firstName: String, lastName?: String) {
    if (lastName) {
        console.log(firstName + " " + lastName);
    } else {
        console.log(firstName);
    }
}
```

Default parameters must be placed after required parameters.
<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
function logToConsole(firstName?: String, lastName: String) {
    // => A required parameter cannot follow an optional parameter.
}
```
<!-- .element class="fragment" data-fragment-index="0" -->

## Functions

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

```Typescript
const z = 100;

function sumWithZ(x: number, y: number): Number {
    return x + y + z;
}
```

Compile can give you errors when you are doing something wrong.

```Typescript
const z = "Hello world!"

function sumWithZ(x: number, y: number): Number {
    return x + y + z; 
    // => [ts] Type 'string' is not assignable to type 'number'.
}
```
---

## Optional parameters

Optional parameters are supported by the Typescript compiler.

```Typescript
function logToConsole(firstName: String, lastName?: String) {
    if (lastName) {
        console.log(firstName + " " + lastName);
    } else {
        console.log(firstName);
    }
}
```
- `lastName` is made optional by the `?` operator.
- Default parameters must be placed after required parameters.

```Typescript
function logToConsole(firstName?: String, lastName: String) {
    // => [ts] A required parameter cannot follow an optional parameter.
}
```
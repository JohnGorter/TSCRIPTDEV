## Basic types
### Primitive types

The primitive types match one-to-one to the ES types

```javascript
const n = 3;
const pi = 3.14
const str = "a string using 'double quotes'";
const str2 = 'a string using "single quotes"';
const str3 = `a string using back thicks (\`)
can be multi line
pi is: ${pi}, or (${Math.floor(pi)})`
const bool = true;
const und = undefined;
```

```javascript
typeof n; //    => 'number'
typeof pi; //   => 'number'
typeof str; //  => 'string'
typeof str2; // => 'string'
typeof str3; // => 'string'
typeof bool; // => 'boolean'
typeof und; //  => 'undefined'
```
<!-- .element class="fragment" data-fragment-index="1"-->

---

### Reference types

#### Array

Arrays work exactly as ES arrays.

```typescript
const list = [1, 2, 3];
let numbers: Array<number>;
let numbers2: number[];
numbers = numbers2 = list
```

---

#### Tuples

Like an array, but with different kind of known types

```typescript
let person: [string, number];
person = ["Henk", 20]; // => OK
person = [10, "Henk"]; // => Syntax error
// Type `[number, string]` is not assignable to type `[string, number]`.
```

Very usefull in combination with type inferrence <!-- .element class="fragment" data-fragment-index="1" -->

```typescript
console.log(person[0].substr(1)); // OK
console.log(person[1].substr(1)); // Error, `number` does not have `substr`
```
<!-- .element class="fragment" data-fragment-index="1" -->

You can even go beyond the known indexes. <!-- .element class="fragment" data-fragment-index="2" -->

```typescript
const maybeNameOrAge = person[3]; // => inferred type: `string | number`
person[3] = "Frank"; // => OK `string` is a `string | number`
console.log(person[5].toString());
// => OK, `string` and `number` both have `toString`
person[6] = true; // => Syntax error, `boolean` isn't `string | number`
```
<!-- .element class="fragment" data-fragment-index="2" -->

**Question**: When would you use this?

<!-- .element class="fragment" data-fragment-index="4" -->

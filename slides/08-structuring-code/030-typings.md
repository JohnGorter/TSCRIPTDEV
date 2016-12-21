## Definition files

- A definition file is a declartion of your library.
- Way of providing your library for JavaScript consumption.

```typescript
// lib.es6.d.ts

declare var foo: string;

declare var Console: {
    prototype: Console;
    new(): Console;
}

interface Console {
    log(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
}
```

---

## Custom declartion file.

Generating your own custom `declaration files` can be done with the `declaration` compiler option.

<!-- .element class="fragment" data-fragment-index="0" -->
```bash
tsc --declartion
```
<!-- .element class="fragment" data-fragment-index="0" -->


Useful when you are writing your own library.

<!-- .element class="fragment" data-fragment-index="1" -->

Supplying your custom `declaration files` can be done inside the `package.json`.

<!-- .element class="fragment" data-fragment-index="2" -->

```json
// package.json

{
  "main": "src/main.js",
  "typings": "src/main.d.ts"
{
```
<!-- .element class="fragment" data-fragment-index="2" -->

---

## Typings

- Typings are defintion files.
- Library's can provide a `typings` definition.
    - Typings can be found at: https://github.com/DefinitelyTyped/DefinitelyTyped
    - Big names publish typings to the *DefinitelyTyped* as well:
        - Angular
        - Express
- Since *TypeScript 2.0* typing files will be installed by default if the library provides `Typings`.

---

## Import resolving

```typescript
import * as log4js from 'log4js';
```

TypeScript will resolve 'log4js' and look for `typings`.
1. ./node_modules/@types/log4js
1. ../node_modules/@types/log4js
1. ../../node_modules/@types/log4js
1. etc.

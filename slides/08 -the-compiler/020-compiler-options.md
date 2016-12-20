## Advisable compiler options

- `--target`
    - ECMAScript target version: `ES5`, `ES6`, `ES2016`, `ES2017`, `ESNext`
- `--watch`
    - Watch for new or edited files and compile them.
- `--moduleResolution`
    - Strategy to figure out where to find the imports.
    - Two options available `Classic` and `Node`
        - `Classic` is mainly there for backwards compatibility.
        - `Node` is what you should use this day and age.

---

## Lib option

- List of librarys to include with compilation.
- To `ES5` and make use of the `ES6` Promise library.

---

<!-- .slide: data-background="url('resources/lab2.jpg')" -->
<!-- .slide: class="lab" -->

## Demo

---

## SourceMap option

Generate corresponding `.map.js` files. Useful for debugging in IDEA or browser.

![Debugging in browser](resources/debugging-ts-browser.png) <!-- .element class="pin-height-400" -->

---

## Module option

Module defines what code to output for `import` and `export` statements.

`commonjs`

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
//TypeScript

import * as express from 'express';
export let app = express();
```

<!-- .element class="fragment" data-fragment-index="0" -->

```javascript
//Generated JavaScript

"use strict";
const express = require('express');
exports.app = express();
```

<!-- .element class="fragment" data-fragment-index="1" -->

---

## Module option

`amd`

```typescript
//TypeScript

import * as express from 'express';
export let app = express();
```

```javascript
//Generated JavaScript

define(["require", "exports", 'express'],
        function (require, exports, express) {
    "use strict";
    exports.app = express();
});
```

---

## Quality options

Compiler options to improve code quality:
- `--noEmitOnError`
- `--noImplicitReturns`
- `--noImplicitAny`
- `--noUnusedLocals`
- `--noUnusedParameters`
- `--strictNullChecks`
- `--forceConsistentCasingInFileNames`

<!-- .element class="no-list-style-type" -->

All available compiler options can be found here: https://www.typescriptlang.org/docs/handbook/compiler-options.html

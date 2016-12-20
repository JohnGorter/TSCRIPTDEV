## Advisable compiler options

- target
    - ECMAScript target version: `ES5`,`ES6`,`ES2016`,`ES2017`,`ESNext`  
- watch
    - Watch for new or edited files and *Transpiles* them.
- moduleResolution
    - Statragy to figure out what an import refers to.
    - Two options available `Classic` and `Node`
    - `Classic` is mainly there for backwards compatibility.
    - `Node` is what you should use this day and age.

---

## Lib option

- List of librarys to include with compilation.
- *Transpile* to `ES5` and make use of the `ES6` Promise library. 

**Example**

---

## SourceMap option

Generate corresponding `.map.js` files.

The `.map.js` is a mapping file between the *JavaScript* and *TypeScript* file.

Using `.map.js` files enables you to debug *TypeScript* code inside the browser or supported IDEA's.  

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
- noEmitOnError
- noImplicitReturns
- noImplicitAny 
- noUnusedLocals
- noUnusedParameters 
- strictNullChecks
- forceConsistentCasingInFileNames

All available compiler options can be found here: https://www.typescriptlang.org/docs/handbook/compiler-options.html
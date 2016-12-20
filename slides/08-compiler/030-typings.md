## Typings

```typescript
import 'log4js';
```

TypeScript will resolve 'log4js'
1. Use `typings` from /node_modules/log4js/package.json
2.


- *TypeScript* definition files are saved as `*.d.ts`.
    - These files contain a definition on how to use the *JavaScript* API with *TypeScript* code.
- Library's can provide a `typings` definition.
    - Typings can be found at: https://github.com/DefinitelyTyped/DefinitelyTyped
    - Big names publish typings to the *DefinitelyTyped* as well:
        - Angular
        - Express
- Since *TypeScript 2.0* typing files will be installed by default if the library provides `Typings`.

---

## Custom Typings

Creating your own custom `typings` can be done with the `declaration` compiler option.

Supplying your custom `typings` can be done inside the `package.json`.
This is only useful when writing your own library.

```json
// package.json

{
  "main": "src/main.js",
  "typings": "src/main.d.ts"
{
```

## Namespaces
<img src="resources/es6.png" alt="ES6" class="emblem">

Namespaces support the use of multiple files.

```typescript
// validation.ts
namespace validation {
    export interface validator { validate(): void; }
}

// firstNameValidator.ts
/// <reference path="validation.ts" />
namespace validation {
    export class firstNameValidator implements validator {
        validate() { /* Implentation omitted. */}  
    }
}
```

---

## Distributing namespaced files

There are two ways of distributing the code. 

1. compile all files into one file.
```bash
tsc --outFile validation.js validation.ts firstNameValidator.ts
```
1. or use the default way make sure all files are included with script tags.

```html
<script src="validation.js" type="text/javascript" />
<script src="firstNameValidator.js" type="text/javascript" />
```

## Configure the compiler

You can use `tsconfig.json` to configure the compiler.

Generate a default config.

```bash
tsc --init
```

output:
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false
    }
}
```

---

## Include & Exclude files 

Exclude files that don't need compiling.

An example hybrid program:

```json
    "include": [
        "src/typescript/**/*"
    ],
    "exclude": [
        "node_modules",
        "src/javascript/**/*"
    ]
```

---

## Advisable compiler options

- lib 
- module
- watch

   Watch for new or edited files and compile them.
- declaration
- moduleResolution
- target
- sourceMap
  
Compiler options to improve code quality:
- noEmitOnError
- noImplicitReturns
- noImplicitAny 
- noUnusedLocals
- noUnusedParameters 
- strictNullChecks
- forceConsistentCasingInFileNames

All available compiler options can be found here: https://www.typescriptlang.org/docs/handbook/compiler-options.html
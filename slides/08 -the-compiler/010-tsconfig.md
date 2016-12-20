## Configure the compiler

You can use `tsconfig.json` to configure the compiler.

Generate a default config.

```bash
tsc --init
```

output:

<!-- .element class="fragment" data-fragment-index="0" -->

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

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Include & Exclude files 

Exclude files that don't need *Transpiles*.

```json
    "include": [
        "src/typescript/**/*"
    ],
    "exclude": [
        "src/typescript/example/server.ts"
    ]
```

Included files by default when not specified: 

<!-- .element class="fragment" data-fragment-index="0" -->

*.ts*, *.d.ts*, *.tsx*

<!-- .element class="fragment" data-fragment-index="0" -->

Excluded files by default when not specified: 

<!-- .element class="fragment" data-fragment-index="1" --> 

*node_modules*, *bower_components*, *jspm_packages*

<!-- .element class="fragment" data-fragment-index="1" -->
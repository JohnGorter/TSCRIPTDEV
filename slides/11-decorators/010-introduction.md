## Decorators

- Introduced with ECMAScript 6. 
<!-- .element class="fragment" data-fragment-index="0" -->
- Provides a way to use annotations and meta-programming syntax.
<!-- .element class="fragment" data-fragment-index="1" -->
- Stage 1 proposal for ECMAScript 6.
<!-- .element class="fragment" data-fragment-index="2" -->

** Decorators are an experimental feature that may change in the future.**
<!-- .element class="fragment" data-fragment-index="2" -->

---

## Decorators

Decorators need to be enabled as a compiler option.

```json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

Special kind of declaration that can be attached to a `class`, `method`, `accessor`, `property` or `parameter` declaration.

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Syntax

@expression is used and must be evaluated to a function at runtime.

```
@logClass
class Person {
    constructor(private name: string) {
    }

    @logMethod
    mary(otherPerson: Person) {
        console.log(`${this.name} maries to ${otherPerson.name}`)
    }
}

new Person('harry').mary(new Person('diane'));

// Call: mary with [{"name":"diane"}]
// harry maries to diane
```

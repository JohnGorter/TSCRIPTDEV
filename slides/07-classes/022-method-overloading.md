## Method overloading

Method overloading can be used with classes.

```typescript
interface SuccessHandler {
    (data: any, textStatus: string): void;
}

class JQuery {
    get(url: string): any;
    get(url: string, handler?: SuccessHandler) {
        // do stuff
    }
}
```

**Question:** What happens if your remove the `?` from `handler`?

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Method overloading restraints

* Overloaded methods share one implementation
* All overloads must be compatible with the implementation



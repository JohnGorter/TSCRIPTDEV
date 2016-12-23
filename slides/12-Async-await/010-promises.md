## Promises

![es6](resources/es6.png)<!-- .element class="emblem"  -->

These day and age everything which requires server interaction is *Async*.
*ES6* has adopted the *Promise/A+* spec and 

Promises

<!-- .element class="fragment" data-fragment-index="0" -->

- Give us handles to handle asynchronous actions.
- Represent some point in the future.
- Guarantee to receive a *value*
- Write async code in a synchronous fashion.

<!-- .element class="fragment" data-fragment-index="0" -->

---

## Creating a Promise

![es6](resources/es6.png)<!-- .element class="emblem"  -->

Creating a new promise can be done by calling he constructor.

```javascript
var promise = new Promise(function(resolve, reject) {
    if(/* condition */) {
        resolve();
    } else {
        reject();
    }
}); 
```

---

## Working with promises

Resolving a promise.


```typescript
var promise = Promise.resolve(42);
```

Consuming a promise.

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
promise
    .then((value) => console.log(`Success! with ${value}`))
    .catch((error) => console.log(`Failure ${error}`));
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Async & Await

Typescript introduces the `async` and `await` keywords.
This allows you to write fully synchronous code that will run asynchronously.

```typescript
function callServer() {
    return new Promise<string>(resolve => {
        //Call server.
    });
}

async function getDataFromServerAndPrint() {
    let res = await callServer();

    console.log(res.data);

    return res;
}
``` 


## Fat arrow functions () =>

Earlier we said the `this` keyword is broken in Javascript. 
Typescript can fixes this with the `Fat arrow function`.

```Typescript
var car = {
    all: ['Model S', 'Golf'],
    selected: '',

    select(carType: string) {
        this.all.forEach(function (t) {
            if (t === carType) {
                this.selected = t; 
            }
         })
    } 
}

car.select('Model S')
console.log(car.selected); // Empty string
console.log(window['selected']); // "Model S" the `this` points to window.
```

---

## Fat arrow functions () =>

Oke lets fix `this`.

```Typescript
var car = {
    all: ['Model S', 'Golf'],
    selected: '',

    select(carType: string) {
        this.all.forEach((t) => {
            if (t === carType) {
                this.selected = t; 
            }
         })
    } 
}

car.select('Model S')
console.log(car.selected); // "Model S"
console.log(window['selected']); // "undefined"
```

`this` now points to it's parent Object.
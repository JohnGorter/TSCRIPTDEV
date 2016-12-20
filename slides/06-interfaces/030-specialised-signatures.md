## Specialised signatures

In JavaScript, functions can be very dynamic

```javascript
var canvas = document.createElement('canvas');
var div = document.createElement('div');
```

In TypeScript, the only way to model these is with interfaces
<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
interface Document {
    createElement(tagName: 'div'): HTMLDivElement;
    createElement(tagName: 'canvas'): HTMLCanvasElement;
    createElement(tagName: string): HTMLElement;
}

const document: Document = window.document;
const div = document.createElement('div');
const canvas = document.createElement('canvas');
canvas.getContext('2d').fillText('nicojs', 20, 30);
div.getContext('2d');
// =>  Error: Property 'getContext' does not exist on type 'HTMLDivElement'.
```
<!-- .element class="fragment" data-fragment-index="0" -->

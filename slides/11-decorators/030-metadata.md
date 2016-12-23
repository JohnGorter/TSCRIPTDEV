## Metadata

`reflect-metadata` is a library which can be used to emit metadata for declarations that have a decorator.

we need to install `reflect-metadata` and turn on the compiler option.

```bash
npm install reflect-metadata
```

```json
// tsconfig.json

{
    "compilerOptions": {
        "emitDecoratorMetadata": true
    }
}
```

For example emit metadata for typings.

---

## Use case

A good example for decorators and metadata is json parsing.   
A library is used to parse json to a typed class.

```json
{
  "firstName": "Jack",
  "lastName": "Sparrow"
}
```

```typescript
export class User {
    firstName: string;
    lastName: string;

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user: User = plainToClass(User, json);
user.getName(); // Jack Sparrow
```
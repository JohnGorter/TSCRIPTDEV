export type Node = Identifier | Literal;

interface Identifier {
    type: 'Identifier';
    name: string;
}
interface Literal {
    type: "Literal";
    value: string | boolean | number | null;
    raw: string;
}

const node: Node = Math.random() > 0.5 ? { type: 'Literal', value: true, raw: '' } : {
    type: 'Identifier',
    name: 'nicojs'
};

const syntax: {
    readonly literal: 'Literal';
    readonly identifier: 'Identifier';
} = {
        literal: 'Literal',
        identifier: 'Identifier'
    }

function handleLiteral(literal: Literal): number {
    // Do complicated stuff
    return 4;
}

function handleError(shouldntExist: never) {
    console.error(`Node not handled: ${shouldntExist}`);
}

// switch (node.type) {
//     case syntax.literal:
//         handleLiteral(node);
//         break;
//     default:
//         handleError(node);
//         // =>  Argument of type 'Identifier' is not assignable to parameter of type 'never'.
//         break;
// }

const p1 = Promise.resolve(42);
const p2 = Promise.resolve("42");
Promise.race([p1, p2]).then(result =>
    result // => 2
)

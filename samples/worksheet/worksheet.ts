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

const node: Node;


const syntax: {
    readonly literal: 'Literal';
    readonly identifier: 'Identifier';
}  = {
    literal: 'Literal',
    identifier: 'Identifier'
}

if (node.type === syntax.literal) {
    node// => type: Literal
    node.value
} else {
    node// => type: Identifier
}

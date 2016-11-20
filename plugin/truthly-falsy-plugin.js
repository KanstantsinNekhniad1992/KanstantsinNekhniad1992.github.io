'use strict';

export default function({types: t}) {

    return {
        name: 'truthly-falsy-plugin',
        visitor: {
            VariableDeclarator(path) {
                if (path.node.init.type === 'BooleanLiteral' && path.node.init.value) {
                    path.node.init.value = false;
                }
            }
        }
    };
}

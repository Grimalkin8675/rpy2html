import { Either } from 'fp-ts/lib/Either';
import * as t from 'io-ts';

import GameProps from '../store/GameProps';
import convertToJs from '../utils/convertToJs';
import AstNode from './AstNode';

interface Args {
    idNexts?: string[];
}

export default class PyExpr extends AstNode {
    private code: string;

    constructor(code: string, { idNexts = [] }: Args = {}) {
        super({ idNexts });
        this.code = convertToJs(code);
    }

    toString = (): string => `PyExpr("${this.code}")`;

    reduce = (gameProps: GameProps): Partial<GameProps> => {
        const res = super.reduce(gameProps);
        try {
            eval(this.code);
        } catch (e) {
            console.error('PyExpr evaluation error:', e);
        }
        return res;
    }

    static decode = (pyExpr: unknown): Either<t.Errors, PyExpr> =>
        PyExprType.decode(pyExpr).map(
            ({ arguments: [code, idNexts] }) => new PyExpr(code, { idNexts })
        )
}

const PyExprType = t.exact(
    t.type({
        class_name: t.literal('PyExpr'),
        arguments: t.tuple([t.string, t.array(t.string)])
    })
);

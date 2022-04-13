import { AndContext, OrContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseLogicalOp: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitAnd(ctx: AndContext): Expression;
        visitOr(ctx: OrContext): Expression;
    };
} & T;
//# sourceMappingURL=logicalOpParser.d.ts.map
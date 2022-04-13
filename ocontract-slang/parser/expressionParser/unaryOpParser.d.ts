import { NegativeContext, NotContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseUnaryOp: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitNegative(ctx: NegativeContext): Expression;
        visitNot(ctx: NotContext): Expression;
    };
} & T;
//# sourceMappingURL=unaryOpParser.d.ts.map
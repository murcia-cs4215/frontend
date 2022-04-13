import { ConcatenationContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseStringBinOp: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitConcatenation(ctx: ConcatenationContext): Expression;
    };
} & T;
//# sourceMappingURL=stringBinOpParser.d.ts.map
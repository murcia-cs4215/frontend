import { AdditionContext, DivisionContext, ModulusContext, MultiplicationContext, SubtractionContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseIntBinOp: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitAddition(ctx: AdditionContext): Expression;
        visitSubtraction(ctx: SubtractionContext): Expression;
        visitMultiplication(ctx: MultiplicationContext): Expression;
        visitDivision(ctx: DivisionContext): Expression;
        visitModulus(ctx: ModulusContext): Expression;
    };
} & T;
//# sourceMappingURL=intBinOpParser.d.ts.map
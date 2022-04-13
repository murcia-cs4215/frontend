import { AdditionFloatContext, DivisionFloatContext, MultiplicationFloatContext, PowerContext, SubtractionFloatContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseFloatBinOp: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitAdditionFloat(ctx: AdditionFloatContext): Expression;
        visitSubtractionFloat(ctx: SubtractionFloatContext): Expression;
        visitMultiplicationFloat(ctx: MultiplicationFloatContext): Expression;
        visitDivisionFloat(ctx: DivisionFloatContext): Expression;
        visitPower(ctx: PowerContext): Expression;
    };
} & T;
//# sourceMappingURL=floatBinOpParser.d.ts.map
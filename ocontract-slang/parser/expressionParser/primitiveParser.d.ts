import { BooleanContext, CharContext, FloatContext, NumberContext, StringContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parsePrimitive: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitNumber(ctx: NumberContext): Expression;
        visitFloat(ctx: FloatContext): Expression;
        visitBoolean(ctx: BooleanContext): Expression;
        visitChar(ctx: CharContext): Expression;
        visitString(ctx: StringContext): Expression;
    };
} & T;
//# sourceMappingURL=primitiveParser.d.ts.map
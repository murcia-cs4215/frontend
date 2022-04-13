import { IdentifierContext, IdentifierExpressionContext, IdentifierWithTypeContext, IdentifierWithTypeParenContext, LetLocalBindingContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseBinding: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitIdentifierExpression(ctx: IdentifierExpressionContext): Expression;
        visitIdentifier(ctx: IdentifierContext): Expression;
        visitIdentifierWithTypeParen(ctx: IdentifierWithTypeParenContext): Expression;
        visitIdentifierWithType(ctx: IdentifierWithTypeContext): Expression;
        visitLetLocalBinding(ctx: LetLocalBindingContext): Expression;
    };
} & T;
//# sourceMappingURL=bindingParser.d.ts.map
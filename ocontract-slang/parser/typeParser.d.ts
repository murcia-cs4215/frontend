import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { FunTypeContext, ParenTypeContext, PrimTypeContext, TypeAnnotationContext } from '../lang/GrammarParser';
import { GrammarVisitor } from '../lang/GrammarVisitor';
import { Type } from '../types/types';
export declare class TypeParser extends AbstractParseTreeVisitor<Type> implements GrammarVisitor<Type> {
    protected defaultResult(): Type;
    visitPrimType(ctx: PrimTypeContext): Type;
    visitParenType(ctx: ParenTypeContext): Type;
    visitFunType(ctx: FunTypeContext): Type;
    visitTypeAnnotation(ctx: TypeAnnotationContext): Type;
}
//# sourceMappingURL=typeParser.d.ts.map
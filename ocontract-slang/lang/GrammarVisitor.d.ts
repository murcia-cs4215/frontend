import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { AtomExpressionContext } from './GrammarParser';
import { IdentifierExpressionContext } from './GrammarParser';
import { ParenthesesContext } from './GrammarParser';
import { PowerContext } from './GrammarParser';
import { MultiplicationContext } from './GrammarParser';
import { DivisionContext } from './GrammarParser';
import { MultiplicationFloatContext } from './GrammarParser';
import { DivisionFloatContext } from './GrammarParser';
import { ModulusContext } from './GrammarParser';
import { AdditionContext } from './GrammarParser';
import { SubtractionContext } from './GrammarParser';
import { AdditionFloatContext } from './GrammarParser';
import { SubtractionFloatContext } from './GrammarParser';
import { LessThanContext } from './GrammarParser';
import { LessThanOrEqualContext } from './GrammarParser';
import { GreaterThanContext } from './GrammarParser';
import { GreaterThanOrEqualContext } from './GrammarParser';
import { EqualStructuralContext } from './GrammarParser';
import { NotEqualStructuralContext } from './GrammarParser';
import { EqualPhysicalContext } from './GrammarParser';
import { NotEqualPhysicalContext } from './GrammarParser';
import { ConcatenationContext } from './GrammarParser';
import { NegativeContext } from './GrammarParser';
import { NotContext } from './GrammarParser';
import { AndContext } from './GrammarParser';
import { OrContext } from './GrammarParser';
import { ConditionalExpressionContext } from './GrammarParser';
import { LetLocalBindingExpressionContext } from './GrammarParser';
import { LambdaExpressionContext } from './GrammarParser';
import { CallFunctionContext } from './GrammarParser';
import { PrimTypeContext } from './GrammarParser';
import { ParenTypeContext } from './GrammarParser';
import { FunTypeContext } from './GrammarParser';
import { NumberContext } from './GrammarParser';
import { FloatContext } from './GrammarParser';
import { BooleanContext } from './GrammarParser';
import { CharContext } from './GrammarParser';
import { StringContext } from './GrammarParser';
import { ContractSimpleExpressionContext } from './GrammarParser';
import { ContractSetNotationContext } from './GrammarParser';
import { ContractListContext } from './GrammarParser';
import { ParenthesesContractContext } from './GrammarParser';
import { TypeContext } from './GrammarParser';
import { AtomContext } from './GrammarParser';
import { StartContext } from './GrammarParser';
import { StatementContext } from './GrammarParser';
import { ExpressionContext } from './GrammarParser';
import { TypeAnnotationContext } from './GrammarParser';
import { ContractExpressionContext } from './GrammarParser';
import { ContractDeclarationContext } from './GrammarParser';
import { IdentifierWithTypeParenContext } from './GrammarParser';
import { IdentifierWithTypeContext } from './GrammarParser';
import { CondExpContext } from './GrammarParser';
import { ParenthesesExpressionContext } from './GrammarParser';
import { FuncArgumentContext } from './GrammarParser';
import { IdentifierContext } from './GrammarParser';
import { IdentifierListWithTypeContext } from './GrammarParser';
import { FuncApplyArgumentListContext } from './GrammarParser';
import { FuncApplicationContext } from './GrammarParser';
import { LambdaContext } from './GrammarParser';
import { LetGlobalBindingContext } from './GrammarParser';
import { LetLocalBindingContext } from './GrammarParser';
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GrammarVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by the `AtomExpression`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomExpression?: (ctx: AtomExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `IdentifierExpression`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `Parentheses`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParentheses?: (ctx: ParenthesesContext) => Result;
    /**
     * Visit a parse tree produced by the `Power`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPower?: (ctx: PowerContext) => Result;
    /**
     * Visit a parse tree produced by the `Multiplication`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplication?: (ctx: MultiplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `Division`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDivision?: (ctx: DivisionContext) => Result;
    /**
     * Visit a parse tree produced by the `MultiplicationFloat`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicationFloat?: (ctx: MultiplicationFloatContext) => Result;
    /**
     * Visit a parse tree produced by the `DivisionFloat`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDivisionFloat?: (ctx: DivisionFloatContext) => Result;
    /**
     * Visit a parse tree produced by the `Modulus`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModulus?: (ctx: ModulusContext) => Result;
    /**
     * Visit a parse tree produced by the `Addition`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddition?: (ctx: AdditionContext) => Result;
    /**
     * Visit a parse tree produced by the `Subtraction`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtraction?: (ctx: SubtractionContext) => Result;
    /**
     * Visit a parse tree produced by the `AdditionFloat`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditionFloat?: (ctx: AdditionFloatContext) => Result;
    /**
     * Visit a parse tree produced by the `SubtractionFloat`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtractionFloat?: (ctx: SubtractionFloatContext) => Result;
    /**
     * Visit a parse tree produced by the `LessThan`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLessThan?: (ctx: LessThanContext) => Result;
    /**
     * Visit a parse tree produced by the `LessThanOrEqual`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => Result;
    /**
     * Visit a parse tree produced by the `GreaterThan`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGreaterThan?: (ctx: GreaterThanContext) => Result;
    /**
     * Visit a parse tree produced by the `GreaterThanOrEqual`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => Result;
    /**
     * Visit a parse tree produced by the `EqualStructural`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqualStructural?: (ctx: EqualStructuralContext) => Result;
    /**
     * Visit a parse tree produced by the `NotEqualStructural`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotEqualStructural?: (ctx: NotEqualStructuralContext) => Result;
    /**
     * Visit a parse tree produced by the `EqualPhysical`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqualPhysical?: (ctx: EqualPhysicalContext) => Result;
    /**
     * Visit a parse tree produced by the `NotEqualPhysical`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotEqualPhysical?: (ctx: NotEqualPhysicalContext) => Result;
    /**
     * Visit a parse tree produced by the `Concatenation`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `Negative`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNegative?: (ctx: NegativeContext) => Result;
    /**
     * Visit a parse tree produced by the `Not`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNot?: (ctx: NotContext) => Result;
    /**
     * Visit a parse tree produced by the `And`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnd?: (ctx: AndContext) => Result;
    /**
     * Visit a parse tree produced by the `Or`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOr?: (ctx: OrContext) => Result;
    /**
     * Visit a parse tree produced by the `ConditionalExpression`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `LetLocalBindingExpression`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetLocalBindingExpression?: (ctx: LetLocalBindingExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `LambdaExpression`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `CallFunction`
     * labeled alternative in `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallFunction?: (ctx: CallFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `PrimType`
     * labeled alternative in `GrammarParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimType?: (ctx: PrimTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `ParenType`
     * labeled alternative in `GrammarParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenType?: (ctx: ParenTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `FunType`
     * labeled alternative in `GrammarParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunType?: (ctx: FunTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `Number`
     * labeled alternative in `GrammarParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by the `Float`
     * labeled alternative in `GrammarParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFloat?: (ctx: FloatContext) => Result;
    /**
     * Visit a parse tree produced by the `Boolean`
     * labeled alternative in `GrammarParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolean?: (ctx: BooleanContext) => Result;
    /**
     * Visit a parse tree produced by the `Char`
     * labeled alternative in `GrammarParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChar?: (ctx: CharContext) => Result;
    /**
     * Visit a parse tree produced by the `String`
     * labeled alternative in `GrammarParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;
    /**
     * Visit a parse tree produced by the `ContractSimpleExpression`
     * labeled alternative in `GrammarParser.contractExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractSimpleExpression?: (ctx: ContractSimpleExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ContractSetNotation`
     * labeled alternative in `GrammarParser.contractExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractSetNotation?: (ctx: ContractSetNotationContext) => Result;
    /**
     * Visit a parse tree produced by the `ContractList`
     * labeled alternative in `GrammarParser.contractExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractList?: (ctx: ContractListContext) => Result;
    /**
     * Visit a parse tree produced by the `ParenthesesContract`
     * labeled alternative in `GrammarParser.contractExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesesContract?: (ctx: ParenthesesContractContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtom?: (ctx: AtomContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.start`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart?: (ctx: StartContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.typeAnnotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.contractExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractExpression?: (ctx: ContractExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.contractDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractDeclaration?: (ctx: ContractDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.identifierWithTypeParen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierWithTypeParen?: (ctx: IdentifierWithTypeParenContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.identifierWithType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierWithType?: (ctx: IdentifierWithTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.condExp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondExp?: (ctx: CondExpContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.parenthesesExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.funcArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncArgument?: (ctx: FuncArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.identifierListWithType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierListWithType?: (ctx: IdentifierListWithTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.funcApplyArgumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncApplyArgumentList?: (ctx: FuncApplyArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.funcApplication`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncApplication?: (ctx: FuncApplicationContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.lambda`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambda?: (ctx: LambdaContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.letGlobalBinding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetGlobalBinding?: (ctx: LetGlobalBindingContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.letLocalBinding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetLocalBinding?: (ctx: LetLocalBindingContext) => Result;
}
//# sourceMappingURL=GrammarVisitor.d.ts.map
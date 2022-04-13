import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ContractDeclarationContext, ExpressionContext, LetGlobalBindingContext, StatementContext } from '../lang/GrammarParser';
import { GrammarVisitor } from '../lang/GrammarVisitor';
import { GlobalLetStatement, Statement } from './types';
export declare class StatementParser extends AbstractParseTreeVisitor<Statement> implements GrammarVisitor<Statement> {
    private expressionParser;
    private contractParser;
    private typeParser;
    protected defaultResult(): Statement;
    private wrapAsExpressionStatement;
    visitStatement(ctx: StatementContext): Statement;
    visitLetGlobalBinding(ctx: LetGlobalBindingContext): GlobalLetStatement;
    visitContractDeclaration(ctx: ContractDeclarationContext): Statement;
    visitExpression(ctx: ExpressionContext): Statement;
    visitErrorNode(node: ErrorNode): Statement;
}
//# sourceMappingURL=statementParser.d.ts.map
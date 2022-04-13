import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ContractListContext, ContractSetNotationContext, ContractSimpleExpressionContext, ParenthesesContractContext } from '../lang/GrammarParser';
import { GrammarVisitor } from '../lang/GrammarVisitor';
import { ContractExpression } from './types';
export declare class ContractParser extends AbstractParseTreeVisitor<ContractExpression> implements GrammarVisitor<ContractExpression> {
    private expressionParser;
    private wrapWithContractExpression;
    protected defaultResult(): ContractExpression;
    visitContractSimpleExpression(ctx: ContractSimpleExpressionContext): ContractExpression;
    visitContractSetNotation(ctx: ContractSetNotationContext): ContractExpression;
    visitContractList(ctx: ContractListContext): ContractExpression;
    visitParenthesesContract(ctx: ParenthesesContractContext): ContractExpression;
}
//# sourceMappingURL=contractParser.d.ts.map
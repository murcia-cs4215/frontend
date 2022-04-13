"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractParser = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const expressionParser_1 = require("./expressionParser");
const utils_1 = require("./utils");
class ContractParser extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.expressionParser = new expressionParser_1.ExpressionParser();
    }
    wrapWithContractExpression(con) {
        return {
            type: 'ContractExpression',
            contract: con,
            loc: con.loc,
        };
    }
    defaultResult() {
        return this.wrapWithContractExpression({
            type: 'EmptyContractExpression',
        });
    }
    visitContractSimpleExpression(ctx) {
        return this.wrapWithContractExpression({
            type: 'FlatContractExpression',
            contract: this.expressionParser.visit(ctx.expression()),
            loc: (0, utils_1.contextToLocation)(ctx),
            isSetNotation: false,
        });
    }
    visitContractSetNotation(ctx) {
        const param = this.expressionParser.visit(ctx.identifierWithType());
        return this.wrapWithContractExpression({
            type: 'FlatContractExpression',
            contract: {
                type: 'LambdaExpression',
                body: this.expressionParser.visit(ctx.expression()),
                params: [param],
                typeDeclaration: {
                    type: 'FunctionType',
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    parameterType: param.typeDeclaration,
                    returnType: {
                        type: 'PrimitiveType',
                        valueType: 'bool',
                    },
                },
                loc: (0, utils_1.contextToLocation)(ctx),
            },
            isSetNotation: true,
        });
    }
    visitContractList(ctx) {
        const contractList = [];
        const contractExpArr = ctx.contractExpression();
        for (let i = 0; i < contractExpArr.length; i++) {
            contractList.push(this.visit(contractExpArr[i]));
        }
        return curryParamContracts(contractList);
    }
    visitParenthesesContract(ctx) {
        return this.wrapWithContractExpression(this.visit(ctx.contractExpression()).contract);
    }
}
exports.ContractParser = ContractParser;
function curryParamContracts(contracts) {
    let finalContract = contracts[contracts.length - 1];
    for (let i = contracts.length - 2; i >= 0; i--) {
        finalContract = {
            type: 'ContractExpression',
            contract: {
                type: 'FunctionContractExpression',
                parameterContract: contracts[i],
                returnContract: finalContract,
            },
        };
    }
    return finalContract;
}
//# sourceMappingURL=contractParser.js.map
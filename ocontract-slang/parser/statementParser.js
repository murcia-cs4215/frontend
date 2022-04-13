"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementParser = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const utils_1 = require("../types/utils");
const constants_1 = require("../constants");
const contractParser_1 = require("./contractParser");
const errors_1 = require("./errors");
const expressionParser_1 = require("./expressionParser");
const typeParser_1 = require("./typeParser");
const utils_2 = require("./utils");
class StatementParser extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.expressionParser = new expressionParser_1.ExpressionParser();
        this.contractParser = new contractParser_1.ContractParser();
        this.typeParser = new typeParser_1.TypeParser();
    }
    defaultResult() {
        return {
            type: 'EmptyStatement',
            loc: constants_1.UNKNOWN_LOCATION,
        };
    }
    wrapAsExpressionStatement(e) {
        return {
            type: 'ExpressionStatement',
            expression: e,
            loc: e.loc,
        };
    }
    visitStatement(ctx) {
        const exp = ctx.expression();
        const letGlob = ctx.letGlobalBinding();
        const conDecl = ctx.contractDeclaration();
        if (exp != undefined) {
            return this.visitExpression(exp);
        }
        else if (letGlob != undefined) {
            return this.visitLetGlobalBinding(letGlob);
        }
        else if (conDecl != undefined) {
            return this.visitContractDeclaration(conDecl);
        }
        return this.defaultResult();
    }
    visitLetGlobalBinding(ctx) {
        let params = [];
        let type;
        if (ctx._params != null) {
            for (let i = 0; i < ctx._params.childCount; i++) {
                const exp = ctx._params
                    .getChild(i)
                    .accept(this.expressionParser);
                params = [...params, exp];
            }
            type = (0, utils_1.curryParamTypes)(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            params.map((p) => p.typeDeclaration), this.typeParser.visit(ctx._idType));
        }
        else {
            type = this.typeParser.visit(ctx._idType);
        }
        return {
            type: 'GlobalLetStatement',
            recursive: ctx.REC() != null,
            left: this.expressionParser.visit(ctx._id),
            params: params,
            right: this.expressionParser.visit(ctx._init),
            typeDeclaration: type,
            loc: (0, utils_2.contextToLocation)(ctx),
        };
    }
    visitContractDeclaration(ctx) {
        const id = this.expressionParser.visit(ctx.identifier());
        return {
            type: 'ContractDeclarationStatement',
            id: id,
            contract: this.contractParser.visit(ctx.contractExpression()),
            loc: (0, utils_2.contextToLocation)(ctx),
        };
    }
    visitExpression(ctx) {
        return this.wrapAsExpressionStatement(this.expressionParser.visit(ctx));
    }
    visitErrorNode(node) {
        throw new errors_1.FatalSyntaxError((0, utils_2.nodeToErrorLocation)(node), 'Syntax error');
    }
}
exports.StatementParser = StatementParser;
//# sourceMappingURL=statementParser.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionParser = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const lodash_flow_1 = __importDefault(require("lodash.flow"));
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const bindingParser_1 = require("./bindingParser");
const comparatorParser_1 = require("./comparatorParser");
const floatBinOpParser_1 = require("./floatBinOpParser");
const functionParser_1 = require("./functionParser");
const intBinOpParser_1 = require("./intBinOpParser");
const logicalOpParser_1 = require("./logicalOpParser");
const primitiveParser_1 = require("./primitiveParser");
const stringBinOpParser_1 = require("./stringBinOpParser");
const unaryOpParser_1 = require("./unaryOpParser");
class BaseParser extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {
            type: 'EmptyExpression',
        };
    }
    visitParenthesesExpression(ctx) {
        return this.visit(ctx._inner);
    }
    visitCondExp(ctx) {
        return {
            type: 'ConditionalExpression',
            test: this.visit(ctx._test),
            consequent: this.visit(ctx._consequent),
            alternate: this.visit(ctx._alternate),
            loc: (0, utils_1.contextToLocation)(ctx),
        };
    }
    visitErrorNode(node) {
        throw new errors_1.FatalSyntaxError((0, utils_1.nodeToErrorLocation)(node), 'Syntax error');
    }
}
// Compose parsing behaviours, which operate like unary functions that can be chained
const ParsingBehaviours = (0, lodash_flow_1.default)(primitiveParser_1.parsePrimitive, intBinOpParser_1.parseIntBinOp, floatBinOpParser_1.parseFloatBinOp, stringBinOpParser_1.parseStringBinOp, logicalOpParser_1.parseLogicalOp, unaryOpParser_1.parseUnaryOp, comparatorParser_1.parseComparator, bindingParser_1.parseBinding, functionParser_1.parseFunction)(BaseParser);
class ExpressionParser extends ParsingBehaviours {
}
exports.ExpressionParser = ExpressionParser;
//# sourceMappingURL=index.js.map
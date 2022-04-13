"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeParser = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const utils_1 = require("../types/utils");
class TypeParser extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {
            type: 'PrimitiveType',
            valueType: 'unit',
        };
    }
    visitPrimType(ctx) {
        return {
            type: 'PrimitiveType',
            valueType: ctx.PRIMITIVETYPE().text,
        };
    }
    visitParenType(ctx) {
        return this.visit(ctx.type());
    }
    visitFunType(ctx) {
        const types = ctx.type();
        const parsedTypes = types.map((p) => this.visit(p));
        return (0, utils_1.curryParamTypes)(parsedTypes.slice(0, parsedTypes.length - 1), parsedTypes[parsedTypes.length - 1]);
    }
    visitTypeAnnotation(ctx) {
        return this.visit(ctx.type());
    }
}
exports.TypeParser = TypeParser;
//# sourceMappingURL=typeParser.js.map
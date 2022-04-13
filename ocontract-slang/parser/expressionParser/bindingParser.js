"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBinding = void 0;
const statementParser_1 = require("../statementParser");
const typeParser_1 = require("../typeParser");
const utils_1 = require("../utils");
const parseBinding = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitIdentifierExpression(ctx) {
            return this.visitIdentifier(ctx.identifier());
        }
        visitIdentifier(ctx) {
            return {
                type: 'Identifier',
                name: ctx.IDENTIFIER().text,
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitIdentifierWithTypeParen(ctx) {
            return this.visit(ctx.identifierWithType());
        }
        visitIdentifierWithType(ctx) {
            return {
                type: 'Identifier',
                name: ctx.identifier().IDENTIFIER().text,
                typeDeclaration: new typeParser_1.TypeParser().visit(ctx._idType),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitLetLocalBinding(ctx) {
            return {
                type: 'LocalLetExpression',
                left: new statementParser_1.StatementParser().visitLetGlobalBinding(ctx.letGlobalBinding()),
                right: this.visit(ctx._exp2),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parseBinding = parseBinding;
//# sourceMappingURL=bindingParser.js.map
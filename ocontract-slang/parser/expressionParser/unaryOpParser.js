"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUnaryOp = void 0;
const utils_1 = require("../utils");
const parseUnaryOp = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitNegative(ctx) {
            return {
                type: 'UnaryExpression',
                operator: '-',
                argument: this.visit(ctx._argument),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitNot(ctx) {
            return {
                type: 'UnaryExpression',
                operator: 'not',
                argument: this.visit(ctx._argument),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parseUnaryOp = parseUnaryOp;
//# sourceMappingURL=unaryOpParser.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLogicalOp = void 0;
const utils_1 = require("../utils");
const parseLogicalOp = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitAnd(ctx) {
            return {
                type: 'LogicalExpression',
                operator: '&&',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitOr(ctx) {
            return {
                type: 'LogicalExpression',
                operator: '||',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parseLogicalOp = parseLogicalOp;
//# sourceMappingURL=logicalOpParser.js.map
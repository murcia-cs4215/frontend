"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringBinOp = void 0;
const utils_1 = require("../utils");
const parseStringBinOp = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitConcatenation(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '^',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parseStringBinOp = parseStringBinOp;
//# sourceMappingURL=stringBinOpParser.js.map
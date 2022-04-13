"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIntBinOp = void 0;
const utils_1 = require("../utils");
const parseIntBinOp = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitAddition(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '+',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitSubtraction(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '-',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitMultiplication(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '*',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitDivision(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '/',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitModulus(ctx) {
            return {
                type: 'BinaryExpression',
                operator: 'mod',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parseIntBinOp = parseIntBinOp;
//# sourceMappingURL=intBinOpParser.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFloatBinOp = void 0;
const utils_1 = require("../utils");
const parseFloatBinOp = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitAdditionFloat(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '+.',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitSubtractionFloat(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '-.',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitMultiplicationFloat(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '*.',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitDivisionFloat(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '/.',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitPower(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '**',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parseFloatBinOp = parseFloatBinOp;
//# sourceMappingURL=floatBinOpParser.js.map
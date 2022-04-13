"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseComparator = void 0;
const utils_1 = require("../utils");
const parseComparator = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitLessThan(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '<',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitLessThanOrEqual(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '<=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitGreaterThan(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '>',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitGreaterThanOrEqual(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '>=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitEqualStructural(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitNotEqualStructural(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '<>',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitEqualPhysical(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '==',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitNotEqualPhysical(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '!=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parseComparator = parseComparator;
//# sourceMappingURL=comparatorParser.js.map
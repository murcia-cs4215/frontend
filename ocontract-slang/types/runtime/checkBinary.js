"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBinaryExpressionType = void 0;
const errors_1 = require("../../interpreter/errors");
const utils_1 = require("../utils");
const formatters_1 = require("../../utils/formatters");
const errors_2 = require("./errors");
const utils_2 = require("./utils");
const checkBinaryExpressionType = (node, operator, left, right, context) => {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case 'mod':
            if (!(0, utils_2.isIntResult)(left)) {
                return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, utils_2.LHS, (0, formatters_1.formatType)(utils_1.intType), (0, formatters_1.formatType)(left.type)));
            }
            else if (!(0, utils_2.isIntResult)(right)) {
                return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, utils_2.RHS, (0, formatters_1.formatType)(utils_1.intType), (0, formatters_1.formatType)(right.type)));
            }
            return;
        case '+.':
        case '-.':
        case '*.':
        case '/.':
        case '**':
            if (!(0, utils_2.isFloatResult)(left)) {
                return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, utils_2.LHS, (0, formatters_1.formatType)(utils_1.floatType), (0, formatters_1.formatType)(left.type)));
            }
            else if (!(0, utils_2.isFloatResult)(right)) {
                return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, utils_2.RHS, (0, formatters_1.formatType)(utils_1.floatType), (0, formatters_1.formatType)(right.type)));
            }
            return;
        case '<':
        case '<=':
        case '>':
        case '>=':
        case '!=':
        case '==':
        case '=':
        case '<>':
            if (((0, utils_2.isIntResult)(left) && !(0, utils_2.isIntResult)(right)) ||
                ((0, utils_2.isFloatResult)(left) && !(0, utils_2.isFloatResult)(right)) ||
                ((0, utils_2.isStringResult)(left) && !(0, utils_2.isStringResult)(right)) ||
                ((0, utils_2.isCharResult)(left) && !(0, utils_2.isCharResult)(right)) ||
                ((0, utils_2.isBoolResult)(left) && !(0, utils_2.isBoolResult)(right))) {
                return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, utils_2.RHS, (0, formatters_1.formatType)(left.type), (0, formatters_1.formatType)(right.type)));
            }
            return;
        case '^':
            if (!(0, utils_2.isStringResult)(left)) {
                return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, utils_2.LHS, (0, formatters_1.formatType)(utils_1.stringType), (0, formatters_1.formatType)(left.type)));
            }
            else if (!(0, utils_2.isStringResult)(right)) {
                return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, utils_2.RHS, (0, formatters_1.formatType)(utils_1.stringType), (0, formatters_1.formatType)(right.type)));
            }
            return;
        default:
            return;
    }
};
exports.checkBinaryExpressionType = checkBinaryExpressionType;
//# sourceMappingURL=checkBinary.js.map
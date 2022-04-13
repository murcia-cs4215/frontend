"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUnaryExpressionType = void 0;
const errors_1 = require("../../interpreter/errors");
const utils_1 = require("../utils");
const formatters_1 = require("../../utils/formatters");
const errors_2 = require("./errors");
const utils_2 = require("./utils");
const checkUnaryExpressionType = (node, operator, value, context) => {
    if (operator === '-' && !(0, utils_2.isIntResult)(value) && !(0, utils_2.isFloatResult)(value)) {
        return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, '', (0, formatters_1.formatType)([utils_1.intType, utils_1.floatType]), (0, formatters_1.formatType)(value.type)));
    }
    else if (operator === 'not' && !(0, utils_2.isBoolResult)(value)) {
        return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, '', (0, formatters_1.formatType)(utils_1.boolType), (0, formatters_1.formatType)(value.type)));
    }
};
exports.checkUnaryExpressionType = checkUnaryExpressionType;
//# sourceMappingURL=checkUnary.js.map
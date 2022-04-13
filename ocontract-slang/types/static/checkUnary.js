"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUnaryExpression = void 0;
const formatters_1 = require("../../utils/formatters");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkUnaryExpression(node, context) {
    const argument = (0, index_1.typeCheck)(node.argument, context);
    const operator = node.operator === '-' ? environment_1.NEGATIVE_OP : node.operator;
    let unaryTypes = (0, environment_1.getType)(context, operator);
    if (!Array.isArray(unaryTypes)) {
        unaryTypes = [unaryTypes];
    }
    for (const pair of unaryTypes) {
        if ((0, utils_1.isSameType)(pair.parameterType, argument)) {
            return pair.returnType;
        }
    }
    throw new errors_1.TypeMismatchError(node.argument, (0, formatters_1.formatType)(unaryTypes.map((u) => u.parameterType)), (0, formatters_1.formatType)(argument));
}
exports.checkUnaryExpression = checkUnaryExpression;
//# sourceMappingURL=checkUnary.js.map
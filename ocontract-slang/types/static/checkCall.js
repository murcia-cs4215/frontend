"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCallExpression = void 0;
const formatters_1 = require("../../utils/formatters");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkCallExpression(node, context) {
    // Two cases to handle here: when all arguments have been supplied vs partial
    const originalFunctionType = (0, index_1.typeCheck)(node.callee, context);
    if (originalFunctionType.type !== 'FunctionType') {
        throw new errors_1.NotAFunctionError((0, formatters_1.formatType)(originalFunctionType), node);
    }
    let functionType = originalFunctionType;
    // Assumption: The validator has already handled cases where num args > num params
    for (let i = 0; i < node.arguments.length; i++) {
        if (functionType.type !== 'FunctionType') {
            throw new errors_1.TooManyArgumentsError((0, formatters_1.formatType)(originalFunctionType), node);
        }
        const expectedType = functionType.parameterType;
        const argumentType = (0, index_1.typeCheck)(node.arguments[i], context);
        if (!(0, utils_1.isSameType)(expectedType, argumentType)) {
            throw new errors_1.TypeMismatchError(node.arguments[i], (0, formatters_1.formatType)(expectedType), (0, formatters_1.formatType)(argumentType));
        }
        functionType = functionType.returnType;
    }
    return functionType;
}
exports.checkCallExpression = checkCallExpression;
//# sourceMappingURL=checkCall.js.map
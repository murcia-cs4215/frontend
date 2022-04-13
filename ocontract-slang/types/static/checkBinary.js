"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBinaryExpression = void 0;
const formatters_1 = require("../../utils/formatters");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkBinaryExpression(node, context) {
    const binaryLeft = (0, index_1.typeCheck)(node.left, context);
    const binaryRight = (0, index_1.typeCheck)(node.right, context);
    let binaryTypes = (0, environment_1.getType)(context, node.operator);
    if (!Array.isArray(binaryTypes)) {
        binaryTypes = [binaryTypes];
    }
    let expectedRight = undefined;
    for (const pair of binaryTypes) {
        if ((0, utils_1.isSameType)(pair.parameterType, binaryLeft)) {
            const resultType = pair.returnType;
            if ((0, utils_1.isSameType)(resultType.parameterType, binaryRight)) {
                return resultType.returnType;
            }
            if (!expectedRight) {
                expectedRight = resultType.parameterType;
            }
        }
    }
    if (expectedRight) {
        throw new errors_1.TypeMismatchError(node.right, (0, formatters_1.formatType)(expectedRight), (0, formatters_1.formatType)(binaryRight));
    }
    throw new errors_1.TypeMismatchError(node.left, (0, formatters_1.formatType)(binaryTypes.map((b) => b.parameterType)), (0, formatters_1.formatType)(binaryLeft));
}
exports.checkBinaryExpression = checkBinaryExpression;
//# sourceMappingURL=checkBinary.js.map
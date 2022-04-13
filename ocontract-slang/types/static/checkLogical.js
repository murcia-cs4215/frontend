"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogicalExpression = void 0;
const formatters_1 = require("../../utils/formatters");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkLogicalExpression(node, context) {
    const logicalLeft = (0, index_1.typeCheck)(node.left, context);
    if (!(0, utils_1.isBool)(logicalLeft)) {
        throw new errors_1.TypeMismatchError(node.left, (0, formatters_1.formatType)(utils_1.boolType), (0, formatters_1.formatType)(logicalLeft));
    }
    const logicalRight = (0, index_1.typeCheck)(node.right, context);
    if (!(0, utils_1.isBool)(logicalRight)) {
        throw new errors_1.TypeMismatchError(node.right, (0, formatters_1.formatType)(utils_1.boolType), (0, formatters_1.formatType)(logicalRight));
    }
    return logicalLeft;
}
exports.checkLogicalExpression = checkLogicalExpression;
//# sourceMappingURL=checkLogical.js.map
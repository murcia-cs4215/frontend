"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConditionalExpression = void 0;
const formatters_1 = require("../../utils/formatters");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkConditionalExpression(node, context) {
    const test = (0, index_1.typeCheck)(node.test, context);
    if (!(0, utils_1.isBool)(test)) {
        throw new errors_1.TypeMismatchError(node.test, (0, formatters_1.formatType)(utils_1.boolType), (0, formatters_1.formatType)(test));
    }
    const consequent = (0, index_1.typeCheck)(node.consequent, context);
    const alternate = (0, index_1.typeCheck)(node.alternate, context);
    if (!(0, utils_1.isSameType)(consequent, alternate)) {
        throw new errors_1.TypeMismatchError(node.alternate, (0, formatters_1.formatType)(consequent), (0, formatters_1.formatType)(alternate));
    }
    return consequent;
}
exports.checkConditionalExpression = checkConditionalExpression;
//# sourceMappingURL=checkConditional.js.map
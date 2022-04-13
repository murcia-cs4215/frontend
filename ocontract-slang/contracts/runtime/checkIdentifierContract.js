"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdentifierContract = void 0;
const environment_1 = require("../environment");
const closure_1 = require("../../interpreter/closure");
const utils_1 = require("../utils");
function checkIdentifierContract(node, context, result) {
    node.contract = (0, environment_1.lookupContract)(node.name, context);
    if (node.contract &&
        node.pos &&
        node.neg &&
        result.value instanceof closure_1.Closure) {
        (0, utils_1.wrapExpressionInMonitor)(result.value.originalNode, node.contract, node.pos, node.neg);
    }
}
exports.checkIdentifierContract = checkIdentifierContract;
//# sourceMappingURL=checkIdentifierContract.js.map
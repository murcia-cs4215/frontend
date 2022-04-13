"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkReturnValueContract = exports.checkArgumentContract = void 0;
const utils_1 = require("../../types/utils");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
function checkArgumentContract(closure, arg, // Should be cloned
context) {
    if ((0, utils_3.verifyContractExists)(closure.originalNode, context)) {
        const originalContract = closure.originalNode.contract;
        if ((0, utils_1.isPrimitiveType)(arg.type)) {
            (0, utils_3.checkFlatContract)(closure.originalNode, arg, originalContract.parameterContract, context, closure.originalNode.neg);
        }
        else {
            // higher order function
            (0, utils_2.wrapExpressionInMonitor)(arg.value.originalNode, originalContract.parameterContract, closure.originalNode.neg, closure.originalNode.pos);
        }
    }
}
exports.checkArgumentContract = checkArgumentContract;
function checkReturnValueContract(closure, result, context) {
    if ((0, utils_3.verifyContractExists)(closure.originalNode, context)) {
        const contract = closure.originalNode.contract;
        if ((0, utils_1.isPrimitiveType)(result.type)) {
            (0, utils_3.checkFlatContract)(closure.originalNode, result, contract.returnContract, context, closure.originalNode.pos);
        }
        else {
            (0, utils_2.wrapExpressionInMonitor)(result.value.originalNode, contract.returnContract, closure.originalNode.pos, closure.originalNode.neg);
        }
    }
}
exports.checkReturnValueContract = checkReturnValueContract;
//# sourceMappingURL=checkApplyContract.js.map
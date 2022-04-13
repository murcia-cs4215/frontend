"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapExpressionInMonitor = void 0;
function wrapExpressionInMonitor(exp, contract, pos, neg) {
    exp.contract = contract;
    exp.pos = pos;
    exp.neg = neg;
}
exports.wrapExpressionInMonitor = wrapExpressionInMonitor;
//# sourceMappingURL=utils.js.map
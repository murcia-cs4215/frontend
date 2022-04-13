"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractNotWellFormedError = exports.ContractViolationError = void 0;
const runtimeSourceError_1 = require("../../errors/runtimeSourceError");
const types_1 = require("../../errors/types");
const constants_1 = require("../../constants");
class ContractViolationError extends runtimeSourceError_1.RuntimeSourceError {
    constructor(node, contract, blame) {
        super(node);
        this.contract = contract;
        this.blame = blame;
        this.type = types_1.ErrorType.RUNTIME;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    explain() {
        var _a;
        const loc = (_a = this.contract.loc) !== null && _a !== void 0 ? _a : constants_1.UNKNOWN_LOCATION;
        return ('Contract violation!\n' +
            `Blame: ${this.blame}\n` +
            `Contract at: Line ${loc.start.line}, Column ${loc.start.column}`);
    }
    elaborate() {
        return this.explain();
    }
}
exports.ContractViolationError = ContractViolationError;
class ContractNotWellFormedError extends runtimeSourceError_1.RuntimeSourceError {
    constructor(node, message) {
        super(node);
        this.message = message;
        this.type = types_1.ErrorType.RUNTIME;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    explain() {
        return this.message;
    }
    elaborate() {
        return this.explain();
    }
}
exports.ContractNotWellFormedError = ContractNotWellFormedError;
//# sourceMappingURL=errors.js.map
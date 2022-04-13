"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeTypeError = void 0;
const runtimeSourceError_1 = require("../../errors/runtimeSourceError");
const types_1 = require("../../errors/types");
class RuntimeTypeError extends runtimeSourceError_1.RuntimeSourceError {
    constructor(node, side, expected, got) {
        super(node);
        this.side = side;
        this.expected = expected;
        this.got = got;
        this.type = types_1.ErrorType.RUNTIME;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    explain() {
        return `Expected ${this.expected}${this.side}, got ${this.got}.`;
    }
    elaborate() {
        return this.explain();
    }
}
exports.RuntimeTypeError = RuntimeTypeError;
//# sourceMappingURL=errors.js.map
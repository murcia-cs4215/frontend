"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertClosure = exports.handleRuntimeError = exports.InterpreterError = void 0;
const runtimeSourceError_1 = require("../errors/runtimeSourceError");
const types_1 = require("../errors/types");
const closure_1 = require("./closure");
class InterpreterError extends runtimeSourceError_1.RuntimeSourceError {
    constructor(node, message = 'Unexpected evaluation') {
        super(node);
        this.node = node;
        this.message = message;
        this.type = types_1.ErrorType.SYNTAX;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    explain() {
        return this.message;
    }
    elaborate() {
        return 'There is an evaluation error. This is an internal error - likely, the interpretation of this type of expression is not yet implemented.';
    }
}
exports.InterpreterError = InterpreterError;
function handleRuntimeError(context, error) {
    context.runtime.environments = context.runtime.environments.slice(-context.numberOfOuterEnvironments);
    throw error;
}
exports.handleRuntimeError = handleRuntimeError;
function assertClosure(closure, node, context) {
    if (!(closure instanceof closure_1.Closure)) {
        return handleRuntimeError(context, new InterpreterError(node, 'A non-function was called, which should have been caught by the type checker'));
    }
    return true;
}
exports.assertClosure = assertClosure;
//# sourceMappingURL=errors.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FatalSyntaxError = void 0;
const types_1 = require("../errors/types");
class FatalSyntaxError {
    constructor(location, message) {
        this.location = location;
        this.message = message;
        this.type = types_1.ErrorType.SYNTAX;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    explain() {
        return this.message;
    }
    elaborate() {
        return 'There is a syntax error in your program';
    }
}
exports.FatalSyntaxError = FatalSyntaxError;
//# sourceMappingURL=errors.js.map
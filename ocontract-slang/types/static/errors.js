"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTypeMismatchError = exports.InvalidContractReturnTypeError = exports.NotAFunctionError = exports.TooManyArgumentsError = exports.UnboundValueError = exports.TypeMismatchError = exports.StaticTypeError = void 0;
const constants_1 = require("../../constants");
const types_1 = require("../../errors/types");
class StaticTypeError {
    constructor(node) {
        this.node = node;
        this.type = types_1.ErrorType.TYPE;
        this.severity = types_1.ErrorSeverity.ERROR;
    }
    get location() {
        var _a;
        return (_a = this.node.loc) !== null && _a !== void 0 ? _a : constants_1.UNKNOWN_LOCATION;
    }
    explain() {
        return 'Static type error has occurred!';
    }
    elaborate() {
        return this.explain();
    }
}
exports.StaticTypeError = StaticTypeError;
class TypeMismatchError extends StaticTypeError {
    constructor(node, expected, got) {
        super(node);
        this.node = node;
        this.expected = expected;
        this.got = got;
    }
    explain() {
        return `This expression has type ${this.got} but an expression was expected of type ${this.expected}`;
    }
    elaborate() {
        return this.explain();
    }
}
exports.TypeMismatchError = TypeMismatchError;
class UnboundValueError extends StaticTypeError {
    constructor(name, node) {
        super(node);
        this.name = name;
    }
    explain() {
        return `Unbound value ${this.name}`;
    }
    elaborate() {
        return `Before you can read the value of ${this.name}, you need to bind it to a value.`;
    }
}
exports.UnboundValueError = UnboundValueError;
class TooManyArgumentsError extends StaticTypeError {
    constructor(functionType, node) {
        super(node);
        this.functionType = functionType;
    }
    explain() {
        return `This function has type ${this.functionType}`;
    }
    elaborate() {
        return "It is applied to too many arguments; maybe you forgot a `;'.";
    }
}
exports.TooManyArgumentsError = TooManyArgumentsError;
class NotAFunctionError extends StaticTypeError {
    constructor(expressionType, node) {
        super(node);
        this.expressionType = expressionType;
    }
    explain() {
        return `This expression has type ${this.expressionType}`;
    }
    elaborate() {
        return 'This is not a function; it cannot be applied or be used as a contract.';
    }
}
exports.NotAFunctionError = NotAFunctionError;
class InvalidContractReturnTypeError extends StaticTypeError {
    constructor(node, got) {
        super(node);
        this.node = node;
        this.got = got;
    }
    explain() {
        return `This contract has checks that return type ${this.got} instead of type bool`;
    }
    elaborate() {
        return this.explain();
    }
}
exports.InvalidContractReturnTypeError = InvalidContractReturnTypeError;
class ContractTypeMismatchError extends StaticTypeError {
    constructor(node, expected, got) {
        super(node);
        this.node = node;
        this.expected = expected;
        this.got = got;
    }
    explain() {
        return `This name has type ${this.got} but its contract was expecting type ${this.expected}`;
    }
    elaborate() {
        return this.explain();
    }
}
exports.ContractTypeMismatchError = ContractTypeMismatchError;
//# sourceMappingURL=errors.js.map
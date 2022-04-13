"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectNotAFunction = exports.expectContractViolation = exports.expectContractTypeError = exports.expectContractReturnTypeError = exports.expectTypeError = exports.expectError = exports.runTest = void 0;
const assert_1 = __importDefault(require("assert"));
const context_1 = require("../context");
const index_1 = require("../index");
const formatters_1 = require("./formatters");
function runTest(code) {
    const context = (0, context_1.createContext)();
    return (0, index_1.run)(code, context);
}
exports.runTest = runTest;
function expectError(result, explainMessage, elaborateMessage) {
    expect(result.status).toBe('errored');
    (0, assert_1.default)('error' in result);
    expect(result.error.explain()).toBe(explainMessage);
    if (elaborateMessage) {
        expect(result.error.elaborate()).toBe(elaborateMessage);
    }
}
exports.expectError = expectError;
function expectTypeError(result, expected, got) {
    expectError(result, `This expression has type ${(0, formatters_1.formatType)(got)} but an expression was expected of type ${typeof expected === 'string' ? expected : (0, formatters_1.formatType)(expected)}`);
}
exports.expectTypeError = expectTypeError;
function expectContractReturnTypeError(result, got) {
    expectError(result, `This contract has checks that return type ${(0, formatters_1.formatType)(got)} instead of type bool`);
}
exports.expectContractReturnTypeError = expectContractReturnTypeError;
function expectContractTypeError(result, expected, got) {
    expectError(result, `This name has type ${(0, formatters_1.formatType)(got)} but its contract was expecting type ${(0, formatters_1.formatType)(expected)}`);
}
exports.expectContractTypeError = expectContractTypeError;
function expectContractViolation(result, blame, row, col) {
    expectError(result, `Contract violation!\nBlame: ${blame}\nContract at: Line ${row}, Column ${col}`);
}
exports.expectContractViolation = expectContractViolation;
function expectNotAFunction(result, type) {
    expectError(result, `This expression has type ${(0, formatters_1.formatType)(type)}`, 'This is not a function; it cannot be applied or be used as a contract.');
}
exports.expectNotAFunction = expectNotAFunction;
//# sourceMappingURL=tests.js.map
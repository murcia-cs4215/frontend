"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('contract that does not return bool', () => {
    const res = (0, tests_1.runTest)(`let f (x : int) : int = x;;
contract g = f;;`);
    (0, tests_1.expectContractReturnTypeError)(res, utils_1.intType);
});
test('contract in set notation that does not return bool', () => {
    const res = (0, tests_1.runTest)('contract g = {x : int | x + 1};;');
    (0, tests_1.expectTypeError)(res, utils_1.boolType, utils_1.intType); // TODO: Look into triggering the other error instead
});
test('contract that is not a function', () => {
    const res = (0, tests_1.runTest)('contract f = 5;;');
    (0, tests_1.expectNotAFunction)(res, utils_1.intType);
});
test('contract closure type does not match parameter type', () => {
    const res = (0, tests_1.runTest)(`contract f = {x : int | x > 0} -> {y : string | true};;
let f (x : string) : string = x ^ "World";;`);
    (0, tests_1.expectContractTypeError)(res, (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.stringType), (0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.stringType));
});
test('contract closure type does not match return type', () => {
    const res = (0, tests_1.runTest)(`contract f = {x : string | x > "Hello"} -> {y : int | true};;
let f (x : string) : string = x ^ "World";;`);
    (0, tests_1.expectContractTypeError)(res, (0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.intType), (0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.stringType));
});
test('contract arity mismatch', () => {
    const res = (0, tests_1.runTest)(`contract f = {x : int | x > 0};;
let f (x : int) : int = x;;`);
    (0, tests_1.expectContractTypeError)(res, utils_1.intType, (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType));
});
test('using flat contract for a hof', () => {
    const res = (0, tests_1.runTest)(`contract f = {x : int | x > 0} -> {y : int | y > 0};;
let f (x : int -> int) : int = x 0;;`);
    (0, tests_1.expectContractTypeError)(res, (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType), (0, utils_1.makeFunctionType)((0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType), utils_1.intType));
});
test('using function contract for a non-function parameter', () => {
    const res = (0, tests_1.runTest)(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z: int | z > 0};;
let f (x : int) : int = x;;`);
    (0, tests_1.expectContractTypeError)(res, (0, utils_1.makeFunctionType)((0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType), utils_1.intType), (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType));
});
test('currying functions with contract', () => {
    // No violation
    const res = (0, tests_1.runTest)(`contract f = {x : int | x > 1} -> {y : int | y > x} -> {z : int | z > 2 * x};;
let f (x : int) (y: int) : int = x + y;;
let g : int -> int = f 5;;
g 6;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 11,
        type: utils_1.intType,
    });
});
//# sourceMappingURL=type_declarations_contracts.test.js.map
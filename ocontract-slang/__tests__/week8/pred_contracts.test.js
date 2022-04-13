"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('contract violation on assignment', () => {
    const res = (0, tests_1.runTest)(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = -1;;`);
    (0, tests_1.expectContractViolation)(res, 'main', 2, 0); // contract definition location
});
test('no contract violation if satisfy contract', () => {
    const res = (0, tests_1.runTest)(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = 1;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 1,
        type: utils_1.intType,
        name: 'f',
    });
});
test('contract violation on complex expression', () => {
    const res = (0, tests_1.runTest)(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = if false then 1 + 3 else (-1) - 100;;`);
    (0, tests_1.expectContractViolation)(res, 'main', 2, 0); // contract definition location
});
test('no contract violation on complex expression if satisfy contract', () => {
    const res = (0, tests_1.runTest)(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = if true then 1 + 3 else (-1) - 100;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 4,
        type: utils_1.intType,
        name: 'f',
    });
});
test('contract with complex expression', () => {
    const res = (0, tests_1.runTest)(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let f : int = if true then 1 + 3 else (-1) - 100;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 4,
        type: utils_1.intType,
        name: 'f',
    });
});
test('contract violation in let local binding LHS', () => {
    const res = (0, tests_1.runTest)(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let f : int = 0 in f + 1;;`);
    (0, tests_1.expectContractViolation)(res, 'main', 2, 0); // contract definition location
});
test('no contract violation in let local binding LHS', () => {
    const res = (0, tests_1.runTest)(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let f : int = 1 in f + 1;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 2,
        type: utils_1.intType,
    });
});
test('contract violation in let local binding RHS', () => {
    const res = (0, tests_1.runTest)(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let x : int = 0 in let f : int = 0 in 5;;`);
    (0, tests_1.expectContractViolation)(res, 'main', 2, 0); // contract definition location
});
test('no contract violation in let local binding RHS', () => {
    const res = (0, tests_1.runTest)(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let x : int = 0 in let f : int = 1 in 5;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 5,
        type: utils_1.intType,
    });
});
//# sourceMappingURL=pred_contracts.test.js.map
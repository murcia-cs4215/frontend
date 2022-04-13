"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('unbound name', () => {
    const res = (0, tests_1.runTest)('x;;');
    (0, tests_1.expectError)(res, 'Unbound value x');
});
test('global binding expression', () => {
    const res = (0, tests_1.runTest)('let x : int = 10;;');
    expect(res).toEqual({
        status: 'finished',
        value: 10,
        type: utils_1.intType,
        name: 'x',
    });
});
test('bound identifier', () => {
    const res = (0, tests_1.runTest)(`let x : int = 10;;
x;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 10,
        type: utils_1.intType,
    });
});
test('rebinding identifier', () => {
    let res = (0, tests_1.runTest)(`let x : int = 10;;
let x : int = 20;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 20,
        type: utils_1.intType,
        name: 'x',
    });
    res = (0, tests_1.runTest)(`let x : int = 10;;
let x : int = 20;;
x;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 20,
        type: utils_1.intType,
    });
});
test('local binding expression', () => {
    const res = (0, tests_1.runTest)('let x : int = 10 in x;;');
    expect(res).toEqual({
        status: 'finished',
        value: 10,
        type: utils_1.intType,
    });
});
test('local binding with operations', () => {
    const res = (0, tests_1.runTest)('let x : int = 10 in x + 10;;');
    expect(res).toEqual({
        status: 'finished',
        value: 20,
        type: utils_1.intType,
    });
});
test('local binding with nesting', () => {
    const res = (0, tests_1.runTest)(`let a : int = 1 in
  let b : int = a + 1 in
    let c : int = b + 1 in
      a + b + c;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 6,
        type: utils_1.intType,
    });
});
test('local binding scopes the declaration', () => {
    const res = (0, tests_1.runTest)(`let a : int = 1 in a;;
a;;`);
    (0, tests_1.expectError)(res, 'Unbound value a');
});
test('operation after binding', () => {
    const res = (0, tests_1.runTest)(`let x : int = 10;;
x + 20;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 30,
        type: utils_1.intType,
    });
});
test('local binding with functions', () => {
    const res = (0, tests_1.runTest)('let x (y : int) : int = y + 10 in x 20 + 10;;');
    expect(res).toEqual({
        status: 'finished',
        value: 40,
        type: utils_1.intType,
    });
});
//# sourceMappingURL=bindings.test.js.map
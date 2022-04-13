"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('single parameter function', () => {
    const res = (0, tests_1.runTest)('let x (a : int) : int = a + 10;;');
    expect(res).toMatchObject({
        status: 'finished',
        type: (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType),
    });
});
test('multiple parameter function', () => {
    const res = (0, tests_1.runTest)('let x (a : int) (b : int) : int = a + b;;');
    expect(res).toMatchObject({
        status: 'finished',
        type: (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType),
    });
});
test('recursive function declaration', () => {
    const res = (0, tests_1.runTest)('let rec fact (a : int) : int = if a = 0 then 1 else fact (a - 1) * a;;');
    expect(res).toMatchObject({
        status: 'finished',
        type: (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType),
    });
});
test('function call with one argument', () => {
    const res = (0, tests_1.runTest)(`let x (a : int) : int = a + 10;;
x 20;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 30,
        type: utils_1.intType,
    });
});
test('function call with two arguments', () => {
    const res = (0, tests_1.runTest)(`let x (a : int) (b : int) : int = a + b;;
x 20 10;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 30,
        type: utils_1.intType,
    });
});
test('function currying', () => {
    const res = (0, tests_1.runTest)(`let x (a : int) (b : int) : int = a + b;;
let y : int -> int = x 10;;`);
    expect(res).toMatchObject({
        status: 'finished',
        type: (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType),
    });
});
test('function currying with call', () => {
    const res = (0, tests_1.runTest)(`let x (a : int) (b : int) : int = a + b;;
let y : int -> int = x 10;;
y 20;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 30,
        type: utils_1.intType,
    });
});
test('closure captures previous environment', () => {
    const res = (0, tests_1.runTest)(`let m : int = 10;;
let x (a : int) : int = m + a;;
let m : int = 30;;
x 5;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 15,
        type: utils_1.intType,
    });
});
test('multiple closures all capture their previous environments correctly', () => {
    const res = (0, tests_1.runTest)(`let m : int = 10;;
let x (a : int) : int = m + a;;
let m : int = 30;;
let j (y : int) : int = m + x y;;
j 5;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 45,
        type: utils_1.intType,
    });
});
test('recursive function application', () => {
    const res = (0, tests_1.runTest)(`let rec fact (n : int) : int = if n == 0 then 1 else fact (n - 1) * n;;
fact 5;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 120,
        type: utils_1.intType,
    });
});
test('application of non-function', () => {
    const res = (0, tests_1.runTest)(`let x : int = 5;;
x 10;;`);
    (0, tests_1.expectNotAFunction)(res, utils_1.intType);
});
//# sourceMappingURL=functions.test.js.map
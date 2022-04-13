"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('float', () => {
    const res = (0, tests_1.runTest)('1.;;');
    expect(res).toEqual({
        status: 'finished',
        value: 1,
        type: utils_1.floatType,
    });
});
test('negative float', () => {
    const res = (0, tests_1.runTest)('-1.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: -1.5,
        type: utils_1.floatType,
    });
});
test('float addition', () => {
    let res = (0, tests_1.runTest)('1.1 +. 2.4;;');
    expect(res).toEqual({
        status: 'finished',
        value: 3.5,
        type: utils_1.floatType,
    });
    res = (0, tests_1.runTest)('1.1 +. -2.6;;');
    expect(res).toEqual({
        status: 'finished',
        value: -1.5,
        type: utils_1.floatType,
    });
});
test('float subtraction', () => {
    let res = (0, tests_1.runTest)('10.5 -. 12.75;;');
    expect(res).toEqual({
        status: 'finished',
        value: -2.25,
        type: utils_1.floatType,
    });
    res = (0, tests_1.runTest)('10.5 -. -12.75;;');
    expect(res).toEqual({
        status: 'finished',
        value: 23.25,
        type: utils_1.floatType,
    });
});
test('float multiplication', () => {
    let res = (0, tests_1.runTest)('2.5 *. 50.6;;');
    expect(res).toEqual({
        status: 'finished',
        value: 126.5,
        type: utils_1.floatType,
    });
    res = (0, tests_1.runTest)('2.5 *. -50.6;;');
    expect(res).toEqual({
        status: 'finished',
        value: -126.5,
        type: utils_1.floatType,
    });
});
test('float division', () => {
    let res = (0, tests_1.runTest)('100.45 /. 6.4;;');
    expect(res).toEqual({
        status: 'finished',
        value: 15.6953125,
        type: utils_1.floatType,
    });
    res = (0, tests_1.runTest)('100.45 /. -6.4;;');
    expect(res).toEqual({
        status: 'finished',
        value: -15.6953125,
        type: utils_1.floatType,
    });
});
test('float division by 0', () => {
    const res = (0, tests_1.runTest)('100.5 /. 0.0;;');
    expect(res).toEqual({
        status: 'finished',
        value: Infinity,
        type: utils_1.floatType,
    });
});
test('float greaterthan', () => {
    const res = (0, tests_1.runTest)('50.5 > 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('float smallerthan', () => {
    const res = (0, tests_1.runTest)('49.1 < 50.2;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('float greaterthanequals', () => {
    const res = (0, tests_1.runTest)('50.6 >= 50.6;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('float smallerthanequals', () => {
    const res = (0, tests_1.runTest)('50.5 <= 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('float structural equality', () => {
    let res = (0, tests_1.runTest)('50.5 = 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49.5 = 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('float structural inequality', () => {
    let res = (0, tests_1.runTest)('50.5 <> 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49.5 <> 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('float physical equality', () => {
    let res = (0, tests_1.runTest)('50.5 == 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49.5 == 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('float physical inequality', () => {
    let res = (0, tests_1.runTest)('50.5 != 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49.5 != 50.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('parenthesized expression', () => {
    const res = (0, tests_1.runTest)('(1.5 +. 2.2);;');
    expect(res).toEqual({
        status: 'finished',
        value: 3.7,
        type: utils_1.floatType,
    });
});
test('float order of precedence', () => {
    const res = (0, tests_1.runTest)('1.5 +. 2.5 /. 2.0;;');
    expect(res).toEqual({
        status: 'finished',
        value: 2.75,
        type: utils_1.floatType,
    });
});
//# sourceMappingURL=float_expressions.test.js.map
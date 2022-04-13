"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('integer', () => {
    const res = (0, tests_1.runTest)('1;;');
    expect(res).toEqual({
        status: 'finished',
        value: 1,
        type: utils_1.intType,
    });
});
test('negative integer', () => {
    const res = (0, tests_1.runTest)('-5;;');
    expect(res).toEqual({
        status: 'finished',
        value: -5,
        type: utils_1.intType,
    });
});
test('integer addition', () => {
    let res = (0, tests_1.runTest)('1 + 2;;');
    expect(res).toEqual({
        status: 'finished',
        value: 3,
        type: utils_1.intType,
    });
    res = (0, tests_1.runTest)('1 + -2;;');
    expect(res).toEqual({
        status: 'finished',
        value: -1,
        type: utils_1.intType,
    });
});
test('integer subtraction', () => {
    let res = (0, tests_1.runTest)('10 - 12;;');
    expect(res).toEqual({
        status: 'finished',
        value: -2,
        type: utils_1.intType,
    });
    res = (0, tests_1.runTest)('10 - -12;;');
    expect(res).toEqual({
        status: 'finished',
        value: 22,
        type: utils_1.intType,
    });
});
test('integer multiplication', () => {
    let res = (0, tests_1.runTest)('2 * 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: 100,
        type: utils_1.intType,
    });
    res = (0, tests_1.runTest)('2 * -50;;');
    expect(res).toEqual({
        status: 'finished',
        value: -100,
        type: utils_1.intType,
    });
});
test('integer division', () => {
    let res = (0, tests_1.runTest)('100 / 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: 2,
        type: utils_1.intType,
    });
    res = (0, tests_1.runTest)('100 / -50;;');
    expect(res).toEqual({
        status: 'finished',
        value: -2,
        type: utils_1.intType,
    });
});
test('integer division by 0', () => {
    const res = (0, tests_1.runTest)('100 / 0;;');
    expect(res).toEqual({
        status: 'finished',
        value: Infinity,
        type: utils_1.intType,
    });
});
test('integer modulo', () => {
    const res = (0, tests_1.runTest)('100 mod 30;;');
    expect(res).toEqual({
        status: 'finished',
        value: 10,
        type: utils_1.intType,
    });
});
test('integer greaterthan', () => {
    const res = (0, tests_1.runTest)('50 > 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('integer smallerthan', () => {
    const res = (0, tests_1.runTest)('49 < 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('integer greaterthanequals', () => {
    const res = (0, tests_1.runTest)('50 >= 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('integer smallerthanequals', () => {
    const res = (0, tests_1.runTest)('50 <= 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('integer structural equality', () => {
    let res = (0, tests_1.runTest)('50 = 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49 = 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('integer structural inequality', () => {
    let res = (0, tests_1.runTest)('50 <> 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49 <> 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('integer physical equality', () => {
    let res = (0, tests_1.runTest)('50 == 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49 == 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('integer physical inequality', () => {
    let res = (0, tests_1.runTest)('50 != 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('49 != 50;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('parenthesized expression', () => {
    const res = (0, tests_1.runTest)('(1 + 2) / 3;;');
    expect(res).toEqual({
        status: 'finished',
        value: 1,
        type: utils_1.intType,
    });
});
test('integer order of precedence', () => {
    const res = (0, tests_1.runTest)('1 + 2 / 2;;');
    expect(res).toEqual({
        status: 'finished',
        value: 2,
        type: utils_1.intType,
    });
});
//# sourceMappingURL=integer_expressions.test.js.map
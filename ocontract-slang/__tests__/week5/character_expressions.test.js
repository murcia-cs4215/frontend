"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('character', () => {
    const res = (0, tests_1.runTest)("'a';;");
    expect(res).toEqual({
        status: 'finished',
        value: 'a',
        type: utils_1.charType,
    });
});
test('character greaterthan', () => {
    const res = (0, tests_1.runTest)("'a' > 'b';;");
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('character smallerthan', () => {
    const res = (0, tests_1.runTest)("'a' < 'b';;");
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('character greaterthanequals', () => {
    const res = (0, tests_1.runTest)("'a' >= 'a';;");
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('character smallerthanequals', () => {
    const res = (0, tests_1.runTest)("'a' <= 'a';;");
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('character structural equality', () => {
    let res = (0, tests_1.runTest)("'a' = 'a';;");
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)("'a' = 'b';;");
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('integer structural inequality', () => {
    let res = (0, tests_1.runTest)("'a' <> 'a';;");
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)("'a' <> 'b';;");
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('integer physical equality', () => {
    let res = (0, tests_1.runTest)("'a' == 'a';;");
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)("'a' == 'b';;");
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('integer physical inequality', () => {
    let res = (0, tests_1.runTest)("'a' != 'a';;");
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)("'a' != 'b';;");
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
//# sourceMappingURL=character_expressions.test.js.map
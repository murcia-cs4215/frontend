"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('string', () => {
    const res = (0, tests_1.runTest)('"bro";;');
    expect(res).toEqual({
        status: 'finished',
        value: 'bro',
        type: utils_1.stringType,
    });
});
test('string concatenation', () => {
    const res = (0, tests_1.runTest)('"Hello " ^ "World";;');
    expect(res).toEqual({
        status: 'finished',
        value: 'Hello World',
        type: utils_1.stringType,
    });
});
test('string greaterthan', () => {
    const res = (0, tests_1.runTest)('"A" > "b";;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('string smallerthan', () => {
    const res = (0, tests_1.runTest)('"a" < "b";;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('string greaterthanequals', () => {
    const res = (0, tests_1.runTest)('"ABC" >= "ABC";;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('string smallerthanequals', () => {
    const res = (0, tests_1.runTest)('"XYZ" <= "XYZ";;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('string structural equality', () => {
    let res = (0, tests_1.runTest)('"hello" = "hello";;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('"hello" = "goodbye";;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('string structural inequality', () => {
    let res = (0, tests_1.runTest)('"hello" <> "hello";;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('"hello" <> "goodbye";;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('integer physical equality', () => {
    let res = (0, tests_1.runTest)('"hello" == "hello";;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('"hello" == "goodbye";;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('integer physical inequality', () => {
    let res = (0, tests_1.runTest)('"hello" != "hello";;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('"hello" != "goodbye";;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('parenthesized expression', () => {
    const res = (0, tests_1.runTest)('("abc" ^ "xyz") ^ "hello";;');
    expect(res).toEqual({
        status: 'finished',
        value: 'abcxyzhello',
        type: utils_1.stringType,
    });
});
//# sourceMappingURL=string_expressions.test.js.map
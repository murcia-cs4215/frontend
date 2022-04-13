"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('conditional expression', () => {
    const resT = (0, tests_1.runTest)('if true then 10 else 20;;');
    expect(resT).toEqual({
        status: 'finished',
        value: 10,
        type: utils_1.intType,
    });
    const resF = (0, tests_1.runTest)('if false then 10 else 20;;');
    expect(resF).toEqual({
        status: 'finished',
        value: 20,
        type: utils_1.intType,
    });
});
test('parenthesized conditional expression', () => {
    const res = (0, tests_1.runTest)('if true then (if (1 == 2) then 10 else 20) else 20;;');
    expect(res).toEqual({
        status: 'finished',
        value: 20,
        type: utils_1.intType,
    });
});
//# sourceMappingURL=conditional_expressions.test.js.map
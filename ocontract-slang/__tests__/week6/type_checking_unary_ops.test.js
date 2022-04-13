"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
const testValues = {
    int: ['1', '2'],
    float: ['1.', '2.5'],
    char: ["'a'", "'b'"],
    string: ['"hello"', '"world"'],
    bool: ['true', 'false'],
};
test('not with bool', () => {
    const res = (0, tests_1.runTest)('not true;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('not with non-bools', () => {
    let res;
    for (const [type, values] of Object.entries(testValues)) {
        if (type === 'bool') {
            continue;
        }
        res = (0, tests_1.runTest)(`not ${values[0]};;`);
        (0, tests_1.expectTypeError)(res, utils_1.boolType, utils_1.valueTypeToPrimitive[type]);
    }
});
test('-unary with int', () => {
    const res = (0, tests_1.runTest)('-1;;');
    expect(res).toEqual({
        status: 'finished',
        value: -1,
        type: utils_1.intType,
    });
});
test('-unary with float', () => {
    const res = (0, tests_1.runTest)('-1.5;;');
    expect(res).toEqual({
        status: 'finished',
        value: -1.5,
        type: utils_1.floatType,
    });
});
test('-unary with non-ints and non-floats', () => {
    let res;
    for (const [type, values] of Object.entries(testValues)) {
        if (type === 'int' || type === 'float') {
            continue;
        }
        res = (0, tests_1.runTest)(`-${values[0]};;`);
        (0, tests_1.expectTypeError)(res, 'int or float', utils_1.valueTypeToPrimitive[type]);
    }
});
//# sourceMappingURL=type_checking_unary_ops.test.js.map
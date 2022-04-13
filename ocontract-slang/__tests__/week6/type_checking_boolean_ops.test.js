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
const testValueEntries = Object.entries(testValues);
const operators = ['&&', '||'];
for (const operator of operators) {
    test(`${operator} with bools`, () => {
        const values = testValues['bool'];
        const res = (0, tests_1.runTest)(`${values[0]} ${operator} ${values[1]};;`);
        expect(res).toMatchObject({
            status: 'finished',
            type: utils_1.boolType,
        });
    });
    test(`${operator} with non-bools`, () => {
        let res;
        for (const value1 of testValues['bool']) {
            for (const [type, values2] of testValueEntries) {
                if (type === 'bool') {
                    continue;
                }
                res = (0, tests_1.runTest)(`${value1} ${operator} ${values2[0]};;`);
                (0, tests_1.expectTypeError)(res, utils_1.boolType, utils_1.valueTypeToPrimitive[type]);
                res = (0, tests_1.runTest)(`${values2[0]} ${operator} ${value1};;`);
                (0, tests_1.expectTypeError)(res, utils_1.boolType, utils_1.valueTypeToPrimitive[type]);
                res = (0, tests_1.runTest)(`${values2[0]} ${operator} ${values2[1]};;`);
                (0, tests_1.expectTypeError)(res, utils_1.boolType, utils_1.valueTypeToPrimitive[type]);
            }
        }
    });
}
//# sourceMappingURL=type_checking_boolean_ops.test.js.map
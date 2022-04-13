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
const operators = ['+', '-', '*', '/', 'mod'];
for (const operator of operators) {
    test(`${operator} with ints`, () => {
        const values = testValues['int'];
        const res = (0, tests_1.runTest)(`${values[0]} ${operator} ${values[1]};;`);
        expect(res).toMatchObject({
            status: 'finished',
            type: utils_1.intType,
        });
    });
    test(`${operator} with non-ints`, () => {
        let res;
        for (const value1 of testValues['int']) {
            for (const [type, values2] of testValueEntries) {
                if (type === 'int') {
                    continue;
                }
                res = (0, tests_1.runTest)(`${value1} ${operator} ${values2[0]};;`);
                (0, tests_1.expectTypeError)(res, utils_1.intType, utils_1.valueTypeToPrimitive[type]);
                res = (0, tests_1.runTest)(`${values2[0]} ${operator} ${value1};;`);
                (0, tests_1.expectTypeError)(res, utils_1.intType, utils_1.valueTypeToPrimitive[type]);
                res = (0, tests_1.runTest)(`${values2[0]} ${operator} ${values2[1]};;`);
                (0, tests_1.expectTypeError)(res, utils_1.intType, utils_1.valueTypeToPrimitive[type]);
            }
        }
    });
}
//# sourceMappingURL=type_checking_int_ops.test.js.map
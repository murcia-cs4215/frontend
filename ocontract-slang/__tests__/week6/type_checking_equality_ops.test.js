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
const operators = ['<', '<=', '>', '>=', '=', '<>', '==', '!='];
for (const operator of operators) {
    test(`${operator} with matching types`, () => {
        let res;
        for (const [_type, values] of testValueEntries) {
            res = (0, tests_1.runTest)(`${values[0]} ${operator} ${values[1]};;`);
            expect(res).toMatchObject({
                status: 'finished',
                type: utils_1.boolType,
            });
        }
    });
    test(`${operator} with non-matching types`, () => {
        let res;
        for (const [type1, values1] of testValueEntries) {
            for (const [type2, values2] of testValueEntries) {
                if (type1 === type2) {
                    continue;
                }
                res = (0, tests_1.runTest)(`${values1[0]} ${operator} ${values2[0]};;`);
                (0, tests_1.expectTypeError)(res, utils_1.valueTypeToPrimitive[type1], utils_1.valueTypeToPrimitive[type2]);
            }
        }
    });
}
//# sourceMappingURL=type_checking_equality_ops.test.js.map
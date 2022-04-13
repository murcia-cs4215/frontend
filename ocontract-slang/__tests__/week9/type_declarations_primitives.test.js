"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
const values = {
    int: [10, utils_1.intType],
    float: [2.5, utils_1.floatType],
    string: ['"hello"', utils_1.stringType],
    char: ["'a'", utils_1.charType],
    bool: [true, utils_1.boolType],
};
for (const [type1, value1] of Object.entries(values)) {
    for (const [type2, value2] of Object.entries(values)) {
        test(`declared ${type1}, actually ${type2}`, () => {
            const res = (0, tests_1.runTest)(`let x : ${type1} = ${value2[0]};;`);
            if (type1 === type2) {
                expect(res).toEqual({
                    status: 'finished',
                    value: typeof value2[0] === 'string'
                        ? value2[0].substring(1, value2[0].length - 1)
                        : value2[0],
                    type: value2[1],
                    name: 'x',
                });
                return;
            }
            (0, tests_1.expectTypeError)(res, value1[1], value2[1]);
        });
    }
}
test('local binding with right types', () => {
    const res = (0, tests_1.runTest)(`let x : int = 10 in
  let y : int = 20 in
    x + y;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 30,
        type: utils_1.intType,
    });
});
test('local binding with incorrect types', () => {
    const res = (0, tests_1.runTest)(`let x : int = 10.5 in
  let y : int = 20 in
    x + y;;`);
    (0, tests_1.expectTypeError)(res, utils_1.intType, utils_1.floatType);
});
test('local binding with invalid "body"', () => {
    const res = (0, tests_1.runTest)(`let x : int = 10 in
  let y : float = 20.5 in
    x +. y;;`);
    (0, tests_1.expectTypeError)(res, utils_1.floatType, utils_1.intType);
});
//# sourceMappingURL=type_declarations_primitives.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('contract declarations have type and name', () => {
    const res = (0, tests_1.runTest)('contract f = {x : int | x > 10};;');
    expect(res).toMatchObject({
        status: 'finished',
        type: utils_1.intType,
        name: 'f',
    });
});
test('contract declarations with function types', () => {
    const res = (0, tests_1.runTest)('contract f = {x : int | x > 10} -> {y : int | y > x};;');
    expect(res).toMatchObject({
        status: 'finished',
        type: (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType),
        name: 'f',
    });
});
test('contract declarations with hof', () => {
    const res = (0, tests_1.runTest)('contract f = ({x : int | x > 10} -> {y : int | y > x}) -> {z : int | true};;');
    expect(res).toMatchObject({
        status: 'finished',
        type: (0, utils_1.makeFunctionType)((0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType), utils_1.intType),
        name: 'f',
    });
});
//# sourceMappingURL=contract_type.test.js.map
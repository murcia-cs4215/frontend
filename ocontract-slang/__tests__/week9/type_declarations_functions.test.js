"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('function with arguments of correct types', () => {
    let res = (0, tests_1.runTest)(`let f (x : int) : int = x + 10;;
f 20;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 30,
        type: utils_1.intType,
    });
    res = (0, tests_1.runTest)(`let sum (a : float) (b : float) : float = a +. b;;
sum 20.5 2.5;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 23,
        type: utils_1.floatType,
    });
});
test('function with invalid body given parameter types', () => {
    const res = (0, tests_1.runTest)('let f (x : int) : int = x *. 2.0;;');
    (0, tests_1.expectTypeError)(res, utils_1.floatType, utils_1.intType);
});
test('function with invalid body given return type', () => {
    const res = (0, tests_1.runTest)('let f (x : float) : int = x *. 2.0;;');
    (0, tests_1.expectTypeError)(res, utils_1.intType, utils_1.floatType);
});
test('function with arguments of incorrect type', () => {
    let res = (0, tests_1.runTest)(`let f (x : string) : string = x ^ "world";;
f 'h';;`);
    (0, tests_1.expectTypeError)(res, utils_1.stringType, utils_1.charType);
    res = (0, tests_1.runTest)(`let f (x : string) (y : string) : string = x ^ y;;
f "hello" 123;;`);
    (0, tests_1.expectTypeError)(res, utils_1.stringType, utils_1.intType);
});
test('function with hof arguments of right type', () => {
    let res = (0, tests_1.runTest)(`let f (x : int -> int) : int = x 10;;
f (fun (a : int) : int -> a + 20);;`);
    expect(res).toEqual({
        status: 'finished',
        value: 30,
        type: utils_1.intType,
    });
    res = (0, tests_1.runTest)(`let sum (a : float) (b : float) : float = a +. b;;
let divide (a : float) (b : float) : float = a /. b;;
let x (f : float -> float -> float) (g : float -> float -> float) (a : float) (b : float) : float = g (f a b) b;;
let y : float -> float -> float = x sum divide;;
y 15.0 30.0;;`);
    expect(res).toEqual({
        status: 'finished',
        value: 1.5,
        type: utils_1.floatType,
    });
});
test('function with invalid body given hof types', () => {
    let res = (0, tests_1.runTest)('let f (x : int -> int) : int = x 2.0;;');
    (0, tests_1.expectTypeError)(res, utils_1.intType, utils_1.floatType);
    res = (0, tests_1.runTest)('let f (x : int -> int) (y : float -> int) : int = y (x 2);;');
    (0, tests_1.expectTypeError)(res, utils_1.floatType, utils_1.intType);
    res = (0, tests_1.runTest)('let f (x : int -> int) (y : float -> int) : float = x (y 2.0);;');
    (0, tests_1.expectTypeError)(res, utils_1.floatType, utils_1.intType);
});
test('function with hof arguments of incorrect type', () => {
    let res = (0, tests_1.runTest)(`let f (x : string -> string) : string = x "world";;
f (fun (a : string) : int -> 10);;`);
    (0, tests_1.expectTypeError)(res, (0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.stringType), (0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.intType));
    res = (0, tests_1.runTest)(`let f (x : int -> int) : int = x 20;;
let y (x : int) : int -> int -> int = fun (a : int) (b : int) : int -> a + b + x;;
f (y 20);;`);
    (0, tests_1.expectTypeError)(res, (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType), (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType));
});
test('function currying with correct type', () => {
    const res = (0, tests_1.runTest)(`let f (x : int) (y : int) : int = x + y;;
let g : int -> int = f 20;;`);
    expect(res).toMatchObject({
        status: 'finished',
        type: (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType),
        name: 'g',
    });
});
test('function currying with incorrect type', () => {
    const res = (0, tests_1.runTest)(`let f (x : int) (y : int) : int = x + y;;
let g : int = f 20;;`);
    (0, tests_1.expectTypeError)(res, utils_1.intType, (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType));
});
//# sourceMappingURL=type_declarations_functions.test.js.map
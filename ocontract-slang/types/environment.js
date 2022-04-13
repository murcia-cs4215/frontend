"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalTypeEnvironment = exports.setContractType = exports.getContractType = exports.setType = exports.getType = exports.popTypeEnvironment = exports.pushTypeEnvironment = exports.createInitialTypeEnvironments = exports.NEGATIVE_OP = void 0;
const utils_1 = require("./utils");
const predeclaredNames = [];
// Name of Unary negative builtin operator
exports.NEGATIVE_OP = '-_1';
function makeComparableTypes() {
    return utils_1.primitiveTypes.map((type) => (0, utils_1.makeFunctionType)(type, type, utils_1.boolType));
}
const primitiveFuncs = [
    [
        exports.NEGATIVE_OP,
        [
            (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType),
            (0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType),
        ],
    ],
    ['not', (0, utils_1.makeFunctionType)(utils_1.boolType, utils_1.boolType)],
    ['&&', (0, utils_1.makeFunctionType)(utils_1.boolType, utils_1.boolType, utils_1.boolType)],
    ['||', (0, utils_1.makeFunctionType)(utils_1.boolType, utils_1.boolType, utils_1.boolType)],
    ['<', makeComparableTypes()],
    ['<=', makeComparableTypes()],
    ['>', makeComparableTypes()],
    ['>=', makeComparableTypes()],
    ['=', makeComparableTypes()],
    ['<>', makeComparableTypes()],
    ['==', makeComparableTypes()],
    ['!=', makeComparableTypes()],
    ['+', (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType)],
    ['%', (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType)],
    ['-', (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType)],
    ['*', (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType)],
    ['/', (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType)],
    ['mod', (0, utils_1.makeFunctionType)(utils_1.intType, utils_1.intType, utils_1.intType)],
    ['+.', (0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType, utils_1.floatType)],
    ['-.', (0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType, utils_1.floatType)],
    ['*.', (0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType, utils_1.floatType)],
    ['/.', (0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType, utils_1.floatType)],
    ['**', (0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType, utils_1.floatType)],
    ['^', (0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.stringType, utils_1.stringType)],
];
function createInitialTypeEnvironments() {
    const initialTypeMappings = [...predeclaredNames, ...primitiveFuncs];
    return [
        { typeMap: new Map(initialTypeMappings), contractTypeMap: new Map() },
    ];
}
exports.createInitialTypeEnvironments = createInitialTypeEnvironments;
// ENVIRONMENT HELPERS
function pushTypeEnvironment(context, typeMap) {
    context.typeEnvironments.unshift(typeMap);
}
exports.pushTypeEnvironment = pushTypeEnvironment;
function popTypeEnvironment(context) {
    var _a;
    return (_a = context.typeEnvironments.shift()) !== null && _a !== void 0 ? _a : null;
}
exports.popTypeEnvironment = popTypeEnvironment;
// TYPE HELPERS
function getType(context, name) {
    for (let i = 0; i < context.typeEnvironments.length; i++) {
        if (context.typeEnvironments[i].typeMap.has(name)) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return context.typeEnvironments[i].typeMap.get(name);
        }
    }
    return null;
}
exports.getType = getType;
function setType(context, name, type) {
    context.typeEnvironments[0].typeMap.set(name, type);
}
exports.setType = setType;
function getContractType(context, name) {
    for (let i = 0; i < context.typeEnvironments.length; i++) {
        if (context.typeEnvironments[i].contractTypeMap.has(name)) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return context.typeEnvironments[i].contractTypeMap.get(name);
        }
    }
    return null;
}
exports.getContractType = getContractType;
function setContractType(context, name, type) {
    context.typeEnvironments[0].contractTypeMap.set(name, type);
}
exports.setContractType = setContractType;
// LOCAL ENVIRONMENT
function createLocalTypeEnvironment() {
    return { typeMap: new Map(), contractTypeMap: new Map() };
}
exports.createLocalTypeEnvironment = createLocalTypeEnvironment;
//# sourceMappingURL=environment.js.map
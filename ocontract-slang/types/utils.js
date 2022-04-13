"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOfContract = exports.formatContractType = exports.curryParamTypes = exports.isSameType = exports.isChar = exports.isString = exports.isBool = exports.isFloat = exports.isInt = exports.isFunctionType = exports.isPrimitiveType = exports.valueTypeToPrimitive = exports.primitiveTypes = exports.unitType = exports.charType = exports.stringType = exports.boolType = exports.floatType = exports.intType = exports.makeFunctionType = exports.makePrimitive = void 0;
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const formatters_1 = require("../utils/formatters");
function makePrimitive(type) {
    return {
        type: 'PrimitiveType',
        valueType: type,
    };
}
exports.makePrimitive = makePrimitive;
function makeFunctionType(...types) {
    const parameterTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];
    return curryParamTypes(parameterTypes, returnType);
}
exports.makeFunctionType = makeFunctionType;
exports.intType = makePrimitive('int');
exports.floatType = makePrimitive('float');
exports.boolType = makePrimitive('bool');
exports.stringType = makePrimitive('string');
exports.charType = makePrimitive('char');
exports.unitType = makePrimitive('unit');
exports.primitiveTypes = [
    exports.intType,
    exports.floatType,
    exports.boolType,
    exports.stringType,
    exports.charType,
    exports.unitType,
];
exports.valueTypeToPrimitive = {
    int: exports.intType,
    float: exports.floatType,
    bool: exports.boolType,
    string: exports.stringType,
    char: exports.charType,
};
function isPrimitiveType(type) {
    return type.type === 'PrimitiveType';
}
exports.isPrimitiveType = isPrimitiveType;
function isFunctionType(type) {
    return type.type === 'FunctionType';
}
exports.isFunctionType = isFunctionType;
function isInt(type) {
    return (0, lodash_isequal_1.default)(type, exports.intType);
}
exports.isInt = isInt;
function isFloat(type) {
    return (0, lodash_isequal_1.default)(type, exports.floatType);
}
exports.isFloat = isFloat;
function isBool(type) {
    return (0, lodash_isequal_1.default)(type, exports.boolType);
}
exports.isBool = isBool;
function isString(type) {
    return (0, lodash_isequal_1.default)(type, exports.stringType);
}
exports.isString = isString;
function isChar(type) {
    return (0, lodash_isequal_1.default)(type, exports.charType);
}
exports.isChar = isChar;
function isSameType(type1, type2) {
    return (0, lodash_isequal_1.default)(type1, type2);
}
exports.isSameType = isSameType;
/**
 * Curries a function with type of format x -> x -> x -> x
 * to a type with format x -> (x -> (x -> x)).
 */
function curryParamTypes(paramTypes, returnType) {
    let finalType = returnType;
    for (let i = paramTypes.length - 1; i >= 0; i--) {
        finalType = {
            type: 'FunctionType',
            parameterType: paramTypes[i],
            returnType: finalType,
        };
    }
    return finalType;
}
exports.curryParamTypes = curryParamTypes;
function formatContractType(contractType) {
    if (contractType.type === 'FlatContractType') {
        return (0, formatters_1.formatType)(contractType.contractType.parameterType);
    }
    return `${formatContractType(contractType.parameterType)} -> ${formatContractType(contractType.returnType)}`;
}
exports.formatContractType = formatContractType;
function getTypeOfContract(contract) {
    if (contract.type === 'FlatContract') {
        return contract.contract.getType().parameterType;
    }
    return makeFunctionType(getTypeOfContract(contract.parameterContract), getTypeOfContract(contract.returnContract));
}
exports.getTypeOfContract = getTypeOfContract;
//# sourceMappingURL=utils.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGlobalLetStatement = void 0;
const assert_1 = __importDefault(require("assert"));
const formatters_1 = require("../../utils/formatters");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkGlobalLetStatement(node, context) {
    const name = node.left.name;
    const declaredType = node.typeDeclaration;
    let type;
    let expectedType;
    if (node.params.length === 0) {
        let recursiveEnvironment;
        if (node.recursive) {
            recursiveEnvironment = (0, environment_1.createLocalTypeEnvironment)();
            (0, environment_1.pushTypeEnvironment)(context, recursiveEnvironment);
            (0, environment_1.setType)(context, name, declaredType);
        }
        type = (0, index_1.typeCheck)(node.right, context);
        if (node.recursive) {
            const poppedEnvironment = (0, environment_1.popTypeEnvironment)(context);
            (0, assert_1.default)(poppedEnvironment === recursiveEnvironment);
        }
        expectedType = declaredType;
    }
    else {
        const functionEnvironment = (0, environment_1.createLocalTypeEnvironment)();
        (0, environment_1.pushTypeEnvironment)(context, functionEnvironment);
        let functionType = declaredType;
        for (let i = 0; i < node.params.length; i++) {
            (0, environment_1.setType)(context, node.params[i].name, functionType.parameterType);
            functionType = functionType.returnType;
        }
        if (node.recursive) {
            (0, environment_1.setType)(context, name, declaredType);
        }
        type = (0, index_1.typeCheck)(node.right, context);
        const poppedEnvironment = (0, environment_1.popTypeEnvironment)(context);
        (0, assert_1.default)(poppedEnvironment === functionEnvironment);
        expectedType = functionType;
    }
    if (!(0, utils_1.isSameType)(expectedType, type)) {
        throw new errors_1.TypeMismatchError(node, (0, formatters_1.formatType)(expectedType), (0, formatters_1.formatType)(type));
    }
    const contractType = (0, environment_1.getContractType)(context, name);
    if (contractType && !matchesContractType(declaredType, contractType)) {
        throw new errors_1.ContractTypeMismatchError(node, (0, utils_1.formatContractType)(contractType), (0, formatters_1.formatType)(declaredType));
    }
    (0, environment_1.setType)(context, name, declaredType);
    return utils_1.unitType; // update this for functions
}
exports.checkGlobalLetStatement = checkGlobalLetStatement;
function matchesContractType(type, contractType) {
    if ((0, utils_1.isPrimitiveType)(type)) {
        if (contractType.type !== 'FlatContractType') {
            return false;
        }
        return (0, utils_1.isSameType)(type, contractType.contractType.parameterType);
    }
    if (contractType.type !== 'FunctionContractType') {
        return false;
    }
    return (matchesContractType(type.parameterType, contractType.parameterType) &&
        matchesContractType(type.returnType, contractType.returnType));
}
//# sourceMappingURL=checkGlobalLet.js.map
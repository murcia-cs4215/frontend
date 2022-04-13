"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkContractDeclarationStatement = void 0;
const assert_1 = __importDefault(require("assert"));
const formatters_1 = require("../../utils/formatters");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkContractDeclarationStatement(node, context) {
    const contractType = checkContractExpression(node.contract, context);
    (0, environment_1.setContractType)(context, node.id.name, contractType);
    return utils_1.unitType; // TODO: Look into proper type to return
}
exports.checkContractDeclarationStatement = checkContractDeclarationStatement;
function checkContractExpression(node, context) {
    const contract = node.contract;
    if (contract.type === 'EmptyContractExpression') {
        throw new errors_1.NotAFunctionError((0, formatters_1.formatType)(utils_1.unitType), node);
    }
    if (contract.type === 'FlatContractExpression') {
        const closureType = (0, index_1.typeCheck)(contract.contract, context);
        if ((0, utils_1.isPrimitiveType)(closureType)) {
            throw new errors_1.NotAFunctionError((0, formatters_1.formatType)(closureType), node);
        }
        if (!(0, utils_1.isBool)(closureType.returnType)) {
            throw new errors_1.InvalidContractReturnTypeError(node, (0, formatters_1.formatType)(closureType.returnType));
        }
        return {
            type: 'FlatContractType',
            contractType: closureType,
        };
    }
    const parameterContract = checkContractExpression(contract.parameterContract, context);
    const isFlatSetNotation = contract.parameterContract.contract.type === 'FlatContractExpression' &&
        contract.parameterContract.contract.isSetNotation;
    if (isFlatSetNotation) {
        (0, assert_1.default)(contract.parameterContract.contract.type === 'FlatContractExpression');
        const contractExpression = contract.parameterContract.contract.contract;
        (0, assert_1.default)(contractExpression.type === 'LambdaExpression'); // True if set notation
        const contractTypeEnvironment = (0, environment_1.createLocalTypeEnvironment)();
        (0, environment_1.pushTypeEnvironment)(context, contractTypeEnvironment);
        (0, environment_1.setType)(context, contractExpression.params[0].name, contractExpression.typeDeclaration.parameterType);
    }
    const returnContract = checkContractExpression(contract.returnContract, context);
    if (isFlatSetNotation) {
        (0, environment_1.popTypeEnvironment)(context);
    }
    return {
        type: 'FunctionContractType',
        parameterType: parameterContract,
        returnType: returnContract,
    };
}
//# sourceMappingURL=checkContract.js.map
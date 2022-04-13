"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propagateEnvironment = exports.propagateLoc = exports.verifyContractExists = exports.checkFlatContract = void 0;
const assert_1 = __importDefault(require("assert"));
const closure_1 = require("../../interpreter/closure");
const environment_1 = require("../../interpreter/environment");
const errors_1 = require("../../interpreter/errors");
const interpreter_1 = require("../../interpreter/interpreter");
const utils_1 = require("../../types/utils");
const errors_2 = require("./errors");
function checkFlatContract(node, val, contract, context, blame) {
    const check = (0, interpreter_1.apply)(contract.contract, val, context);
    (0, assert_1.default)((0, utils_1.isBool)(check.type)); // should have been validated by the type checker
    if (check.value) {
        // Contract successfully asserted
        if (contract.isSetNotation) {
            contract.contract.clonedEnvironments[0].head[contract.contract.originalNode.params[0].name] = val;
        }
        return;
    }
    return (0, errors_1.handleRuntimeError)(context, new errors_2.ContractViolationError(node, contract, blame));
}
exports.checkFlatContract = checkFlatContract;
function verifyContractExists(exp, context) {
    if (exp.contract == null) {
        return false;
    }
    if (exp.pos == null || exp.neg == null) {
        return (0, errors_1.handleRuntimeError)(context, new errors_2.ContractNotWellFormedError(exp, 'Expected contract, pos, neg to be well-defined'));
    }
    return true;
}
exports.verifyContractExists = verifyContractExists;
function propagateLoc(contract, loc) {
    if (contract.type === 'FlatContract') {
        contract.loc = loc;
        return;
    }
    propagateLoc(contract.parameterContract, loc);
    propagateLoc(contract.returnContract, loc);
}
exports.propagateLoc = propagateLoc;
function propagateEnvironment(contract, context) {
    _propagateEnvironment(contract, (0, closure_1.cloneDeepWithClosure)(context.runtime.environments));
}
exports.propagateEnvironment = propagateEnvironment;
function _propagateEnvironment(contract, environments) {
    if (contract.type === 'FlatContract') {
        if (!contract.isSetNotation) {
            return; // We don't touch non-set notation contracts
        }
        contract.contract.clonedEnvironments = [...environments];
        return;
    }
    if (contract.parameterContract.type === 'FunctionContract') {
        const contractEnvironment = (0, environment_1.createContractEnvironment)(environments);
        _propagateEnvironment(contract.parameterContract, [
            contractEnvironment,
            ...environments,
        ]);
    }
    else {
        _propagateEnvironment(contract.parameterContract, environments);
    }
    _propagateEnvironment(contract.returnContract, environments);
}
//# sourceMappingURL=utils.js.map
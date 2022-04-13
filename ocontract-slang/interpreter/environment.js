"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContractEnvironment = exports.createFunctionEnvironment = exports.createLocalEnvironment = exports.setVariable = exports.getVariable = exports.popEnvironment = exports.pushEnvironment = exports.currentEnvironment = void 0;
const lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
const closure_1 = require("./closure");
const errors_1 = require("./errors");
// ENVIRONMENT HELPERS
function currentEnvironment(context) {
    var _a;
    return (_a = context.runtime.environments[0]) !== null && _a !== void 0 ? _a : null;
}
exports.currentEnvironment = currentEnvironment;
function pushEnvironment(context, environment) {
    context.runtime.environments.unshift(environment);
    // TODO: See if we need the environment tree here
}
exports.pushEnvironment = pushEnvironment;
function popEnvironment(context) {
    var _a;
    return (_a = context.runtime.environments.shift()) !== null && _a !== void 0 ? _a : null;
}
exports.popEnvironment = popEnvironment;
// VARIABLE FUNCTIONS
function getVariable(context, name) {
    let environment = currentEnvironment(context);
    while (environment) {
        if (Object.prototype.hasOwnProperty.call(environment.head, name)) {
            return environment.head[name];
        }
        else {
            environment = environment.tail;
        }
    }
    return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(context.runtime.nodes[0], 'Variable referenced before being initialised, which should have been caught by the type checker.'));
}
exports.getVariable = getVariable;
function setVariable(context, name, value) {
    const environment = currentEnvironment(context);
    if (!environment) {
        return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(context.runtime.nodes[0]));
    }
    if (value instanceof closure_1.Closure) {
        value = {
            value,
            type: value.getType(),
        };
    }
    environment.head[name] = value;
    return Object.assign(Object.assign({}, value), { name });
}
exports.setVariable = setVariable;
// LOCAL ENVIRONMENT
function createLocalEnvironment(context, name = 'localEnvironment') {
    return {
        name,
        tail: currentEnvironment(context),
        head: {},
        id: (0, lodash_uniqueid_1.default)(),
    };
}
exports.createLocalEnvironment = createLocalEnvironment;
// Assumption: number of arguments <= number of parameters
function createFunctionEnvironment(closure, arg) {
    const environment = {
        tail: closure.clonedEnvironments[0],
        head: {},
        id: (0, lodash_uniqueid_1.default)(),
    };
    const param = closure.originalNode.params[0];
    environment.head[param.name] = arg;
    return environment;
}
exports.createFunctionEnvironment = createFunctionEnvironment;
function createContractEnvironment(environments, name = 'contractEnvironment') {
    return {
        name,
        tail: environments[0],
        head: {},
        id: (0, lodash_uniqueid_1.default)(),
    };
}
exports.createContractEnvironment = createContractEnvironment;
//# sourceMappingURL=environment.js.map
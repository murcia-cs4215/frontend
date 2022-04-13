"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.evaluate = void 0;
const assert_1 = __importDefault(require("assert"));
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const environment_1 = require("../contracts/environment");
const runtime_1 = require("../contracts/runtime");
const utils_1 = require("../contracts/runtime/utils");
const runtime_2 = require("../types/runtime");
const utils_2 = require("../types/utils");
const closure_1 = require("./closure");
const environment_2 = require("./environment");
const errors_1 = require("./errors");
const operators_1 = require("./operators");
const evaluators = {
    Literal: (node, context) => {
        if (node.type !== 'Literal') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        return {
            value: node.value,
            type: utils_2.valueTypeToPrimitive[node.valueType],
        };
    },
    Identifier: (node, context) => {
        if (node.type !== 'Identifier') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const res = (0, environment_2.getVariable)(context, node.name);
        (0, runtime_1.checkIdentifierContract)(node, context, res);
        return res;
    },
    UnaryExpression: (node, context) => {
        if (node.type !== 'UnaryExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const argument = evaluate(node.argument, context);
        (0, runtime_2.checkUnaryExpressionType)(node, node.operator, argument, context);
        return (0, operators_1.evaluateUnaryExpression)(node.operator, argument);
    },
    BinaryExpression: (node, context) => {
        if (node.type !== 'BinaryExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const left = evaluate(node.left, context);
        const right = evaluate(node.right, context);
        (0, runtime_2.checkBinaryExpressionType)(node, node.operator, left, right, context);
        return (0, operators_1.evaluateBinaryExpression)(node.operator, left, right);
    },
    LogicalExpression: (node, context) => {
        if (node.type !== 'LogicalExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const left = evaluate(node.left, context);
        (0, runtime_2.checkBooleanType)(node, left, runtime_2.LHS, context);
        if ((node.operator === '&&' && !left.value) ||
            (node.operator === '||' && left.value)) {
            return left;
        }
        const right = evaluate(node.right, context);
        (0, runtime_2.checkBooleanType)(node, right, runtime_2.RHS, context);
        return (0, operators_1.evaluateLogicalExpression)(node.operator, left, right);
    },
    ConditionalExpression: (node, context) => {
        if (node.type !== 'ConditionalExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const test = evaluate(node.test, context);
        (0, runtime_2.checkBooleanType)(node, test, undefined, context);
        return test.value
            ? evaluate(node.consequent, context)
            : evaluate(node.alternate, context);
    },
    GlobalLetStatement: (node, context) => {
        if (node.type !== 'GlobalLetStatement') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        // TODO: Look into handling of `let rec` expressions
        const identifier = node.left;
        let closure, value;
        if (node.params.length > 0) {
            closure = closure_1.Closure.createFromLambdaExpression(convertGlobalLetFuncToLambda(node), context);
        }
        else {
            value = evaluate(node.right, context);
            if (value.value instanceof closure_1.Closure) {
                closure = value.value;
            }
        }
        // Define self in the closure's cloned environment only if recursive
        if (closure && node.recursive) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            closure.clonedEnvironments[0].head[identifier.name] = {
                value: closure,
                type: closure.getType(),
            };
        }
        if (closure) {
            return (0, environment_2.setVariable)(context, identifier.name, closure);
        }
        (0, assert_1.default)(value != null); // Functions have been handled above
        (0, runtime_1.checkGlobalLetContract)(node, context, value);
        return (0, environment_2.setVariable)(context, identifier.name, value);
    },
    LocalLetExpression: (node, context) => {
        if (node.type !== 'LocalLetExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const localEnvironment = (0, environment_2.createLocalEnvironment)(context);
        (0, environment_2.pushEnvironment)(context, localEnvironment);
        evaluate(node.left, context); // To initialise any names etc.
        const result = evaluate(node.right, context);
        (0, environment_2.popEnvironment)(context);
        return result;
    },
    LambdaExpression: (node, context) => {
        if (node.type !== 'LambdaExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const closure = closure_1.Closure.createFromLambdaExpression(node, context);
        return {
            value: closure,
            type: closure.getType(),
        };
    },
    CallExpression: (node, context) => {
        if (node.type !== 'CallExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        let result = evaluate(node.callee, context);
        let closure = result.value;
        const args = node.arguments.map((arg) => evaluate(arg, context));
        // inherit neg because "scope" of closure is now callee's "neg" position
        closure.originalNode.neg = node.callee.neg;
        for (let i = 0; i < args.length; i++) {
            (0, errors_1.assertClosure)(closure, node, context);
            (0, runtime_2.checkArgumentType)(node, closure, args[i], context);
            result = apply(closure, args[i], context);
            closure = result.value;
        }
        return result;
    },
    ExpressionStatement: (node, context) => {
        if (node.type !== 'ExpressionStatement') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        return evaluate(node.expression, context);
    },
    ContractDeclarationStatement: (node, context) => {
        if (node.type !== 'ContractDeclarationStatement') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        const id = node.id.name;
        const contract = evaluate(node.contract, context);
        (0, utils_1.propagateLoc)(contract.value, node.loc);
        (0, utils_1.propagateEnvironment)(contract.value, context);
        (0, environment_1.addContractToCurrentScope)(context, id, contract.value);
        return Object.assign(Object.assign({}, contract), { name: id });
    },
    ContractExpression: (node, context) => {
        if (node.type !== 'ContractExpression' ||
            node.contract.type === 'EmptyContractExpression') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        if (node.contract.type === 'FlatContractExpression') {
            const result = evaluate(node.contract.contract, context);
            (0, assert_1.default)(result.value instanceof closure_1.Closure);
            const contract = {
                type: 'FlatContract',
                contract: result.value,
                isSetNotation: node.contract.isSetNotation,
            };
            return {
                value: contract,
                type: (0, utils_2.getTypeOfContract)(contract), // TODO: Look into the type to return here
            };
        }
        const parameterContract = evaluate(node.contract.parameterContract, context)
            .value;
        const returnContract = evaluate(node.contract.returnContract, context)
            .value;
        const contract = {
            type: 'FunctionContract',
            parameterContract,
            returnContract,
        };
        return {
            value: contract,
            type: (0, utils_2.getTypeOfContract)(contract), // TODO: Look into the type to return here
        };
    },
    Program: (node, context) => {
        if (node.type !== 'Program') {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
        }
        context.numberOfOuterEnvironments += 1;
        const environment = (0, environment_2.createLocalEnvironment)(context, 'programEnvironment');
        (0, environment_2.pushEnvironment)(context, environment);
        let value = { value: undefined, type: utils_2.unitType };
        for (const statement of node.body) {
            value = evaluate(statement, context);
        }
        return value;
    },
};
function evaluate(node, context) {
    visitNode(context, node);
    const evaluator = evaluators[node.type];
    if (!evaluator) {
        return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(node));
    }
    const result = evaluator(node, context);
    leaveNode(context);
    return result;
}
exports.evaluate = evaluate;
function apply(closure, arg, context) {
    const copyArg = (0, lodash_clonedeep_1.default)(arg);
    (0, runtime_1.checkArgumentContract)(closure, copyArg, context);
    // Replace context environments with function environments
    // Note that unlike JS, where you can define/modify bindings later and have it affect functions define prior,
    // in OCaml/OContract, function environments are fixed upon definition. So we need to do a substitution here.
    const originalEnvironments = context.runtime.environments;
    const functionEnvironment = (0, environment_2.createFunctionEnvironment)(closure, copyArg);
    context.runtime.environments = [...closure.clonedEnvironments];
    (0, environment_2.pushEnvironment)(context, functionEnvironment);
    const originalNode = closure.originalNode;
    // Means fully evaluated, no currying occurring here
    if (originalNode.params.length === 1) {
        const result = evaluate(originalNode.body, context);
        (0, runtime_1.checkReturnValueContract)(closure, result, context);
        // Restore context environments
        context.runtime.environments = originalEnvironments;
        return result;
    }
    const curriedClosure = closure_1.Closure.createFromLambdaExpression({
        type: 'LambdaExpression',
        params: originalNode.params.slice(1),
        body: originalNode.body,
        contract: originalNode.contract
            ? originalNode.contract.returnContract
            : undefined,
        pos: originalNode.pos,
        neg: originalNode.neg,
        typeDeclaration: closure.getType().returnType,
        loc: originalNode.loc,
    }, context);
    // Restore context environments
    context.runtime.environments = originalEnvironments;
    return { value: curriedClosure, type: curriedClosure.getType() };
}
exports.apply = apply;
// HELPER FUNCTIONS
function convertGlobalLetFuncToLambda(node) {
    return {
        type: 'LambdaExpression',
        params: node.params,
        body: node.right,
        typeDeclaration: node.typeDeclaration,
        loc: node.loc,
    };
}
function visitNode(context, node) {
    context.runtime.nodes.unshift(node);
}
function leaveNode(context) {
    context.runtime.nodes.shift();
}
//# sourceMappingURL=interpreter.js.map
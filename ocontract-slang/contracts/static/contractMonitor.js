"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorProgram = void 0;
const environment_1 = require("../environment");
const utils_1 = require("../utils");
function monitorProgram(program, context) {
    monitorNode(program, context);
}
exports.monitorProgram = monitorProgram;
/**
 * This function basically sets pos and neg for all identifier nodes, with or
 * without contracts. This is so that if any contract is violated, the identifier
 * node will know who to blame at that point in time.
 */
function monitorNode(node, context) {
    switch (node.type) {
        case 'Program': {
            for (const body of node.body) {
                monitorNode(body, context);
            }
            break;
        }
        case 'ContractDeclarationStatement': {
            break;
        }
        case 'ExpressionStatement': {
            monitorNode(node.expression, context);
            break;
        }
        case 'Identifier': {
            // We don't need the exact contract now. The goal is to assign a pos and neg
            // so that we know who to blame when things go wrong.
            (0, utils_1.wrapExpressionInMonitor)(node, undefined, node.name, (0, environment_1.getCurrentContractScope)(context));
            break;
        }
        case 'LocalLetExpression': {
            monitorNode(node.left, context);
            monitorNode(node.right, context);
            break;
        }
        case 'CallExpression': {
            monitorNode(node.callee, context);
            node.arguments.forEach((arg) => monitorNode(arg, context));
            break;
        }
        case 'GlobalLetStatement': {
            monitorNode(node.left, context);
            (0, environment_1.pushContractEnvironment)(context, {
                contractMap: new Map(),
                currentScope: node.left.name,
            });
            monitorNode(node.right, context);
            (0, environment_1.popContractEnvironment)(context);
            break;
        }
        case 'UnaryExpression': {
            monitorNode(node.argument, context);
            break;
        }
        case 'BinaryExpression': {
            monitorNode(node.left, context);
            monitorNode(node.right, context);
            break;
        }
        case 'ConditionalExpression': {
            monitorNode(node.test, context);
            monitorNode(node.consequent, context);
            monitorNode(node.alternate, context);
            break;
        }
        case 'LambdaExpression': {
            monitorNode(node.body, context);
            break;
        }
        case 'LogicalExpression': {
            monitorNode(node.left, context);
            monitorNode(node.right, context);
            break;
        }
    }
}
//# sourceMappingURL=contractMonitor.js.map
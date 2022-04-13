"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeCheck = void 0;
const utils_1 = require("../utils");
const checkBinary_1 = require("./checkBinary");
const checkCall_1 = require("./checkCall");
const checkConditional_1 = require("./checkConditional");
const checkContract_1 = require("./checkContract");
const checkGlobalLet_1 = require("./checkGlobalLet");
const checkIdentifier_1 = require("./checkIdentifier");
const checkLambda_1 = require("./checkLambda");
const checkLocalLet_1 = require("./checkLocalLet");
const checkLogical_1 = require("./checkLogical");
const checkProgram_1 = require("./checkProgram");
const checkUnary_1 = require("./checkUnary");
function typeCheck(node, context) {
    switch (node.type) {
        case 'BinaryExpression':
            return (0, checkBinary_1.checkBinaryExpression)(node, context);
        case 'CallExpression':
            return (0, checkCall_1.checkCallExpression)(node, context);
        case 'ConditionalExpression':
            return (0, checkConditional_1.checkConditionalExpression)(node, context);
        case 'ContractDeclarationStatement':
            return (0, checkContract_1.checkContractDeclarationStatement)(node, context);
        case 'ContractExpression':
        case 'EmptyExpression':
            return utils_1.unitType; // We won't type contract stuff for now
        case 'ExpressionStatement':
            return typeCheck(node.expression, context);
        case 'GlobalLetStatement':
            return (0, checkGlobalLet_1.checkGlobalLetStatement)(node, context);
        case 'Identifier':
            return (0, checkIdentifier_1.checkIdentifier)(node, context);
        case 'LambdaExpression':
            return (0, checkLambda_1.checkLambdaExpression)(node, context); // TODO
        case 'Literal':
            return utils_1.valueTypeToPrimitive[node.valueType];
        case 'LocalLetExpression':
            return (0, checkLocalLet_1.checkLocalLetExpression)(node, context);
        case 'LogicalExpression':
            return (0, checkLogical_1.checkLogicalExpression)(node, context);
        case 'Program':
            return (0, checkProgram_1.checkProgram)(node, context);
        case 'UnaryExpression':
            return (0, checkUnary_1.checkUnaryExpression)(node, context);
    }
    return utils_1.unitType;
}
exports.typeCheck = typeCheck;
//# sourceMappingURL=index.js.map
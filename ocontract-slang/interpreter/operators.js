"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateLogicalExpression = exports.evaluateBinaryExpression = exports.evaluateUnaryExpression = void 0;
const wrappers_1 = require("../parser/wrappers");
const utils_1 = require("../types/utils");
// Assumes that type checking has been done prior, i.e. all operations
// should succeed
function evaluateUnaryExpression(operator, argument) {
    if (operator === 'not') {
        return { value: !argument.value, type: argument.type };
    }
    else if (operator === '-') {
        return { value: -argument.value, type: argument.type };
    }
    else {
        return { value: +argument.value, type: argument.type };
    }
}
exports.evaluateUnaryExpression = evaluateUnaryExpression;
const physicalEqualityOperators = ['==', '!='];
// TODO: Handle float binary operators + check comparisons
// Assumes that type checking has been done prior, i.e. all operations
// should succeed
function evaluateBinaryExpression(operator, left, right) {
    if (left.value instanceof wrappers_1.StringWrapper &&
        !physicalEqualityOperators.includes(operator)) {
        left.value = left.value.unwrap();
    }
    if (right.value instanceof wrappers_1.StringWrapper &&
        !physicalEqualityOperators.includes(operator)) {
        right.value = right.value.unwrap();
    }
    switch (operator) {
        case '**': // Must be float-float
            return { value: Math.pow(left.value, right.value), type: left.type };
        case '+':
        case '+.':
            return { value: left.value + right.value, type: left.type };
        case '-':
        case '-.':
            return { value: left.value - right.value, type: left.type };
        case '*':
        case '*.':
            return { value: left.value * right.value, type: left.type };
        case '/':
            return { value: Math.floor(left.value / right.value), type: left.type };
        case '/.':
            return { value: left.value / right.value, type: left.type };
        case 'mod':
            return { value: left.value % right.value, type: left.type };
        case '==':
            return { value: left.value === right.value, type: utils_1.boolType };
        case '!=':
            return { value: left.value !== right.value, type: utils_1.boolType };
        case '<=':
            return { value: left.value <= right.value, type: utils_1.boolType };
        case '<':
            return { value: left.value < right.value, type: utils_1.boolType };
        case '>':
            return { value: left.value > right.value, type: utils_1.boolType };
        case '>=':
            return { value: left.value >= right.value, type: utils_1.boolType };
        case '=':
            return { value: left.value == right.value, type: utils_1.boolType };
        case '<>':
            return { value: left.value != right.value, type: utils_1.boolType };
        case '^':
            return {
                value: new wrappers_1.StringWrapper(left.value + right.value),
                type: left.type,
            };
    }
}
exports.evaluateBinaryExpression = evaluateBinaryExpression;
// Assumes that type checking has been done prior, i.e. all operations
// should succeed
function evaluateLogicalExpression(operator, left, right) {
    switch (operator) {
        case '&&':
            return { value: left.value && right.value, type: left.type };
        case '||':
            return { value: left.value || right.value, type: left.type };
    }
}
exports.evaluateLogicalExpression = evaluateLogicalExpression;
//# sourceMappingURL=operators.js.map
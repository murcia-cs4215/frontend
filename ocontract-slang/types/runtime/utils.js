"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCharResult = exports.isStringResult = exports.isBoolResult = exports.isFloatResult = exports.isIntResult = exports.RHS = exports.LHS = void 0;
const utils_1 = require("../utils");
exports.LHS = ' on left hand side of operation';
exports.RHS = ' on right hand side of operation';
const isIntResult = (v) => (0, utils_1.isInt)(v.type) && typeof v.value === 'number';
exports.isIntResult = isIntResult;
const isFloatResult = (v) => (0, utils_1.isFloat)(v.type) && typeof v.value === 'number';
exports.isFloatResult = isFloatResult;
const isBoolResult = (v) => (0, utils_1.isBool)(v.type) && typeof v.value === 'boolean';
exports.isBoolResult = isBoolResult;
const isStringResult = (v) => (0, utils_1.isString)(v.type) && typeof v.value.value === 'string';
exports.isStringResult = isStringResult;
const isCharResult = (v) => (0, utils_1.isChar)(v.type) && typeof v.value === 'string' && v.value.length === 1;
exports.isCharResult = isCharResult;
//# sourceMappingURL=utils.js.map
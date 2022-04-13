"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArgumentType = void 0;
const errors_1 = require("../../interpreter/errors");
const utils_1 = require("../utils");
const formatters_1 = require("../../utils/formatters");
const errors_2 = require("./errors");
const checkArgumentType = (node, closure, arg, context) => {
    const expectedType = closure.getType().parameterType;
    if (!(0, utils_1.isSameType)(expectedType, arg.type)) {
        return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, '', (0, formatters_1.formatType)(expectedType), (0, formatters_1.formatType)(arg.type)));
    }
};
exports.checkArgumentType = checkArgumentType;
//# sourceMappingURL=checkArg.js.map
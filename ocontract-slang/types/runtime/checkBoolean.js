"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBooleanType = void 0;
const errors_1 = require("../../interpreter/errors");
const formatters_1 = require("../../utils/formatters");
const utils_1 = require("../utils");
const errors_2 = require("./errors");
const utils_2 = require("./utils");
const checkBooleanType = (node, value, side = '', context) => {
    if (!(0, utils_2.isBoolResult)(value)) {
        return (0, errors_1.handleRuntimeError)(context, new errors_2.RuntimeTypeError(node, side, (0, formatters_1.formatType)(utils_1.boolType), (0, formatters_1.formatType)(value.type)));
    }
};
exports.checkBooleanType = checkBooleanType;
//# sourceMappingURL=checkBoolean.js.map
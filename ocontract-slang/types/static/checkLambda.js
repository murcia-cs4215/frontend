"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLambdaExpression = void 0;
const assert_1 = __importDefault(require("assert"));
const formatters_1 = require("../../utils/formatters");
const environment_1 = require("../environment");
const utils_1 = require("../utils");
const errors_1 = require("./errors");
const index_1 = require("./index");
function checkLambdaExpression(node, context) {
    const lambdaEnvironment = (0, environment_1.createLocalTypeEnvironment)();
    (0, environment_1.pushTypeEnvironment)(context, lambdaEnvironment);
    let lambdaType = node.typeDeclaration;
    for (let i = 0; i < node.params.length; i++) {
        (0, environment_1.setType)(context, node.params[i].name, lambdaType.parameterType);
        lambdaType = lambdaType.returnType;
    }
    const returnType = (0, index_1.typeCheck)(node.body, context);
    const poppedEnvironment = (0, environment_1.popTypeEnvironment)(context);
    (0, assert_1.default)(poppedEnvironment === lambdaEnvironment);
    if (!(0, utils_1.isSameType)(lambdaType, returnType)) {
        throw new errors_1.TypeMismatchError(node, (0, formatters_1.formatType)(lambdaType), (0, formatters_1.formatType)(returnType));
    }
    return node.typeDeclaration;
}
exports.checkLambdaExpression = checkLambdaExpression;
//# sourceMappingURL=checkLambda.js.map
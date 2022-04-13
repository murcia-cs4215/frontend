"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLocalLetExpression = void 0;
const environment_1 = require("../environment");
const index_1 = require("./index");
function checkLocalLetExpression(node, context) {
    const localLetEnvironment = (0, environment_1.createLocalTypeEnvironment)();
    (0, environment_1.pushTypeEnvironment)(context, localLetEnvironment);
    (0, index_1.typeCheck)(node.left, context); // let the global bindings happen
    const type = (0, index_1.typeCheck)(node.right, context); // TODO: Check if we should return this type
    (0, environment_1.popTypeEnvironment)(context);
    return type;
}
exports.checkLocalLetExpression = checkLocalLetExpression;
//# sourceMappingURL=checkLocalLet.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdentifier = void 0;
const environment_1 = require("../environment");
const errors_1 = require("./errors");
function checkIdentifier(node, context) {
    const type = (0, environment_1.getType)(context, node.name);
    if (type == null) {
        throw new errors_1.UnboundValueError(node.name, node);
    }
    return type;
}
exports.checkIdentifier = checkIdentifier;
//# sourceMappingURL=checkIdentifier.js.map
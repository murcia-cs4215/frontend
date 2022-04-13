"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkProgram = void 0;
const utils_1 = require("../utils");
const index_1 = require("./index");
function checkProgram(node, context) {
    let programType = utils_1.unitType;
    for (const body of node.body) {
        programType = (0, index_1.typeCheck)(body, context);
    }
    return programType;
}
exports.checkProgram = checkProgram;
//# sourceMappingURL=checkProgram.js.map
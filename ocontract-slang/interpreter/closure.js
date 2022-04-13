"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Closure = exports.cloneDeepWithClosure = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
function cloneDeepWithClosure(item) {
    if (Array.isArray(item)) {
        return item.map((i) => cloneDeepWithClosure(i));
    }
    if (item == null) {
        return item;
    }
    if (item instanceof Closure) {
        return Closure.createFromClosure(item);
    }
    if (typeof item === 'object') {
        const result = {};
        for (const [key, value] of Object.entries(item)) {
            result[key] = cloneDeepWithClosure(value);
        }
        return result;
    }
    return (0, lodash_clonedeep_1.default)(item);
}
exports.cloneDeepWithClosure = cloneDeepWithClosure;
class Closure {
    constructor(node, environments) {
        this.originalNode = node;
        this.clonedEnvironments = environments;
    }
    static createFromLambdaExpression(node, context) {
        return new Closure(node, cloneDeepWithClosure(context.runtime.environments));
    }
    static createFromClosure(closure) {
        return new Closure(closure.originalNode, closure.clonedEnvironments);
    }
    getType() {
        return this.originalNode.typeDeclaration;
    }
}
exports.Closure = Closure;
//# sourceMappingURL=closure.js.map
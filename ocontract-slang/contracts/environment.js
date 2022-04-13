"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentContractScope = exports.addContractToCurrentScope = exports.lookupContract = exports.popContractEnvironment = exports.pushContractEnvironment = exports.createInitialContractEnvironments = void 0;
function createInitialContractEnvironments() {
    return [
        {
            contractMap: new Map(),
            currentScope: 'main',
        },
    ];
}
exports.createInitialContractEnvironments = createInitialContractEnvironments;
function pushContractEnvironment(context, contractEnvironment) {
    context.contractEnvironments.unshift(contractEnvironment);
}
exports.pushContractEnvironment = pushContractEnvironment;
function popContractEnvironment(context) {
    var _a;
    return (_a = context.contractEnvironments.shift()) !== null && _a !== void 0 ? _a : null;
}
exports.popContractEnvironment = popContractEnvironment;
function lookupContract(name, context) {
    for (let i = 0; i < context.contractEnvironments.length; i++) {
        if (context.contractEnvironments[i].contractMap.has(name)) {
            return context.contractEnvironments[i].contractMap.get(name);
        }
    }
    return undefined;
}
exports.lookupContract = lookupContract;
function addContractToCurrentScope(context, name, contract) {
    context.contractEnvironments[0].contractMap.set(name, contract);
}
exports.addContractToCurrentScope = addContractToCurrentScope;
function getCurrentContractScope(context) {
    return context.contractEnvironments[0].currentScope;
}
exports.getCurrentContractScope = getCurrentContractScope;
//# sourceMappingURL=environment.js.map
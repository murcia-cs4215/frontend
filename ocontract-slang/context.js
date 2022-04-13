"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanUpContextAfterRun = exports.prepareContextForRun = exports.createContext = void 0;
const environment_1 = require("./contracts/environment");
const environment_2 = require("./types/environment");
const constants_1 = require("./constants");
const createEmptyRuntime = () => ({
    isRunning: false,
    environments: [],
    value: undefined,
    nodes: [],
});
const createEmptyContext = (externalSymbols, externalContext) => {
    return {
        externalSymbols,
        externalContext,
        runtime: createEmptyRuntime(),
        numberOfOuterEnvironments: 1,
        prelude: null,
        typeEnvironments: (0, environment_2.createInitialTypeEnvironments)(),
        contractEnvironments: (0, environment_1.createInitialContractEnvironments)(),
    };
};
const createGlobalEnvironment = () => ({
    tail: null,
    name: 'global',
    head: {},
    id: '-1',
});
const ensureGlobalEnvironmentExist = (context) => {
    if (!context.runtime) {
        context.runtime = createEmptyRuntime();
    }
    if (!context.runtime.environments) {
        context.runtime.environments = [];
    }
    if (context.runtime.environments.length === 0) {
        context.runtime.environments.push(createGlobalEnvironment());
    }
};
const defineSymbol = (context, name, value) => {
    const globalEnvironment = context.runtime.environments[0];
    Object.defineProperty(globalEnvironment.head, name, {
        value,
        writable: false,
        enumerable: true,
    });
    // const typeEnv = context.typeEnvironment[0];
    // // if the global type env doesn't already have the imported symbol,
    // // we set it to a type var T that can type check with anything.
    // if (!typeEnv.typeMap.has(name)) {
    //   typeEnv.typeMap.set(name, []);
    // }
};
const importExternalSymbols = (context, externalSymbols) => {
    ensureGlobalEnvironmentExist(context);
    externalSymbols.forEach((symbol) => {
        defineSymbol(context, symbol, constants_1.GLOBAL[symbol]);
    });
};
function createContext(externalSymbols = [], externalContext) {
    const context = createEmptyContext(externalSymbols, externalContext);
    importExternalSymbols(context, externalSymbols);
    return context;
}
exports.createContext = createContext;
function prepareContextForRun(context) {
    context.runtime.isRunning = true;
}
exports.prepareContextForRun = prepareContextForRun;
function cleanUpContextAfterRun(context) {
    context.runtime.isRunning = false;
}
exports.cleanUpContextAfterRun = cleanUpContextAfterRun;
//# sourceMappingURL=context.js.map
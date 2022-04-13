import { Context } from './runtimeTypes';
export declare function createContext<T>(externalSymbols?: string[], externalContext?: T): Context;
export declare function prepareContextForRun(context: Context): void;
export declare function cleanUpContextAfterRun(context: Context): void;
//# sourceMappingURL=context.d.ts.map
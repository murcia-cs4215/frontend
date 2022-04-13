import { Type } from '../types/types';
import { Errored, Finished } from '../runtimeTypes';
export declare function formatErroredForRepl(result: Errored, verbose?: boolean): string;
export declare function formatFinishedForRepl(result: Finished): string;
export declare function formatType(type: Type | Type[]): string;
//# sourceMappingURL=formatters.d.ts.map
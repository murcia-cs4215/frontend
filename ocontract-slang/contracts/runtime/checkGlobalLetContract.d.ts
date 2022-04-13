import { GlobalLetStatement } from '../../parser/types';
import { Context, RuntimeResult } from '../../runtimeTypes';
/**
 * Should only be called when the global let binding is working with
 * non-functions. This function will do a flat contract check.
 */
export declare function checkGlobalLetContract(node: GlobalLetStatement, context: Context, result: RuntimeResult): void;
//# sourceMappingURL=checkGlobalLetContract.d.ts.map
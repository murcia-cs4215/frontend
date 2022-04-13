import { Closure } from '../../interpreter/closure';
import { Context, RuntimeResult } from '../../runtimeTypes';
export declare function checkArgumentContract(closure: Closure, arg: RuntimeResult, // Should be cloned
context: Context): void;
export declare function checkReturnValueContract(closure: Closure, result: RuntimeResult, context: Context): void;
//# sourceMappingURL=checkApplyContract.d.ts.map
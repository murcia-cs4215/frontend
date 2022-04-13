import { LambdaExpression } from '../parser/types';
import { FunctionType } from '../types/types';
import { Context, Environment } from '../runtimeTypes';
export declare function cloneDeepWithClosure<T>(item: T): T;
export declare class Closure {
    originalNode: LambdaExpression;
    clonedEnvironments: Environment[];
    private constructor();
    static createFromLambdaExpression(node: LambdaExpression, context: Context): Closure;
    static createFromClosure(closure: Closure): Closure;
    getType(): FunctionType;
}
//# sourceMappingURL=closure.d.ts.map
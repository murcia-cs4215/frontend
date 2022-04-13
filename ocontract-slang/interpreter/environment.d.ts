import { Context, Environment, RuntimeResult } from '../runtimeTypes';
import { Closure } from './closure';
export declare function currentEnvironment(context: Context): Environment | null;
export declare function pushEnvironment(context: Context, environment: Environment): void;
export declare function popEnvironment(context: Context): Environment | null;
export declare function getVariable(context: Context, name: string): RuntimeResult;
export declare function setVariable(context: Context, name: string, value: RuntimeResult | Closure): RuntimeResult;
export declare function createLocalEnvironment(context: Context, name?: string): Environment;
export declare function createFunctionEnvironment(closure: Closure, arg: RuntimeResult): Environment;
export declare function createContractEnvironment(environments: Environment[], name?: string): Environment;
//# sourceMappingURL=environment.d.ts.map
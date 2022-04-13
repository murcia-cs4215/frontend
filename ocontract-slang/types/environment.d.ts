import { Context, TypeEnvironment } from '../runtimeTypes';
import { ContractType, Type } from './types';
export declare const NEGATIVE_OP = "-_1";
export declare function createInitialTypeEnvironments(): TypeEnvironment[];
export declare function pushTypeEnvironment(context: Context, typeMap: TypeEnvironment): void;
export declare function popTypeEnvironment(context: Context): TypeEnvironment | null;
export declare function getType(context: Context, name: string): Type | Type[] | null;
export declare function setType(context: Context, name: string, type: Type | Type[]): void;
export declare function getContractType(context: Context, name: string): ContractType | null;
export declare function setContractType(context: Context, name: string, type: ContractType): void;
export declare function createLocalTypeEnvironment(): TypeEnvironment;
//# sourceMappingURL=environment.d.ts.map
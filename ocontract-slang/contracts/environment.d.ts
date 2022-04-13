import { Context, ContractEnvironment } from '../runtimeTypes';
import { Contract } from './types';
export declare function createInitialContractEnvironments(): ContractEnvironment[];
export declare function pushContractEnvironment(context: Context, contractEnvironment: ContractEnvironment): void;
export declare function popContractEnvironment(context: Context): ContractEnvironment | null;
export declare function lookupContract(name: string, context: Context): Contract | undefined;
export declare function addContractToCurrentScope(context: Context, name: string, contract: Contract): void;
export declare function getCurrentContractScope(context: Context): string;
//# sourceMappingURL=environment.d.ts.map
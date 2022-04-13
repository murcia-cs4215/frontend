import { Contract } from './contracts/types';
import { SourceError } from './errors/types';
import { Node } from './parser/types';
import { ContractType, Type } from './types/types';
/**
 * TYPES FOR OUTPUT
 */
export declare type Value = any;
export interface Errored {
    status: 'errored';
    error: SourceError;
}
export interface Finished {
    status: 'finished';
    value: Value;
    type: Type;
    name?: string;
}
export declare type Result = Finished | Errored;
export declare type RuntimeResult = Omit<Finished, 'status'>;
/**
 * TYPES FOR ENVIRONMENT
 */
export interface Frame {
    [name: string]: RuntimeResult;
}
export interface Environment {
    id: string;
    name?: string;
    tail: Environment | null;
    head: Frame;
    thisContext?: Value;
}
export interface TypeEnvironment {
    typeMap: Map<string, Type | Type[]>;
    contractTypeMap: Map<string, ContractType>;
}
export interface ContractEnvironment {
    contractMap: Map<string, Contract>;
    currentScope: string;
}
export interface Context<T = any> {
    /** The external symbols that exist in the Context. */
    externalSymbols: string[];
    /** Runtime specific state */
    runtime: {
        isRunning: boolean;
        environments: Environment[];
        value: Value;
        nodes: Node[];
    };
    numberOfOuterEnvironments: number;
    prelude: string | null;
    /**
     * Used for storing external properties.
     * For e.g, this can be used to store some application-related
     * context for use in your own built-in functions (like `display(a)`)
     */
    externalContext?: T;
    typeEnvironments: TypeEnvironment[];
    contractEnvironments: ContractEnvironment[];
}
//# sourceMappingURL=runtimeTypes.d.ts.map
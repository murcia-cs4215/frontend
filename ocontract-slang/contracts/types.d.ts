import { Closure } from '../interpreter/closure';
import { SourceLocation } from '../parser/types';
export declare type Contract = FlatContract | FunctionContract;
export interface BaseContractMonitor {
    contract?: Contract;
    pos?: string;
    neg?: string;
}
export interface FunctionContract {
    type: 'FunctionContract';
    parameterContract: Contract;
    returnContract: Contract;
    loc?: SourceLocation;
}
export interface FlatContract {
    type: 'FlatContract';
    contract: Closure;
    isSetNotation: boolean;
    loc?: SourceLocation;
}
//# sourceMappingURL=types.d.ts.map
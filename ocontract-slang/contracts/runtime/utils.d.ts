import { Expression, Node, SourceLocation } from '../../parser/types';
import { Context, RuntimeResult } from '../../runtimeTypes';
import { Contract, FlatContract } from '../types';
export declare function checkFlatContract(node: Node, val: RuntimeResult, contract: FlatContract, context: Context, blame: string): void;
export declare function verifyContractExists(exp: Expression, context: Context): boolean;
export declare function propagateLoc(contract: Contract, loc: SourceLocation | undefined): void;
export declare function propagateEnvironment(contract: Contract, context: Context): void;
//# sourceMappingURL=utils.d.ts.map
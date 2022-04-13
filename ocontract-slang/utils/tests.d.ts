import { Type } from '../types/types';
import { Result } from '../runtimeTypes';
export declare function runTest(code: string): Result;
export declare function expectError(result: Result, explainMessage: string, elaborateMessage?: string): void;
export declare function expectTypeError(result: Result, expected: Type | string, got: Type): void;
export declare function expectContractReturnTypeError(result: Result, got: Type): void;
export declare function expectContractTypeError(result: Result, expected: Type, got: Type): void;
export declare function expectContractViolation(result: Result, blame: string, row: number, col: number): void;
export declare function expectNotAFunction(result: Result, type: Type): void;
//# sourceMappingURL=tests.d.ts.map
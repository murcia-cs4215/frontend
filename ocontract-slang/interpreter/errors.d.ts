import { RuntimeSourceError } from '../errors/runtimeSourceError';
import { Node } from '../parser/types';
import { ErrorSeverity, ErrorType } from '../errors/types';
import { Context } from '../runtimeTypes';
import { Closure } from './closure';
export declare class InterpreterError extends RuntimeSourceError {
    node: Node;
    message: string;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node, message?: string);
    explain(): string;
    elaborate(): string;
}
export declare function handleRuntimeError(context: Context, error: RuntimeSourceError): never;
export declare function assertClosure(closure: any, node: Node, context: Context): closure is Closure;
//# sourceMappingURL=errors.d.ts.map
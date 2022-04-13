import { RuntimeSourceError } from '../../errors/runtimeSourceError';
import { ErrorSeverity, ErrorType } from '../../errors/types';
import { Node } from '../../parser/types';
export declare class RuntimeTypeError extends RuntimeSourceError {
    side: string;
    expected: string;
    got: string;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node, side: string, expected: string, got: string);
    explain(): string;
    elaborate(): string;
}
//# sourceMappingURL=errors.d.ts.map
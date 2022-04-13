import { Node, SourceLocation } from '../parser/types';
import { ErrorSeverity, ErrorType, SourceError } from './types';
export declare class RuntimeSourceError implements SourceError {
    type: ErrorType;
    severity: ErrorSeverity;
    location: SourceLocation;
    constructor(node?: Node);
    explain(): string;
    elaborate(): string;
}
//# sourceMappingURL=runtimeSourceError.d.ts.map
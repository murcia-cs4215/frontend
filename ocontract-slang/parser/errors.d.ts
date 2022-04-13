import { ErrorSeverity, ErrorType, SourceError } from '../errors/types';
import { SourceLocation } from './types';
export declare class FatalSyntaxError implements SourceError {
    location: SourceLocation;
    message: string;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(location: SourceLocation, message: string);
    explain(): string;
    elaborate(): string;
}
//# sourceMappingURL=errors.d.ts.map
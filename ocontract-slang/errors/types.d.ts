import { SourceLocation } from '../parser/types';
export declare enum ErrorType {
    SYNTAX = "Syntax",
    TYPE = "Type",
    RUNTIME = "Runtime"
}
export declare enum ErrorSeverity {
    WARNING = "Warning",
    ERROR = "Error"
}
export interface SourceError {
    type: ErrorType;
    severity: ErrorSeverity;
    location: SourceLocation;
    explain(): string;
    elaborate(): string;
}
//# sourceMappingURL=types.d.ts.map
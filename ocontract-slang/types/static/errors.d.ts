import { Node, SourceLocation } from '../../parser/types';
import { ErrorSeverity, ErrorType, SourceError } from '../../errors/types';
export declare class StaticTypeError implements SourceError {
    node: Node;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node);
    get location(): SourceLocation;
    explain(): string;
    elaborate(): string;
}
export declare class TypeMismatchError extends StaticTypeError {
    node: Node;
    expected: string;
    got: string;
    constructor(node: Node, expected: string, got: string);
    explain(): string;
    elaborate(): string;
}
export declare class UnboundValueError extends StaticTypeError {
    name: string;
    constructor(name: string, node: Node);
    explain(): string;
    elaborate(): string;
}
export declare class TooManyArgumentsError extends StaticTypeError {
    functionType: string;
    constructor(functionType: string, node: Node);
    explain(): string;
    elaborate(): string;
}
export declare class NotAFunctionError extends StaticTypeError {
    expressionType: string;
    constructor(expressionType: string, node: Node);
    explain(): string;
    elaborate(): string;
}
export declare class InvalidContractReturnTypeError extends StaticTypeError {
    node: Node;
    got: string;
    constructor(node: Node, got: string);
    explain(): string;
    elaborate(): string;
}
export declare class ContractTypeMismatchError extends StaticTypeError {
    node: Node;
    expected: string;
    got: string;
    constructor(node: Node, expected: string, got: string);
    explain(): string;
    elaborate(): string;
}
//# sourceMappingURL=errors.d.ts.map
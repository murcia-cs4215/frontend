/**
 * GENERAL TYPES
 */
import { BaseContractMonitor } from '../contracts/types';
import { FunctionType, Type } from '../types/types';
import { StringWrapper } from './wrappers';
export interface Position {
    /** >= 1 */
    line: number;
    /** >= 0 */
    column: number;
}
export interface SourceLocation {
    source?: string | null;
    start: Position;
    end: Position;
}
interface BaseNode {
    type: string;
    loc?: SourceLocation;
}
export interface Program extends BaseNode {
    type: 'Program';
    body: Array<Statement>;
}
export declare type Statement = ExpressionStatement | GlobalLetStatement | ContractDeclarationStatement | EmptyStatement;
export declare type Expression = Literal | Identifier | UnaryExpression | BinaryExpression | LogicalExpression | ConditionalExpression | LocalLetExpression | LambdaExpression | CallExpression | EmptyExpression;
export declare type Node = Program | Statement | Expression | ContractExpression;
/**
 * STATEMENT TYPES
 */
declare type BaseStatement = BaseNode;
export interface ExpressionStatement extends BaseStatement {
    type: 'ExpressionStatement';
    expression: Expression;
}
export interface GlobalLetStatement extends BaseStatement {
    type: 'GlobalLetStatement';
    recursive: boolean;
    left: Identifier;
    params: Array<Identifier>;
    right: Expression;
    typeDeclaration: Type;
}
export interface ContractDeclarationStatement extends BaseStatement {
    type: 'ContractDeclarationStatement';
    id: Identifier;
    contract: ContractExpression;
}
export interface EmptyStatement extends BaseStatement {
    type: 'EmptyStatement';
}
/**
 * PRIMITIVE LITERAL TYPES
 */
interface BaseLiteral extends BaseNode, BaseContractMonitor {
    type: 'Literal';
    valueType: string;
}
export interface Integer extends BaseLiteral {
    valueType: 'int';
    value: number;
}
export interface Float extends BaseLiteral {
    valueType: 'float';
    value: number;
}
export interface Str extends BaseLiteral {
    valueType: 'string';
    value: StringWrapper;
}
export interface Character extends BaseLiteral {
    valueType: 'char';
    value: string;
}
export interface Bool extends BaseLiteral {
    valueType: 'bool';
    value: boolean;
}
export declare type Literal = Integer | Float | Str | Character | Bool;
/**
 * PRIMITIVE OPERATIONS
 */
export declare type UnaryOperator = '-' | 'not';
export declare type BinaryOperator = '**' | '*' | '/' | '+' | '-' | 'mod' | '+.' | '-.' | '*.' | '/.' | '<' | '<=' | '>' | '>=' | '=' | '<>' | '==' | '!=' | '^';
export declare type LogicalOperator = '||' | '&&';
export declare type BaseExpression = BaseNode & BaseContractMonitor;
export interface UnaryExpression extends BaseExpression {
    type: 'UnaryExpression';
    operator: UnaryOperator;
    argument: Expression;
}
export interface BinaryExpression extends BaseExpression {
    type: 'BinaryExpression';
    operator: BinaryOperator;
    left: Expression;
    right: Expression;
}
export interface LogicalExpression extends BaseExpression {
    type: 'LogicalExpression';
    operator: LogicalOperator;
    left: Expression;
    right: Expression;
}
/**
 * BINDINGS
 */
export interface LocalLetExpression extends BaseExpression {
    type: 'LocalLetExpression';
    left: GlobalLetStatement;
    right: Expression;
}
/**
 * OTHER EXPRESSIONS
 */
export interface ConditionalExpression extends BaseExpression {
    type: 'ConditionalExpression';
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}
export interface EmptyExpression extends BaseExpression {
    type: 'EmptyExpression';
}
export interface Identifier extends BaseExpression {
    type: 'Identifier';
    name: string;
    typeDeclaration?: Type;
}
/**
 * FUNCTIONS
 */
interface BaseFunction extends BaseNode {
    params: Array<Identifier>;
    body: Expression;
}
export interface LambdaExpression extends BaseFunction, BaseExpression {
    type: 'LambdaExpression';
    typeDeclaration: FunctionType;
}
interface BaseCallExpression extends BaseExpression {
    callee: Expression;
    arguments: Array<Expression>;
}
export interface CallExpression extends BaseCallExpression {
    type: 'CallExpression';
}
/**
 * CONTRACTS
 */
export interface ContractExpression extends BaseNode {
    type: 'ContractExpression';
    contract: ContractExpressionType;
}
export declare type ContractExpressionType = FlatContractExpression | FunctionContractExpression | EmptyContractExpression;
export interface FunctionContractExpression extends BaseNode {
    type: 'FunctionContractExpression';
    parameterContract: ContractExpression;
    returnContract: ContractExpression;
}
export interface FlatContractExpression extends BaseNode {
    type: 'FlatContractExpression';
    contract: Expression;
    isSetNotation: boolean;
}
export interface EmptyContractExpression extends BaseNode {
    type: 'EmptyContractExpression';
}
export {};
//# sourceMappingURL=types.d.ts.map
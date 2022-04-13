import { ATN } from 'antlr4ts/atn/ATN';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { GrammarListener } from './GrammarListener';
import { GrammarVisitor } from './GrammarVisitor';
export declare class GrammarParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly POW = 5;
    static readonly MUL = 6;
    static readonly DIV = 7;
    static readonly ADD = 8;
    static readonly SUB = 9;
    static readonly MOD = 10;
    static readonly ADDFLOAT = 11;
    static readonly SUBFLOAT = 12;
    static readonly MULFLOAT = 13;
    static readonly DIVFLOAT = 14;
    static readonly LESSTHAN = 15;
    static readonly LESSTHANOREQUAL = 16;
    static readonly GREATERTHAN = 17;
    static readonly GREATERTHANOREQUAL = 18;
    static readonly EQUALSTRUC = 19;
    static readonly NOTEQUALSTRUC = 20;
    static readonly EQUALPHYS = 21;
    static readonly NOTEQUALPHYS = 22;
    static readonly CONCAT = 23;
    static readonly AND = 24;
    static readonly OR = 25;
    static readonly NOT = 26;
    static readonly NUMBER = 27;
    static readonly TOSKIP = 28;
    static readonly CHAR = 29;
    static readonly STRING = 30;
    static readonly FLOAT = 31;
    static readonly BOOLEAN = 32;
    static readonly IF = 33;
    static readonly THEN = 34;
    static readonly ELSE = 35;
    static readonly FUN = 36;
    static readonly ARROW = 37;
    static readonly PIPE = 38;
    static readonly LET = 39;
    static readonly IN = 40;
    static readonly REC = 41;
    static readonly COLON = 42;
    static readonly CONTRACT = 43;
    static readonly DOUBLESEMICOLON = 44;
    static readonly PRIMITIVETYPE = 45;
    static readonly IDENTIFIER = 46;
    static readonly RULE_type = 0;
    static readonly RULE_atom = 1;
    static readonly RULE_start = 2;
    static readonly RULE_statement = 3;
    static readonly RULE_expression = 4;
    static readonly RULE_typeAnnotation = 5;
    static readonly RULE_contractExpression = 6;
    static readonly RULE_contractDeclaration = 7;
    static readonly RULE_identifierWithTypeParen = 8;
    static readonly RULE_identifierWithType = 9;
    static readonly RULE_condExp = 10;
    static readonly RULE_parenthesesExpression = 11;
    static readonly RULE_funcArgument = 12;
    static readonly RULE_identifier = 13;
    static readonly RULE_identifierListWithType = 14;
    static readonly RULE_funcApplyArgumentList = 15;
    static readonly RULE_funcApplication = 16;
    static readonly RULE_lambda = 17;
    static readonly RULE_letGlobalBinding = 18;
    static readonly RULE_letLocalBinding = 19;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    type(): TypeContext;
    type(_p: number): TypeContext;
    atom(): AtomContext;
    start(): StartContext;
    statement(): StatementContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    typeAnnotation(): TypeAnnotationContext;
    contractExpression(): ContractExpressionContext;
    contractExpression(_p: number): ContractExpressionContext;
    contractDeclaration(): ContractDeclarationContext;
    identifierWithTypeParen(): IdentifierWithTypeParenContext;
    identifierWithType(): IdentifierWithTypeContext;
    condExp(): CondExpContext;
    parenthesesExpression(): ParenthesesExpressionContext;
    funcArgument(): FuncArgumentContext;
    identifier(): IdentifierContext;
    identifierListWithType(): IdentifierListWithTypeContext;
    funcApplyArgumentList(): FuncApplyArgumentListContext;
    funcApplication(): FuncApplicationContext;
    lambda(): LambdaContext;
    letGlobalBinding(): LetGlobalBindingContext;
    letLocalBinding(): LetLocalBindingContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private type_sempred;
    private expression_sempred;
    private contractExpression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class TypeContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TypeContext): void;
}
export declare class PrimTypeContext extends TypeContext {
    PRIMITIVETYPE(): TerminalNode;
    constructor(ctx: TypeContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ParenTypeContext extends TypeContext {
    type(): TypeContext;
    constructor(ctx: TypeContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class FunTypeContext extends TypeContext {
    type(): TypeContext[];
    type(i: number): TypeContext;
    ARROW(): TerminalNode[];
    ARROW(i: number): TerminalNode;
    constructor(ctx: TypeContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class AtomContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AtomContext): void;
}
export declare class NumberContext extends AtomContext {
    NUMBER(): TerminalNode;
    constructor(ctx: AtomContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class FloatContext extends AtomContext {
    FLOAT(): TerminalNode;
    constructor(ctx: AtomContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class BooleanContext extends AtomContext {
    BOOLEAN(): TerminalNode;
    constructor(ctx: AtomContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class CharContext extends AtomContext {
    CHAR(): TerminalNode;
    constructor(ctx: AtomContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class StringContext extends AtomContext {
    STRING(): TerminalNode;
    constructor(ctx: AtomContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class StartContext extends ParserRuleContext {
    EOF(): TerminalNode;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    DOUBLESEMICOLON(): TerminalNode[];
    DOUBLESEMICOLON(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    letGlobalBinding(): LetGlobalBindingContext | undefined;
    contractDeclaration(): ContractDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class AtomExpressionContext extends ExpressionContext {
    atom(): AtomContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class IdentifierExpressionContext extends ExpressionContext {
    identifier(): IdentifierContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ParenthesesContext extends ExpressionContext {
    parenthesesExpression(): ParenthesesExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class PowerContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    POW(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class MultiplicationContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MUL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class DivisionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    DIV(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class MultiplicationFloatContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MULFLOAT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class DivisionFloatContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    DIVFLOAT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ModulusContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MOD(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class AdditionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    ADD(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class SubtractionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SUB(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class AdditionFloatContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    ADDFLOAT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class SubtractionFloatContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SUBFLOAT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class LessThanContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LESSTHAN(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class LessThanOrEqualContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LESSTHANOREQUAL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class GreaterThanContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    GREATERTHAN(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class GreaterThanOrEqualContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    GREATERTHANOREQUAL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class EqualStructuralContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EQUALSTRUC(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class NotEqualStructuralContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    NOTEQUALSTRUC(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class EqualPhysicalContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EQUALPHYS(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class NotEqualPhysicalContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    NOTEQUALPHYS(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ConcatenationContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    CONCAT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class NegativeContext extends ExpressionContext {
    _operator: Token;
    _argument: ExpressionContext;
    SUB(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class NotContext extends ExpressionContext {
    _operator: Token;
    _argument: ExpressionContext;
    NOT(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class AndContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    AND(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class OrContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    OR(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ConditionalExpressionContext extends ExpressionContext {
    condExp(): CondExpContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class LetLocalBindingExpressionContext extends ExpressionContext {
    letLocalBinding(): LetLocalBindingContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class LambdaExpressionContext extends ExpressionContext {
    lambda(): LambdaContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class CallFunctionContext extends ExpressionContext {
    funcApplication(): FuncApplicationContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class TypeAnnotationContext extends ParserRuleContext {
    COLON(): TerminalNode;
    type(): TypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ContractExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ContractExpressionContext): void;
}
export declare class ContractSimpleExpressionContext extends ContractExpressionContext {
    expression(): ExpressionContext;
    constructor(ctx: ContractExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ContractSetNotationContext extends ContractExpressionContext {
    identifierWithType(): IdentifierWithTypeContext;
    PIPE(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ContractExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ContractListContext extends ContractExpressionContext {
    contractExpression(): ContractExpressionContext[];
    contractExpression(i: number): ContractExpressionContext;
    ARROW(): TerminalNode[];
    ARROW(i: number): TerminalNode;
    constructor(ctx: ContractExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ParenthesesContractContext extends ContractExpressionContext {
    contractExpression(): ContractExpressionContext;
    constructor(ctx: ContractExpressionContext);
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ContractDeclarationContext extends ParserRuleContext {
    CONTRACT(): TerminalNode;
    identifier(): IdentifierContext;
    EQUALSTRUC(): TerminalNode;
    contractExpression(): ContractExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class IdentifierWithTypeParenContext extends ParserRuleContext {
    identifierWithType(): IdentifierWithTypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class IdentifierWithTypeContext extends ParserRuleContext {
    _id: IdentifierContext;
    _idType: TypeAnnotationContext;
    identifier(): IdentifierContext;
    typeAnnotation(): TypeAnnotationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class CondExpContext extends ParserRuleContext {
    _test: ExpressionContext;
    _consequent: ExpressionContext;
    _alternate: ExpressionContext;
    IF(): TerminalNode;
    THEN(): TerminalNode;
    ELSE(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class ParenthesesExpressionContext extends ParserRuleContext {
    _inner: ExpressionContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class FuncArgumentContext extends ParserRuleContext {
    atom(): AtomContext | undefined;
    identifier(): IdentifierContext | undefined;
    parenthesesExpression(): ParenthesesExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class IdentifierContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class IdentifierListWithTypeContext extends ParserRuleContext {
    identifierWithTypeParen(): IdentifierWithTypeParenContext[];
    identifierWithTypeParen(i: number): IdentifierWithTypeParenContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class FuncApplyArgumentListContext extends ParserRuleContext {
    funcArgument(): FuncArgumentContext[];
    funcArgument(i: number): FuncArgumentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class FuncApplicationContext extends ParserRuleContext {
    _func: IdentifierContext;
    _args: FuncApplyArgumentListContext;
    _lambdaFunc: LambdaContext;
    identifier(): IdentifierContext | undefined;
    funcApplyArgumentList(): FuncApplyArgumentListContext;
    lambda(): LambdaContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class LambdaContext extends ParserRuleContext {
    _params: IdentifierListWithTypeContext;
    _returnType: TypeAnnotationContext;
    _body: ExpressionContext;
    FUN(): TerminalNode;
    ARROW(): TerminalNode;
    typeAnnotation(): TypeAnnotationContext;
    expression(): ExpressionContext;
    identifierListWithType(): IdentifierListWithTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class LetGlobalBindingContext extends ParserRuleContext {
    _id: IdentifierContext;
    _params: IdentifierListWithTypeContext;
    _idType: TypeAnnotationContext;
    _init: ExpressionContext;
    LET(): TerminalNode;
    EQUALSTRUC(): TerminalNode;
    identifier(): IdentifierContext;
    typeAnnotation(): TypeAnnotationContext;
    expression(): ExpressionContext;
    REC(): TerminalNode | undefined;
    identifierListWithType(): IdentifierListWithTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
export declare class LetLocalBindingContext extends ParserRuleContext {
    _exp2: ExpressionContext;
    letGlobalBinding(): LetGlobalBindingContext;
    IN(): TerminalNode;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GrammarListener): void;
    exitRule(listener: GrammarListener): void;
    accept<Result>(visitor: GrammarVisitor<Result>): Result;
}
//# sourceMappingURL=GrammarParser.d.ts.map
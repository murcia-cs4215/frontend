"use strict";
// Generated from ./src/lang/Grammar.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParenthesesContractContext = exports.ContractListContext = exports.ContractSetNotationContext = exports.ContractSimpleExpressionContext = exports.ContractExpressionContext = exports.TypeAnnotationContext = exports.CallFunctionContext = exports.LambdaExpressionContext = exports.LetLocalBindingExpressionContext = exports.ConditionalExpressionContext = exports.OrContext = exports.AndContext = exports.NotContext = exports.NegativeContext = exports.ConcatenationContext = exports.NotEqualPhysicalContext = exports.EqualPhysicalContext = exports.NotEqualStructuralContext = exports.EqualStructuralContext = exports.GreaterThanOrEqualContext = exports.GreaterThanContext = exports.LessThanOrEqualContext = exports.LessThanContext = exports.SubtractionFloatContext = exports.AdditionFloatContext = exports.SubtractionContext = exports.AdditionContext = exports.ModulusContext = exports.DivisionFloatContext = exports.MultiplicationFloatContext = exports.DivisionContext = exports.MultiplicationContext = exports.PowerContext = exports.ParenthesesContext = exports.IdentifierExpressionContext = exports.AtomExpressionContext = exports.ExpressionContext = exports.StatementContext = exports.StartContext = exports.StringContext = exports.CharContext = exports.BooleanContext = exports.FloatContext = exports.NumberContext = exports.AtomContext = exports.FunTypeContext = exports.ParenTypeContext = exports.PrimTypeContext = exports.TypeContext = exports.GrammarParser = void 0;
exports.LetLocalBindingContext = exports.LetGlobalBindingContext = exports.LambdaContext = exports.FuncApplicationContext = exports.FuncApplyArgumentListContext = exports.IdentifierListWithTypeContext = exports.IdentifierContext = exports.FuncArgumentContext = exports.ParenthesesExpressionContext = exports.CondExpContext = exports.IdentifierWithTypeContext = exports.IdentifierWithTypeParenContext = exports.ContractDeclarationContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
class GrammarParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(GrammarParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return GrammarParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() {
        return 'Grammar.g4';
    }
    // @Override
    get ruleNames() {
        return GrammarParser.ruleNames;
    }
    // @Override
    get serializedATN() {
        return GrammarParser._serializedATN;
    }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    type(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        const _parentctx = this._ctx;
        const _parentState = this.state;
        let _localctx = new TypeContext(this._ctx, _parentState);
        const _startState = 0;
        this.enterRecursionRule(_localctx, 0, GrammarParser.RULE_type, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case GrammarParser.PRIMITIVETYPE:
                        {
                            _localctx = new PrimTypeContext(_localctx);
                            this._ctx = _localctx;
                            this.state = 41;
                            this.match(GrammarParser.PRIMITIVETYPE);
                        }
                        break;
                    case GrammarParser.T__0:
                        {
                            _localctx = new ParenTypeContext(_localctx);
                            this._ctx = _localctx;
                            this.state = 42;
                            this.match(GrammarParser.T__0);
                            this.state = 43;
                            this.type(0);
                            this.state = 44;
                            this.match(GrammarParser.T__1);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 57;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        {
                            {
                                _localctx = new FunTypeContext(new TypeContext(_parentctx, _parentState));
                                this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_type);
                                this.state = 48;
                                if (!this.precpred(this._ctx, 1)) {
                                    throw this.createFailedPredicateException('this.precpred(this._ctx, 1)');
                                }
                                this.state = 51;
                                this._errHandler.sync(this);
                                _alt = 1;
                                do {
                                    switch (_alt) {
                                        case 1:
                                            {
                                                {
                                                    this.state = 49;
                                                    this.match(GrammarParser.ARROW);
                                                    this.state = 50;
                                                    this.type(0);
                                                }
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 53;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            }
                        }
                    }
                    this.state = 59;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atom() {
        let _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, GrammarParser.RULE_atom);
        try {
            this.state = 65;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GrammarParser.NUMBER:
                    _localctx = new NumberContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 60;
                        this.match(GrammarParser.NUMBER);
                    }
                    break;
                case GrammarParser.FLOAT:
                    _localctx = new FloatContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 61;
                        this.match(GrammarParser.FLOAT);
                    }
                    break;
                case GrammarParser.BOOLEAN:
                    _localctx = new BooleanContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 62;
                        this.match(GrammarParser.BOOLEAN);
                    }
                    break;
                case GrammarParser.CHAR:
                    _localctx = new CharContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 63;
                        this.match(GrammarParser.CHAR);
                    }
                    break;
                case GrammarParser.STRING:
                    _localctx = new StringContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 64;
                        this.match(GrammarParser.STRING);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    start() {
        const _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, GrammarParser.RULE_start);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << GrammarParser.T__0) |
                            (1 << GrammarParser.SUB) |
                            (1 << GrammarParser.NOT) |
                            (1 << GrammarParser.NUMBER) |
                            (1 << GrammarParser.CHAR) |
                            (1 << GrammarParser.STRING) |
                            (1 << GrammarParser.FLOAT))) !==
                        0) ||
                    (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                            ((1 << (GrammarParser.BOOLEAN - 32)) |
                                (1 << (GrammarParser.IF - 32)) |
                                (1 << (GrammarParser.FUN - 32)) |
                                (1 << (GrammarParser.LET - 32)) |
                                (1 << (GrammarParser.CONTRACT - 32)) |
                                (1 << (GrammarParser.IDENTIFIER - 32)))) !==
                            0)) {
                    {
                        {
                            this.state = 67;
                            this.statement();
                            this.state = 68;
                            this.match(GrammarParser.DOUBLESEMICOLON);
                        }
                    }
                    this.state = 74;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 75;
                this.match(GrammarParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        const _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, GrammarParser.RULE_statement);
        try {
            this.state = 80;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 77;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 78;
                        this.letGlobalBinding();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 79;
                        this.contractDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        const _parentctx = this._ctx;
        const _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        const _startState = 8;
        this.enterRecursionRule(_localctx, 8, GrammarParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            _localctx = new AtomExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 83;
                            this.atom();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new IdentifierExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 84;
                            this.identifier();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 85;
                            this.parenthesesExpression();
                        }
                        break;
                    case 4:
                        {
                            _localctx = new NegativeContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 86;
                            _localctx._operator = this.match(GrammarParser.SUB);
                            this.state = 87;
                            _localctx._argument = this.expression(8);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new NotContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 88;
                            _localctx._operator = this.match(GrammarParser.NOT);
                            this.state = 89;
                            _localctx._argument = this.expression(7);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new ConditionalExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 90;
                            this.condExp();
                        }
                        break;
                    case 7:
                        {
                            _localctx = new LetLocalBindingExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 91;
                            this.letLocalBinding();
                        }
                        break;
                    case 8:
                        {
                            _localctx = new LambdaExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 92;
                            this.lambda();
                        }
                        break;
                    case 9:
                        {
                            _localctx = new CallFunctionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 93;
                            this.funcApplication();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 161;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 159;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 96;
                                        if (!this.precpred(this._ctx, 27)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 27)');
                                        }
                                        this.state = 97;
                                        _localctx._operator = this.match(GrammarParser.POW);
                                        this.state = 98;
                                        _localctx._right = this.expression(27);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 99;
                                        if (!this.precpred(this._ctx, 26)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 26)');
                                        }
                                        this.state = 100;
                                        _localctx._operator = this.match(GrammarParser.MUL);
                                        this.state = 101;
                                        _localctx._right =
                                            this.expression(27);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 102;
                                        if (!this.precpred(this._ctx, 25)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 25)');
                                        }
                                        this.state = 103;
                                        _localctx._operator = this.match(GrammarParser.DIV);
                                        this.state = 104;
                                        _localctx._right = this.expression(26);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new MultiplicationFloatContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 105;
                                        if (!this.precpred(this._ctx, 24)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 24)');
                                        }
                                        this.state = 106;
                                        _localctx._operator =
                                            this.match(GrammarParser.MULFLOAT);
                                        this.state = 107;
                                        _localctx._right =
                                            this.expression(25);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new DivisionFloatContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 108;
                                        if (!this.precpred(this._ctx, 23)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 23)');
                                        }
                                        this.state = 109;
                                        _localctx._operator = this.match(GrammarParser.DIVFLOAT);
                                        this.state = 110;
                                        _localctx._right =
                                            this.expression(24);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 111;
                                        if (!this.precpred(this._ctx, 22)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 22)');
                                        }
                                        this.state = 112;
                                        _localctx._operator = this.match(GrammarParser.MOD);
                                        this.state = 113;
                                        _localctx._right = this.expression(23);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 114;
                                        if (!this.precpred(this._ctx, 21)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 21)');
                                        }
                                        this.state = 115;
                                        _localctx._operator = this.match(GrammarParser.ADD);
                                        this.state = 116;
                                        _localctx._right = this.expression(22);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 117;
                                        if (!this.precpred(this._ctx, 20)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 20)');
                                        }
                                        this.state = 118;
                                        _localctx._operator = this.match(GrammarParser.SUB);
                                        this.state = 119;
                                        _localctx._right =
                                            this.expression(21);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new AdditionFloatContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 120;
                                        if (!this.precpred(this._ctx, 19)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 19)');
                                        }
                                        this.state = 121;
                                        _localctx._operator = this.match(GrammarParser.ADDFLOAT);
                                        this.state = 122;
                                        _localctx._right =
                                            this.expression(20);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new SubtractionFloatContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 123;
                                        if (!this.precpred(this._ctx, 18)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 18)');
                                        }
                                        this.state = 124;
                                        _localctx._operator =
                                            this.match(GrammarParser.SUBFLOAT);
                                        this.state = 125;
                                        _localctx._right =
                                            this.expression(19);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new LessThanContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 126;
                                        if (!this.precpred(this._ctx, 17)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 17)');
                                        }
                                        this.state = 127;
                                        _localctx._operator = this.match(GrammarParser.LESSTHAN);
                                        this.state = 128;
                                        _localctx._right = this.expression(18);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new LessThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 129;
                                        if (!this.precpred(this._ctx, 16)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 16)');
                                        }
                                        this.state = 130;
                                        _localctx._operator =
                                            this.match(GrammarParser.LESSTHANOREQUAL);
                                        this.state = 131;
                                        _localctx._right =
                                            this.expression(17);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new GreaterThanContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 132;
                                        if (!this.precpred(this._ctx, 15)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 15)');
                                        }
                                        this.state = 133;
                                        _localctx._operator = this.match(GrammarParser.GREATERTHAN);
                                        this.state = 134;
                                        _localctx._right =
                                            this.expression(16);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new GreaterThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 135;
                                        if (!this.precpred(this._ctx, 14)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 14)');
                                        }
                                        this.state = 136;
                                        _localctx._operator =
                                            this.match(GrammarParser.GREATERTHANOREQUAL);
                                        this.state = 137;
                                        _localctx._right =
                                            this.expression(15);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new EqualStructuralContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 138;
                                        if (!this.precpred(this._ctx, 13)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 13)');
                                        }
                                        this.state = 139;
                                        _localctx._operator =
                                            this.match(GrammarParser.EQUALSTRUC);
                                        this.state = 140;
                                        _localctx._right =
                                            this.expression(14);
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new NotEqualStructuralContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 141;
                                        if (!this.precpred(this._ctx, 12)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 12)');
                                        }
                                        this.state = 142;
                                        _localctx._operator =
                                            this.match(GrammarParser.NOTEQUALSTRUC);
                                        this.state = 143;
                                        _localctx._right =
                                            this.expression(13);
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new EqualPhysicalContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 144;
                                        if (!this.precpred(this._ctx, 11)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 11)');
                                        }
                                        this.state = 145;
                                        _localctx._operator = this.match(GrammarParser.EQUALPHYS);
                                        this.state = 146;
                                        _localctx._right =
                                            this.expression(12);
                                    }
                                    break;
                                case 18:
                                    {
                                        _localctx = new NotEqualPhysicalContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 147;
                                        if (!this.precpred(this._ctx, 10)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 10)');
                                        }
                                        this.state = 148;
                                        _localctx._operator =
                                            this.match(GrammarParser.NOTEQUALPHYS);
                                        this.state = 149;
                                        _localctx._right =
                                            this.expression(11);
                                    }
                                    break;
                                case 19:
                                    {
                                        _localctx = new ConcatenationContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 150;
                                        if (!this.precpred(this._ctx, 9)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 9)');
                                        }
                                        this.state = 151;
                                        _localctx._operator = this.match(GrammarParser.CONCAT);
                                        this.state = 152;
                                        _localctx._right =
                                            this.expression(10);
                                    }
                                    break;
                                case 20:
                                    {
                                        _localctx = new AndContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 153;
                                        if (!this.precpred(this._ctx, 6)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
                                        }
                                        this.state = 154;
                                        _localctx._operator = this.match(GrammarParser.AND);
                                        this.state = 155;
                                        _localctx._right = this.expression(7);
                                    }
                                    break;
                                case 21:
                                    {
                                        _localctx = new OrContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
                                        this.state = 156;
                                        if (!this.precpred(this._ctx, 5)) {
                                            throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                                        }
                                        this.state = 157;
                                        _localctx._operator = this.match(GrammarParser.OR);
                                        this.state = 158;
                                        _localctx._right = this.expression(6);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 163;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeAnnotation() {
        const _localctx = new TypeAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, GrammarParser.RULE_typeAnnotation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.match(GrammarParser.COLON);
                this.state = 165;
                this.type(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        const _parentctx = this._ctx;
        const _parentState = this.state;
        let _localctx = new ContractExpressionContext(this._ctx, _parentState);
        const _startState = 12;
        this.enterRecursionRule(_localctx, 12, GrammarParser.RULE_contractExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            _localctx = new ContractSimpleExpressionContext(_localctx);
                            this._ctx = _localctx;
                            this.state = 168;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new ContractSetNotationContext(_localctx);
                            this._ctx = _localctx;
                            this.state = 169;
                            this.match(GrammarParser.T__2);
                            this.state = 170;
                            this.identifierWithType();
                            this.state = 171;
                            this.match(GrammarParser.PIPE);
                            this.state = 172;
                            this.expression(0);
                            this.state = 173;
                            this.match(GrammarParser.T__3);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new ParenthesesContractContext(_localctx);
                            this._ctx = _localctx;
                            this.state = 175;
                            this.match(GrammarParser.T__0);
                            this.state = 176;
                            this.contractExpression(0);
                            this.state = 177;
                            this.match(GrammarParser.T__1);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 190;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        {
                            {
                                _localctx = new ContractListContext(new ContractExpressionContext(_parentctx, _parentState));
                                this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_contractExpression);
                                this.state = 181;
                                if (!this.precpred(this._ctx, 2)) {
                                    throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                                }
                                this.state = 184;
                                this._errHandler.sync(this);
                                _alt = 1;
                                do {
                                    switch (_alt) {
                                        case 1:
                                            {
                                                {
                                                    this.state = 182;
                                                    this.match(GrammarParser.ARROW);
                                                    this.state = 183;
                                                    this.contractExpression(0);
                                                }
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 186;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            }
                        }
                    }
                    this.state = 192;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractDeclaration() {
        const _localctx = new ContractDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, GrammarParser.RULE_contractDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(GrammarParser.CONTRACT);
                this.state = 194;
                this.identifier();
                this.state = 195;
                this.match(GrammarParser.EQUALSTRUC);
                this.state = 196;
                this.contractExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifierWithTypeParen() {
        const _localctx = new IdentifierWithTypeParenContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, GrammarParser.RULE_identifierWithTypeParen);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(GrammarParser.T__0);
                this.state = 199;
                this.identifierWithType();
                this.state = 200;
                this.match(GrammarParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifierWithType() {
        const _localctx = new IdentifierWithTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, GrammarParser.RULE_identifierWithType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                _localctx._id = this.identifier();
                this.state = 203;
                _localctx._idType = this.typeAnnotation();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    condExp() {
        const _localctx = new CondExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, GrammarParser.RULE_condExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this.match(GrammarParser.IF);
                this.state = 206;
                _localctx._test = this.expression(0);
                this.state = 207;
                this.match(GrammarParser.THEN);
                this.state = 208;
                _localctx._consequent = this.expression(0);
                this.state = 209;
                this.match(GrammarParser.ELSE);
                this.state = 210;
                _localctx._alternate = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parenthesesExpression() {
        const _localctx = new ParenthesesExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, GrammarParser.RULE_parenthesesExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(GrammarParser.T__0);
                this.state = 213;
                _localctx._inner = this.expression(0);
                this.state = 214;
                this.match(GrammarParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funcArgument() {
        const _localctx = new FuncArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, GrammarParser.RULE_funcArgument);
        try {
            this.state = 219;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GrammarParser.NUMBER:
                case GrammarParser.CHAR:
                case GrammarParser.STRING:
                case GrammarParser.FLOAT:
                case GrammarParser.BOOLEAN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 216;
                        this.atom();
                    }
                    break;
                case GrammarParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 217;
                        this.identifier();
                    }
                    break;
                case GrammarParser.T__0:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 218;
                        this.parenthesesExpression();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        const _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, GrammarParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 221;
                this.match(GrammarParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifierListWithType() {
        const _localctx = new IdentifierListWithTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, GrammarParser.RULE_identifierListWithType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 223;
                            this.identifierWithTypeParen();
                        }
                    }
                    this.state = 226;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === GrammarParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funcApplyArgumentList() {
        const _localctx = new FuncApplyArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, GrammarParser.RULE_funcApplyArgumentList);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this.funcArgument();
                this.state = 232;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 229;
                                this.funcArgument();
                            }
                        }
                    }
                    this.state = 234;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funcApplication() {
        const _localctx = new FuncApplicationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, GrammarParser.RULE_funcApplication);
        try {
            this.state = 243;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GrammarParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 235;
                        _localctx._func = this.identifier();
                        this.state = 236;
                        _localctx._args = this.funcApplyArgumentList();
                    }
                    break;
                case GrammarParser.T__0:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 238;
                        this.match(GrammarParser.T__0);
                        this.state = 239;
                        _localctx._lambdaFunc = this.lambda();
                        this.state = 240;
                        this.match(GrammarParser.T__1);
                        this.state = 241;
                        _localctx._args = this.funcApplyArgumentList();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambda() {
        const _localctx = new LambdaContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, GrammarParser.RULE_lambda);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 245;
                this.match(GrammarParser.FUN);
                {
                    this.state = 246;
                    _localctx._params = this.identifierListWithType();
                }
                this.state = 247;
                _localctx._returnType = this.typeAnnotation();
                this.state = 248;
                this.match(GrammarParser.ARROW);
                this.state = 249;
                _localctx._body = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letGlobalBinding() {
        const _localctx = new LetGlobalBindingContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, GrammarParser.RULE_letGlobalBinding);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.match(GrammarParser.LET);
                {
                    this.state = 253;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.REC) {
                        {
                            this.state = 252;
                            this.match(GrammarParser.REC);
                        }
                    }
                }
                this.state = 255;
                _localctx._id = this.identifier();
                {
                    this.state = 257;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.T__0) {
                        {
                            this.state = 256;
                            _localctx._params = this.identifierListWithType();
                        }
                    }
                }
                this.state = 259;
                _localctx._idType = this.typeAnnotation();
                this.state = 260;
                this.match(GrammarParser.EQUALSTRUC);
                this.state = 261;
                _localctx._init = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letLocalBinding() {
        const _localctx = new LetLocalBindingContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, GrammarParser.RULE_letLocalBinding);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.letGlobalBinding();
                this.state = 264;
                this.match(GrammarParser.IN);
                this.state = 265;
                _localctx._exp2 = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 0:
                return this.type_sempred(_localctx, predIndex);
            case 4:
                return this.expression_sempred(_localctx, predIndex);
            case 6:
                return this.contractExpression_sempred(_localctx, predIndex);
        }
        return true;
    }
    type_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 27);
            case 2:
                return this.precpred(this._ctx, 26);
            case 3:
                return this.precpred(this._ctx, 25);
            case 4:
                return this.precpred(this._ctx, 24);
            case 5:
                return this.precpred(this._ctx, 23);
            case 6:
                return this.precpred(this._ctx, 22);
            case 7:
                return this.precpred(this._ctx, 21);
            case 8:
                return this.precpred(this._ctx, 20);
            case 9:
                return this.precpred(this._ctx, 19);
            case 10:
                return this.precpred(this._ctx, 18);
            case 11:
                return this.precpred(this._ctx, 17);
            case 12:
                return this.precpred(this._ctx, 16);
            case 13:
                return this.precpred(this._ctx, 15);
            case 14:
                return this.precpred(this._ctx, 14);
            case 15:
                return this.precpred(this._ctx, 13);
            case 16:
                return this.precpred(this._ctx, 12);
            case 17:
                return this.precpred(this._ctx, 11);
            case 18:
                return this.precpred(this._ctx, 10);
            case 19:
                return this.precpred(this._ctx, 9);
            case 20:
                return this.precpred(this._ctx, 6);
            case 21:
                return this.precpred(this._ctx, 5);
        }
        return true;
    }
    contractExpression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 22:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    static get _ATN() {
        if (!GrammarParser.__ATN) {
            GrammarParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(GrammarParser._serializedATN));
        }
        return GrammarParser.__ATN;
    }
}
exports.GrammarParser = GrammarParser;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.POW = 5;
GrammarParser.MUL = 6;
GrammarParser.DIV = 7;
GrammarParser.ADD = 8;
GrammarParser.SUB = 9;
GrammarParser.MOD = 10;
GrammarParser.ADDFLOAT = 11;
GrammarParser.SUBFLOAT = 12;
GrammarParser.MULFLOAT = 13;
GrammarParser.DIVFLOAT = 14;
GrammarParser.LESSTHAN = 15;
GrammarParser.LESSTHANOREQUAL = 16;
GrammarParser.GREATERTHAN = 17;
GrammarParser.GREATERTHANOREQUAL = 18;
GrammarParser.EQUALSTRUC = 19;
GrammarParser.NOTEQUALSTRUC = 20;
GrammarParser.EQUALPHYS = 21;
GrammarParser.NOTEQUALPHYS = 22;
GrammarParser.CONCAT = 23;
GrammarParser.AND = 24;
GrammarParser.OR = 25;
GrammarParser.NOT = 26;
GrammarParser.NUMBER = 27;
GrammarParser.TOSKIP = 28;
GrammarParser.CHAR = 29;
GrammarParser.STRING = 30;
GrammarParser.FLOAT = 31;
GrammarParser.BOOLEAN = 32;
GrammarParser.IF = 33;
GrammarParser.THEN = 34;
GrammarParser.ELSE = 35;
GrammarParser.FUN = 36;
GrammarParser.ARROW = 37;
GrammarParser.PIPE = 38;
GrammarParser.LET = 39;
GrammarParser.IN = 40;
GrammarParser.REC = 41;
GrammarParser.COLON = 42;
GrammarParser.CONTRACT = 43;
GrammarParser.DOUBLESEMICOLON = 44;
GrammarParser.PRIMITIVETYPE = 45;
GrammarParser.IDENTIFIER = 46;
GrammarParser.RULE_type = 0;
GrammarParser.RULE_atom = 1;
GrammarParser.RULE_start = 2;
GrammarParser.RULE_statement = 3;
GrammarParser.RULE_expression = 4;
GrammarParser.RULE_typeAnnotation = 5;
GrammarParser.RULE_contractExpression = 6;
GrammarParser.RULE_contractDeclaration = 7;
GrammarParser.RULE_identifierWithTypeParen = 8;
GrammarParser.RULE_identifierWithType = 9;
GrammarParser.RULE_condExp = 10;
GrammarParser.RULE_parenthesesExpression = 11;
GrammarParser.RULE_funcArgument = 12;
GrammarParser.RULE_identifier = 13;
GrammarParser.RULE_identifierListWithType = 14;
GrammarParser.RULE_funcApplyArgumentList = 15;
GrammarParser.RULE_funcApplication = 16;
GrammarParser.RULE_lambda = 17;
GrammarParser.RULE_letGlobalBinding = 18;
GrammarParser.RULE_letLocalBinding = 19;
// tslint:disable:no-trailing-whitespace
GrammarParser.ruleNames = [
    'type',
    'atom',
    'start',
    'statement',
    'expression',
    'typeAnnotation',
    'contractExpression',
    'contractDeclaration',
    'identifierWithTypeParen',
    'identifierWithType',
    'condExp',
    'parenthesesExpression',
    'funcArgument',
    'identifier',
    'identifierListWithType',
    'funcApplyArgumentList',
    'funcApplication',
    'lambda',
    'letGlobalBinding',
    'letLocalBinding',
];
GrammarParser._LITERAL_NAMES = [
    undefined,
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'**'",
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    "'mod'",
    "'+.'",
    "'-.'",
    "'*.'",
    "'/.'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'='",
    "'<>'",
    "'=='",
    "'!='",
    "'^'",
    "'&&'",
    "'||'",
    "'not'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'if'",
    "'then'",
    "'else'",
    "'fun'",
    "'->'",
    "'|'",
    "'let'",
    "'in'",
    "'rec'",
    "':'",
    "'contract'",
    "';;'",
];
GrammarParser._SYMBOLIC_NAMES = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'POW',
    'MUL',
    'DIV',
    'ADD',
    'SUB',
    'MOD',
    'ADDFLOAT',
    'SUBFLOAT',
    'MULFLOAT',
    'DIVFLOAT',
    'LESSTHAN',
    'LESSTHANOREQUAL',
    'GREATERTHAN',
    'GREATERTHANOREQUAL',
    'EQUALSTRUC',
    'NOTEQUALSTRUC',
    'EQUALPHYS',
    'NOTEQUALPHYS',
    'CONCAT',
    'AND',
    'OR',
    'NOT',
    'NUMBER',
    'TOSKIP',
    'CHAR',
    'STRING',
    'FLOAT',
    'BOOLEAN',
    'IF',
    'THEN',
    'ELSE',
    'FUN',
    'ARROW',
    'PIPE',
    'LET',
    'IN',
    'REC',
    'COLON',
    'CONTRACT',
    'DOUBLESEMICOLON',
    'PRIMITIVETYPE',
    'IDENTIFIER',
];
GrammarParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(GrammarParser._LITERAL_NAMES, GrammarParser._SYMBOLIC_NAMES, []);
GrammarParser._serializedATN = '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u010E\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x02' +
    '\x03\x02\x03\x02\x05\x021\n\x02\x03\x02\x03\x02\x03\x02\x06\x026\n\x02' +
    '\r\x02\x0E\x027\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03D\n\x03\x03\x04\x03\x04\x03\x04\x07\x04I\n' +
    '\x04\f\x04\x0E\x04L\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05' +
    '\x05S\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06a\n\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xA2\n\x06' +
    '\f\x06\x0E\x06\xA5\v\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xB6\n\b\x03\b' +
    '\x03\b\x03\b\x06\b\xBB\n\b\r\b\x0E\b\xBC\x07\b\xBF\n\b\f\b\x0E\b\xC2\v' +
    '\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03' +
    '\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03' +
    '\x0E\x03\x0E\x03\x0E\x05\x0E\xDE\n\x0E\x03\x0F\x03\x0F\x03\x10\x06\x10' +
    '\xE3\n\x10\r\x10\x0E\x10\xE4\x03\x11\x03\x11\x07\x11\xE9\n\x11\f\x11\x0E' +
    '\x11\xEC\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x05\x12\xF6\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x14\x03\x14\x05\x14\u0100\n\x14\x03\x14\x03\x14\x05\x14\u0104' +
    '\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15' +
    '\x03\x15\x02\x02\x05\x02\n\x0E\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02' +
    '\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02' +
    '\x1E\x02 \x02"\x02$\x02&\x02(\x02\x02\x02\x02\u012B\x020\x03\x02\x02' +
    '\x02\x04C\x03\x02\x02\x02\x06J\x03\x02\x02\x02\bR\x03\x02\x02\x02\n`\x03' +
    '\x02\x02\x02\f\xA6\x03\x02\x02\x02\x0E\xB5\x03\x02\x02\x02\x10\xC3\x03' +
    '\x02\x02\x02\x12\xC8\x03\x02\x02\x02\x14\xCC\x03\x02\x02\x02\x16\xCF\x03' +
    '\x02\x02\x02\x18\xD6\x03\x02\x02\x02\x1A\xDD\x03\x02\x02\x02\x1C\xDF\x03' +
    '\x02\x02\x02\x1E\xE2\x03\x02\x02\x02 \xE6\x03\x02\x02\x02"\xF5\x03\x02' +
    '\x02\x02$\xF7\x03\x02\x02\x02&\xFD\x03\x02\x02\x02(\u0109\x03\x02\x02' +
    '\x02*+\b\x02\x01\x02+1\x07/\x02\x02,-\x07\x03\x02\x02-.\x05\x02\x02\x02' +
    './\x07\x04\x02\x02/1\x03\x02\x02\x020*\x03\x02\x02\x020,\x03\x02\x02\x02' +
    "1;\x03\x02\x02\x0225\f\x03\x02\x0234\x07'\x02\x0246\x05\x02\x02\x025" +
    '3\x03\x02\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x02' +
    '8:\x03\x02\x02\x0292\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02' +
    ';<\x03\x02\x02\x02<\x03\x03\x02\x02\x02=;\x03\x02\x02\x02>D\x07\x1D\x02' +
    '\x02?D\x07!\x02\x02@D\x07"\x02\x02AD\x07\x1F\x02\x02BD\x07 \x02\x02C' +
    '>\x03\x02\x02\x02C?\x03\x02\x02\x02C@\x03\x02\x02\x02CA\x03\x02\x02\x02' +
    'CB\x03\x02\x02\x02D\x05\x03\x02\x02\x02EF\x05\b\x05\x02FG\x07.\x02\x02' +
    'GI\x03\x02\x02\x02HE\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02' +
    'JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x02\x02\x03' +
    'N\x07\x03\x02\x02\x02OS\x05\n\x06\x02PS\x05&\x14\x02QS\x05\x10\t\x02R' +
    'O\x03\x02\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S\t\x03\x02\x02\x02' +
    'TU\b\x06\x01\x02Ua\x05\x04\x03\x02Va\x05\x1C\x0F\x02Wa\x05\x18\r\x02X' +
    'Y\x07\v\x02\x02Ya\x05\n\x06\nZ[\x07\x1C\x02\x02[a\x05\n\x06\t\\a\x05\x16' +
    '\f\x02]a\x05(\x15\x02^a\x05$\x13\x02_a\x05"\x12\x02`T\x03\x02\x02\x02' +
    '`V\x03\x02\x02\x02`W\x03\x02\x02\x02`X\x03\x02\x02\x02`Z\x03\x02\x02\x02' +
    '`\\\x03\x02\x02\x02`]\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02' +
    '\x02a\xA3\x03\x02\x02\x02bc\f\x1D\x02\x02cd\x07\x07\x02\x02d\xA2\x05\n' +
    '\x06\x1Def\f\x1C\x02\x02fg\x07\b\x02\x02g\xA2\x05\n\x06\x1Dhi\f\x1B\x02' +
    '\x02ij\x07\t\x02\x02j\xA2\x05\n\x06\x1Ckl\f\x1A\x02\x02lm\x07\x0F\x02' +
    '\x02m\xA2\x05\n\x06\x1Bno\f\x19\x02\x02op\x07\x10\x02\x02p\xA2\x05\n\x06' +
    '\x1Aqr\f\x18\x02\x02rs\x07\f\x02\x02s\xA2\x05\n\x06\x19tu\f\x17\x02\x02' +
    'uv\x07\n\x02\x02v\xA2\x05\n\x06\x18wx\f\x16\x02\x02xy\x07\v\x02\x02y\xA2' +
    '\x05\n\x06\x17z{\f\x15\x02\x02{|\x07\r\x02\x02|\xA2\x05\n\x06\x16}~\f' +
    '\x14\x02\x02~\x7F\x07\x0E\x02\x02\x7F\xA2\x05\n\x06\x15\x80\x81\f\x13' +
    '\x02\x02\x81\x82\x07\x11\x02\x02\x82\xA2\x05\n\x06\x14\x83\x84\f\x12\x02' +
    '\x02\x84\x85\x07\x12\x02\x02\x85\xA2\x05\n\x06\x13\x86\x87\f\x11\x02\x02' +
    '\x87\x88\x07\x13\x02\x02\x88\xA2\x05\n\x06\x12\x89\x8A\f\x10\x02\x02\x8A' +
    '\x8B\x07\x14\x02\x02\x8B\xA2\x05\n\x06\x11\x8C\x8D\f\x0F\x02\x02\x8D\x8E' +
    '\x07\x15\x02\x02\x8E\xA2\x05\n\x06\x10\x8F\x90\f\x0E\x02\x02\x90\x91\x07' +
    '\x16\x02\x02\x91\xA2\x05\n\x06\x0F\x92\x93\f\r\x02\x02\x93\x94\x07\x17' +
    '\x02\x02\x94\xA2\x05\n\x06\x0E\x95\x96\f\f\x02\x02\x96\x97\x07\x18\x02' +
    '\x02\x97\xA2\x05\n\x06\r\x98\x99\f\v\x02\x02\x99\x9A\x07\x19\x02\x02\x9A' +
    '\xA2\x05\n\x06\f\x9B\x9C\f\b\x02\x02\x9C\x9D\x07\x1A\x02\x02\x9D\xA2\x05' +
    '\n\x06\t\x9E\x9F\f\x07\x02\x02\x9F\xA0\x07\x1B\x02\x02\xA0\xA2\x05\n\x06' +
    '\b\xA1b\x03\x02\x02\x02\xA1e\x03\x02\x02\x02\xA1h\x03\x02\x02\x02\xA1' +
    'k\x03\x02\x02\x02\xA1n\x03\x02\x02\x02\xA1q\x03\x02\x02\x02\xA1t\x03\x02' +
    '\x02\x02\xA1w\x03\x02\x02\x02\xA1z\x03\x02\x02\x02\xA1}\x03\x02\x02\x02' +
    '\xA1\x80\x03\x02\x02\x02\xA1\x83\x03\x02\x02\x02\xA1\x86\x03\x02\x02\x02' +
    '\xA1\x89\x03\x02\x02\x02\xA1\x8C\x03\x02\x02\x02\xA1\x8F\x03\x02\x02\x02' +
    '\xA1\x92\x03\x02\x02\x02\xA1\x95\x03\x02\x02\x02\xA1\x98\x03\x02\x02\x02' +
    '\xA1\x9B\x03\x02\x02\x02\xA1\x9E\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02' +
    '\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\v\x03\x02\x02\x02' +
    '\xA5\xA3\x03\x02\x02\x02\xA6\xA7\x07,\x02\x02\xA7\xA8\x05\x02\x02\x02' +
    '\xA8\r\x03\x02\x02\x02\xA9\xAA\b\b\x01\x02\xAA\xB6\x05\n\x06\x02\xAB\xAC' +
    '\x07\x05\x02\x02\xAC\xAD\x05\x14\v\x02\xAD\xAE\x07(\x02\x02\xAE\xAF\x05' +
    '\n\x06\x02\xAF\xB0\x07\x06\x02\x02\xB0\xB6\x03\x02\x02\x02\xB1\xB2\x07' +
    '\x03\x02\x02\xB2\xB3\x05\x0E\b\x02\xB3\xB4\x07\x04\x02\x02\xB4\xB6\x03' +
    '\x02\x02\x02\xB5\xA9\x03\x02\x02\x02\xB5\xAB\x03\x02\x02\x02\xB5\xB1\x03' +
    '\x02\x02\x02\xB6\xC0\x03\x02\x02\x02\xB7\xBA\f\x04\x02\x02\xB8\xB9\x07' +
    "'\x02\x02\xB9\xBB\x05\x0E\b\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBC\x03\x02" +
    '\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02' +
    '\x02\x02\xBE\xB7\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02' +
    '\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x0F\x03\x02\x02\x02\xC2\xC0\x03\x02' +
    '\x02\x02\xC3\xC4\x07-\x02\x02\xC4\xC5\x05\x1C\x0F\x02\xC5\xC6\x07\x15' +
    '\x02\x02\xC6\xC7\x05\x0E\b\x02\xC7\x11\x03\x02\x02\x02\xC8\xC9\x07\x03' +
    '\x02\x02\xC9\xCA\x05\x14\v\x02\xCA\xCB\x07\x04\x02\x02\xCB\x13\x03\x02' +
    '\x02\x02\xCC\xCD\x05\x1C\x0F\x02\xCD\xCE\x05\f\x07\x02\xCE\x15\x03\x02' +
    '\x02\x02\xCF\xD0\x07#\x02\x02\xD0\xD1\x05\n\x06\x02\xD1\xD2\x07$\x02\x02' +
    '\xD2\xD3\x05\n\x06\x02\xD3\xD4\x07%\x02\x02\xD4\xD5\x05\n\x06\x02\xD5' +
    '\x17\x03\x02\x02\x02\xD6\xD7\x07\x03\x02\x02\xD7\xD8\x05\n\x06\x02\xD8' +
    '\xD9\x07\x04\x02\x02\xD9\x19\x03\x02\x02\x02\xDA\xDE\x05\x04\x03\x02\xDB' +
    '\xDE\x05\x1C\x0F\x02\xDC\xDE\x05\x18\r\x02\xDD\xDA\x03\x02\x02\x02\xDD' +
    '\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\x1B\x03\x02\x02\x02\xDF' +
    '\xE0\x070\x02\x02\xE0\x1D\x03\x02\x02\x02\xE1\xE3\x05\x12\n\x02\xE2\xE1' +
    '\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5' +
    '\x03\x02\x02\x02\xE5\x1F\x03\x02\x02\x02\xE6\xEA\x05\x1A\x0E\x02\xE7\xE9' +
    '\x05\x1A\x0E\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8' +
    '\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB!\x03\x02\x02\x02\xEC\xEA' +
    '\x03\x02\x02\x02\xED\xEE\x05\x1C\x0F\x02\xEE\xEF\x05 \x11\x02\xEF\xF6' +
    '\x03\x02\x02\x02\xF0\xF1\x07\x03\x02\x02\xF1\xF2\x05$\x13\x02\xF2\xF3' +
    '\x07\x04\x02\x02\xF3\xF4\x05 \x11\x02\xF4\xF6\x03\x02\x02\x02\xF5\xED' +
    '\x03\x02\x02\x02\xF5\xF0\x03\x02\x02\x02\xF6#\x03\x02\x02\x02\xF7\xF8' +
    '\x07&\x02\x02\xF8\xF9\x05\x1E\x10\x02\xF9\xFA\x05\f\x07\x02\xFA\xFB\x07' +
    "'\x02\x02\xFB\xFC\x05\n\x06\x02\xFC%\x03\x02\x02\x02\xFD\xFF\x07)\x02" +
    '\x02\xFE\u0100\x07+\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02' +
    '\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x05\x1C\x0F\x02\u0102' +
    '\u0104\x05\x1E\x10\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02' +
    '\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x05\f\x07\x02\u0106\u0107' +
    "\x07\x15\x02\x02\u0107\u0108\x05\n\x06\x02\u0108'\x03\x02\x02\x02\u0109" +
    '\u010A\x05&\x14\x02\u010A\u010B\x07*\x02\x02\u010B\u010C\x05\n\x06\x02' +
    '\u010C)\x03\x02\x02\x02\x1407;CJR`\xA1\xA3\xB5\xBC\xC0\xDD\xE4\xEA\xF5' +
    '\xFF\u0103';
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_type;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TypeContext = TypeContext;
class PrimTypeContext extends TypeContext {
    PRIMITIVETYPE() {
        return this.getToken(GrammarParser.PRIMITIVETYPE, 0);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimType) {
            listener.enterPrimType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimType) {
            listener.exitPrimType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimType) {
            return visitor.visitPrimType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimTypeContext = PrimTypeContext;
class ParenTypeContext extends TypeContext {
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenType) {
            listener.enterParenType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenType) {
            listener.exitParenType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenType) {
            return visitor.visitParenType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenTypeContext = ParenTypeContext;
class FunTypeContext extends TypeContext {
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    ARROW(i) {
        if (i === undefined) {
            return this.getTokens(GrammarParser.ARROW);
        }
        else {
            return this.getToken(GrammarParser.ARROW, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunType) {
            listener.enterFunType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunType) {
            listener.exitFunType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunType) {
            return visitor.visitFunType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunTypeContext = FunTypeContext;
class AtomContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_atom;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.AtomContext = AtomContext;
class NumberContext extends AtomContext {
    NUMBER() {
        return this.getToken(GrammarParser.NUMBER, 0);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberContext = NumberContext;
class FloatContext extends AtomContext {
    FLOAT() {
        return this.getToken(GrammarParser.FLOAT, 0);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFloat) {
            listener.enterFloat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFloat) {
            listener.exitFloat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFloat) {
            return visitor.visitFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FloatContext = FloatContext;
class BooleanContext extends AtomContext {
    BOOLEAN() {
        return this.getToken(GrammarParser.BOOLEAN, 0);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBoolean) {
            listener.enterBoolean(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoolean) {
            listener.exitBoolean(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanContext = BooleanContext;
class CharContext extends AtomContext {
    CHAR() {
        return this.getToken(GrammarParser.CHAR, 0);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterChar) {
            listener.enterChar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChar) {
            listener.exitChar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChar) {
            return visitor.visitChar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CharContext = CharContext;
class StringContext extends AtomContext {
    STRING() {
        return this.getToken(GrammarParser.STRING, 0);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringContext = StringContext;
class StartContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() {
        return this.getToken(GrammarParser.EOF, 0);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    DOUBLESEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(GrammarParser.DOUBLESEMICOLON);
        }
        else {
            return this.getToken(GrammarParser.DOUBLESEMICOLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_start;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StartContext = StartContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    letGlobalBinding() {
        return this.tryGetRuleContext(0, LetGlobalBindingContext);
    }
    contractDeclaration() {
        return this.tryGetRuleContext(0, ContractDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_statement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_expression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionContext = ExpressionContext;
class AtomExpressionContext extends ExpressionContext {
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAtomExpression) {
            listener.enterAtomExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtomExpression) {
            listener.exitAtomExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAtomExpression) {
            return visitor.visitAtomExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AtomExpressionContext = AtomExpressionContext;
class IdentifierExpressionContext extends ExpressionContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifierExpression) {
            listener.enterIdentifierExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifierExpression) {
            listener.exitIdentifierExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierExpressionContext = IdentifierExpressionContext;
class ParenthesesContext extends ExpressionContext {
    parenthesesExpression() {
        return this.getRuleContext(0, ParenthesesExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParentheses) {
            listener.enterParentheses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParentheses) {
            listener.exitParentheses(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesesContext = ParenthesesContext;
class PowerContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    POW() {
        return this.getToken(GrammarParser.POW, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPower) {
            listener.enterPower(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPower) {
            listener.exitPower(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPower) {
            return visitor.visitPower(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PowerContext = PowerContext;
class MultiplicationContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MUL() {
        return this.getToken(GrammarParser.MUL, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplication) {
            listener.enterMultiplication(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplication) {
            listener.exitMultiplication(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplication) {
            return visitor.visitMultiplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicationContext = MultiplicationContext;
class DivisionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    DIV() {
        return this.getToken(GrammarParser.DIV, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDivision) {
            listener.enterDivision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDivision) {
            listener.exitDivision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDivision) {
            return visitor.visitDivision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DivisionContext = DivisionContext;
class MultiplicationFloatContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MULFLOAT() {
        return this.getToken(GrammarParser.MULFLOAT, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicationFloat) {
            listener.enterMultiplicationFloat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicationFloat) {
            listener.exitMultiplicationFloat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicationFloat) {
            return visitor.visitMultiplicationFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicationFloatContext = MultiplicationFloatContext;
class DivisionFloatContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    DIVFLOAT() {
        return this.getToken(GrammarParser.DIVFLOAT, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDivisionFloat) {
            listener.enterDivisionFloat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDivisionFloat) {
            listener.exitDivisionFloat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDivisionFloat) {
            return visitor.visitDivisionFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DivisionFloatContext = DivisionFloatContext;
class ModulusContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MOD() {
        return this.getToken(GrammarParser.MOD, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterModulus) {
            listener.enterModulus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModulus) {
            listener.exitModulus(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModulus) {
            return visitor.visitModulus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModulusContext = ModulusContext;
class AdditionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    ADD() {
        return this.getToken(GrammarParser.ADD, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAddition) {
            listener.enterAddition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddition) {
            listener.exitAddition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAddition) {
            return visitor.visitAddition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditionContext = AdditionContext;
class SubtractionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SUB() {
        return this.getToken(GrammarParser.SUB, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSubtraction) {
            listener.enterSubtraction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSubtraction) {
            listener.exitSubtraction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubtraction) {
            return visitor.visitSubtraction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubtractionContext = SubtractionContext;
class AdditionFloatContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    ADDFLOAT() {
        return this.getToken(GrammarParser.ADDFLOAT, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditionFloat) {
            listener.enterAdditionFloat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditionFloat) {
            listener.exitAdditionFloat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditionFloat) {
            return visitor.visitAdditionFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditionFloatContext = AdditionFloatContext;
class SubtractionFloatContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SUBFLOAT() {
        return this.getToken(GrammarParser.SUBFLOAT, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSubtractionFloat) {
            listener.enterSubtractionFloat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSubtractionFloat) {
            listener.exitSubtractionFloat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubtractionFloat) {
            return visitor.visitSubtractionFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubtractionFloatContext = SubtractionFloatContext;
class LessThanContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    LESSTHAN() {
        return this.getToken(GrammarParser.LESSTHAN, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLessThan) {
            listener.enterLessThan(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLessThan) {
            listener.exitLessThan(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLessThan) {
            return visitor.visitLessThan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LessThanContext = LessThanContext;
class LessThanOrEqualContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    LESSTHANOREQUAL() {
        return this.getToken(GrammarParser.LESSTHANOREQUAL, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLessThanOrEqual) {
            listener.enterLessThanOrEqual(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLessThanOrEqual) {
            listener.exitLessThanOrEqual(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLessThanOrEqual) {
            return visitor.visitLessThanOrEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LessThanOrEqualContext = LessThanOrEqualContext;
class GreaterThanContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    GREATERTHAN() {
        return this.getToken(GrammarParser.GREATERTHAN, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGreaterThan) {
            listener.enterGreaterThan(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGreaterThan) {
            listener.exitGreaterThan(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGreaterThan) {
            return visitor.visitGreaterThan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GreaterThanContext = GreaterThanContext;
class GreaterThanOrEqualContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    GREATERTHANOREQUAL() {
        return this.getToken(GrammarParser.GREATERTHANOREQUAL, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGreaterThanOrEqual) {
            listener.enterGreaterThanOrEqual(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGreaterThanOrEqual) {
            listener.exitGreaterThanOrEqual(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGreaterThanOrEqual) {
            return visitor.visitGreaterThanOrEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GreaterThanOrEqualContext = GreaterThanOrEqualContext;
class EqualStructuralContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    EQUALSTRUC() {
        return this.getToken(GrammarParser.EQUALSTRUC, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEqualStructural) {
            listener.enterEqualStructural(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqualStructural) {
            listener.exitEqualStructural(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualStructural) {
            return visitor.visitEqualStructural(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualStructuralContext = EqualStructuralContext;
class NotEqualStructuralContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    NOTEQUALSTRUC() {
        return this.getToken(GrammarParser.NOTEQUALSTRUC, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNotEqualStructural) {
            listener.enterNotEqualStructural(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNotEqualStructural) {
            listener.exitNotEqualStructural(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNotEqualStructural) {
            return visitor.visitNotEqualStructural(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NotEqualStructuralContext = NotEqualStructuralContext;
class EqualPhysicalContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    EQUALPHYS() {
        return this.getToken(GrammarParser.EQUALPHYS, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEqualPhysical) {
            listener.enterEqualPhysical(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqualPhysical) {
            listener.exitEqualPhysical(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualPhysical) {
            return visitor.visitEqualPhysical(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualPhysicalContext = EqualPhysicalContext;
class NotEqualPhysicalContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    NOTEQUALPHYS() {
        return this.getToken(GrammarParser.NOTEQUALPHYS, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNotEqualPhysical) {
            listener.enterNotEqualPhysical(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNotEqualPhysical) {
            listener.exitNotEqualPhysical(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNotEqualPhysical) {
            return visitor.visitNotEqualPhysical(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NotEqualPhysicalContext = NotEqualPhysicalContext;
class ConcatenationContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    CONCAT() {
        return this.getToken(GrammarParser.CONCAT, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConcatenation) {
            listener.enterConcatenation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConcatenation) {
            listener.exitConcatenation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConcatenationContext = ConcatenationContext;
class NegativeContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    SUB() {
        return this.getToken(GrammarParser.SUB, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNegative) {
            listener.enterNegative(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNegative) {
            listener.exitNegative(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNegative) {
            return visitor.visitNegative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NegativeContext = NegativeContext;
class NotContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    NOT() {
        return this.getToken(GrammarParser.NOT, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNot) {
            listener.enterNot(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNot) {
            listener.exitNot(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNot) {
            return visitor.visitNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NotContext = NotContext;
class AndContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    AND() {
        return this.getToken(GrammarParser.AND, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAnd) {
            listener.enterAnd(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnd) {
            listener.exitAnd(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnd) {
            return visitor.visitAnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AndContext = AndContext;
class OrContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    OR() {
        return this.getToken(GrammarParser.OR, 0);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOr) {
            listener.enterOr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOr) {
            listener.exitOr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOr) {
            return visitor.visitOr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrContext = OrContext;
class ConditionalExpressionContext extends ExpressionContext {
    condExp() {
        return this.getRuleContext(0, CondExpContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditionalExpression) {
            return visitor.visitConditionalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionalExpressionContext = ConditionalExpressionContext;
class LetLocalBindingExpressionContext extends ExpressionContext {
    letLocalBinding() {
        return this.getRuleContext(0, LetLocalBindingContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetLocalBindingExpression) {
            listener.enterLetLocalBindingExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetLocalBindingExpression) {
            listener.exitLetLocalBindingExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetLocalBindingExpression) {
            return visitor.visitLetLocalBindingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetLocalBindingExpressionContext = LetLocalBindingExpressionContext;
class LambdaExpressionContext extends ExpressionContext {
    lambda() {
        return this.getRuleContext(0, LambdaContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaExpression) {
            listener.enterLambdaExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaExpression) {
            listener.exitLambdaExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaExpression) {
            return visitor.visitLambdaExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaExpressionContext = LambdaExpressionContext;
class CallFunctionContext extends ExpressionContext {
    funcApplication() {
        return this.getRuleContext(0, FuncApplicationContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCallFunction) {
            listener.enterCallFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCallFunction) {
            listener.exitCallFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallFunction) {
            return visitor.visitCallFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallFunctionContext = CallFunctionContext;
class TypeAnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() {
        return this.getToken(GrammarParser.COLON, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_typeAnnotation;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeAnnotation) {
            listener.enterTypeAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeAnnotation) {
            listener.exitTypeAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeAnnotation) {
            return visitor.visitTypeAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeAnnotationContext = TypeAnnotationContext;
class ContractExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_contractExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ContractExpressionContext = ContractExpressionContext;
class ContractSimpleExpressionContext extends ContractExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterContractSimpleExpression) {
            listener.enterContractSimpleExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractSimpleExpression) {
            listener.exitContractSimpleExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractSimpleExpression) {
            return visitor.visitContractSimpleExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractSimpleExpressionContext = ContractSimpleExpressionContext;
class ContractSetNotationContext extends ContractExpressionContext {
    identifierWithType() {
        return this.getRuleContext(0, IdentifierWithTypeContext);
    }
    PIPE() {
        return this.getToken(GrammarParser.PIPE, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterContractSetNotation) {
            listener.enterContractSetNotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractSetNotation) {
            listener.exitContractSetNotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractSetNotation) {
            return visitor.visitContractSetNotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractSetNotationContext = ContractSetNotationContext;
class ContractListContext extends ContractExpressionContext {
    contractExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ContractExpressionContext);
        }
        else {
            return this.getRuleContext(i, ContractExpressionContext);
        }
    }
    ARROW(i) {
        if (i === undefined) {
            return this.getTokens(GrammarParser.ARROW);
        }
        else {
            return this.getToken(GrammarParser.ARROW, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterContractList) {
            listener.enterContractList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractList) {
            listener.exitContractList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractList) {
            return visitor.visitContractList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractListContext = ContractListContext;
class ParenthesesContractContext extends ContractExpressionContext {
    contractExpression() {
        return this.getRuleContext(0, ContractExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesesContract) {
            listener.enterParenthesesContract(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesesContract) {
            listener.exitParenthesesContract(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesesContract) {
            return visitor.visitParenthesesContract(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesesContractContext = ParenthesesContractContext;
class ContractDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    CONTRACT() {
        return this.getToken(GrammarParser.CONTRACT, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    EQUALSTRUC() {
        return this.getToken(GrammarParser.EQUALSTRUC, 0);
    }
    contractExpression() {
        return this.getRuleContext(0, ContractExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_contractDeclaration;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterContractDeclaration) {
            listener.enterContractDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractDeclaration) {
            listener.exitContractDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractDeclaration) {
            return visitor.visitContractDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractDeclarationContext = ContractDeclarationContext;
class IdentifierWithTypeParenContext extends ParserRuleContext_1.ParserRuleContext {
    identifierWithType() {
        return this.getRuleContext(0, IdentifierWithTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_identifierWithTypeParen;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifierWithTypeParen) {
            listener.enterIdentifierWithTypeParen(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifierWithTypeParen) {
            listener.exitIdentifierWithTypeParen(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierWithTypeParen) {
            return visitor.visitIdentifierWithTypeParen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierWithTypeParenContext = IdentifierWithTypeParenContext;
class IdentifierWithTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    typeAnnotation() {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_identifierWithType;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifierWithType) {
            listener.enterIdentifierWithType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifierWithType) {
            listener.exitIdentifierWithType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierWithType) {
            return visitor.visitIdentifierWithType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierWithTypeContext = IdentifierWithTypeContext;
class CondExpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF() {
        return this.getToken(GrammarParser.IF, 0);
    }
    THEN() {
        return this.getToken(GrammarParser.THEN, 0);
    }
    ELSE() {
        return this.getToken(GrammarParser.ELSE, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_condExp;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCondExp) {
            listener.enterCondExp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCondExp) {
            listener.exitCondExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCondExp) {
            return visitor.visitCondExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CondExpContext = CondExpContext;
class ParenthesesExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_parenthesesExpression;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesesExpression) {
            listener.enterParenthesesExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesesExpression) {
            listener.exitParenthesesExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesesExpression) {
            return visitor.visitParenthesesExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesesExpressionContext = ParenthesesExpressionContext;
class FuncArgumentContext extends ParserRuleContext_1.ParserRuleContext {
    atom() {
        return this.tryGetRuleContext(0, AtomContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    parenthesesExpression() {
        return this.tryGetRuleContext(0, ParenthesesExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_funcArgument;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFuncArgument) {
            listener.enterFuncArgument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFuncArgument) {
            listener.exitFuncArgument(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFuncArgument) {
            return visitor.visitFuncArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FuncArgumentContext = FuncArgumentContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() {
        return this.getToken(GrammarParser.IDENTIFIER, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_identifier;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class IdentifierListWithTypeContext extends ParserRuleContext_1.ParserRuleContext {
    identifierWithTypeParen(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierWithTypeParenContext);
        }
        else {
            return this.getRuleContext(i, IdentifierWithTypeParenContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_identifierListWithType;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifierListWithType) {
            listener.enterIdentifierListWithType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifierListWithType) {
            listener.exitIdentifierListWithType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierListWithType) {
            return visitor.visitIdentifierListWithType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierListWithTypeContext = IdentifierListWithTypeContext;
class FuncApplyArgumentListContext extends ParserRuleContext_1.ParserRuleContext {
    funcArgument(i) {
        if (i === undefined) {
            return this.getRuleContexts(FuncArgumentContext);
        }
        else {
            return this.getRuleContext(i, FuncArgumentContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_funcApplyArgumentList;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFuncApplyArgumentList) {
            listener.enterFuncApplyArgumentList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFuncApplyArgumentList) {
            listener.exitFuncApplyArgumentList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFuncApplyArgumentList) {
            return visitor.visitFuncApplyArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FuncApplyArgumentListContext = FuncApplyArgumentListContext;
class FuncApplicationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    funcApplyArgumentList() {
        return this.getRuleContext(0, FuncApplyArgumentListContext);
    }
    lambda() {
        return this.tryGetRuleContext(0, LambdaContext);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_funcApplication;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFuncApplication) {
            listener.enterFuncApplication(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFuncApplication) {
            listener.exitFuncApplication(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFuncApplication) {
            return visitor.visitFuncApplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FuncApplicationContext = FuncApplicationContext;
class LambdaContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FUN() {
        return this.getToken(GrammarParser.FUN, 0);
    }
    ARROW() {
        return this.getToken(GrammarParser.ARROW, 0);
    }
    typeAnnotation() {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    identifierListWithType() {
        return this.tryGetRuleContext(0, IdentifierListWithTypeContext);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_lambda;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLambda) {
            listener.enterLambda(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambda) {
            listener.exitLambda(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambda) {
            return visitor.visitLambda(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaContext = LambdaContext;
class LetGlobalBindingContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LET() {
        return this.getToken(GrammarParser.LET, 0);
    }
    EQUALSTRUC() {
        return this.getToken(GrammarParser.EQUALSTRUC, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    typeAnnotation() {
        return this.getRuleContext(0, TypeAnnotationContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    REC() {
        return this.tryGetToken(GrammarParser.REC, 0);
    }
    identifierListWithType() {
        return this.tryGetRuleContext(0, IdentifierListWithTypeContext);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_letGlobalBinding;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetGlobalBinding) {
            listener.enterLetGlobalBinding(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetGlobalBinding) {
            listener.exitLetGlobalBinding(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetGlobalBinding) {
            return visitor.visitLetGlobalBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetGlobalBindingContext = LetGlobalBindingContext;
class LetLocalBindingContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    letGlobalBinding() {
        return this.getRuleContext(0, LetGlobalBindingContext);
    }
    IN() {
        return this.getToken(GrammarParser.IN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    // @Override
    get ruleIndex() {
        return GrammarParser.RULE_letLocalBinding;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetLocalBinding) {
            listener.enterLetLocalBinding(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetLocalBinding) {
            listener.exitLetLocalBinding(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetLocalBinding) {
            return visitor.visitLetLocalBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetLocalBindingContext = LetLocalBindingContext;
//# sourceMappingURL=GrammarParser.js.map
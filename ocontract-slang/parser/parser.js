"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const antlr4ts_1 = require("antlr4ts");
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const GrammarLexer_1 = require("../lang/GrammarLexer");
const GrammarParser_1 = require("../lang/GrammarParser");
const errors_1 = require("./errors");
const statementParser_1 = require("./statementParser");
const utils_1 = require("./utils");
class StatementsParser extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.statementParser = new statementParser_1.StatementParser();
    }
    defaultResult() {
        return [];
    }
    visitChildren(node) {
        let statements = [];
        for (let i = 0; i < node.childCount; i++) {
            const stmt = node.getChild(i).accept(this.statementParser);
            if (stmt.type === 'EmptyStatement') {
                continue;
            }
            statements = [...statements, stmt];
        }
        return statements;
    }
    visitErrorNode(node) {
        throw new errors_1.FatalSyntaxError((0, utils_1.nodeToErrorLocation)(node), 'Syntax error');
    }
}
const syntaxErrorListener = (_recognizer, _offendingSymbol, line, charPositionInLine, _msg, _e) => {
    throw new errors_1.FatalSyntaxError({
        start: {
            line: line,
            column: charPositionInLine,
        },
        end: {
            line: line,
            column: charPositionInLine + 1,
        },
    }, 'Syntax error');
};
function addCustomErrorListeners(lexer, parser) {
    lexer.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
    lexer.addErrorListener({
        syntaxError: syntaxErrorListener,
    });
    parser.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
    parser.addErrorListener({
        syntaxError: syntaxErrorListener,
    });
}
function parse(source) {
    const inputStream = new antlr4ts_1.ANTLRInputStream(source);
    const lexer = new GrammarLexer_1.GrammarLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new GrammarParser_1.GrammarParser(tokenStream);
    parser.buildParseTree = true;
    addCustomErrorListeners(lexer, parser);
    const statementsParser = new StatementsParser();
    const expression = parser.start();
    const body = expression.accept(statementsParser);
    return {
        type: 'Program',
        body,
    };
}
exports.parse = parse;
//# sourceMappingURL=parser.js.map
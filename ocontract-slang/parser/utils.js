"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeToErrorLocation = exports.contextToLocation = void 0;
function contextToLocation(ctx) {
    return {
        start: {
            line: ctx.start.line,
            column: ctx.start.charPositionInLine,
        },
        end: {
            line: ctx.stop ? ctx.stop.line : ctx.start.line,
            column: ctx.stop
                ? ctx.stop.charPositionInLine
                : ctx.start.charPositionInLine,
        },
    };
}
exports.contextToLocation = contextToLocation;
function nodeToErrorLocation(node) {
    return {
        start: {
            line: node.symbol.line,
            column: node.symbol.charPositionInLine,
        },
        end: {
            line: node.symbol.line,
            column: node.symbol.charPositionInLine + 1,
        },
    };
}
exports.nodeToErrorLocation = nodeToErrorLocation;
//# sourceMappingURL=utils.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const fs_1 = require("fs");
const repl_1 = require("repl");
const util_1 = require("util");
const contractMonitor_1 = require("./contracts/static/contractMonitor");
const interpreter_1 = require("./interpreter/interpreter");
const parser_1 = require("./parser/parser");
const wrappers_1 = require("./parser/wrappers");
const static_1 = require("./types/static");
const formatters_1 = require("./utils/formatters");
const context_1 = require("./context");
function run(code, context) {
    try {
        const program = (0, parser_1.parse)(code);
        // TODO: Wrap computation in a scheduler / stepper
        (0, static_1.typeCheck)(program, context);
        (0, contractMonitor_1.monitorProgram)(program, context);
        (0, context_1.prepareContextForRun)(context);
        const result = (0, interpreter_1.evaluate)(program, context);
        (0, context_1.cleanUpContextAfterRun)(context);
        return Object.assign(Object.assign({}, result), { status: 'finished', value: result.value instanceof wrappers_1.StringWrapper
                ? result.value.unwrap()
                : result.value });
    }
    catch (error) {
        (0, context_1.cleanUpContextAfterRun)(context);
        return { status: 'errored', error: error };
    }
}
exports.run = run;
function main() {
    const context = (0, context_1.createContext)();
    if (process.argv[2]) {
        const code = (0, fs_1.readFileSync)(process.argv[2], 'utf-8');
        const result = run(code, context);
        if (result.status === 'errored') {
            console.log((0, formatters_1.formatErroredForRepl)(result));
        }
        else {
            console.log((0, formatters_1.formatFinishedForRepl)(result));
        }
        return;
    }
    (0, repl_1.start)({
        eval: (code, _context, _filename, callback) => {
            const result = run(code, context);
            if (result.status === 'finished') {
                callback(null, result);
            }
            else {
                callback(new Error((0, formatters_1.formatErroredForRepl)(result)), undefined);
            }
        },
        writer: (output) => {
            if (output instanceof Error) {
                return (0, util_1.inspect)(output, {
                    depth: 1000,
                    colors: true,
                });
            }
            return (0, formatters_1.formatFinishedForRepl)(output);
        },
    });
}
if (process.env.NODE_ENV !== 'test') {
    main();
}
//# sourceMappingURL=index.js.map
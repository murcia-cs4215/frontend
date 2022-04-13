"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseError = void 0;
function parseError(errors, verbose = false) {
    const errorMessagesArr = errors.map((error) => {
        const line = error.location ? error.location.start.line : '<unknown>';
        const column = error.location ? error.location.start.column : '<unknown>';
        const explanation = error.explain();
        if (verbose) {
            // TODO currently elaboration is just tagged on to a new line after the error message itself. find a better
            // way to display it.
            const elaboration = error.elaborate();
            return `Line ${line}, Column ${column}: ${explanation}\n${elaboration}\n`;
        }
        else {
            return `Line ${line}: ${explanation}`;
        }
    });
    return errorMessagesArr.join('\n');
}
exports.parseError = parseError;
//# sourceMappingURL=errors.js.map
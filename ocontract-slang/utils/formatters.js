"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatType = exports.formatFinishedForRepl = exports.formatErroredForRepl = void 0;
const verboseErrors = false;
function formatErroredForRepl(result, verbose = verboseErrors) {
    const error = result.error;
    const line = error.location ? error.location.start.line : '<unknown>';
    const column = error.location ? error.location.start.column : '<unknown>';
    const explanation = error.explain();
    if (verbose) {
        // TODO: Currently elaboration is just tagged on to a new line after the error message itself. Find a better
        // way to display it.
        const elaboration = error.elaborate();
        return `Line ${line}, Column ${column}: ${explanation}\n${elaboration}\n`;
    }
    else {
        return `Line ${line}, Column ${column}: ${explanation}`;
    }
}
exports.formatErroredForRepl = formatErroredForRepl;
function formatFinishedForRepl(result) {
    const type = formatType(result.type);
    if (type === 'unit') {
        result.value = '()';
    }
    if (type === 'float' && Math.floor(result.value) === result.value) {
        result.value = `${result.value}.`;
    }
    let value;
    if (typeof result.value === 'object' &&
        'type' in result.value &&
        (result.value.type === 'FlatContract' ||
            result.value.type === 'FunctionContract')) {
        value = '<contract>';
    }
    else {
        value = result.type.type === 'FunctionType' ? '<fun>' : result.value;
    }
    if (result.name) {
        return `val ${result.name} : ${type} = ${value}`;
    }
    return `- : ${type} = ${value}`;
}
exports.formatFinishedForRepl = formatFinishedForRepl;
function formatType(type) {
    if (Array.isArray(type)) {
        return type.map(formatType).join(' or ');
    }
    if (type.type === 'PrimitiveType') {
        return type.valueType;
    }
    return `${formatType(type.parameterType)} -> ${formatType(type.returnType)}`;
}
exports.formatType = formatType;
//# sourceMappingURL=formatters.js.map
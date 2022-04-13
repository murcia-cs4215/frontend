"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNKNOWN_LOCATION = exports.GLOBAL = void 0;
exports.GLOBAL = typeof window === 'undefined' ? global : window;
exports.UNKNOWN_LOCATION = {
    start: {
        line: -1,
        column: -1,
    },
    end: {
        line: -1,
        column: -1,
    },
};
//# sourceMappingURL=constants.js.map
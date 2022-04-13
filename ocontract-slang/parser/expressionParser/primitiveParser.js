"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePrimitive = void 0;
const utils_1 = require("../utils");
const wrappers_1 = require("../wrappers");
const parsePrimitive = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitNumber(ctx) {
            return {
                type: 'Literal',
                valueType: 'int',
                value: parseInt(ctx.text, 10),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitFloat(ctx) {
            return {
                type: 'Literal',
                valueType: 'float',
                value: parseFloat(ctx.text),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitBoolean(ctx) {
            return {
                type: 'Literal',
                valueType: 'bool',
                value: ctx.text.trim().toLowerCase() === 'true',
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitChar(ctx) {
            return {
                type: 'Literal',
                valueType: 'char',
                value: ctx.text.trim().charAt(1),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitString(ctx) {
            const value = ctx.text.trim();
            const wrappedValue = new wrappers_1.StringWrapper(value.substring(1, value.length - 1));
            return {
                type: 'Literal',
                valueType: 'string',
                value: wrappedValue,
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
    };
    return DerivedClass;
};
exports.parsePrimitive = parsePrimitive;
//# sourceMappingURL=primitiveParser.js.map
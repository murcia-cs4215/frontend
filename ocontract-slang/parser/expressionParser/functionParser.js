"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFunction = void 0;
const typeParser_1 = require("../typeParser");
const utils_1 = require("../utils");
const utils_2 = require("../../types/utils");
const parseFunction = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitFuncApplication(ctx) {
            const args = ctx._args.funcArgument();
            const callee = ctx._func
                ? this.visit(ctx._func)
                : this.visit(ctx._lambdaFunc);
            return {
                type: 'CallExpression',
                callee: callee,
                arguments: args.map((arg) => this.visit(arg)),
                loc: (0, utils_1.contextToLocation)(ctx),
            };
        }
        visitLambda(ctx) {
            let params = [];
            if (ctx._params != undefined) {
                for (let i = 0; i < ctx._params.childCount; i++) {
                    const exp = ctx._params
                        .getChild(i)
                        .accept(this);
                    params = [...params, exp];
                }
            }
            const returnType = new typeParser_1.TypeParser().visit(ctx._returnType);
            const type = (0, utils_2.curryParamTypes)(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            params.map((p) => p.typeDeclaration), returnType);
            return {
                type: 'LambdaExpression',
                params: params,
                body: this.visit(ctx._body),
                loc: (0, utils_1.contextToLocation)(ctx),
                typeDeclaration: type,
            };
        }
    };
    return DerivedClass;
};
exports.parseFunction = parseFunction;
//# sourceMappingURL=functionParser.js.map
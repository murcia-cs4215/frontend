import { FuncApplicationContext, LambdaContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseFunction: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitFuncApplication(ctx: FuncApplicationContext): Expression;
        visitLambda(ctx: LambdaContext): Expression;
    };
} & T;
//# sourceMappingURL=functionParser.d.ts.map
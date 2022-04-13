import { EqualPhysicalContext, EqualStructuralContext, GreaterThanContext, GreaterThanOrEqualContext, LessThanContext, LessThanOrEqualContext, NotEqualPhysicalContext, NotEqualStructuralContext } from '../../lang/GrammarParser';
import { Expression } from '../types';
import { Constructable } from '../utils';
export declare const parseComparator: <T extends Constructable>(BaseClass: T) => {
    new (...args: any[]): {
        [x: string]: any;
        visitLessThan(ctx: LessThanContext): Expression;
        visitLessThanOrEqual(ctx: LessThanOrEqualContext): Expression;
        visitGreaterThan(ctx: GreaterThanContext): Expression;
        visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): Expression;
        visitEqualStructural(ctx: EqualStructuralContext): Expression;
        visitNotEqualStructural(ctx: NotEqualStructuralContext): Expression;
        visitEqualPhysical(ctx: EqualPhysicalContext): Expression;
        visitNotEqualPhysical(ctx: NotEqualPhysicalContext): Expression;
    };
} & T;
//# sourceMappingURL=comparatorParser.d.ts.map
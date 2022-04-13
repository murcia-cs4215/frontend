import { ParserRuleContext } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { SourceLocation } from './types';
export declare function contextToLocation(ctx: ParserRuleContext): SourceLocation;
export declare function nodeToErrorLocation(node: ErrorNode): SourceLocation;
export interface Constructable {
    new (...args: any[]): any;
}
//# sourceMappingURL=utils.d.ts.map
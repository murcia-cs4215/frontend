import { BinaryOperator, LogicalOperator, UnaryOperator } from '../parser/types';
import { RuntimeResult } from '../runtimeTypes';
export declare function evaluateUnaryExpression(operator: UnaryOperator, argument: RuntimeResult): RuntimeResult;
export declare function evaluateBinaryExpression(operator: BinaryOperator, left: RuntimeResult, right: RuntimeResult): RuntimeResult;
export declare function evaluateLogicalExpression(operator: LogicalOperator, left: RuntimeResult, right: RuntimeResult): RuntimeResult;
//# sourceMappingURL=operators.d.ts.map
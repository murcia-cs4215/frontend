import { Contract } from '../contracts/types';
import { ContractType, FunctionType, PrimitiveType, PrimitiveValueType, Type } from './types';
export declare function makePrimitive(type: PrimitiveValueType): PrimitiveType;
export declare function makeFunctionType(...types: Type[]): FunctionType;
export declare const intType: PrimitiveType;
export declare const floatType: PrimitiveType;
export declare const boolType: PrimitiveType;
export declare const stringType: PrimitiveType;
export declare const charType: PrimitiveType;
export declare const unitType: PrimitiveType;
export declare const primitiveTypes: PrimitiveType[];
export declare const valueTypeToPrimitive: {
    [valueType: string]: PrimitiveType;
};
export declare function isPrimitiveType(type: Type): type is PrimitiveType;
export declare function isFunctionType(type: Type): type is FunctionType;
export declare function isInt(type: Type): boolean;
export declare function isFloat(type: Type): boolean;
export declare function isBool(type: Type): boolean;
export declare function isString(type: Type): boolean;
export declare function isChar(type: Type): boolean;
export declare function isSameType(type1: Type, type2: Type): boolean;
/**
 * Curries a function with type of format x -> x -> x -> x
 * to a type with format x -> (x -> (x -> x)).
 */
export declare function curryParamTypes(paramTypes: Type[], returnType: Type): FunctionType;
export declare function formatContractType(contractType: ContractType): string;
export declare function getTypeOfContract(contract: Contract): Type;
//# sourceMappingURL=utils.d.ts.map
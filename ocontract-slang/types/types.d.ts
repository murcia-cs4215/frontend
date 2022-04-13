export declare type Type = PrimitiveType | FunctionType;
export declare type PrimitiveValueType = 'int' | 'float' | 'string' | 'char' | 'bool' | 'unit';
export interface PrimitiveType {
    type: 'PrimitiveType';
    valueType: PrimitiveValueType;
}
export interface FunctionType {
    type: 'FunctionType';
    parameterType: Type;
    returnType: Type;
}
export declare type ContractType = FlatContractType | FunctionContractType;
export interface FlatContractType {
    type: 'FlatContractType';
    contractType: FunctionType;
}
export interface FunctionContractType {
    type: 'FunctionContractType';
    parameterType: ContractType;
    returnType: ContractType;
}
//# sourceMappingURL=types.d.ts.map
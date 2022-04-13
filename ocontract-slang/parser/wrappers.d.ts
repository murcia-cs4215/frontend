interface Wrapper<T> {
    unwrap(): T;
}
export declare class StringWrapper implements Wrapper<string> {
    private value;
    constructor(value: string);
    unwrap(): string;
}
export {};
//# sourceMappingURL=wrappers.d.ts.map
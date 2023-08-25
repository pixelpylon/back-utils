export declare class RpcClient {
    constructor (url: string)
    safeCall<D=any, E=any>(method: string, params?: object): Promise<{result?: D, error?: E}>
    unsafeCall<D=any>(method: string, params?: object): Promise<D>
    static new (url: string): RpcClient
}

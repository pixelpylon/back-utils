export declare class RpcClient {
  constructor(url: string)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  safeCall<D = any, E = any>(method: string, params?: object): Promise<{result?: D; error?: E}>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  unsafeCall<D = any>(method: string, params?: object): Promise<D>
}

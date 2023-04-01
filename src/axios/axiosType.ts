
// 定义一个常见的后端请求返回
export type BaseApiResponse < T > = {
    code: number,
    message: string,
    result: T
}

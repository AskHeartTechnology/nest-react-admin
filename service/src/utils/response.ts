// 自定义code码
export enum HttpResponseCode {
  SUCCESS = 2000, // 成功
  BAD_REQUEST = 4000, // 请求错误
  UNAUTHORIZED = 4001, // 未认证
  FORBIDDEN = 4003, // 请求被拒绝
  NOT_FOUND = 4004, // 请求地址不存在
  ERROR = 5000, // 服务器异常
}

// 自定义响应结构
export class CommonResponse<T> {
  code: HttpResponseCode
  message: string
  result?: T

  constructor(code: HttpResponseCode, message: string, result?: T) {
    this.code = code
    this.message = message
    this.result = result || null
  }

  static success<T>(message?: string, result?: T): CommonResponse<T> {
    return new CommonResponse(
      HttpResponseCode.SUCCESS,
      message || 'SUCCESS',
      result,
    )
  }

  static error<T>(message?: string, result?: T): CommonResponse<T> {
    return new CommonResponse(
      HttpResponseCode.ERROR,
      message || 'ERROR',
      result,
    )
  }

  static badRequest<T>(message?: string, result?: T): CommonResponse<T> {
    return new CommonResponse(
      HttpResponseCode.BAD_REQUEST,
      message || 'BAD_REQUEST',
      result,
    )
  }

  static noAuth<T>(message?: string, result?: T): CommonResponse<T> {
    return new CommonResponse(
      HttpResponseCode.UNAUTHORIZED,
      message || 'UNAUTHORIZED',
      result,
    )
  }

  static forbidden<T>(message?: string, result?: T): CommonResponse<T> {
    return new CommonResponse(
      HttpResponseCode.FORBIDDEN,
      message || 'FORBIDDEN',
      result,
    )
  }

  static notFound<T>(message?: string, result?: T): CommonResponse<T> {
    return new CommonResponse(
      HttpResponseCode.NOT_FOUND,
      message || 'NOT_FOUND',
      result,
    )
  }
}

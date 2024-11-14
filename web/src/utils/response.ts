import { AxiosResponse } from 'axios'
import { HttpResponseCode, Result } from '@/utils/request'
import { toast } from './message'

type FunctionType<T> = (params: any) => Promise<AxiosResponse<Result<T>>>

export const handleResponse = async <T>(
  func: FunctionType<T>,
  params?: any,
): Promise<T | null> => {
  try {
    const { data } = await func(params)
    const { code, message, result } = data
    switch (code) {
      case HttpResponseCode.SUCCESS:
        return Promise.resolve(result)
      case HttpResponseCode.BAD_REQUEST:
        toast('error', `请求错误(${HttpResponseCode.BAD_REQUEST})`)
        return Promise.resolve(null)
      case HttpResponseCode.UNAUTHORIZED:
        toast('error', `请求未授权(${HttpResponseCode.UNAUTHORIZED})`)
        return Promise.resolve(null)
      case HttpResponseCode.FORBIDDEN:
        toast('error', `请求被拒绝(${HttpResponseCode.FORBIDDEN})`)
        return Promise.resolve(null)
      case HttpResponseCode.NOT_FOUND:
        toast('error', `请求地址不存在(${HttpResponseCode.NOT_FOUND})`)
        return Promise.resolve(null)
      case HttpResponseCode.ERROR:
        toast('error', `服务器异常(${HttpResponseCode.ERROR})`)
        return Promise.resolve(null)
      default:
        if (message) {
          toast('error', message)
        }
        return Promise.resolve(null)
    }
  } catch (e) {
    console.log('程序异常：', e)
    toast('error', '请求异常')
    return Promise.resolve(null)
  }
}

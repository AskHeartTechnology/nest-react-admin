import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { ILoginParams, ILoginResponse, SvgImageInfo } from '@/types/auth'
import { handleResponse } from '@/utils/response'
import { getCode, login, logout } from '@/api/auth'

type AuthStoreState = {
  codeInfo: SvgImageInfo
  accessToken: ILoginResponse['accessToken']
  refreshToken: ILoginResponse['refreshToken']
}

type AuthStoreActions = {
  fetchCode: (clear?: boolean, email?: ILoginParams['email']) => Promise<void>
  login: (params: ILoginParams) => Promise<void>
  logout: () => void
}

type AuthStore = AuthStoreState & AuthStoreActions

const initialState: AuthStoreState = {
  accessToken: null,
  refreshToken: null,
  codeInfo: null,
}

export const useAuthStore = create(
  devtools(
    persist<AuthStore>(
      (set, get) => ({
        ...initialState,
        fetchCode: async (clear = false, email) => {
          if (clear) {
            set({ codeInfo: null })
          } else {
            const info = await handleResponse<SvgImageInfo>(getCode, email)
            set({ codeInfo: info })
          }
        },
        login: async () => {
          const tokens = await handleResponse<ILoginResponse>(login)
          if (tokens) {
            get().fetchCode(true)
          }
          set({
            accessToken: tokens?.accessToken,
            refreshToken: tokens?.refreshToken,
          })
        },
        logout: async () => {
          await logout()
          set({ accessToken: null, refreshToken: null })
        },
      }),
      { name: 'auth' },
    ),
  ),
)

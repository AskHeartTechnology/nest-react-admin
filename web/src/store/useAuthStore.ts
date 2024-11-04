import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

type AuthStoreState = {
  accessToken: string | null
}
type AuthStoreActions = {
  login: (params: object) => Promise<void>
  logout: () => void
}

type AuthStore = AuthStoreState & AuthStoreActions

export const useAuthStore = create(
  devtools(
    persist<AuthStore>(
      (set) => ({
        accessToken: null,
        login: async () => {
          set({ accessToken: 'accessToken' })
        },
        logout: async () => {
          set({ accessToken: null })
        },
      }),
      { name: 'auth' },
    ),
  ),
)

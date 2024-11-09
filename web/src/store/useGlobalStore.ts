import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { SvgImageInfo } from '@/types/global'

type ThemeStyle = 'default' | 'dark'

type GlobalStoreState = {
  collapsed: boolean
  themeStyle: ThemeStyle
  codeInfo: SvgImageInfo | null
}

type GlobalStoreActions = {
  changeCollapsed: (col: boolean) => void
  changeThemeStyle: () => void
  fetchCode: () => Promise<void>
}

type GlobalStore = GlobalStoreState & GlobalStoreActions

export const useGlobalStore = create(
  devtools(
    persist<GlobalStore>(
      (set) => ({
        collapsed: false,
        changeCollapsed: (col) => {
          set({ collapsed: col })
        },
        themeStyle: 'default',
        changeThemeStyle: () => {
          set(({ themeStyle }) => ({
            themeStyle: themeStyle === 'default' ? 'dark' : 'default',
          }))
        },
        codeInfo: null,
        fetchCode: async () => {
          const info = { id: 'aaaaaaa', text: '123', data: '123' }
          set({ codeInfo: info })
        },
      }),
      { name: 'global' },
    ),
  ),
)

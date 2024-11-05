import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

type ThemeStyle = 'default' | 'dark'

type GlobalStoreState = {
  collapsed: boolean
  themeStyle: ThemeStyle
}
type GlobalStoreActions = {
  changeCollapsed: (col: boolean) => void
  changeThemeStyle: () => void
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
      }),
      { name: 'global' },
    ),
  ),
)

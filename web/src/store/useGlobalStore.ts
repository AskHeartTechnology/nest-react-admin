import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

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

const initialState: GlobalStoreState = {
  collapsed: false,
  themeStyle: 'default',
}

export const useGlobalStore = create(
  devtools(
    persist<GlobalStore>(
      (set) => ({
        ...initialState,
        changeCollapsed: (col) => {
          set({ collapsed: col })
        },
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

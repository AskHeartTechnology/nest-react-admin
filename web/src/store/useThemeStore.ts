import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ThemeStyle = 'default' | 'dark'

type ThemeStoreState = {
  themeStyle: ThemeStyle
}

type ThemeStoreActions = {
  changeThemeStyle: () => void
}

type ThemeStore = ThemeStoreState & ThemeStoreActions

const initialState: ThemeStoreState = {
  themeStyle: 'default',
}

export const useThemeStore = create(
  devtools(
    persist<ThemeStore>(
      (set) => ({
        ...initialState,
        changeThemeStyle: () => {
          set(({ themeStyle }) => ({
            themeStyle: themeStyle === 'default' ? 'dark' : 'default',
          }))
        },
      }),
      { name: 'theme' },
    ),
  ),
)

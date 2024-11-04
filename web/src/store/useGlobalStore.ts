import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

type GlobalStoreState = {
  collapsed: boolean
}
type GlobalStoreActions = {
  changeCollapsed: (col: boolean) => void
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
      }),
      { name: 'global' },
    ),
  ),
)

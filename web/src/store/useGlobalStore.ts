import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type GlobalStoreState = {
  collapsed: boolean
}

type GlobalStoreActions = {
  changeCollapsed: (col: boolean) => void
}

type GlobalStore = GlobalStoreState & GlobalStoreActions

const initialState: GlobalStoreState = {
  collapsed: false,
}

export const useGlobalStore = create(
  devtools(
    persist<GlobalStore>(
      (set) => ({
        ...initialState,
        changeCollapsed: (col) => {
          set({ collapsed: col })
        },
      }),
      { name: 'global' },
    ),
  ),
)

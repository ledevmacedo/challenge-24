// store.ts
// import create from 'zustand'

// type Store = {
//     contactIndex: number;
//     setContactIndex: (n: number) => void;
// }

// export const useStore = create<Store>()((set) => ({
//     contactIndex: 0,
//     setContactIndex: (n: number) => set({ contactIndex: n })
// }))


import { create } from 'zustand'

interface IndexState {
    contactIndex: number
    setContactIndex: (n: number) => void;
}


export const useStore = create<IndexState>()((set) => ({
    contactIndex: 0,
    setContactIndex: (n: number) => set({ contactIndex: n })
}))
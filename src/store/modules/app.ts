import { defineStore } from 'pinia';
import { store } from '@/store'

interface AppState {
    collapse: Boolean
}

export const useAppStore = defineStore({
    id: 'app',
    state : (): AppState  =>({
        collapse: false
    }),
    getters: {
        getCollapse(): Boolean{
            return this.collapse
        }
    },
    actions: {
        changeCollapse(): void{
            this.collapse = ! this.collapse
        }
    }
})



// export function useAppStoreWithOut() {
//     return useAppStore(store);
//   }
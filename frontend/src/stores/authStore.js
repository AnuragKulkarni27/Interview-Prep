import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const authStore = (set) => ({
    auth: {
        user: null,
        token: ""
    },

    createAuth: (data) => {
        set((state) => ({
            auth: data
        }))
    } ,

    deleteAuth: () => {
        set((state) => ({
            auth: {
                user:null,
                token: ""
            }
        }))
    }
})

const useAuthStore = create(
    devtools(
        persist(authStore, {
            name: "auth"
        })
    )
)

export default useAuthStore
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const feedbackStore = (set) => ({
    interviewId: null,

    createInterview: (data) => {
        set((state) => ({
            interviewId: data
        }))
    },
    
    deleteInterview: () => {
        set((state) => ({
            interviewId: null
        }))
    }
})

const useFeedbackStore = create(
    devtools(
        persist(feedbackStore, {
            name: "feedback"
        })
    )
)

export default useFeedbackStore
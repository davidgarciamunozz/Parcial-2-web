import { configureStore } from "@reduxjs/toolkit";
import CommentReducers from './comment/commentSlice'

export const store = configureStore({
    reducer: {
        comment : CommentReducers
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
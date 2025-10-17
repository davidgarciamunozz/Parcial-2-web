import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Comment } from "../../types/commentTypes";
import AddComment from "../../views/AddComment";


export interface CommentState {
    comments: Comment[]
}


const initialState:CommentState = {
    comments: []
}

export const CommentSlice = createSlice ({
    name: 'comment',
    initialState,
    reducers: {
        setComments: (state, action:PayloadAction<Comment[]>) => {
            state.comments = action.payload
        },
        
    }
})


export const {setComments} = CommentSlice.actions
export default  CommentSlice.reducer
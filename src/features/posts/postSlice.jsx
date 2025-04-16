import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:'1',
        title: 'redux',
        content:"Its easy to learn",
    },
    {
        id:'2',
        title: 'react',
        content:"Its already learnt",
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action){
            state.push(action.payload);
        }
    }
})
export const selectAllPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
import { createSlice,nanoid } from "@reduxjs/toolkit";

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
        addPost: {
            reducer(state, action){
            state.push(action.payload);
            }
        },
        prepare(title,content){
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content
                }
            }
        }

    }
})
export const selectAllPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
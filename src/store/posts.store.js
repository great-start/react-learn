import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../services";

export const getAllPosts = createAsyncThunk(
    'postsStore/getAllPosts',
    async (_,{dispatch,rejectedWithValue}) => {
        try {
            const posts = await postsService.getAll();
            dispatch(showPosts({posts}));
        } catch (e) {
            return rejectedWithValue(e.message);
        }
    }
);

const postsStore = createSlice({
    name: 'postsStore',
    initialState: {
        posts: null
    },
    reducers: {
        showPosts: (state, action) => {
            state.posts = [...action.payload.posts];
        }
    }
})

const postsReducer = postsStore.reducer;

export const {showPosts} = postsStore.actions;
export default postsReducer;
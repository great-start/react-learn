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
        posts: null,
        errorPosts: null
    },
    reducers: {
        showPosts: (state, action) => {
            state.errorPosts = null;
            state.posts = [...action.payload.posts];
        }
    },
    extraReducers: {
        [getAllPosts.rejected]: (state, action) => {
            state.errorPosts = action.payload;
        }
    }
})

export const postsReducer = postsStore.reducer;

export const {showPosts} = postsStore.actions;
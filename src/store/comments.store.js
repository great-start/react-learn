import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../services";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {dispatch,rejectWithValue}) => {
        try {
            const comments = await commentsService.getAll();
            dispatch(showComments({comments}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: null,
        errorComments: null
    },
    reducers: {
        showComments: (state, action) => {
            state.errorComments = null;
            state.comments = [...action.payload.comments];
        },
    },
    extraReducers: {
        [getAllComments.rejected]: (state, action) => {
            state.errorComments = action.payload;
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const {showComments} = commentsSlice.actions;

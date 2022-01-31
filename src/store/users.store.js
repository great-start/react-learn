import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";

export const getAllUsers = createAsyncThunk(
    'usersStore/getAllUsers',
    async (_,{dispatch,rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            dispatch(showUsers({users}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const usersStore = createSlice({
    name: 'usersStore',
    initialState: {
        users: null,
        errorUsers: null
    },
    reducers: {
        showUsers: (state,action) => {
            state.errorUsers = null;
            state.users = action.payload.users;
        }
    },
    extraReducers: {
        [getAllUsers.rejected]: (state, action) => {
            state.errorUsers = action.payload;
        }
    }
})

export const usersReducer = usersStore.reducer;

export const {showUsers} = usersStore.actions;


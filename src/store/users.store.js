import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";

export const getAllUsers = createAsyncThunk(
    'usersStore/getAllUsers',
    async (_,{rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            console.log(users);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const userStore = createSlice({
    name: 'usersStore',
    initialState: {
        users: []
    },
    reducers: {
        getAll: (state,action) => {

        }
    },

})

const usersReducer = userStore.reducer;

export const {getAll} = userStore.actions;

export default usersReducer;

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

const usersStore = createSlice({
    name: 'usersStore',
    initialState: {
        users: []
    },
    reducers: {

    }
})

const usersReducer = usersStore.reducer;

export const {getAll} = usersStore.actions;

export default usersReducer;

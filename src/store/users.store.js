import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";

export const getAllUsers = createAsyncThunk(
    'usersStore/getAllUsers',
    async () => {
        try {
            const users = await userService.getAll();
            console.log(users);
        } catch (e) {
            console.log(e);
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

const usersStore = userStore.reducer;

export const {getAll} = userStore.actions;

export default usersStore;

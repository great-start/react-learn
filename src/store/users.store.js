import {createSlice} from "@reduxjs/toolkit";


const userStore = createSlice({
    name: 'usersStore',
    initialState: {
        users: []
    },
    reducers: {
        getAll: (state,action) => {

        }
    }
})

const usersStore = userStore.reducer;

export const {getAll} = userStore.actions;

export default usersStore;

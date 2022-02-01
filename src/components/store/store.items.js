import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    actions: [],
    allCounter: 0,
    completedCounter: 0
}

const storeActions = createSlice({
    name: 'storeActions',
    initialState,
    reducers: {
        createAction: (state, action) => {
            state.actions.push({'name': action.payload, 'check': false});
            state.allCounter++;
        },
        checkBox: (state, action) => {
            if (action.payload.e.toString() === 'true') {
                state.actions[action.payload.index].check = true;
                state.completedCounter++;
            } else {
                state.actions[action.payload.index].check = false;
                state.completedCounter--;
            }
        },
        deleteAction: (state, action) => {
            if (state.actions[action.payload.index].check.toString() === 'true') {
                state.completedCounter--;
            }
            state.actions.splice(action.payload.index, 1);
            state.allCounter--;
        }
    }
});

const actionReducer = storeActions.reducer;

export const {createAction, checkBox, deleteAction} = storeActions.actions;
export default actionReducer;
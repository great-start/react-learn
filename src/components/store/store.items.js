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
            console.log(action.payload);
            state.actions.push({'name': action.payload, 'check': false});
            state.allCounter++;
        },
        checkBox: (state, action) => {
            if (action.payload.e.toString() === 'true') {
                state.actions[action.payload.index].check = true;
                state.completedCounter++;
            } else {
                state.completedCounter--;
            }
        },
        deleteAction: {

        }
    }
});

const actionReducer = storeActions.reducer;

export const {createAction, checkBox} = storeActions.actions;
export default actionReducer;
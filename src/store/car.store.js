import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../services/cars.service";

export const getCars = createAsyncThunk(
    'carsSlice/getCars',
    async (_,{dispatch,rejectWithValue}) => {
        try {
            const cars = await carsService.getAll();
            dispatch(showCars({cars}))
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const carsSlice = createSlice({
   name: 'carSlice',
   initialState: {
       cars: null
   },
    reducers: {
       showCars: (state, action) => {
           state.cars = [...action.payload.cars];
       }
    }
});

export const carsReducer = carsSlice.reducer;

const {showCars} = carsSlice.actions;

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../services";

export const getCars = createAsyncThunk(
    'carsSlice/getCars',
    async (_,{dispatch,rejectWithValue}) => {
        try {
            const cars = await carsService.getAll();
            dispatch(showCars({cars}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const carsSlice = createSlice({
   name: 'carSlice',
   initialState: {
       cars: null,
       errorCar: null
   },
    reducers: {
       showCars: (state, action) => {
           state.errorCar = null;
           state.cars = [...action.payload.cars];
       }
    },
    extraReducers: {
       [getCars.rejected] : (state, action) => {
           state.errorCar = action.payload;
       }
    }
});

export const carsReducer = carsSlice.reducer;

const {showCars} = carsSlice.actions;

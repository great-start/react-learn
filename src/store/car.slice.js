import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data},{dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}));
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteCarFromDB = createAsyncThunk(
    'carSlice/deleteCarFromDB',
    async ({id},{dispatch}) => {
        try {
            await carService.delete(id);
            dispatch(deleteCar({id}));
            dispatch(deleteCar());
        } catch (e) {

        }
    }
)

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({data},{dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(data.id, data);
            dispatch(updateCarInState({data}));
            dispatch(removeMessages());
            dispatch(resetForm());
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const carSlice = createSlice({
    name:'carSlice',
    initialState: {
        cars:[],
        status: null,
        error: null,
        updateForm: {exist: false, carId: null, message: null}
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                // id: new Date().getTime(),
                ...action.payload.data
            });
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        linkToUpdateCar: (state, action) => {
            state.updateForm = {...state.updateForm, 'message': null, 'exist': true};
            state.updateForm.carId = action.payload.id;
        },
        updateCarInState: (state, action) => {
            state.cars.forEach((car,index) => {
                    if (action.payload.data.id.toString() === car.id.toString()) {
                        state.cars[index] = action.payload.data;
                    }
                    return car;
                }
            );
        },
        resetForm: (state) => {
            state.updateForm.exist = false;
            state.updateForm.carId = null;
        },
        removeMessages: (state) => {
            state.updateForm = {...state.updateForm, 'message': null};
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled`';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [updateCar.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [updateCar.fulfilled]: (state) => {
            state.updateForm.message = 'Car was updated';
        },
        [createCar.fulfilled]: (state) => {
            state.updateForm.message = 'Car was created';
        },
        [deleteCarFromDB.fulfilled]: (state) => {
            state.updateForm.message = 'Car was deleted';
        },
    }
});

export const {addCar, deleteCar, linkToUpdateCar, resetForm, removeMessages, updateCarInState} = carSlice.actions;

const carReducer = carSlice.reducer;
export default carReducer;
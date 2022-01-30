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
        } catch (e) {

        }
    }
)


export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id},{dispatch}) => {
        try {
            console.log(await carService.update(id));
        } catch (e) {
            console.log(e);
        }
    }
)


const carSlice = createSlice({
    name:'carSlice',
    initialState: {
        cars:[],
        status: null,
        error: null,
        updateForm: {exist: false, carId: null}
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
        updateThisCar: (state, action) => {
            state.updateForm.exist = true;
            state.updateForm.carId = action.payload.id;
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
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
        }
    }


});

export const {addCar, deleteCar, updateThisCar} = carSlice.actions;

const carReducer = carSlice.reducer;
export default carReducer;
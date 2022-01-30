import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar, createCar} from '../../store/car.slice';

export const Form = () => {

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const handler = (data) => {
        // dispatch(addCar({data}));
        dispatch(createCar({data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handler)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>SEND</button>
            </form>
        </div>
    );
};

import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from './Form.module.css';
import {createCar, updateCar} from "../../store";

export const Form = () => {

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();
    const {updateForm : {exist, carId}} = useSelector(state => state.carReducer);

    const handler = (data) => {
        if (exist.toString() === 'true') {
            const id = String(carId);
            data = {id, ...data};
            dispatch(updateCar({data}));
            reset()
        }
        // dispatch(addCar({data}));
        dispatch(createCar({data}));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handler)} className={exist ? css.update : css.send} >
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>{exist ? 'UPDATE' : 'SEND' }</button>
                {exist && (<p>Ready to update car with Id: {carId}</p>)}
            </form>
        </div>
    );
};

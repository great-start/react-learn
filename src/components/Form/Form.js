import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCar, createCar, updateCar} from '../../store/car.slice';
import css from './Form.module.css';

export const Form = () => {

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();
    const {updateForm : {exist, carId: id}} = useSelector(state => state.carReducer);

    const handler = (data) => {
        if (exist.toString() === 'true') {
            data = {id, ...data};
            return dispatch(updateCar({data}));
        }
        // dispatch(addCar({data}));
        dispatch(createCar({data}));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handler)} className={exist.toString() === 'true' ? css.update : 'send'} >
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>{exist.toString() === 'true' ? 'UPDATE' : 'SEND' }</button>
                {exist.toString() === 'true' && (<p>Ready to update car with Id: {id}</p>)}
            </form>
        </div>
    );
};

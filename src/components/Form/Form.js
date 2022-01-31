import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './Form.module.css';
import {createCar, updateCar} from "../../store";
import {carValidation} from "../../validation/car.validation";

export const Form = () => {

    const {handleSubmit, register, reset, formState:{errors}} = useForm({resolver: joiResolver(carValidation), mode: 'onTouched'});
    const dispatch = useDispatch();
    const {updateForm : {exist, carId, message}} = useSelector(state => state.carReducer);

    const handler = (data) => {
        if (exist.toString() === 'true') {
            const id = String(carId);
            data = {id, ...data};
            dispatch(updateCar({data}));
            reset();
            return
        }
        // dispatch(addCar({data}));
        dispatch(createCar({data}));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handler)} className={exist ? css.update : css.create}>
                <div>
                    <div>
                        <label>Model: <input type="text" {...register('model')}/></label>
                        <p className={css.error}>{errors.model && <span>{errors.model.message}</span>}</p>
                    </div>
                    <div>
                        <label>Price: <input type="text" {...register('price')}/></label>
                        <p className={css.error}>{errors.price && <span>{errors.price.message}</span>}</p>
                    </div>
                    <div>
                        <label>Year: <input type="text" {...register('year')}/></label>
                        <p className={css.error}>{errors.year && <span>{errors.year.message}</span>}</p>
                    </div>
                    <button>{exist ? 'UPDATE' : 'CREATE'}</button>
                </div>
                <div>
                    {exist && (<p className={css.hide}>Ready to update car with Id: {carId}</p>)}
                    {message && (<p className={css.hide}>{message}</p>)}
                </div>
            </form>
        </div>
    );
};
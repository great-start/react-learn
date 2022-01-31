import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";
import css from './Cars.module.css';

export const Cars = () => {

    const {cars, status, error} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return (
        <div className={css.cars}>
            {status === 'pending' && <h2>loading......</h2>}
            {status === 'rejected' && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};
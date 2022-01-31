import React from 'react';

import {useDispatch} from "react-redux";
import {deleteCarFromDB, linkToUpdateCar} from "../../store";
import css from './Car.module.css';

export const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>
                <div><b>Model:</b> {model}</div>
                <div><b>Price:</b> {price}</div>
                <div><b>Year:</b> {year}</div>
            </div>
            <button onClick={()=>{dispatch(deleteCarFromDB({id}))}}>DELETE</button>
            <button onClick={()=>{dispatch(linkToUpdateCar({id}))}}>UPDATE</button>
        </div>
    );
};

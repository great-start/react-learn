import React from 'react';

import {useDispatch} from "react-redux";
import {deleteCar, deleteCarFromDB, updateCar, updateThisCar} from "../../store";

export const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>ID: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>{dispatch(deleteCarFromDB({id}))}}>DELETE</button>
            <button onClick={()=>{dispatch(updateThisCar({id}))}}>UPDATE</button>
        </div>
    );
};

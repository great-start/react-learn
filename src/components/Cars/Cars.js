import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./Cars.module.css";
import {Car} from "./Car";
import {getCars} from "../../store";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.carsReducer);

    console.log(cars);

    useEffect(() => {
        dispatch(getCars());
    },[])

    return (
        <div className={}>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;
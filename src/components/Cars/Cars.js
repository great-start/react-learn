import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./Cars.module.css";
import {Car} from "./Car";
import {getCars} from "../../store";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars, errorCar} = useSelector(state => state.carsReducer);

    useEffect(() => {
        dispatch(getCars());
    },[])

    return (
        <>
            {errorCar && <div>{errorCar}</div>}
            <div className={css.cars}>
                {cars && cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </>
    );
};

export default Cars;
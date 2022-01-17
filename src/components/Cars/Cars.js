import React, {useEffect, useState} from 'react';

import {carServices} from "../../services/car.services";
import Car from "../Car/Car";
import css from './Cars.module.css'

const Cars = ({rerenderCarList}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        setTimeout(() =>
            carServices.getAll().then(cars => setCars([...cars])), 800);
    },[rerenderCarList])

    return (
        <div className={css.cars}>ALL CARS in DataBase in real time:
            {cars.map(car =>
                <Car key={car.id} car={car} />
            )}
        </div>
    );
};

export default Cars;
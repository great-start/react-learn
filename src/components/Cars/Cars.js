import React, {useEffect, useState} from 'react';

import {carServices} from "../../services/car.services";
import Car from "../Car/Car";
import css from './Cars.module.css'

const Cars = ({remainingCars}) => {

    console.log(remainingCars);

    const [cars, setCars] = useState([]);

    useEffect(() => {
        setTimeout(() =>
            carServices.getAll().then(cars => setCars([...cars])), 800);
    },[remainingCars])

    return (
        <div className={css.cars}>ALL CARS in DataBase:
            {cars.map(car =>
                <Car key={car.id} car={car} />
            )}
        </div>
    );
};

export default Cars;
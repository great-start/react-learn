import React, {useEffect, useState} from 'react';

import {carServices} from "../../services/car.services";
import Car from "../Car/Car";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carServices.getAll().then(cars => setCars([...cars]));
    },[])

    return (
        <div>
            {cars.map(car =>
                <Car key={car.id} car={car} />
            )}
        </div>
    );
};

export default Cars;
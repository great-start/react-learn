import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import Car from "./Car";
import css from "./Cars.module.css";

const Cars = () => {

    const dispatch = useDispatch();
    // const {cars} = useSelector(state => state.);

    useEffect(() => {
        dispatch();
    },[])

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;
import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import css from "./Cars.module.css";
import {Car} from "./Car";

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
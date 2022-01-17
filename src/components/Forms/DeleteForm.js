import React, {useEffect, useState} from 'react';

import {carServices} from "../../services/car.services";
import {useForm} from "react-hook-form";
import css from './Forms.module.css'

const DeleteForm = ({setRerenderCarList3, rerenderCarList}) => {

    const {register, handleSubmit} = useForm();
    const [deletedCar,setDeletedCar] = useState(null);

    const [cars, setCars] = useState([]);

    useEffect(() => {
        setTimeout(() =>
            carServices.getAll().then(cars => setCars([...cars])), 800);
    },[deletedCar, rerenderCarList]);

    function deleteCar(car) {
        carServices.deleteById(car.id).then(response => console.log(response));
        setDeletedCar(car.id);
        setRerenderCarList3(car.id);
    }

    return (
        <div className={css.deleteFrom}>
            <form onSubmit={handleSubmit(deleteCar)}>
                <label>Select Car ID: <select defaultValue={''} {...register('id')}>
                    {cars.map(car => <option key={car.id}>{car.id}</option>)}
                </select></label>
                <button>DELETE</button>
                {deletedCar && <div>Car with id: {deletedCar} <b>deleted</b></div>}
            </form>
        </div>
    );
}

export default DeleteForm;
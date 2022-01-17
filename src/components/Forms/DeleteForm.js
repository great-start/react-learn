import React, {useEffect, useState} from 'react';

import {carServices} from "../../services/car.services";
import {useForm} from "react-hook-form";
import css from './Forms.module.css'

const DeleteForm = ({setRemainingCars}) => {

    const {register, handleSubmit} = useForm();
    const [deletedCar,setDeletedCar] = useState(null);

    console.log(deletedCar);

    const [cars, setCars] = useState([]);

    useEffect(() => {
        setTimeout(() =>
            carServices.getAll().then(cars => setCars([...cars])), 800);
    },[deletedCar]);

    function deleteCar(car) {
        console.log(car.id);
        carServices.deleteById(car.id).then(response => console.log(response));
        setDeletedCar(car.id);
        setRemainingCars(car.id);
    }

return (
    <div className={css.deleteFrom}>
        <form onSubmit={handleSubmit(deleteCar)}>
            <select defaultValue={''} {...register('id')}>
                {cars.map(car => <option key={car.id}>{car.id}</option>)}
            </select>
            <button>DELETE</button>
            {deletedCar && <div>Car with id: {deletedCar} in deleting progress</div>}
        </form>
    </div>
)
}

export default DeleteForm;
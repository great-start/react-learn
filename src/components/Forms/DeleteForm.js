import React, {useEffect, useState} from 'react';
import {carServices} from "../../services/car.services";
import {useForm} from "react-hook-form";

const DeleteForm = () => {

    const {register, handleSubmit} = useForm();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carServices.getAll().then(cars => setCars([...cars]));
    },[]);

    function deleteCar(car) {
        console.log(car.id)
        carServices.deleteById(car.id).then(response => console.log(response));
    }

return (
    <div>
        <form onSubmit={handleSubmit(deleteCar)}>
            <select {...register('id')}>
                {cars.map(car => <option key={car.id}>{car.id}</option>)}
            </select>
            <button>DELETE</button>
        </form>
    </div>
)
}

export default DeleteForm;
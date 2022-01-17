import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carServices} from "../../services/car.services";
import {CarValidator} from "../../validators/car.validator";
import css from './Forms.module.css'

const CreateFrom =({setRerenderCarList2}) => {

    const [createdCar,setCreatedCar] = useState(null);

    const {
        register, handleSubmit, formState:{errors}
    } = useForm({resolver:joiResolver(CarValidator), mode:"onTouched"});

    function submit(data) {  // выводит нашу форму
        carServices.create(data)
            .then(response => setCreatedCar(response))
        setRerenderCarList2(data);
    }


    return (
        <div className={css.createFrom}>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>CREATE</button>
                {createdCar && <span>Car with id {createdCar.id} was created</span>}
            </form>
        </div>
)
}

export default CreateFrom;
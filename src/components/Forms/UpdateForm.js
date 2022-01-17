import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carServices} from "../../services/car.services";
import css from './Forms.module.css'

const UpdateForm = ({setRerenderCarList}) => {

    const [formErrors, setFormErrors] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    const { register, handleSubmit, } = useForm();

    const handler = (data) => {
        carServices.updateById(data.id, data)
            .then(response => setUpdatedCar(response))
            .catch(errors => setFormErrors(errors.response.data));
        setRerenderCarList(data.id);
    }

    return (
        <div className={css.updateFrom}>
            <form onSubmit={handleSubmit(handler)}>
                <div><label>Id: <input type="text" defaultValue={''} {...register('id')} /></label></div>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')} /></label></div>
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')} /></label></div>
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')} /></label></div>
            <button>Update</button>
                {updatedCar && <span>Car with id {updatedCar.id} was updated</span>}
                {formErrors && <span>{formErrors.model}</span>}
            </form>
        </div>
    );
};

export default UpdateForm;
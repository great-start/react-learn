import React from 'react';
import {useForm} from "react-hook-form";
import {carServices} from "../../services/car.services";

const UpdateForm = () => {

    const { register, handleSubmit } = useForm();

    const handler = (data) => {
        console.log(data);
        carServices.updateById(data.id, data).then(response => console.log(response))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handler)}>
                <div><label>Id: <input type="text" defaultValue={''} {...register('id')} /></label></div>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')} /></label></div>
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')} /></label></div>
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')} /></label></div>
            <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;
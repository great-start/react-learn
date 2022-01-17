import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carServices} from "../../services/car.services";
import {CarValidator} from "../../validators/car.validator";
import css from './Forms.module.css'

const CreateFrom =({setRerenderCarList2}) => {

    const [formError, setFormErrors] = useState({});
    const [createdCar,setCreatedCar] = useState(null);

    const {
        register, handleSubmit, watch, formState:{errors}
    } = useForm({resolver:joiResolver(CarValidator), mode:"onTouched"});

    function submit(data) {  // выводит нашу форму
        carServices.create(data)
            .then(response => setCreatedCar(response))
            .catch(errors => setFormErrors(errors.response.data));                  // отлавливание ошибок
        setRerenderCarList2(data);
    }

    console.log(createdCar);

    // async function submit (data) {                        //   используя async await
    //     try {
    //         const newCar = await carServices.create(data);
    //         newCar.then(response => console.log(response))
    //     } catch (e) {
    //         setFormErrors(e.response.data);
    //     }
    // }

    // watch(event => console.log(event)) // дані в реальному часі

    console.log(formError);

    return (
        <div className={css.createFrom}>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>CREATE</button>
                {createdCar && <span>Car with id {createdCar.id} was created</span>}
            </form>
        </div>
)
}

export default CreateFrom;
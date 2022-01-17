import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carServices} from "../../services/car.services";

const Form =() => {

    const [formError, setFormErrors] = useState({});

    const {
        register, handleSubmit, watch, formState:{errors}
    } = useForm();

    function submit(data) {  // выводит нашу форму
        carServices.create(data).then(response => console.log(response)).catch(errors => setFormErrors(errors.response.data))  // отлавливание ошибок
    }

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
        <div>
            <form>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {formError.model && <span>{formError.model[0]}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {formError.price && <span>{formError.price[0]}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {formError.year && <span>{formError.year[0]}</span>}
                <button onClick={handleSubmit(submit)}>SEND</button>
            </form>
        </div>
)
}

export default Form;
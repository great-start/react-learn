import React, {useState} from 'react';

const Form = ({formHandler}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    console.log(form);

    function handlerInput(e) {
        // e.preventDefault();
        const event = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...event});
        formHandler(event);
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={handlerInput}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={handlerInput}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={handlerInput}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;
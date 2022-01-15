import React, {useState} from 'react';

const Form = ({formHandler}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    function inputHandler(e) {
        const formData = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...formData});
        formHandler(formData);
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={inputHandler}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={inputHandler}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={inputHandler}/></label>
            </form>
        </div>
    );
};

export default Form;
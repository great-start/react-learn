import React, {useState} from 'react';

const Form = ({setUsers, users}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    function formHandler(e) {
        e.preventDefault();
        setUsers(() => {
            return users.filter(user =>
                user.name.includes(form.name) && user.username.includes(form.username) && user.email.includes(form.email)
            )
        })
    }

    function handlerInput(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <label>Name: <input type="text" name={'name'} onChange={handlerInput}/></label>
                <label>Username: <input type="text" name={'username'} onChange={handlerInput}/></label>
                <label>Email: <input type="text" name={'email'} onChange={handlerInput}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;
import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Context} from "./AuthProvider";

const RequireAuthentication = ({children}) => {

    const {user, Login} = useContext(Context);
    const navigate = useNavigate();

    const handler = (e) => {
        e.preventDefault();
        Login(e.target.userName.value, () => navigate('/',{replace: true}));
    }

    if (user === '1985') {
        console.log(user);
        return children;
    }

    return (
        <form onSubmit={handler}>
            <div><label>Enter your year of birth: <input type="number" name={'userName'}/></label></div>
            <button>Login</button>
        </form>
    );
};

export default RequireAuthentication;
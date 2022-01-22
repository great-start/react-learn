import React, {createContext, useState} from 'react';

export const Context = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const Login = (newUser, cb) => {
        setUser(newUser);
        cb();
    }

    const LogOut = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, Login, LogOut};

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;
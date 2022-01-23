import React, {useState} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import css from "./Home.module.css"

const Home = () => {

    const [context, setContext] = useState(null);

    function handler(e) {
        setContext(e.target.name);
    }

    return (
        <>
            <div className={css.buttContainer}>
                <NavLink to={'girls'}>
                    <button onClick={handler} name={'girls'}>Girls</button>
                </NavLink>
                <NavLink to={'cats'}>
                    <button onClick={handler} name={'cats'}>Cats</button>
                </NavLink>
                <NavLink to={'mountains'}>
                    <button onClick={handler} name={'mountains'}>Mountains</button>
                </NavLink>
                <NavLink to={'flowers'}>
                    <button onClick={handler} name={'flowers'}>Flowers</button>
                </NavLink>
                <NavLink to={'food'}>
                    <button onClick={handler} name={'food'}>Food</button>
                </NavLink>
            </div>
            <div>
                <Outlet context={[context, setContext]}/>
            </div>
        </>
    );
};

export default Home;
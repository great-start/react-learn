import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

import css from "./Home.module.css"

const Home = () => {

    const [context, setContext] = useState(null);

    function handler(e) {
        setContext(e.target.name);
    }

    return (
        <>
            <div className={css.buttContainer}>
                <Link to={'girls'}>
                    <button onClick={handler} name={'girls'}>Girls</button>
                </Link>
                <Link to={'cats'}>
                    <button onClick={handler} name={'cats'}>Cats</button>
                </Link>
                <Link to={'mountains'}>
                    <button onClick={handler} name={'mountains'}>Mountains</button>
                </Link>
                <Link to={'flowers'}>
                    <button onClick={handler} name={'flowers'}>Flowers</button>
                </Link>
                <Link to={'food'}>
                    <button onClick={handler} name={'food'}>Food</button>
                </Link>
            </div>
            <div>
                <Outlet context={[context]}/>
            </div>
        </>
    );
};

export default Home;
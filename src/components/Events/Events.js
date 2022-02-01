import React from 'react';
import {useSelector} from "react-redux";

import Event from "./Event";

const Events = () => {

    const {actions} = useSelector(state => state.actions);

    return (
        <div>
            {actions && actions.map((action, index) => <Event key={index} action={action} index={index}/>)}
        </div>
    );
};

export default Events;
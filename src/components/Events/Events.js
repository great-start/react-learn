import React from 'react';
import {useSelector} from "react-redux";

import css from './Events.module.css';
import {Event} from "./Event";

export const Events = () => {

    const {actions} = useSelector(state => state.actions);

    return (
        <div className={css.events}>
            {actions && actions.map((action, index) => <Event key={index} action={action} index={index}/>)}
        </div>
    );
};

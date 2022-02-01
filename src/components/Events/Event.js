import React from 'react';
import {useDispatch} from "react-redux";

import {checkBox, deleteAction} from "../store/store.items";
import css from './Events.module.css';

export const Event = ({action: {name, check}, index}) => {

    const dispatch = useDispatch();

    return (
        <div className={css.event}>
            <input type="checkbox" checked={check} onChange={(e) => dispatch(checkBox({index,e:e.target.checked}))}/>
            <h3 className={check ? css.checked : css.uncheked}>{name}</h3>
            <button onClick={() => dispatch(deleteAction({index}))}>DELETE</button>
        </div>
    );
};

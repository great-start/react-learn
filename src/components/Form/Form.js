import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./Form.module.css";
import {createAction} from "../store/store.items";

export const Form = () => {

    const dispatch = useDispatch();
    const {allCounter, completedCounter} = useSelector(state => state.actions);

    const handler = (e) => {
        e.preventDefault();
        dispatch(createAction(e.target.action.value));
        e.target.reset();
    };

    return (
        <>
            <div className={css.header}>
                <div className={css.counters}>
                    <h2>All: <span>{allCounter}</span></h2>
                    <h2>Completed: <span>{completedCounter}</span></h2>
                </div>
                <form onSubmit={handler}>
                    <input type={'text'} placeholder={"todo"} name={'action'}/>
                    <button>SAVE</button>
                </form>
            </div>
            <hr/>
        </>
    );
};

import React, {useRef} from 'react';

import css from "./Form.module.css";
import {useDispatch, useSelector} from "react-redux";
import {createAction} from "../store/store.items";

const Form = () => {

    const action = useRef();
    const dispatch = useDispatch();
    const {allCounter, completedCounter} = useSelector(state => state.actions);

    const handler = (e) => {
        e.preventDefault();
        dispatch(createAction(action.current.value));
        e.target.reset();
    };

    return (
        <>
            <div className={css.header}>
                <div className={css.counters}>
                    <h2>All: {allCounter}</h2>
                    <h2>Completed: {completedCounter}</h2>
                </div>
                <form onSubmit={handler}>
                    <input type={'text'} placeholder={"todo"} ref={action}/>
                    <button>SAVE</button>
                </form>
            </div>
            <hr/>
        </>
    );
};

export default Form;
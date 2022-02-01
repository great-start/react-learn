import React from 'react';

import css from "./Form.module.css";

const Form = () => {




    return (
        <>
            <div className={css.header}>
                <div className={css.counters}>
                    <h2>All: </h2>
                    <h2>Completed: </h2>
                </div>
                <form>
                    <input placeholder={"to do"}/>
                    <button>SAVE</button>
                </form>
            </div>
            <hr/>
        </>
    );
};

export default Form;
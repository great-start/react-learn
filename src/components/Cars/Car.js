import React from 'react';

import css from './Cars.module.css';

export const Car = ({car: {model, price, year}}) => {

    return (
        <div className={css.car}>
            <div>
                <div><b>Model:</b> {model}</div>
                <div><b>Price:</b> {price}</div>
                <div><b>Year:</b> {year}</div>
            </div>
        </div>
    );
};
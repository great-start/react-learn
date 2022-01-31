import React from 'react';


export const Car = ({car: {id, model, price, year}}) => {

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
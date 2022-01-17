import React from 'react';

const Car = ({car: {id, model, price, year}}) => {

    return (
        <>
            <ul>
                <li>ID: {id}</li>
                <li>Model: {model}</li>
                <li>Price: {price}</li>
                <li>Year: {year}</li>
            </ul>
        </>
    );
};

export default Car;
import React, {useEffect, useState} from 'react';


const Cats = ({cats, delete}) => {


    console.log(cats);

    if (cats.length === 0) return null;

    const listener = (index) => {
        delete (index);
    }

    return (
        <div>
            {cats.map((cat, index) => {
                <div key={index}>
                    <h3>{cat}</h3>
                    <button onClick={listener}>DELETE</button>
                </div>
            })}
        </div>
    );
};

export default Cats;
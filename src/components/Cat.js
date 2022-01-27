import React from 'react';

const Cat = ({cat, index}) => {

    return (
        <div>
            {cat}
            <button onClick={index}>DELETE</button>
        </div>
    );
};

export default Cat;
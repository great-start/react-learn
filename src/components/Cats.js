import React, {useEffect, useState} from 'react';

const Cats = ({cats}) => {

    console.log(cats);

    if (cats.length === 0) return null;

    return (
        <div>
            {cats.map(cat => <div>{cat}</div>)}
        </div>
    );
};

export default Cats;
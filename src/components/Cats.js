import React from 'react';

const Cats = ({cats}) => {

    console.log(cats);

    return (
        <div>
            {cats.map(cat => <div>{cat}</div>)}
        </div>
    );
};

export default Cats;
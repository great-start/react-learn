import React, {useEffect, useState} from 'react';

import Cat from "./Cat";

const Cats = ({cats}) => {

    console.log(cats);

    if (cats.length === 0) return null;

    return (
        <div>
            {cats.map((cat,index) => <Cat key={index} cat={cat} index={index}/>)}
        </div>
    );
};

export default Cats;
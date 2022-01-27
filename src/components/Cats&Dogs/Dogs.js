import React from 'react';

import css from './Cats&Dogs.module.css'

export const Dogs = ({dogs, deleteDog}) => {

    return (
        <div className={css.dogs}>
            {dogs.map((dog, index) =>
                <div key={index} className={css.dog}>
                    <h4>{dog}</h4>
                    <button className={css.butt} onClick={() => deleteDog(index)}>DELETE</button>
                </div>
            )}
        </div>
    );
};

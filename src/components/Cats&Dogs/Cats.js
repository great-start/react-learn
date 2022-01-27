import React from 'react';

import css from './Cats&Dogs.module.css';

export const Cats = ({cats, deleteCat}) => {

    return (
        <div className={css.cats}>
            {cats.map((cat, index) =>
                <div key={index} className={css.cat}>
                    <h4>{cat}</h4>
                    <button className={css.butt} onClick={() => deleteCat(index)}>DELETE</button>
                </div>
            )}
        </div>
    );
};

import React from 'react';

import css from "./Episode.module.css"

const Episode = ({episode: {name, air_date, episode}}) => {

    return (
        <div className={css.episode}>
            <div>{name}</div>
            <div>{air_date}</div>
            <div>{episode}</div>
            <button>Details</button>
        </div>
    );
};

export default Episode;
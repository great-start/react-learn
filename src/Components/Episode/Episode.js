import React from 'react';
import {Link} from "react-router-dom";

import css from "./Episode.module.css";

const Episode = ({episodeOne}) => {

     const {id, name, air_date, episode} = episodeOne;

    return (
        <div className={css.episode}>
            <h3>{name}</h3>
            <div><b>Episode:</b> {episode}</div>
            <div><b>Air date:</b> {air_date}</div>
            <Link to={`${id.toString()}`} state={{...episodeOne}}>Episode Details</Link>
        </div>
    );
};

export {Episode};
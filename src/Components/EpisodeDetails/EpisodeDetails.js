import React from 'react';
import {useLocation} from "react-router-dom";

import css from "../Character/Character.module.css"
import {Character} from "../Character/Character";

const EpisodeDetails = () => {

    const {state: {name, air_date, characters}} = useLocation();

    return (
        <>
            <div className={css.episodeInfo}>
                <h3>{name}</h3>
                <p>{air_date}</p>
            </div>
            <div className={css.characters}>
                {
                    characters.map(character => <Character key={character.id} character={character}/>)
                }
            </div>
        </>
    );
};

export {EpisodeDetails};
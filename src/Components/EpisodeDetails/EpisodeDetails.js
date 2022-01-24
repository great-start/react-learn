import React from 'react';
import {useLocation} from "react-router-dom";

import Character from "../Character/Character";
import css from "../Character/Character.module.css"

const EpisodeDetails = () => {

    const {state: {name, air_date, characters}} = useLocation();
    console.log(characters);

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
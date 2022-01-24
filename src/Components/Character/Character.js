import React, {useEffect, useState} from 'react';

import axios from "axios";
import css from "./Character.module.css"

const Character = ({character}) => {

    const [characters, setCharacter] = useState(null);

    useEffect(() => {
            axios.get(character).then(value => setCharacter(value.data))
    },[character])

    return (
        <>
            {characters &&
                <div className={css.character}>
                    <img src={characters.image} alt={characters.name}/>
                    <div className={css.description}>
                        <h3>{characters.name}</h3>
                        <p><b>Species:</b> {characters.species}</p>
                        <p><b>Gender:</b> {characters.gender}</p>
                        <p><b>Origin:</b> {characters.origin.name}</p>
                        <p><b>Location:</b> {characters.location.name}</p>
                    </div>
                </div>
            }
        </>
    );
};

export {Character};
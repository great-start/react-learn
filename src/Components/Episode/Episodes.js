import React, {useState} from 'react';
import {useEffect} from "react";

import {episodeService} from "../../services/episode.services";
import Episode from "./Episode";
import css from "./Episode.module.css"

const Episodes = () => {

    const [episode, setEpisode] = useState(null);
    const [page, setPage] = useState(2);

    useEffect(() => {
        episodeService.get(page).then(value => setEpisode(value.results));
    }, [page])

    console.log(episode);

    function previous() {
        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

    return (
        <>
            <div className={css.episodes}>
                {episode && episode.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button onClick={previous} disabled={page===1}>Previous</button>
                <button onClick={next} disabled={page===3}>Next</button>
            </div>
        </>


    );
};

export default Episodes;
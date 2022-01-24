import React, {useState, useEffect} from 'react';

import {episodeService} from "../../services/episode.services";
import css from "./Episode.module.css"
import {Episode} from "./Episode";

const Episodes = () => {

    const [episode, setEpisode] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        episodeService.get(page).then(value => setEpisode(value.results));
    }, [page])

    function previous() {
        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

    return (
        <>
            <div className={css.episodes}>
                {episode && episode.map(episode => <Episode key={episode.id} episodeOne={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button onClick={previous} disabled={page===1}>Previous</button>
                <button onClick={next} disabled={page===3}>Next</button>
            </div>
        </>


    );
};

export {Episodes};
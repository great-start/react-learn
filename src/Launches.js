import React, {useEffect, useState} from "react";

import './Launches.css';
import Launch from "./components/Launch/Launch";

function Launches() {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(items => {
                // const launchesArr = [];
                // items.forEach(item => {
                //     if (item.launch_year !== '2020') {
                //         launchesArr.push(item);
                //     }
                // })
                setLaunches(items);
            })
    }, []);

    return (
        <>
            {launches.map((launch,index) =>
                <Launch key={index} launch_name={launch.mission_name} launch_year={launch.launch_year} pic={launch.links.mission_patch_small}/>
            )}
        </>
    );
}

export default Launches;

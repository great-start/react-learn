import React from 'react';

import './Launch.css'

const Launch = (props) => {

    const {launch_name, launch_year, pic} = props;

    if (launch_year !== '2020') {
        return (
            <div className={'launch'}>
                <div>
                    <h1>{launch_name}</h1>
                    <h3>{launch_year}</h3>
                </div>
                <div>
                    <img src={pic} alt={launch_name}/>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Launch;
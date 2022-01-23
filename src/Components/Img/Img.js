import React, {useEffect, useState} from 'react';
import {useOutletContext} from "react-router-dom";

import {baseURL} from "../../urls/urls";
import css from "./Img.module.css"

const Img = () => {

    const [photo] = useOutletContext();
    const [updateImg, setUpdateImg] = useState(null);

    const url = `${baseURL}/${photo}?${new Date().getMilliseconds()}`;

    useEffect(() => { }, [updateImg]);

    function handler(e) {
        setUpdateImg(e);
    }

    return (
        <div className={css.update}>
            <img src={url} alt={photo}/>
            <button onClick={handler}>UPDATE</button>
        </div>
    );
};

export default Img;
import React, {useEffect, useState} from 'react';
import {useOutletContext} from "react-router-dom";

import {baseURL} from "../urls/urls";
import css from "./Img.module.css"

const Img = () => {

    const [photo] = useOutletContext();
    const [updateImg, setUpdateImg] = useState(null);

    useEffect(() => { }, [updateImg]);

    function handler(e) {
        setUpdateImg(e)
    }

    console.log(12);

    return (
        <div className={css.update}>
            <img src={`${baseURL}/${photo}?${new Date()}`} alt={photo}/>
            <button onClick={handler}>UPDATE</button>
        </div>

    );
};

export default Img;
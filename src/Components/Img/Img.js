import React, {useEffect, useState} from 'react';
import {useOutletContext} from "react-router-dom";

import imgGet from "../../services/img.service";
import css from "./Img.module.css"

const Img = () => {

    const [img] = useOutletContext();
    const [updateImg, setUpdateImg] = useState(null);
    const [change, setChange] = useState(null);

    useEffect(() => {
            imgGet.get(img).then(img => setUpdateImg(img))
    }, [change, img]);

    function handler(e) {
        setChange(e);
    }

    return (
        <div className={css.update}>
            <img src={updateImg} alt={img}/>
            <button onClick={handler}>UPDATE</button>
        </div>
    );
};

export default Img;
import React from 'react';
import {useDispatch} from "react-redux";
import {checkBox, deleteAction} from "../store/store.items";

const Event = ({action: {name, check}, index}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <input type="checkbox" checked={check} onChange={(e) => dispatch(checkBox({index,e:e.target.checked}))}/>
            <div>{name}</div>
            <button onClick={() => dispatch(deleteAction({index}))}>DELETE</button>
        </div>
    );
};

export default Event;
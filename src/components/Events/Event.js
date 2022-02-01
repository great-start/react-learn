import React from 'react';
import {useDispatch} from "react-redux";
import {checkBox} from "../store/store.items";

const Event = ({action, index}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <input type="checkbox" onChange={(e) => dispatch(checkBox({index,e:e.target.checked}))}/>
            <div>{action.name}</div>
            <button>DELETE</button>
        </div>
    );
};

export default Event;
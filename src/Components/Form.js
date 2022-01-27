import React, {useReducer} from 'react';

import css from './forms.module.css';

function reducer(data, action) {

    data = {...data, sumOfActions: data.sumOfActions + 1};

    switch (action.type) {
        case 'inc':
            return {...data, count: data.count + 1};
        case 'dec':
            return {...data, count: data.count - 1};
        case 'resetValue':
            return {...data, count: action.payload};
        case 'resetActions':
            return {...data, sumOfActions: action.payload }
        default:
            throw new Error('error');
    }
}

const Form = () => {

    const [state, dispatch] = useReducer(reducer,{count:0, sumOfActions: 0});

    return (
        <div className={css.form1}>
            <div><b>Value:</b> {state.count}</div>
            <div><b>Sum of actions:</b> {state.sumOfActions}</div>
            <button onClick={() => dispatch({type: 'inc'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
            <div className={css.reset}>
                <button onClick={() => dispatch({type: 'resetValue', payload: 0})}>RESET <b>Value</b></button>
                <button onClick={() => dispatch({type: 'resetActions', payload: 0})}>RESET <b>Sum of actions</b></button>
            </div>
        </div>
    );
};

export {Form};
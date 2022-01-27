import React, {useReducer} from 'react';

import css from './forms.module.css';

const reducer = (state, action) => {

    switch (action.type) {
        case 'inc':
            return {...state, count: state.count+1};
        case 'dec':
            return {...state, count: state.count-1};
        case 'reset':
            return {...state, count: action.payload};
        default:
            throw new Error('error')
    }

}

const Form3 = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <div className={css.form3}>
            <div>Value: {state.count}</div>
            <button onClick={() => dispatch({type: 'inc'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset', payload: 0})}>RESET</button>
        </div>
    );
}

export default Form3;
import React, {useReducer} from 'react';

import css from './forms.module.css';

const reducer = (state, action) => {

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    switch (action.type) {
        case 'inc': {
            state = {...state, count: state.count + 1};
            return {...state, letter: alphabet[state.count-1]}
        }
        case 'prev': {
            if (state.count <=1) {
                return state;
            }
            state = {...state, count: state.count - 1};
            return {...state, letter: alphabet[state.count-1]}
        }
        case 'reset': {
            return {...state, letter: action.payload, count: 1}
        }
        default:
            throw new Error('Error');
    }
}

const Form2 = () => {

    const [letters, dispatch] = useReducer(reducer, {letter: 'A', count:1});

    return (
        <div className={css.form2}>
            <div>Letter: <b>{letters.letter}</b></div>
            <div>Letter`s number in Alphabet: <b>{letters.count}</b></div>
            <div className={css.buttons}>
                <button onClick={() => dispatch({type: 'inc'})} disabled={letters.count === 26}>NEXT</button>
                <button onClick={() => dispatch({type: 'prev'})} disabled={letters.count === 1}>PREV</button>
                <button onClick={() => dispatch({type: 'reset', payload: 'A'})} disabled={letters.count === 1}>RESET</button>
            </div>
        </div>
    );
};

export default Form2;
import React, {useReducer} from 'react';

import css from './Forms.module.css';
import {Cats} from "../Cats&Dogs/Cats";
import {Dogs} from "../Cats&Dogs/Dogs";

const reducer = (data, action) => {

    data = {...data, cats: [...data.cats], dogs: [...data.dogs]};

    switch (action.type) {
        case 'cat': {
            data.cats.push(action.value);
            return data;
        }
        case 'deleteCat': {
            data.cats.splice(action.value, 1);
            return data;
        }
        case 'dog': {
            data.dogs.push(action.value);
            return data;
        }
        case 'deleteDog': {
            data.dogs.splice(action.value, 1);
            return data;
        }
        default:
            throw new Error('error');
    }
}

export const Form = () => {

    const [data, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const create = (e) => {
        e.preventDefault();
        dispatch({type: e.target[0].name, value: e.target[0].value});
        e.target[0].value = '';
    }

    const deleteCat = (index) => {
        dispatch({type: 'deleteCat', value: index})
    }

    const deleteDog = (index) => {
        dispatch({type: 'deleteDog', value: index})
    }

    return (
        <div>
            <div className={css.forms}>
                <form onSubmit={create}>
                    <label>Add Cat: <input type="text" name={'cat'}/></label>
                    <button className={css.b}>SAVE</button>
                </form>
                <form onSubmit={create}>
                    <label>Add Dog: <input type="text" name={'dog'}/></label>
                    <button className={css.b}>SAVE</button>
                </form>
            </div>
            <hr/>
            <div className={css.box}>
                <Cats cats={data.cats} deleteCat={deleteCat}/>
                <Dogs dogs={data.dogs} deleteDog={deleteDog}/>
            </div>
        </div>
    );
};

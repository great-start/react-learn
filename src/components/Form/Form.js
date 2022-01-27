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

    const createCat = (e) => {
        e.preventDefault();
        dispatch({type: 'cat', value: e.target.cat.value});
        e.target.cat.value = '';
    }

    const createDog = (e) => {
        e.preventDefault();
        dispatch({type: 'dog', value: e.target.dog.value});
        e.target.dog.value = '';
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
                <form onSubmit={createCat}>
                    <label>Add Cat: <input type="text" name={'cat'}/></label>
                    <button className={css.b}>SAVE</button>
                </form>
                <form onSubmit={createDog}>
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

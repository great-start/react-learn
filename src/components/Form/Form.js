import React, {useReducer} from 'react';

import Cats from "../Cats";

const reducer = (data, action) => {
    console.log(data);
    switch (action.type) {
        case 'cat': {
            data.cats.push(action.value);
            return data;
        }
        case 'dog': {
            data.dogs.push(action.value);
            return data;
        }
        default:
            throw new Error('error');
    }
}

const Form = () => {

    const [data, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const handlerOne = (e) => {
        e.preventDefault();
        dispatch({type: 'cat', value: e.target.cat.value})
    }

    const handlerTwo = (e) => {
        e.preventDefault();
        dispatch({type: 'dog', value: e.target.dog.value})
    }

    return (
        <div>
            <form onSubmit={handlerOne}>
                <label>Add Cat: <input type="text" name={'cat'}/></label>
                <button>SAVE</button>
            </form>
            <form onSubmit={handlerTwo}>
                <label>Add Dog: <input type="text" name={'dog'}/></label>
                <button>SAVE</button>
            </form>
            <hr/>
            <Cats cats={data.cats}/>
        </div>
    );
};

export default Form;
import React, {useEffect, useReducer} from 'react';

import Cats from "../Cats";

const reducer = (data, action) => {
    // data = {...data};
    switch (action.type) {

        case 'cat': {
            console.log(data);
            data.cats.push(action.value);
            console.log(data.cats);
            return data;
        }
        // case 'dog': {
        //     data.dogs.push(action.value);
        //     return {...data};
        // }
        default:
            throw new Error('error');
    }
}

const Form = () => {

    const [data, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    useEffect(() => {}, [data.cats.length]);

    console.log(data);

    const handlerOne = (e) => {
        e.preventDefault();
        console.log(data);
        dispatch({type: 'cat', value: e.target.cat.value})
    }

    // const handlerTwo = (e) => {
    //     e.preventDefault();
    //     dispatch({type: 'dog', value: e.target.dog.value})
    // }

    console.log(data.cats);

    return (
        <div>
            <form onSubmit={handlerOne}>
                <label>Add Cat: <input type="text" name={'cat'}/></label>
                <button>SAVE</button>
            </form>
            {/*<form onSubmit={handlerTwo}>*/}
            {/*    <label>Add Dog: <input type="text" name={'dog'}/></label>*/}
            {/*    <button>SAVE</button>*/}
            {/*</form>*/}
            <hr/>
            <Cats cats={data.cats}/>
        </div>
    );
};

export default Form;
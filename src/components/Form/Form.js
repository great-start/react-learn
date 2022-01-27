import React, {useReducer} from 'react';

const reducer = (data, action) => {
    switch (action.type) {
        case 'cat':
            return {...data, cat: action.value};
        case 'dog':
            return {...data, dog: action.value};
        default:
            throw new Error('error');
    }
}

const Form = () => {

    const [data, dispatch] = useReducer(reducer, {cat:'', dog: ''});

    const handler = (e) => {
        e.preventDefault();
        dispatch({type: 'cat', value: e.target.cat.value})
        console.log({type: 'cat', value: e.target.cat.value});
    }

    return (
        <div>
            <form>
                <label>Add Cat: <input type="text" name={'cat'}/></label>
                <button onSubmit={(E) => E.preventDefault()}>SAVE</button>
            </form>
            <form>
                <label>Add Dog: <input type="text" name={'dog'}/></label>
                <button onSubmit={() => dispatch({type: 'dog'})}>SAVE</button>
            </form>
            <hr/>
            <div>{data.cat && data.cat}</div>
        </div>
    );
};

export default Form;
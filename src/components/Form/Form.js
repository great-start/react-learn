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
        console.log(e);
        // dispatch({type: e.target.name, value: e.target.name.value})
        console.log({type: e.target.name, value: e.target.name.value});
    }

    return (
        <div>
            <form onSubmit={handler}>
                <label>Add Cat: <input type="text" name={'cat'}/></label>
                <button>SAVE</button>
            </form>
            <form onSubmit={handler}>
                <label>Add Dog: <input type="text" name={'dog'}/></label>
                <button>SAVE</button>
            </form>
            <hr/>
            <div>{data.cat && data.cat}</div>
        </div>
    );
};

export default Form;
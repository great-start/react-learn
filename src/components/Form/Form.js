import React, {useReducer} from 'react';

const reducer = (data, action) => {
    switch (action.type) {
        case 'cat':
            return {...data, cat: data.cat};
        case 'dog':
            return {...data, dog: data.dog};
        default:
            throw new Error('error');
    }
}

const Form = () => {

    const [data, dispatch] = useReducer(reducer, {cat:'', dog: ''});

    return (
        <div>
            <form>
                <div>
                    <label>Add Cat: <input type="text"/></label>
                    <button onClick={() => dispatch({type: 'cat'})}>SAVE</button>
                </div>
                <div>
                    <label>Add Dog: <input type="text"/></label>
                    <button onClick={() => dispatch({type: 'dog'})}>SAVE</button>
                </div>
            </form>
            <hr/>
            <div>{data.cat && data.dog}</div>
        </div>
    );
};

export default Form;
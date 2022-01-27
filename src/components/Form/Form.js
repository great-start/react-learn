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

    const handler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(data);
        return {...data, [e.target.name]: e.target.value}
    }

    return (
        <div>
            <form>
                <label>Add Cat: <input type="text" value={''} name={'cat'} onChange={handler}/></label>
                <button onSubmit={() => dispatch({type: 'cat'})}>SAVE</button>
            </form>
            <form>
                <label>Add Dog: <input type="text" value={''} name={'dog'} onChange={handler}/></label>
                <button onSubmit={() => dispatch({type: 'dog'})}>SAVE</button>
            </form>
            <hr/>
            <div>{data.cat && data.dog}</div>
        </div>
    );
};

export default Form;
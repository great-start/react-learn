import React from 'react';

const Users = (props) => {
    const {name, age} = props.children[0];

    return (
        <div>
            Hello {props.children[1]}. Your wife name: {name}. Her age is {age}
        </div>
    );
};

export default Users;
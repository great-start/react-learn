import React, {useState} from 'react';


const User = ({user}) => {

    const [userId, setUserId] = useState(null);

    console.log();

    return (
        <div>
            <p><b>Id:</b>{user.id} - <b>Name:</b>{user.name}.</p>
            <button onClick={setUserId}>Show User Posts</button>
        </div>
    );
};

export default User;
import React from 'react';

const User = ({user}) => {

    return (
        <div className={'user'}>
            {user.id}.  {user.name} -- {user.username} -- {user.email}
        </div>
    );
};

export default User;
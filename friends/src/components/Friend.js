import React from 'react';

const Friend = ({ friend }) => {
    return (
        <div>
            <div>
                {friend.name}
                {friend.age}
            </div>
            {friend.email}
        </div>
    )
}

export default Friend;
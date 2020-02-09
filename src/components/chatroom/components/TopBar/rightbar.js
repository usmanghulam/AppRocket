import React from 'react';

const RightBar = ({length}) => {
    return (
        <div>
            <h3 className="pl-5 pt-3">Contacts {length + 1 || 0}</h3>
        </div>
    );
};

export default RightBar;
import React from 'react';

const SideBar = ({ users, onUserClick }) => {
    const renderContacts = users.map(user => (
        <div 
        key={user._id} 
        onClick={e => onUserClick(user._id)} 
        className="border p-2" 
        style={{cursor:"pointer"}} >
            {user.email}
        </div>
    ))
    return (
        <div style={{overflowY:"scroll"}}>
            {users && users[0] ? renderContacts : <div className="my-auto pt-5 mt-5" > No Contacts Found </div>}
        </div>
    );
};

export default SideBar;
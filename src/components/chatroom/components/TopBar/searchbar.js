import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

const SearchBar = ({ onSearch, searchResult, onInputBlur }) => {
	
	const [groupModal, setGroupModal] = useState(false);
	const [broadcastModal, setBroadcastModal] = useState(false);

	const renderResults = searchResult.map(user => (
		<div key={user._id} className="border p-2 bg-light" style={{zIndex:2,cursor:"pointer"}}>
			<div className="">
				<p className="text-dark">{user.email}</p>
			</div>
		</div>
	))
	return (
		<div className="">
			<form>
				<div className="form-group">
					<input 
					onChange={onSearch}
					onBlur={onInputBlur} 
					type="text" className="form-control" placeholder="Search Contacts"/>
				</div>
			</form>
			<div className="float-left">
				<Link onClick={e => setGroupModal(true)} to="#">Add a New Group</Link>
			</div>
			<div className="float-right">
				<Link onClick={e => setBroadcastModal(true)} to="#">Send Broadcast</Link>
			</div>
			{renderResults}
			<Modal open={groupModal} onClose={e => setGroupModal(false)} center>
				<h5>Create New Group</h5>
			</Modal>
			<Modal open={broadcastModal} onClose={e => setBroadcastModal(false)} center>
			<div className="form-group green-border-focus">
				<textarea placeholder="Type out your Broadcast message here!" className="form-control" cols="55" rows="13"></textarea>
			</div>
			<button className="btn btn-dark float-right">Send</button>
			</Modal>
		</div>
	);
};

export default SearchBar;
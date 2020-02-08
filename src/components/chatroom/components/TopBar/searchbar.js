import React from 'react';

const SearchBar = ({  }) => {
	return (
		<div className="border">
			<form>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Search Contacts"/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
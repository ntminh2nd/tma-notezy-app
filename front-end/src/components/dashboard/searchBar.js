/** @format */

import React, { useState } from 'react';

// Dependencies
import { Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar(props) {
	const [searchTerm, setSearchTerm] = useState('');

	function handleSearchInputChange(event) {
		const searchTerm = event.target.value;
		setSearchTerm(searchTerm);
		props.onSearchTermChange(searchTerm);
	}

	return (
		<Form
			className='d-flex flex-wrap align-items-center'
			onSubmit={(e) => e.preventDefault()}>
			<div className='input-group'>
				<span className='input-group-text'>
					<FontAwesomeIcon icon={faSearch} />
				</span>
				<FormControl
					type='text'
					placeholder='Tìm kiếm ghi chú'
					className='form-control search-input'
					value={searchTerm}
					onChange={handleSearchInputChange}
				/>
			</div>
		</Form>
	);
}

export default SearchBar;

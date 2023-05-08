/** @format */

import React, { useState } from 'react';

// Dependencies
import { Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

// Imports
import ModalPopUp from './modal';

// Redux
import { useSelector } from 'react-redux';

// Note controller
import NoteControllerAuth from '../../app/controllers/noteController';

const noteControllerAuth = new NoteControllerAuth();

function SearchBar(props) {
	const [showModal, setShowModal] = useState(false);
	const handleModalOpen = () => setShowModal(true);
	const onModalChange = (newValue) => {
		setShowModal(newValue);
	};

	const [searchTerm, setSearchTerm] = useState('');

	function handleSearchInputChange(event) {
		const searchTerm = event.target.value;
		setSearchTerm(searchTerm);
		props.onSearchTermChange(searchTerm);
	}

	return (
		<>
			<div className='d-flex flex-column flex-md-row mb-4 justify-content-between align-items-center'>
				<div className='col-md me-3'>
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
				</div>
				<div className='col-md-auto'>
					<div className='d-flex flex-wrap align-items-center justify-content-end'>
						<Button
							variant='primary'
							className='flex-shrink-0 me-3 unselectable-text'
							onClick={handleModalOpen}>
							<FontAwesomeIcon icon={faPlus} className='me-3' />
							Tạo mới
						</Button>
					</div>
				</div>
			</div>
			<ModalPopUp
				isNoteContent={false}
				isModalOpen={showModal}
				onModalChange={onModalChange}
			/>
		</>
	);
}

export default SearchBar;

/** @format */

import React, { useState, useEffect } from 'react';

// CSS
import '../../bootstrap/notes.css';

// Imports
import Header from './header';
import SearchBar from './searchBar';
import LoadingIndicator from '../shared/loadingIndicator';
import NewNoteModal from './newNoteModal';
import EditNoteModal from './editNoteModal';

// Dependencies
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Redux
import { useSelector } from 'react-redux';

// Note controller
import NoteControllerAuth from '../../app/controllers/noteController';

const noteControllerAuth = new NoteControllerAuth();

function NoteList(props) {
	const userId = useSelector((state) => state.auth.userId);
	const [noteId, setNoteId] = useState('');
	const [noteList, setNoteList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const userInfo = {
		userName: props.userName,
		email: props.email,
	};

	function formatTimestamp(timestamp) {
		const date = new Date(timestamp);
		const utcDate = new Date(date.toUTCString());
		const gmt7Date = new Date(utcDate.getTime() + 7 * 60 * 60 * 1000);
		const formattedDate = gmt7Date.toLocaleString('vi-VN', {
			timeZone: 'Asia/Ho_Chi_Minh',
			hour12: false,
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		});
		return formattedDate;
	}

	// New note modal
	const [modalState, setModalState] = useState(false);
	const handleModalClose = (modalCloseState) => {
		setModalState(modalCloseState);
	};

	// View/edit note modal
	const [modalStateEditNote, setModalStateEditNote] = useState(false);
	const handleModalCloseEditNote = (modalCloseState) => {
		setModalStateEditNote(modalCloseState);
	};

	const [searchTerm, setSearchTerm] = useState('');

	// Fetch notes (existed and searched)
	const fetchNotes = async (id, searchTerm = '') => {
		try {
			const response = await new Promise((resolve, reject) => {
				if (searchTerm) {
					noteControllerAuth.searchNote(id, searchTerm, (err, data) => {
						if (err) {
							reject(err);
						} else {
							resolve(data);
						}
					});
				} else {
					noteControllerAuth.getNotesByUser(id, (err, data) => {
						if (err) {
							reject(err);
						} else {
							resolve(data);
						}
					});
				}
			});
			if (response && response.success === 0) {
				console.log(response.message);
			} else {
				setNoteList(response.data);
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	function handleSearchTermChange(searchTerm) {
		setSearchTerm(searchTerm);
		setIsLoading(true);
	}

	function handleNewNoteCreated() {
		fetchNotes(userId, searchTerm);
		setIsLoading(true);
	}

	function handleUpdateNote() {
		fetchNotes(userId, searchTerm);
		setIsLoading(true);
	}

	function handleRemoveNote() {
		fetchNotes(userId, searchTerm);
		setIsLoading(true);
	}

	useEffect(() => {
		if (userId) {
			fetchNotes(userId, searchTerm);
		}
	}, [searchTerm]);

	return (
		<>
			{/* Modals area */}
			<NewNoteModal
				modalState={modalState}
				onModalClose={handleModalClose}
				onNewNoteCreated={handleNewNoteCreated}
			/>
			<EditNoteModal
				modalStateEditNote={modalStateEditNote}
				onModalCloseEditNote={handleModalCloseEditNote}
				onUpdateNote={handleUpdateNote}
				onDeleteNote={handleRemoveNote}
				noteId={noteId}
			/>
			{/* Main note list page area */}
			<div class='page-content container note-has-grid'>
				<Header {...userInfo} />
				<div className='d-flex flex-column flex-md-row mb-4 justify-content-between align-items-center'>
					<div className='col-md me-3'>
						<SearchBar onSearchTermChange={handleSearchTermChange} />
					</div>
					<div className='col-md-auto'>
						<div className='d-flex flex-wrap align-items-center justify-content-end'>
							<Button
								variant='primary'
								className='flex-shrink-0 me-3 unselectable-text'
								onClick={() => setModalState(true)}>
								<FontAwesomeIcon
									icon={faPlus}
									className='me-2'
								/>
								Tạo mới
							</Button>
						</div>
					</div>
				</div>
				{isLoading ? (
					<LoadingIndicator />
				) : (
					<div class='tab-content bg-transparent'>
						<div
							id='note-full-container'
							class='note-has-grid row'>
							{noteList
								.sort(
									(a, b) =>
										new Date(b.last_modified) - new Date(a.last_modified)
								)
								.map((note) => (
									<div
										key={note.id}
										className='col-md-4 single-note-item unselectable-text'>
										<div
											className='card card-body'
											onClick={() => {
												setModalStateEditNote(true);
												setNoteId(note.id);
											}}>
											<span className='side-stick'></span>
											<h5
												className='note-title text-truncate w-75 mb-0'
												data-noteheading={note.title}>
												{note.title}
												<i className='point fa fa-circle ml-1 font-10'></i>
											</h5>
											<p className='note-date font-12 text-muted'>
												{formatTimestamp(note.last_modified)}
											</p>
											<div className='note-content'>
												<p
													className='note-inner-content text-truncate text-muted'
													data-notecontent={note.content}>
													{note.content}
												</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default NoteList;

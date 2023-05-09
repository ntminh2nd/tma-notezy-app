/** @format */

import React, { useState, useEffect } from 'react';

// CSS
import '../../bootstrap/notes.css';

// Imports
import Header from './header';
import SearchBar from './searchBar';
import LoadingIndicator from '../shared/loadingIndicator';

// Dependencies

// Redux
import { useSelector } from 'react-redux';

// Note controller
import NoteControllerAuth from '../../app/controllers/noteController';

const noteControllerAuth = new NoteControllerAuth();

function NoteList(props) {
	const userId = useSelector((state) => state.auth.userId);
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
		const formattedDate = gmt7Date.toLocaleString('en-US', {
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

	const [title, setNoteTitle] = useState('');
	const [content, setNoteContent] = useState('');

	// Create note
	const createNote = async (id, title, content) => {
		try {
			const response = await new Promise((resolve, reject) => {
				noteControllerAuth.createNote(id, title, content, (err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
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
		setNoteTitle("");
		setNoteContent("");
	};

	function handleTitleContentChange(title, content) {
		setNoteTitle(title);
		setNoteContent(content);
		setIsLoading(true);
	}

	useEffect(() => {
		if (userId) {
			fetchNotes(userId, searchTerm);
			if (title && content) {
				createNote(userId, title, content);
			}
		}
	}, [searchTerm, title, content]);

	return (
		<div class='page-content container note-has-grid'>
			<Header {...userInfo} />
			<SearchBar
				onSearchTermChange={handleSearchTermChange}
				onTitleContentChange={handleTitleContentChange}
			/>
			{isLoading ? (
				<LoadingIndicator />
			) : (
				<div class='tab-content bg-transparent'>
					<div
						id='note-full-container'
						class='note-has-grid row'>
						{noteList.map((note) => (
							<div
								key={note.id}
								className='col-md-4 single-note-item unselectable-text'>
								<div className='card card-body'>
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
	);
}

export default NoteList;

/** @format */

import React, { useState, useEffect } from 'react';

// Dependencies
import {
	Button,
	Form,
	FormControl,
	Modal,
	Spinner,
	Alert,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheck,
	faEdit,
	faTrash,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment-timezone';

// Redux
import { useSelector } from 'react-redux';

// Imports
import ConfirmModal from '../shared/confirmModal';

// Note controller
import NoteControllerAuth from '../../app/controllers/noteController';

const noteControllerAuth = new NoteControllerAuth();

function EditNoteModal(props) {
	const userId = useSelector((state) => state.auth.userId);
	const {
		modalStateEditNote,
		onModalCloseEditNote,
		onUpdateNote,
		onDeleteNote,
		noteId,
	} = props;

	const [title, setNoteTitle] = useState('');
	const [content, setNoteContent] = useState('');
	const [lastModified, setLastModified] = useState('');

	const [isEditMode, setIsEditMode] = useState(false);
	const [isSavingNote, setIsSavingNote] = useState(false);
	const [isRemovingNote, setIsRemovingNote] = useState(false);
	const [updateNoteError, setUpdateNoteError] = useState('');

	const [isReadOnly, setIsReadOnly] = useState(true);

	function formatTimestamp(timestamp) {
		const formattedDate = moment(timestamp)
			.tz('Asia/Ho_Chi_Minh')
			.format('HH:mm, DD-MM-YYYY');
		return formattedDate;
	}

	const handleModalClose = (modalCloseState) => {
		setUpdateNoteError('');
		onModalCloseEditNote(modalCloseState);
		setIsEditMode(false);
		setIsSavingNote(false);
		setIsRemovingNote(false);
		setIsReadOnly(true);
	};

	function handleTitleChange(event) {
		const newTitle = event.target.value;
		setNoteTitle(newTitle);
	}

	function handleContentChange(event) {
		const newContent = event.target.value;
		setNoteContent(newContent);
	}

	// View note
	const getNote = async (id) => {
		setNoteTitle('');
		setNoteContent('');
		setLastModified('');
		try {
			const response = await new Promise((resolve, reject) => {
				noteControllerAuth.getNoteById(id, (err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			});
			if (response && response.success == 0) {
				console.log(response.message);
			} else {
				setNoteTitle(response.data.title);
				setNoteContent(response.data.content);
				setLastModified(formatTimestamp(response.data.last_modified));
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (userId) {
			getNote(noteId);
		}
	}, [noteId, isEditMode]);

	// Edit note
	const updateNote = async (id, title, content) => {
		try {
			setIsSavingNote(true);
			const response = await new Promise((resolve, reject) => {
				noteControllerAuth.updateNote(id, title, content, (err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			});
			if (response && response.success == 0) {
				console.log(response.message);
			} else {
				handleModalClose(false);
				setUpdateNoteError('');
				onUpdateNote();
			}
		} catch (error) {
			console.log(error);
			setUpdateNoteError(error);
		}
		setIsSavingNote(false);
	};

	function handleUpdateNote() {
		if (userId) {
			updateNote(noteId, title, content);
		}
	}

	// Remove note
	const removeNote = async (id) => {
		try {
			setIsRemovingNote(true);
			const response = await new Promise((resolve, reject) => {
				noteControllerAuth.deleteNote(id, (err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			});
			if (response && response.success == 0) {
				console.log(response.message);
			} else {
				handleModalClose(false);
				setUpdateNoteError('');
				onDeleteNote();
			}
		} catch (error) {
			console.log(error);
			setUpdateNoteError(error);
		}
		setIsRemovingNote(false);
	};

	function handleRemoveNote() {
		if (userId) {
			removeNote(noteId);
		}
	}

	// Confirm deleting note
	const [modalStateConfirm, setModalStateConfirm] = useState(false);
	const handleModalCloseConfirm = (modalCloseState) => {
		setModalStateConfirm(modalCloseState);
	};
	const handleConfirmDeletingNote = () => {
		handleRemoveNote();
	};

	return (
		<>
			<ConfirmModal
				modalTitle='Xóa ghi chú'
				modalContent='Bạn có muốn xóa ghi chú này không?'
				modalStateConfirm={modalStateConfirm}
				onModalCloseConfirm={handleModalCloseConfirm}
				onModalPerformAction={handleConfirmDeletingNote}
			/>
			<Modal
				show={modalStateEditNote}
				onHide={() => handleModalClose(false)}
				centered>
				<Modal.Header closeButton>
					<Modal.Title className='fw-bold unselectable-text'>
						{lastModified}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{updateNoteError && (
						<Alert
							className='unselectable-text'
							key={'alert'}
							variant='danger'>
							{updateNoteError}
						</Alert>
					)}

					<Form onSubmit={(e) => e.preventDefault()}>
						<Form.Group
							className='mb-4 fw-bold'
							controlId='formBasicTitle'>
							<Form.Label className='unselectable-text'>Tiêu đề</Form.Label>
							<Form.Control
								type='text'
								value={title}
								onChange={handleTitleChange}
								disabled={isSavingNote}
								readOnly={isReadOnly}
							/>
						</Form.Group>

						<Form.Group
							className='fw-bold'
							controlId='formBasicContent'>
							<Form.Label className='unselectable-text'>Nội dung</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								value={content}
								onChange={handleContentChange}
								disabled={isSavingNote}
								readOnly={isReadOnly}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className='unselectable-text btn'
						variant='secondary'
						onClick={() => handleModalClose(false)}>
						Đóng
					</Button>
					{!isEditMode && (
						<Button
							className='unselectable-text btn'
							variant={isRemovingNote ? 'secondary' : 'danger'}
							type='submit'
							disabled={isRemovingNote}
							onClick={() => {
								setIsEditMode(false);
								setIsSavingNote(false);
								setModalStateConfirm(true);
							}}>
							{isRemovingNote ? (
								<>
									<Spinner
										animation='border'
										size='sm'
									/>
									<span className='ms-2'>Đang xóa</span>
								</>
							) : (
								<>
									<FontAwesomeIcon
										icon={faTrash}
										className='me-2'
									/>
									Xóa
								</>
							)}
						</Button>
					)}
					{!isEditMode && !isRemovingNote && !isSavingNote && (
						<Button
							className='unselectable-text btn'
							variant={isRemovingNote ? 'secondary' : 'primary'}
							disabled={isRemovingNote}
							onClick={() => {
								setIsEditMode(true);
								setIsReadOnly(false);
							}}>
							<>
								<FontAwesomeIcon
									icon={faEdit}
									className='me-2'
								/>
								Chỉnh sửa
							</>
						</Button>
					)}
					{isEditMode && !isRemovingNote && !isSavingNote && (
						<Button
							className='unselectable-text btn'
							variant='secondary'
							onClick={() => {
								setIsEditMode(false);
								setIsReadOnly(true);
							}}>
							<FontAwesomeIcon
								icon={faXmark}
								className='me-2'
							/>
							Hủy
						</Button>
					)}
					{isEditMode && !isRemovingNote && (
						<Button
							className='unselectable-text btn'
							variant={isSavingNote ? 'secondary' : 'success'}
							type='submit'
							disabled={isSavingNote}
							onClick={handleUpdateNote}>
							{isSavingNote ? (
								<>
									<Spinner
										animation='border'
										size='sm'
									/>
									<span className='ms-2'>Đang lưu</span>
								</>
							) : (
								<>
									<FontAwesomeIcon
										icon={faCheck}
										className='me-2'
									/>
									Hoàn tất
								</>
							)}
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditNoteModal;

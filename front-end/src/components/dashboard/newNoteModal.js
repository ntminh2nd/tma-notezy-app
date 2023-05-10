/** @format */

import React, { useState } from 'react';

// Dependencies
import {
	Button,
	Form,
	FormControl,
	Modal,
	Spinner,
	Alert,
} from 'react-bootstrap';

// Redux
import { useSelector } from 'react-redux';

// Note controller
import NoteControllerAuth from '../../app/controllers/noteController';

const noteControllerAuth = new NoteControllerAuth();

function NewNoteModal(props) {
	const userId = useSelector((state) => state.auth.userId);
	const { modalState, onModalClose, onNewNoteCreated } = props;

	const [title, setNoteTitle] = useState('');
	const [content, setNoteContent] = useState('');

	const [isProcessing, setIsProcessing] = useState(false);
	const [createNoteError, setCreateNoteError] = useState('');

	const handleModalClose = (modalCloseState) => {
		setCreateNoteError('');
		onModalClose(modalCloseState);
	};

	function handleTitleChange(event) {
		const newTitle = event.target.value;
		setNoteTitle(newTitle);
	}

	function handleContentChange(event) {
		const newContent = event.target.value;
		setNoteContent(newContent);
	}

	// Create new note
	const createNote = async (id, title, content) => {
		setIsProcessing(true);
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
			if (response && response.success == 0) {
				console.log(response.message);
			} else {
				handleModalClose(false);
				setNoteTitle('');
				setNoteContent('');
				setCreateNoteError('');
				onNewNoteCreated();
			}
		} catch (error) {
			console.log(error);
			setCreateNoteError(error);
		}
		setIsProcessing(false);
	};

	function handleCreateNewNote() {
		if (userId) {
			createNote(userId, title, content);
		}
	}

	return (
		<Modal
			show={modalState}
			onHide={() => handleModalClose(false)}
			centered>
			<Modal.Header closeButton>
				<Modal.Title className='fw-bold unselectable-text'>
					Ghi chú mới
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{createNoteError && (
					<Alert
						className='unselectable-text'
						key={'alert'}
						variant='danger'>
						{createNoteError}
					</Alert>
				)}

				<Form onSubmit={(e) => e.preventDefault()}>
					<Form.Group
						className='mb-4 fw-bold'
						controlId='formBasicTitle'>
						<Form.Label className='unselectable-text'>Tiêu đề</Form.Label>
						<Form.Control
							type='text'
							placeholder='Nhập tiêu đề'
							value={title}
							onChange={handleTitleChange}
							disabled={isProcessing}
						/>
					</Form.Group>

					<Form.Group
						className='fw-bold'
						controlId='formBasicContent'>
						<Form.Label className='unselectable-text'>Nội dung</Form.Label>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Nhập nội dung'
							value={content}
							onChange={handleContentChange}
							disabled={isProcessing}
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
				<Button
					className='unselectable-text btn'
					variant={isProcessing ? 'secondary' : 'primary'}
					type='submit'
					disabled={isProcessing}
					onClick={() => {
						handleCreateNewNote();
					}}>
					{isProcessing ? (
						<>
							<Spinner
								animation='border'
								size='sm'
							/>
							<span className='ms-2'>Đang tạo</span>
						</>
					) : (
						'Tạo ghi chú'
					)}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default NewNoteModal;

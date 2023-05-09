/** @format */

import React, { useState } from 'react';

// Dependencies
import { Button, Form, FormControl, Modal } from 'react-bootstrap';

function ModalPopUp(props) {
	const { isNoteContent, isModalOpen, onModalChange } = props;

	const [title, setNoteTitle] = useState('');
	const [content, setNoteContent] = useState('');

	const handleModalClose = (newValue) => {
		onModalChange(newValue);
	};

function handleTitleChange(event) {
	const newTitle = event.target.value;
	setNoteTitle(newTitle);
	props.onModalTitleContentChange(newTitle, content);
}

function handleContentChange(event) {
	const newContent = event.target.value;
	setNoteContent(newContent);
	props.onModalTitleContentChange(title, newContent);
}


	return !isNoteContent ? (
		<Modal
			show={isModalOpen}
			onHide={() => handleModalClose(false)}
			centered>
			<Modal.Header closeButton>
				<Modal.Title className='fw-bold'>Ghi chú mới</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group
						className='mb-4 fw-bold'
						controlId='formBasicTitle'>
						<Form.Label>Tiêu đề</Form.Label>
						<Form.Control
							type='text'
							placeholder='Nhập tiêu đề'
							value={title}
							onChange={handleTitleChange}
						/>
					</Form.Group>

					<Form.Group
						className='fw-bold'
						controlId='formBasicContent'>
						<Form.Label>Nội dung</Form.Label>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Nhập nội dung'
							value={content}
							onChange={handleContentChange}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='secondary'
					onClick={() => handleModalClose(false)}>
					Đóng
				</Button>
				<Button variant='primary'>Tạo</Button>
			</Modal.Footer>
		</Modal>
	) : null;
}

export default ModalPopUp;

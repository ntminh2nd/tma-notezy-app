/** @format */

import React from 'react';

// Dependencies
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

function ConfirmModal(props) {
	const {
		modalTitle,
		modalContent,
		modalStateConfirm,
		onModalCloseConfirm,
		onModalPerformAction,
	} = props;

	const handleModalClose = (modalCloseState) => {
		onModalCloseConfirm(modalCloseState);
	};

	function handleModalAction() {
		onModalPerformAction();
	}

	return (
		<Modal
			show={modalStateConfirm}
			onHide={() => handleModalClose(false)}
			centered>
			<Modal.Header closeButton>
				<Modal.Title className='fw-bold unselectable-text'>
					{modalTitle}
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p className='unselectable-text'>{modalContent}</p>
			</Modal.Body>

			<Modal.Footer>
				<Button
					className='unselectable-text'
					variant='primary'
					onClick={() => {
						handleModalAction();
						handleModalClose(false);
					}}>
					{' '}
					<FontAwesomeIcon
						icon={faCheck}
						className='me-2'
					/>{' '}
					Có
				</Button>
				<Button
					className='unselectable-text'
					variant='danger'
					onClick={() => handleModalClose(false)}>
					{' '}
					<FontAwesomeIcon
						icon={faXmark}
						className='me-2'
					/>
					Không
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ConfirmModal;

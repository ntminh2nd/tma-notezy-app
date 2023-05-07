/** @format */

import React from 'react';

// Imports
import TMA_Logo from '../../assets/tma-solutions.png';

// CSS
import '../../bootstrap/notes.css';

// Dependencies
import { Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
	const { userName, email } = props;

	// Handle sign out
	const handleSignOut = () => {
		localStorage.removeItem('userToken');
		window.location.reload();
	};


	return (
		<div className='flex-column flex-md-row mb-4 justify-content-between align-items-center'>
			<div className='col'>
				<div className='d-flex px-2 px-md-3 mr-0 mr-md-2 align-items-center'>
					<div className='d-flex'>
						<img
							src={TMA_Logo}
							className='rounded-circle me-3'
							width='50'
							height='50'
							alt='Avatar'
						/>
						<div className='d-flex flex-column'>
							<span className='d-md-block fw-bold'>{userName}</span>
							<span className='d-md-block'>{email}</span>
						</div>
					</div>
				</div>
			</div>
			<div className='d-flex flex-column flex-md-row p-4 mb-4 justify-content-between align-items-center'>
				<div className='col-md'>
					<Form className='d-flex flex-wrap align-items-center'>
						<FormControl
							type='text'
							placeholder='Nhập tên ghi nhớ'
							className='me-3'
						/>
					</Form>
				</div>
				<div className='col-md-auto'>
					<div className='d-flex flex-wrap align-items-center justify-content-end'>
						<Button
							variant='primary'
							className='flex-shrink-0 me-3'>
							<FontAwesomeIcon
								icon={faPlus}
								className='me-3'
							/>
							Tạo mới
						</Button>
						<Button
							variant='danger'
							className='flex-shrink-0'
							onClick={handleSignOut}>
							<FontAwesomeIcon
								icon={faArrowRightFromBracket}
								className='me-2'
							/>
							Đăng xuất
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

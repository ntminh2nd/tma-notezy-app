/** @format */

import React from 'react';

// Imports
import TMA_Logo from '../../assets/tma-solutions.png';

// CSS
import '../../bootstrap/notes.css';

// Dependencies
import { Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRightFromBracket, faSearch } from "@fortawesome/free-solid-svg-icons";

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
				<div className='d-flex mr-0 mr-md-2 mb-4 align-items-center'>
					<div className='d-flex'>
						<img
							src={TMA_Logo}
							className='rounded-circle me-3'
							width='50'
							height='50'
							alt='Avatar'
						/>
						<div className='d-flex flex-column unselectable-text'>
							<span className='d-md-block fw-bold'>{userName}</span>
							<span className='d-md-block'>{email}</span>
						</div>
					</div>
				</div>
				<Button
					variant='danger'
					className='flex-shrink-0 unselectable-text'
					onClick={handleSignOut}>
					<FontAwesomeIcon
						icon={faArrowRightFromBracket}
						className='me-2'
					/>
					Đăng xuất
				</Button>
			</div>
			<div className='d-flex flex-column flex-md-row mb-4 justify-content-between align-items-center'>
				<div className='col-md me-3'>
					<Form className='d-flex flex-wrap align-items-center'>
						<div className='input-group'>
							<span className='input-group-text'>
								<FontAwesomeIcon icon={faSearch} />
							</span>
							<FormControl
								type='text'
								placeholder='Tìm kiếm ghi chú'
								className='form-control'
							/>
						</div>
					</Form>
				</div>
				<div className='col-md-auto'>
					<div className='d-flex flex-wrap align-items-center justify-content-end'>
						<Button
							variant='primary'
							className='flex-shrink-0 me-3 unselectable-text'>
							<FontAwesomeIcon
								icon={faPlus}
								className='me-3'
							/>
							Tạo mới
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

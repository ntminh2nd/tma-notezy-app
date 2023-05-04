/** @format */

import React from 'react';

// Imports
import TMA_Logo from '../../assets/tma-solutions.png';

// CSS
import '../../bootstrap/notes.css';

function Header(props) {
	const { userName, email } = props;
	return (
		<ul className='nav nav-pills p-3 non-photo-blue-bg mb-3 rounded-pill mt-3 align-items-center'>
			<li className='nav-item'>
				<span className='rounded-pill note-link d-flex px-2 px-md-3 mr-0 mr-md-2'>
					<div className='d-flex'>
						<img
							src={TMA_Logo}
							className='rounded-circle me-2'
							width='50'
							height='50'
							alt='Avatar'
						/>
						<div className='d-flex flex-column'>
							<span className='d-none d-md-block fw-bold'>{userName}</span>
							<span className='d-none d-md-block'>{email}</span>
						</div>
					</div>
				</span>
			</li>
		</ul>
	);
}

export default Header;

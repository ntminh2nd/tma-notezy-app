/** @format */

import React from 'react';

// Dependencies
import { Spinner } from 'react-bootstrap';

function LoadingIndicator() {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<Spinner animation='border' variant='primary' />
		</div>
	);
}

export default LoadingIndicator;

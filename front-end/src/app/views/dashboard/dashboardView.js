/** @format */

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { validateToken } from '../../../redux/actions/authActions';

// Imports
import LoadingIndicator from '../../../components/shared/loadingIndicator';
import NoteList from '../../../components/dashboard/noteList';

// ControllerCreator
import ControllerCreator from '../../creators/controllerCreator';

const controllerCreator = new ControllerCreator();
const userControllerCreator = controllerCreator.createControllerCreator('user');
const userControllerAuth = userControllerCreator.createController();

function Dashboard() {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.auth.userId);
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	// Handle display user's information
	const getUserInfo = async (id) => {
		try {
			const response = await new Promise((resolve, reject) => {
				userControllerAuth.getUserById(id, (err, data) => {
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
				setUserName(response.data.full_name);
				setUserEmail(response.data.email);
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (userId) {
			getUserInfo(userId);
		}
	}, [userId]);

	// Handle automatically sign user out if token is expired
	useEffect(() => {
		const checkToken = async () => {
			const isTokenValid = await dispatch(validateToken());
			if (!isTokenValid) {
				localStorage.removeItem('userToken');
				const sessionExpiredMessage =
					'Phiên hoạt động của bạn đã hết. Vui lòng đăng nhập lại.';
				localStorage.setItem('sessionExpiredMessage', sessionExpiredMessage);
			}
		};

		const tokenChecker = setInterval(() => {
			checkToken();
		}, parseInt(process.env.REACT_APP_TIME_AMOUNT_TO_CHECK_TOKEN));

		return () => {
			clearInterval(tokenChecker);
		};
	}, [dispatch]);

	// Display loading message if user information is being fetched
	if (isLoading) {
		return <LoadingIndicator />;
	}

	return (
		<div>
			<NoteList userName={userName} email={userEmail} />
		</div>
	);
}

export default Dashboard;

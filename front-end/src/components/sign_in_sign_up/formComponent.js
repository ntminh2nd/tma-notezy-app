/** @format */

import React, { useState, useEffect } from 'react';

// Dependencies
import { Form, Button, Col, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Imports

// Redux

// User controller
import UserControllerAuth from '../../app/controllers/userController';

const userControllerAuth = new UserControllerAuth();

function FormComponent(props) {
	const { isLoginPage } = props;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRetype, setPasswordRetype] = useState('');
	const [validEmail, setValidEmail] = useState(true);
	const [validPassword, setValidPassword] = useState(true);
	const [validPasswordConfirm, setValidPasswordConfirm] = useState(true);
	const [callbackError, setCallbackError] = useState('');
	const [isDanger, setIsDanger] = useState(true);
	const [isProcessing, setIsProcessing] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordRetype, setShowPasswordRetype] = useState(false);

	// Set the session expired message if available
	const [sessionExpiredMessage, setSessionExpiredMessage] = useState(
		localStorage.getItem('sessionExpiredMessage')
	);

	// Handle sign in
	const handleSignIn = async (event) => {
		event.preventDefault();
		setIsProcessing(true);
		setSessionExpiredMessage('');
		setCallbackError('');
		try {
			const response = await new Promise((resolve, reject) => {
				userControllerAuth.signInUser(email, password, (err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			});
			if (response && response.success === 0) {
				setCallbackError(response.message);
				setIsDanger(true);
				setIsProcessing(false);
			} else {
				localStorage.setItem('userToken', response.token);
				localStorage.removeItem('sessionExpiredMessage');
				setCallbackError(response.message);
				setIsProcessing(false);
				setIsDanger(false);
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}
		} catch (error) {
			console.log(error);
			setCallbackError(error);
			setIsDanger(true);
			setIsProcessing(false);
		}
	};

	// Handle create user
	const handleCreateUser = async (event) => {
		event.preventDefault();
		if (
			passwordRetype === password &&
			validEmail &&
			validPassword &&
			validPasswordConfirm
		) {
			setIsProcessing(true);
			setCallbackError('');
			try {
				const response = await new Promise((resolve, reject) => {
					userControllerAuth.createUser(
						name,
						email,
						password,
						passwordRetype,
						(err, data) => {
							if (err) {
								reject(err);
							} else {
								resolve(data);
							}
						}
					);
				});
				if (response && response.success === 0) {
					setCallbackError(response.message);
					setIsDanger(true);
					setIsProcessing(false);
				} else {
					setCallbackError(response.message);
					setIsProcessing(false);
					setIsDanger(false);
				}
			} catch (error) {
				console.log(error);
				setCallbackError(error);
				setIsDanger(true);
				setIsProcessing(false);
			}
		}
	};

	// Others
	const handleEmailInput = (event) => {
		const value = event.target.value;
		setEmail(value);
		setValidEmail(validateEmail(value) === undefined);
	};

	const validateEmail = (input) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (input && !emailRegex.test(input)) {
			return 'Vui lòng nhập email hợp lệ';
		}
	};

	const handlePasswordInput = (event) => {
		const value = event.target.value;
		setPassword(value);
		setValidPassword(validatePassword(value) === undefined);
	};

	const validatePassword = (input) => {
		const regex = /^.{6,}$/;
		if (!regex.test(input)) {
			return 'Mật khẩu phải bao gồm ít nhất 6 kí tự';
		}
	};

	const handlePasswordConfirm = (event) => {
		const value = event.target.value;
		setPasswordRetype(value);
		setValidPasswordConfirm(
			validateConfirmPassword(value, password) === undefined
		);
	};

	const validateConfirmPassword = (toConfirm, password = '') => {
		const match = toConfirm.match(new RegExp(`^${password}$`, 'i'));
		if (!match) {
			return 'Mật khẩu không trùng khớp';
		}
	};

	// Render views
	const renderFormView = (
		isLoginPage,
		confirmButtonLabel,
		confirmButtonProcessingLabel,
		question,
		hyperlinkText
	) => {
		return (
			<div className='form'>
				<Form onSubmit={!isLoginPage ? handleCreateUser : handleSignIn}>
					{!isLoginPage ? (
						<Form.Group className='mb-3' controlId='nameInput'>
							<Form.Label className='fw-bold unselectable-text' column>
								Họ và tên
							</Form.Label>
							<Col sm='6' style={{ width: '100%' }}>
								<Form.Control
									type='text'
									placeholder='Nhập tên của bạn'
									value={name}
									onChange={(e) => setName(e.target.value)}
									disabled={isProcessing}
								/>
							</Col>
						</Form.Group>
					) : null}
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label className='fw-bold unselectable-text' column>
							Địa chỉ email
						</Form.Label>
						<Col sm='6' style={{ width: '100%' }}>
							<Form.Control
								type='email'
								placeholder='Nhập email của bạn'
								value={email}
								onChange={handleEmailInput}
								disabled={isProcessing}
								isInvalid={!validEmail}
							/>
							<Form.Control.Feedback type='invalid'>
								{validateEmail(email)}
							</Form.Control.Feedback>
						</Col>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label className='fw-bold unselectable-text' column>
							Mật khẩu
						</Form.Label>
						<Col sm='6' style={{ width: '100%' }}>
							<Form.Control
								type={showPassword ? 'text' : 'password'}
								placeholder='Nhập mật khẩu của bạn'
								value={password}
								onChange={handlePasswordInput}
								disabled={isProcessing}
								className='password-input'
								style={{ width: '100%' }}
								bsPrefix=''
								isInvalid={
									!isLoginPage ? !validPassword && password.length > 0 : null
								}
							/>
							<Form.Control.Feedback type='invalid'>
								{validatePassword(password)}
							</Form.Control.Feedback>
						</Col>
					</Form.Group>

					{!isLoginPage ? (
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label className='fw-bold unselectable-text' column>
								Nhập lại mật khẩu
							</Form.Label>
							<Col sm='6' style={{ width: '100%' }}>
								<Form.Control
									type={showPasswordRetype ? 'text' : 'password'}
									placeholder='Nhập lại mật khẩu của bạn'
									value={passwordRetype}
									onChange={handlePasswordConfirm}
									disabled={isProcessing}
									className='password-input'
									style={{ width: '100%' }}
									bsPrefix=''
									isInvalid={!validPasswordConfirm && password.length > 0}
									isValid={validPasswordConfirm && passwordRetype.length > 0}
								/>
								<Form.Control.Feedback type='invalid'>
									{validateConfirmPassword(passwordRetype, password)}
								</Form.Control.Feedback>
							</Col>
						</Form.Group>
					) : null}

					{((sessionExpiredMessage && isLoginPage) || callbackError) && (
						<Alert
							className='unselectable-text'
							key={'alert'}
							variant={
								callbackError ? (isDanger ? 'danger' : 'success') : 'warning'
							}>
							{callbackError || sessionExpiredMessage}
						</Alert>
					)}

					<div className='question-container d-flex align-items-center justify-content-between'>
						<div>
							<Button
								className='unselectable-text btn'
								variant={isProcessing ? 'secondary' : 'primary'}
								type='submit'
								disabled={isProcessing}>
								{isProcessing ? (
									<>
										<Spinner animation='border' size='sm' />
										<span className='ms-2'>{confirmButtonProcessingLabel}</span>
									</>
								) : (
									confirmButtonLabel
								)}
							</Button>
						</div>
						<div className='question-container'>
							<div className='question'>
								{!isProcessing && (
									<span className='unselectable-text'>{question}</span>
								)}
							</div>
							{!isProcessing && (
								<div className='d-flex justify-content-center'>
									<span className='unselectable-text'>
										{!isLoginPage ? (
											<Link to='/'>{hyperlinkText}</Link>
										) : (
											<Link to='/signup'>{hyperlinkText}</Link>
										)}
									</span>
								</div>
							)}
						</div>
					</div>
				</Form>
			</div>
		);
	};

	return (
		<div>
			{isLoginPage === true
				? renderFormView(
						isLoginPage,
						'Đăng nhập',
						'Đang đăng nhập...',
						'Bạn chưa có tài khoản? ',
						'Tạo mới ở đây'
				  )
				: renderFormView(
						isLoginPage,
						'Tạo tài khoản',
						'Đang tạo tài khoản...',
						'Bạn đã có tài khoản? ',
						'Đăng nhập ở đây'
				  )}
		</div>
	);
}

export default FormComponent;

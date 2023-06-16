class UserControllerAuth {
	constructor(userModelAuth) {
		this.userModelAuth = userModelAuth;
	}

	// Sign in
	signInUser(email, password, callback) {
		const error = checkInputFields(email, password);
		if (error) {
			return callback(error);
		}

		this.userModelAuth
			.signInUserAPI(email, password)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}
	// Create user
	createUser(name, email, password, confirmPassword, callback) {
		const error = checkInputFields(email, password, confirmPassword, name);
		if (error) {
			return callback(error);
		}

		this.userModelAuth
			.createUserAPI(name, email, password)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}

	// Get user by id
	getUserById(id, callback) {
		this.userModelAuth
			.getUserByIdAPI(id)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}
}

// Null or empty input fields validation
function checkInputFields(
	email,
	password,
	confirmPassword = null,
	name = null
) {
	let fields = [email, password];
	let fieldNames = ['Email', 'Mật khẩu'];
	if (name !== null) {
		fields.unshift(name);
		fieldNames.unshift('Tên');
	}
	if (confirmPassword !== null) {
		fields.push(confirmPassword);
		fieldNames.push('Mật khẩu nhập lại');
	}
	for (let i = 0; i < fields.length; i++) {
		if (fields[i] === null || fields[i] === '') {
			return `${fieldNames[i]} không được bỏ trống.`;
		}
	}
	return null;
}

export default UserControllerAuth;

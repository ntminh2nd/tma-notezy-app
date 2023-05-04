/** @format */

// Dependencies
import axios from 'axios';

// Imports
const api = require('./modelsConfig').API_USER_LOCAL;
// const api = require("./modelsConfig").API_USER;

class UserModelAuth {
	constructor(token) {
		this.api = api;
		this.token = token || localStorage.getItem('userToken');
	}

	signInUserAPI(email, password) {
		const signInBody = {
			email: email,
			password: password,
		};
		const headers = {};
		if (this.token) {
			headers.Authorization = `Bearer ${this.token}`;
		}
		return axios.post(api + '/login', signInBody, { headers });
	}

	createUserAPI(name, email, password) {
		const createUserBody = {
			full_name: name,
			email: email,
			password: password,
		};
		return axios.post(api, createUserBody);
	}

	getUserByIdAPI(id) {
		return axios.get(api + '/' + id, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	validateTokenAPI() {
		return axios.post(
			`${this.api}/validateToken`,
			{},
			{
				headers: {
					authorization: `Bearer ${this.token}`,
				},
			}
		);
	}
}

export default UserModelAuth;

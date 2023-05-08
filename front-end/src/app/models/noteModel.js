/** @format */

// Redux
import { useSelector } from 'react-redux';

// Dependencies
import axios from 'axios';

// Imports
const api = require('./modelsConfig').API_NOTES_LOCAL;
// const api = require("./modelsConfig").API_NOTES;

class NoteModelAuth {
	constructor(token) {
		this.api = api;
		this.token = token || localStorage.getItem('userToken');
	}

	createNoteAPI(userId, title, content) {
		const createNoteBody = {
			title: title,
			content: content,
			user_id: userId,
		};
		return axios.post(api, createNoteBody, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	getNoteByIdAPI(id) {
		return axios.get(api + '/' + id, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	getNotesAPI() {
		return axios.get(api + '/', {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	getNotesByUserAPI(userId) {
		return axios.get(api + '/user/' + userId, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	searchNoteAPI(userId, title) {
		const searchNoteBody = {
			user_id: userId,
			title: title,
		};
		return axios.post(api + '/search', searchNoteBody, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	updateNoteAPI(id, title, content) {
		const updateNoteBody = {
			title: title,
			content: content,
		};
		return axios.patch(api + '/' + id, updateNoteBody, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	removeNoteAPI(id) {
		return axios.delete(api + '/' + id, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}
}

export default NoteModelAuth;

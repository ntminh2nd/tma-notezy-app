/** @format */

// Dependencies
import axios from 'axios';

// Imports
const api = require('./modelsConfig').API_NOTES_LOCAL;
// const api = require("./modelsConfig").API_NOTES;

// Redux
import { useSelector } from 'react-redux';

class NoteModelAuth {
	constructor(token) {
		this.api = api;
		this.token = token || localStorage.getItem('userToken');
		this.userId = useSelector((state) => state.auth.userId);
	}

	createNoteAPI(title, content) {
		const createNoteBody = {
			title: title,
			content: content,
			userId: this.userId,
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

	getNotesAPI(id) {
		return axios.get(api + '/notes' + id, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	searchNoteAPI(title) {
		const searchNoteBody = {
			userId: this.userId,
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
			userId: this.userId,
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

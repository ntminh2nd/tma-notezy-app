/** @format */

// Imports
import NoteModelAuth from '../models/noteModel';

const noteModelAuth = new NoteModelAuth();

class NoteControllerAuth {
	// Create note
	createNote(userId, title, content, callback) {
		const error = checkInputFields(title, content);
		if (error) {
			return callback(error);
		}

		noteModelAuth
			.createNoteAPI(userId, title, content)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}

	// Get note by id
	getNoteById(id, callback) {
		noteModelAuth
			.getNoteByIdAPI(id)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}

	// Get notes
	getNotes(callback) {
		noteModelAuth
			.getNotesAPI()
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}

	// Get notes by user
	getNotesByUser(userId, callback) {
		noteModelAuth
			.getNotesByUserAPI(userId)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}

	// Search note
	searchNote(userId, title, callback) {
		noteModelAuth
			.searchNoteAPI(userId, title)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}

	// Update note
	updateNote(id, title, content, callback) {
		const error = checkInputFields(title, content);
		if (error) {
			return callback(error);
		}
		noteModelAuth
			.updateNoteAPI(id, title, content)
			.then((response) => {
				callback(null, response.data);
			})
			.catch((error) => {
				// Handle error response
				callback(error.response.data.error);
			});
	}

	// Delete note
	deleteNote(id, callback) {
		noteModelAuth
			.removeNoteAPI(id)
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
function checkInputFields(title, content) {
	let fields = [title, content];
	let fieldNames = ['Tiêu đề', 'Nội dung'];
	for (let i = 0; i < fields.length; i++) {
		if (fields[i] === null || fields[i] === '') {
			return `${fieldNames[i]} không được bỏ trống.`;
		}
	}
	return null;
}

export default NoteControllerAuth;

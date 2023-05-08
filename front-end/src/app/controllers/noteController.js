/** @format */

// Imports
import NoteModelAuth from '../models/noteModel';

const noteModelAuth = new NoteModelAuth();

class NoteControllerAuth {
	// Create note
	createNote(title, content, callback) {
		const error = checkInputFields(title, content);
		if (error) {
			return callback(error);
		}

		noteModelAuth
			.createNoteAPI(title, content)
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
		userModelAuth
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

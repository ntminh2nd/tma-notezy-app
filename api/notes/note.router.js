/** @format */

const {
	createNote,
	getNotes,
	getNotesByUser,
	getNoteById,
	search,
	updateNote,
	deleteNote,
} = require('./note.controller');
const router = require('express').Router();
const { checkToken } = require('../auth/token_validation');

router.post('/', checkToken, createNote);
router.get('/', checkToken, getNotes);
router.get('/user/:userId', checkToken, getNotesByUser);
router.get('/:id', checkToken, getNoteById);
router.patch('/:id', checkToken, updateNote);
router.delete('/:id', checkToken, deleteNote);
router.post('/search', checkToken, search);

module.exports = router;

// Imports
import ControllerCreator from './controllerCreator';
import NoteControllerAuth from '../controllers/noteController';
import NoteModelAuth from '../models/noteModel';

// Concrete Creator for Note Controller
class NoteControllerCreator extends ControllerCreator {
	createController() {
		const userModelAuth = new NoteModelAuth();
		return new NoteControllerAuth(userModelAuth);
	}
}

export default NoteControllerCreator;

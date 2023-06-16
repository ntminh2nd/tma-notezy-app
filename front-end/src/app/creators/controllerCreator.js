// Imports
import UserControllerCreator from './userControllerCreator';
import NoteControllerCreator from './noteControllerCreator';

// Abstract Creator
class ControllerCreator {
	createControllerCreator(type) {
		switch (type) {
			case 'user':
				return new UserControllerCreator();
			case 'note':
				return new NoteControllerCreator();
			default:
				throw new Error(`Invalid controller type: ${type}`);
		}
	}
}

export default ControllerCreator;

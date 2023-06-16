// Abstract Creator
class ControllerCreator {
	createControllerCreator(type) {
		switch (type) {
			case 'user': {
				const UserControllerCreator =
					require('./userControllerCreator').default;
				return new UserControllerCreator();
			}
			case 'note': {
				const NoteControllerCreator =
					require('./noteControllerCreator').default;
				return new NoteControllerCreator();
			}
			default:
				throw new Error(`Invalid controller type: ${type}`);
		}
	}
}

export default ControllerCreator;

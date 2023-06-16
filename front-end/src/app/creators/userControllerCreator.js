// Imports
import ControllerCreator from './controllerCreator';
import UserControllerAuth from '../controllers/userController';
import UserModelAuth from '../models/userModel';

// Concrete Creator for User Controller
class UserControllerCreator extends ControllerCreator {
	createController() {
		const userModelAuth = new UserModelAuth();
		return new UserControllerAuth(userModelAuth);
	}
}

export default UserControllerCreator;

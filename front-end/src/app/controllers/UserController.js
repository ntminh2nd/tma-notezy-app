// Imports
import UserModelAuth from "../models/UserModel";

const userModelAuth = new UserModelAuth();

class UserControllerAuth {
  // Sign in
  signInUser(email, password, callback) {
    try {
      validateEmail(email);
      userModelAuth
        .signInUserAPI(email, password)
        .then((response) => {
          callback(null, response.data);
        })
        .catch((error) => {
          // Handle error response
          callback(error.response.data.error);
        });
    } catch (error) {
      callback(error);
    }
  }
}

// Email validation
function validateEmail(email) {
  if (!/\S+@\S+\.\S+/.test(email)) {
    throw new Error("Invalid email");
  }
}

// Password validation
// function validatePassword(password) {
//   if (password.length < 8) {
//     throw new Error("Password must be at least 8 characters long");
//   }
// }

export default UserControllerAuth;

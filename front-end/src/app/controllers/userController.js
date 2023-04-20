// Imports
import UserModelAuth from "../models/userModel";

const userModelAuth = new UserModelAuth();

class UserControllerAuth {
  // Sign in
  signInUser(email, password, callback) {
    const emailError = checkNullEmailPassword(email, password);
    if (emailError) {
      return callback(emailError);
    }

    userModelAuth
      .signInUserAPI(email, password)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        // Handle error response
        callback(error.response.data.error);
      });
  }
}

// Email and password null validation
function checkNullEmailPassword(email, password) {
  if (email === null || email === "" || password === null || password === "") {
    return "Email và mật khẩu không được bỏ trống.";
  }
  return null;
}

// Password validation
// function validatePassword(password) {
//   if (password.length < 8) {
//     throw new Error("Password must be at least 8 characters long");
//   }
// }

export default UserControllerAuth;

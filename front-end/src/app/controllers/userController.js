// Imports
import UserModelAuth from "../models/userModel";

const userModelAuth = new UserModelAuth();

class UserControllerAuth {
  // Sign in
  signInUser(email, password, callback) {
    const error = checkInputFields(email, password);
    if (error) {
      return callback(error);
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
  // Create user
  createUser(name, email, password, callback) {
    const error = checkInputFields(email, password, name);
    if (error) {
      return callback(error);
    }

    userModelAuth
      .createUserAPI(name, email, password)
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
function checkInputFields(email, password, name = null) {
  let fields = [email, password];
  let fieldNames = ["Email", "Mật khẩu"];
  if (name !== null) {
    fields.unshift(name);
    fieldNames.unshift("Tên");
  }
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] === null || fields[i] === "") {
      return `${fieldNames[i]} không được bỏ trống.`;
    }
  }
  return null;
}

export default UserControllerAuth;

// Dependencies
const axios = require("axios");

// Imports
const api = require("./config").API_USER;

class UserModelAuth {
  signInUserAPI(email, password) {
    const signInBody = {
      email: email,
      password: password,
    };
    return axios.post(api + "/login", signInBody);
  }
}

export default UserModelAuth;

// Dependencies
import axios from "axios";

// Imports
const api = require("./modelsConfig").API_USER_LOCAL;
// const api = require("./modelsConfig").API_USER;

class UserModelAuth {
  signInUserAPI(email, password) {
    const signInBody = {
      email: email,
      password: password,
    };
    return axios.post(api + "/login", signInBody);
  }
  createUserAPI(name, email, password) {
    const createUserBody = {
      full_namae: name,
      email: email,
      password: password,
    };
    return axios.post(api, createUserBody);
  }
}

export default UserModelAuth;

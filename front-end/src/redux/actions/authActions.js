// Dependencies

// Imports
import UserModelAuth from "../../app/models/userModel";

const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const validateToken = () => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        throw new Error("Token not found");
      }

      const userModel = new UserModelAuth();
      const response = await userModel.validateTokenAPI(token);

      if (response.data.success === 1) {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        throw new Error("Invalid token");
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
};

export const setSessionExpiredMessage = (message) => {
  return {
    type: "SET_SESSION_EXPIRED_MESSAGE",
    payload: message,
  };
};

export const setForcedToSignOut = (isForced) => {
  return {
    type: "SET_FORCED_TO_SIGN_OUT",
    payload: isForced,
  };
};

export { validateToken };

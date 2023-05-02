// Dependencies
import jwt_decode from "jwt-decode";
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
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.result;
        dispatch({ type: "LOGIN_SUCCESS", payload: { userId } });
      } else {
        throw new Error("Invalid token");
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
};


export { validateToken };

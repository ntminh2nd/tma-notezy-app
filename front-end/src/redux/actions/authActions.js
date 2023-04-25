// Dependencies
import jwt from "jsonwebtoken";

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

      const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
      const expirationTime = Math.floor(Date.now() / 1000) + 3600;
      if (decodedToken.exp < expirationTime) {
        throw new Error("Token has expired");
      }

      dispatch({ type: "LOGIN_SUCCESS" });
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
};

export { validateToken };

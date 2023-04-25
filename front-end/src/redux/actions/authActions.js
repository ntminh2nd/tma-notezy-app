const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const validateToken = () => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      await new Promise((resolve, reject) => {
        const token = localStorage.getItem("userToken");
        if (token) {
          resolve();
        } else {
          reject();
        }
      });
      dispatch({ type: "LOGIN_SUCCESS" });
    } catch {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
};

export { validateToken };

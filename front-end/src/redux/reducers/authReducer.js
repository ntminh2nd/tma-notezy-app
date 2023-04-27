const initialState = {
  auth: {
    isLoggedIn: false,
    loading: false,
  },
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
        },
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoggedIn: true,
          loading: false,
        },
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoggedIn: false,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;

const initialState = {
  auth: {
    isLoggedIn: false,
    loading: false,
  },
  sessionExpiredMessage: "",
  isForcedToSignOut: false,
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
    case "SET_SESSION_EXPIRED_MESSAGE":
      return {
        ...state,
        sessionExpiredMessage: action.payload,
      };
    case "SET_FORCED_TO_SIGN_OUT":
      return {
        ...state,
        isForcedToSignOut: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "../reducers/authReducer";

const initialState = { auth: { isLoggedIn: false, loading: false } };
const middleware = [thunk];
const Store = createStore(
  AuthReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default Store;

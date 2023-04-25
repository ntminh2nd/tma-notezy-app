import { connect } from "react-redux";
import { useEffect } from "react";
import { validateToken } from "../actions/authActions";

const AuthContainer = ({ isLoggedIn, loading, validateToken }) => {
  useEffect(() => {
    if (!isLoggedIn && !loading) {
      validateToken();
    }
  }, [isLoggedIn, loading, validateToken]);

  return null;
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    validateToken: () => dispatch(validateToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

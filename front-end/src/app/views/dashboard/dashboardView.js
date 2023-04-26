import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  validateToken,
  setSessionExpiredMessage,
  setForcedToSignOut,
} from "../../../redux/actions/authActions";

function Dashboard() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const sessionExpiredMessage = useSelector(
    (state) => state.sessionExpiredMessage
  );
  const isForcedToSignOut = useSelector((state) => state.isForcedToSignOut);

  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    window.location.reload();
  };

  useEffect(() => {
    const checkToken = async () => {
      await dispatch(validateToken());
    };

    const tokenChecker = setInterval(() => {
      checkToken();
    }, 10000);

    return () => clearInterval(tokenChecker);
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn === false) {
      dispatch(
        setSessionExpiredMessage(
          "Phiên của bạn đã hết hạn. Vui lòng đăng nhập lại."
        ),
        setForcedToSignOut(true)
      );
      localStorage.setItem("sessionExpiredMessage", sessionExpiredMessage);
      localStorage.setItem("isForcedToSignOut", isForcedToSignOut);
      handleSignOut();
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        className="unselectable-text"
        variant="primary"
        type="submit"
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default Dashboard;

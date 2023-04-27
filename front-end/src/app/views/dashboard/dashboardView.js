import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "../../../redux/actions/authActions";

function Dashboard() {
  const dispatch = useDispatch();

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    window.location.reload();
  };

  // Handle automatically sign user out if token is expired
  useEffect(() => {
    const checkToken = async () => {
      const isTokenValid = await dispatch(validateToken());
      if (!isTokenValid) {
        localStorage.removeItem("userToken");
        const sessionExpiredMessage =
          "Phiên hoạt động của bạn đã hết. Vui lòng đăng nhập lại.";
        localStorage.setItem("sessionExpiredMessage", sessionExpiredMessage);
      }
    };
    const tokenChecker = setInterval(() => {
      checkToken();
    }, 3600000);

    return () => {
      clearInterval(tokenChecker);
    };
  }, [dispatch]);

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

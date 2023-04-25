import React from "react";
import { Button } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "../../../redux/actions/authActions";

function Dashboard() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    setTimeout(() => {
      dispatch(validateToken()).then(() => {
        if (!isLoggedIn) {
          window.location.reload();
        }
      });
    }, 1000);
  };

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

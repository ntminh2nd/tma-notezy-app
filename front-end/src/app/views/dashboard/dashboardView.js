import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    navigate("/signin");
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

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "../../../redux/actions/authActions";

// User controller
import UserControllerAuth from "../../../app/controllers/userController";

const userControllerAuth = new UserControllerAuth();

function Dashboard() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // Handle display user's information
const getUserInfo = async () => {
  try {
    const response = await new Promise((resolve, reject) => {
      userControllerAuth.getUserById(userId, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    if (response && response.success === 1) {
      setUserName(response.data.full_name);
      setUserEmail(response.data.email);
    }
  } catch (error) {
    console.log(error);
  }
};


  useEffect(() => {
    getUserInfo();
  }, [userId]);

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
      <h1>{userName}</h1>
      <h1>{userEmail}</h1>
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

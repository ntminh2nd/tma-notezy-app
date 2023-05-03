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
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

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
    } finally {
      setIsLoading(false); // Set isLoading to false once the user information is retrieved
    }
  };

  useEffect(() => {
    if (userId) {
      getUserInfo();
    }
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
    }, parseInt(process.env.REACT_APP_TIME_AMOUNT_TO_CHECK_TOKEN));

    return () => {
      clearInterval(tokenChecker);
    };
  }, [dispatch]);

  // Display loading message if user information is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

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

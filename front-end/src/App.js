import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import SignIn from "./app/views/sign_in/signInView";
import SignUp from "./app/views/sign_up/signUpView";
import Dashboard from "./app/views/dashboard/dashboardView";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
    setLoading(false);

    const handleStorage = (event) => {
      if (event.key === "userToken") {
        setIsLoggedIn(!!event.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/notes" /> : <Navigate to="/signin" />
            }
          />

          <Route path="/notes" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

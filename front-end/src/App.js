import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

// Dependencies
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// Imports
import SignIn from "./app/views/sign_in/signInView";
import SignUp from "./app/views/sign_up/signUpView";
import Dashboard from "./app/views/dashboard/dashboardView";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, [isLoggedIn]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/signin" />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

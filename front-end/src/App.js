import React, { useState, useEffect } from "react";

// Imports
import SignIn from "./app/views/sign_in/signInView";
import SignUp from "./app/views/sign_up/signUpView";
import Dashboard from "./app/views/dashboard/dashboardView";

// Dependencies
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(validateToken());
  }, [isLoggedIn, dispatch]);

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
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";

// Imports
import SignIn from "./app/views/sign_in/signInView";
import SignUp from "./app/views/sign_up/signUpView";
import Dashboard from "./app/views/dashboard/dashboardView";
import LoadingIndicator from "./components/shared/loadingIndicator";

// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loading = useSelector((state) => state.auth.loading);

  // Validate token on initialization
  useEffect(() => {
    dispatch(validateToken());
  }, [isLoggedIn, dispatch]);

  if (loading) {
    return (
      <LoadingIndicator />
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

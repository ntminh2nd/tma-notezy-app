import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthController from "./authController";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    AuthController.signInUser(email, password, (err, data) => {
      if (err) {
        setError("Invalid email or password");
      } else {
        // Handle success response, such as storing the token in local storage
        console.log(data);
      }
    });
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;

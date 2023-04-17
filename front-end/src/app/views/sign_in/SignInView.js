import React, { useState } from "react";

// Dependencies
import { Form, Button, Row, Col } from "react-bootstrap";

// Imports
// User controller
import UserControllerAuth from "../../controllers/userController";

const userControllerAuth = new UserControllerAuth();

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    userControllerAuth.signInUser(email, password, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSignIn}>
          <h1 className="mb-5">
            Welcome to <span className="text-primary">Notezy</span>! 📝
            <br />
            <span className="text-primary">Sign in</span> to continue.
          </h1>

          {error && <div className="alert alert-danger">{error}</div>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold" column>
              Email address
            </Form.Label>
            <Col sm="6" style={{ width: "100%" }}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold" column>
              Password
            </Form.Label>
            <Col sm="6" style={{ width: "100%" }}>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                togglePasswordVisibility={true}
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;

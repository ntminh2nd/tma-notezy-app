import React, { useState } from "react";

// Dependencies
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

// Imports
// Bootstrap configuration
import "../../../bootstrap/bootstrapConfig.css";
// User controller
import UserControllerAuth from "../../controllers/userController";

const userControllerAuth = new UserControllerAuth();

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [callbackError, setCallbackError] = useState("");

const handleSignIn = async (event) => {
  event.preventDefault();
  try {
    const response = await new Promise((resolve, reject) => {
      userControllerAuth.signInUser(email, password, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    console.log(response);
    if (response.success == 0) {
      setCallbackError(response.message);
    }
    else {
      setCallbackError("");
    }
  } catch (error) {
    setCallbackError(error);
  }
};



  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="d-flex flex-column">
        <h1 className="mb-5">
          Welcome to <span className="aero-bg">Notezy</span>! 📝
          <br />
          <span className="aero-bg">Sign in</span> to continue.
        </h1>
        <div className="login-form">
          <Form onSubmit={handleSignIn}>
            {formError && <div className="alert alert-danger">{formError}</div>}
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
                />
              </Col>
            </Form.Group>

            {callbackError && (
              <Alert key={"danger"} variant={"danger"}>
                {callbackError}
              </Alert>
            )}

            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

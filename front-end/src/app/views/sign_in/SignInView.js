import React, { useState } from "react";

// Dependencies
import {
  Form,
  Button,
  Row,
  Col,
  Alert,
  Spinner,
  FormControl,
  InputGroup,
  Icon,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setIsSigningIn(true);
    setCallbackError("");
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
      if (response.success === 0) {
        setCallbackError(response.message);
        setIsSigningIn(false);
      } else {
        setCallbackError("");
      }
    } catch (error) {
      setCallbackError(error);
      setIsSigningIn(false);
    }
  };

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input && !emailRegex.test(input)) {
      return "Vui lòng nhập email hợp lệ";
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="d-flex flex-column">
        <h1 className="mb-5 unselectable-text">
          Chào mừng đến với <span className="aero-bg">Notezy</span>! 📝
          <br />
          <span className="aero-bg">Đăng nhập</span> để bắt đầu.
        </h1>
        <div className="login-form">
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold unselectable-text" column>
                Địa chỉ email
              </Form.Label>
              <Col sm="6" style={{ width: "100%" }}>
                <Form.Control
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSigningIn}
                  isInvalid={validateEmail(email)}
                />
                <Form.Control.Feedback type="invalid">
                  {validateEmail(email)}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold unselectable-text" column>
                Mật khẩu
              </Form.Label>
              <div className="d-flex align-items-center password-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu của bạn"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password-input"
                  style={{ width: "100%" }}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-icon ms-2"
                  onClick={toggleShowPassword}
                />
              </div>
            </Form.Group>

            {callbackError && (
              <Alert
                className="unselectable-text"
                key={"danger"}
                variant={"danger"}
              >
                {callbackError}
              </Alert>
            )}

            <div className="d-flex justify-content-between">
              <Button
                className="unselectable-text"
                variant={isSigningIn ? "secondary" : "primary"}
                type="submit"
                disabled={isSigningIn}
              >
                {isSigningIn ? (
                  <>
                    <Spinner animation="border" size="sm" />
                    <span className="ms-2">Đang đăng nhập...</span>
                  </>
                ) : (
                  "Đăng nhập"
                )}
              </Button>

              {isSigningIn ? null : (
                <div className="unselectable-text">
                  <span>Bạn chưa có tài khoản? </span>
                  <span className="create-account">
                    <a href="#">Tạo mới ở đây</a>
                  </span>
                </div>
              )}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import React from "react";

// Dependencies

// Imports

// Components
import GreetingComponent from "../../../components/sign_in_sign_up/greetingComponent";
import FormComponent from "../../../components/sign_in_sign_up/formComponent";

function SignIn() {
  // Initialize greeting
  const greetingProps = {
    mainText: "Đăng nhập",
    subText: "để tiếp tục.",
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="d-flex flex-column">
        <GreetingComponent {...greetingProps} />
        <FormComponent isLoginPage={false} />
      </div>
    </div>
  );
}

export default SignIn;

import React from "react";

// Dependencies

// Imports

// Components
import GreetingComponent from "../../../components/sign_in_sign_up/greetingComponent";
import FormComponent from "../../../components/sign_in_sign_up/formComponent";

function SignUp() {
  // Initialize greeting
  const greetingProps = {
    mainText: "Tạo tài khoản mới",
    subText: "để bắt đầu.",
  };

  return (
    <div className="greeting_form_wrapper">
      <div className="greeting_left">
        <GreetingComponent {...greetingProps} />
      </div>
      <div className="form_right">
        <FormComponent isLoginPage={false} />
      </div>
    </div>
  );
}

export default SignUp;

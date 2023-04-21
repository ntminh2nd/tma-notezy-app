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
    <div className="greeting_form_wrapper">
      <div className="greeting_left">
        <GreetingComponent {...greetingProps} />
      </div>
      <div className="form_right">
        <FormComponent isLoginPage={true} />
      </div>
    </div>
  );
}

export default SignIn;

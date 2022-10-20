import React from "react";
import { FormButtonComponent } from "./FormButtonComponent";
import { InputComponent } from "./InputComponent";

export const StepOne = ({isActive}) => {
  return (
    <div className={isActive? "card active" : "card"}>
      <h3 className="card-title">Create your account</h3>

      <InputComponent
        inputData={{
          for: "email",
          label: "Email",
          type: "email",
          name: "email",
          id: "email",
          errorMsg: "Please enter a valid email!",
        }}
      />

      <InputComponent
        inputData={{
          for: "password",
          label: "Password",
          type: "password",
          name: "password",
          id: "password",
          errorMsg: "Password must contain min. 8 characters, one uppercase letter, lowercase letter, number & symbol.",
        }}
      />

      <InputComponent
        inputData={{
          for: "confirm-password",
          label: "Confirm Password ",
          type: "password",
          name: "confirm-password",
          id: "confirm-password",
          errorMsg: "Passwords does not match.",
        }}
      />

      <InputComponent
        inputData={{
          for: "remember-me",
          label: "Remember Me",
          type: "checkbox",
          name: "remember-me",
          id: "remember-me",
          wrapperClass: "flex-align",
        }}
      />

      <FormButtonComponent
        btnData={{
          type: "button",
          text: "Next",
          classes: "form-btn left-margin",
        }}
      />
    </div>
  );
};

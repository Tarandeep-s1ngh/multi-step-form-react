import React from "react";
import { FormButtonComponent } from "./FormButtonComponent";
import { InputComponent } from "./InputComponent";

export const StepThree = ({isActive}) => {

  return (
    <div className={isActive? "card active" : "card"}>
      <h3 className="card-title">Other Details</h3>

      <InputComponent
        inputData={{
          for: "address",
          label: "Address",
          type: "text",
          name: "address",
          id: "address",
        }}
      />

      <InputComponent
        inputData={{
          for: "flight-info",
          label: "Flight Date & Time",
          type: "datetime-local",
          name: "flight-info",
          id: "flight-info",
        }}
      />

      <FormButtonComponent
        btnData={{
          type: "button",
          text: "Previous",
          classes: "form-btn left-margin prev-btn",
        }}
      />

      <FormButtonComponent
        btnData={{ type: "submit", text: "Submit", classes: "form-btn" }}
      />
    </div>
  );
};

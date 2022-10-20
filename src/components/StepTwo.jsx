import React from "react";
import { CountryCodesDropdown } from "./CountryCodesDropdown";
import { FormButtonComponent } from "./FormButtonComponent";
import { InputComponent } from "./InputComponent";

export const StepTwo = ({isActive}) => {
  return (
    <div className={isActive? "card active" : "card"}>
      <h3 className="card-title">Personal Details</h3>
      <InputComponent
        inputData={{
          for: "user-name",
          label: "Name",
          type: "text",
          name: "user-name",
          id: "user-name",
        }}
      />

      <InputComponent
        inputData={{
          for: "dob",
          label: "DOB",
          type: "date",
          name: "dob",
          id: "dob",
        }}
      />

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <div>
          <CountryCodesDropdown />
          <input type="number" required name="phone" id="phone" />
        </div>
      </div>

      <FormButtonComponent
        btnData={{
          type: "button",
          text: "Previous",
          classes: "form-btn left-margin prev-btn",
        }}
      />
      <FormButtonComponent
        btnData={{ type: "button", text: "Next", classes: "form-btn" }}
      />
    </div>
  );
};

import React from "react";
import { useData } from "../dataContext";

export const InputComponent = ({ inputData }) => {

  const { dataState, setDataState } = useData();

    const inputHandler = (e) => {
        switch(e.target.name) {
            case "email": {
                setDataState((prev) => ({...prev, step1: {...dataState.step1, email: e.target.value}}));
                break;
            }
            case "password": {
                setDataState((prev) => ({...prev, step1: {...dataState.step1, password: e.target.value}}));
                break;
            }
            case "confirm-password": {
                setDataState((prev) => ({...prev, step1: {...dataState.step1, confirmPassword: e.target.value}}));
                break;
            }
            case "remember-me": {
                setDataState((prev) => ({...prev, step1: {...dataState.step1, rememberMe: e.target.checked}}));
                break;
            }
            case "user-name": {
                setDataState((prev) => ({...prev, step2: {...dataState.step2, name: e.target.value}}));
                break;
            }
            case "dob": {
                setDataState((prev) => ({...prev, step2: {...dataState.step2, DOB: e.target.value}}));
                break;
            }
            case "phone": {
                setDataState((prev) => ({...prev, step2: {...dataState.step2, phone: e.target.value}}));
                break;
            }
            case "address": {
                setDataState((prev) => ({...prev, step3: {...dataState.step3, address: e.target.value}}));
                break;
            }
            case "flight-info": {
                setDataState((prev) => ({...prev, step3: {...dataState.step3, flightInfo: e.target.value}}));
                break;
            }
            default: {
                break;
            }
        }
    }

    const anyError = (nm) => {
        if(dataState.step1.emailError && nm==="email") {
            return "show-error";
        }
        if(dataState.step1.passwordError && nm==="password") {
            return "show-error";
        }
        if(dataState.step1.passwordError && nm==="confirm-password") {
            return "show-error";
        }
        else {
            return "hide-error";
        }
    }

  return (
    <div className="form-group">
      {inputData.wrapperClass ? (
        <div className={inputData.wrapperClass}>
          <label htmlFor={inputData.for}>{inputData.label}</label>
          <input
          onChange={(e)=>{inputHandler(e)}}
            type={inputData.type}
            required
            name={inputData.name}
            id={inputData.id}
          />
        </div>
      ) : (
        <>
          <label htmlFor={inputData.for}>{inputData.label} <small className={anyError(inputData.name)}>{inputData.errorMsg}</small> </label>
          <input
          onChange={(e)=>{inputHandler(e)}}
            type={inputData.type}
            required
            name={inputData.name}
            id={inputData.id}
          />
        </>
      )}
    </div>
  );
};

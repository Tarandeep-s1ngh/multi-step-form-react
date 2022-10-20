import React from "react";
import { useData } from "../dataContext";
import { nextClickHandler, previousClickHandler } from "../utils";

export const FormButtonComponent = ({ btnData }) => {
  const { dataState, setDataState } = useData();

  return (
    <button
      onClick={() => {
        switch (btnData.text) {
          case "Next": {
            nextClickHandler(dataState, setDataState);
            break;
          }
          case "Previous": {
            previousClickHandler(dataState, setDataState);
            break;
          }
          default: {
            break;
          }
        }
      }}
      type={btnData.type}
      className={btnData.classes}
    >
      {btnData.text}
    </button>
  );
};

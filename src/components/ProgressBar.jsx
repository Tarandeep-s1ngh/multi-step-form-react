import React from 'react'
import { useData } from '../dataContext';

export const ProgressBar = () => {

  const { dataState } = useData();

  const checkActive = () => {
    if(dataState.step2.active) {
      return "st2"
    }
    else if(dataState.step3.active) {
      return "st3"
    }
    else {
      return ""
    }
  }

  return (
    <div className="step-row">
        <div id="progress" className={checkActive()}></div>
        <div className="step-col"><small>Step 1</small></div>
        <div className="step-col"><small>Step 2</small></div>
        <div className="step-col"><small>Step 3</small></div>
      </div>
  )
}

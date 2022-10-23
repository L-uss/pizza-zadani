import React, { useState } from "react";
import {usePrefs} from "../contex.js";
import './style.css';

const Check = ({checked, isVegan, onHandleChange}) => {
  const { veganOnly, setVeganOnly } = usePrefs();
  
  const isEnabled=()=>{
    if(veganOnly)
      return isVegan;
    else return true;
  }

  const handleOnClick=()=>{
    if(isEnabled())
      onHandleChange(!checked);
  }

  return (
    <button 
      className={isEnabled()?"check":"check--disabled"}
      onClick={handleOnClick}
    >
      {checked && isEnabled() ? '✓' : ''}
    </button>
  )
};

export default Check;
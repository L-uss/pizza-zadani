import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({topping, onChange}) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} isVegan={topping.vegan} onHandleChange={onChange}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
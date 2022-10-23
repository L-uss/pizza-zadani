import React from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({toppings,setToppings}) => {
  let toppingsAmount = 0; 
  let totalPrice = 0;

  toppings.forEach((topping) => {
    if(topping.selected)
    {
      toppingsAmount += 1;
      totalPrice += topping.price;
    }
  });

  const handleSelect = (index,checkedTopping)=>{
    const newToppings = [...toppings];
    newToppings[index].selected = checkedTopping;
    setToppings(newToppings);
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingsAmount}, total price: {totalPrice} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping,index) => (
          <Topping topping={topping} key={topping.name} onChange={(checkedTopping)=>handleSelect(index,checkedTopping)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import ToppingsSelect from './components/ToppingsSelect';
import { PrefsContext } from './components/contex';
import Header from './components/Header/index.jsx';
import './style.css';

const toppings = [
  {
    name: 'Pepperoni',
    price: 1,
    vegan: true,
    selected: false,
  },
  {
    name: 'Mushroom',
    price: 0.35,
    vegan: true,
    selected: false,
  },
  {
    name: 'Extra cheese',
    price: 0.5,
    vegan: false,
    selected: false,
  },
  {
    name: 'Sausage',
    price: 0.8,
    vegan: false,
    selected: false,
  },
  {
    name: 'Onion',
    price: 0.25,
    vegan: true,
    selected: false,
  },
  {
    name: 'Black olives',
    price: 0.65,
    vegan: true,
    selected: false,
  },
  {
    name: 'Green pepper',
    price: 0.55,
    vegan: true,
    selected: false,
  },
  {
    name: 'Fresh garlic',
    price: 0.1,
    vegan: true,
    selected: false,
  },
  {
    name: 'Tomato',
    price: 0.5,
    vegan: true,
    selected: false,
  },
  {
    name: 'Fresh basil',
    price: 0.15,
    vegan: true,
    selected: false,
  },
  {
    name: 'Pineapple',
    price: 0.7,
    vegan: true,
    selected: false,
  },
  {
    name: 'Prosciutto',
    price: 1.2,
    vegan: false,
    selected: false,
  },
];

const App = () => {
  const [veganOnly, setVeganOnly ] = useState(true); 
  const [selectedToppings, setSelectedToppings] = useState(toppings);

  useEffect(()=>{
    const newToppings = [...toppings];
    
    newToppings.forEach((topping) => {
      if(veganOnly && topping.vegan==false && topping.selected)
      {
        topping.selected=false;
      }
    });

    setSelectedToppings(newToppings);
  },[veganOnly]);

  return (
    <PrefsContext.Provider value={{ veganOnly, setVeganOnly }}>
      <div className="container">
        <Header veganOption={veganOnly} setVeganOption={setVeganOnly}/>
        <main>
          <ToppingsSelect toppings={selectedToppings} setToppings={setSelectedToppings}/>
        </main>
    </div>
    </PrefsContext.Provider>
  );
};

createRoot(document.querySelector('#app'),).render(<App />);